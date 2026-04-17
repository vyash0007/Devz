import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import fs from 'fs/promises';
import path from 'path';

// Initialize Neon client
const sql = neon(process.env.DATABASE_URL!);

async function initializeTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id BIGINT PRIMARY KEY,
        title TEXT NOT NULL,
        excerpt TEXT,
        date TEXT,
        author TEXT,
        category TEXT,
        content TEXT
      );
    `;

    // Optional: Migrate local data if the database is empty
    const countResult = await sql`SELECT count(*) FROM posts`;
    if (countResult[0] && (countResult[0].count === '0' || countResult[0].count === 0)) {
      try {
        const localPath = path.join(process.cwd(), 'src', 'data', 'posts.json');
        const fileContents = await fs.readFile(localPath, 'utf8');
        const localPosts = JSON.parse(fileContents);
        if (Array.isArray(localPosts)) {
          for (const post of localPosts) {
            await sql`
              INSERT INTO posts (id, title, excerpt, date, author, category, content)
              VALUES (${post.id}, ${post.title}, ${post.excerpt}, ${post.date}, ${post.author}, ${post.category}, ${post.content})
              ON CONFLICT (id) DO NOTHING
            `;
          }
        }
      } catch (e) {
        // Ignore if file not found or already migrated
      }
    }
  } catch (error) {
    console.error('Failed to initialize posts table:', error);
  }
}

export async function GET() {
  try {
    await initializeTable();
    const posts = await sql`SELECT * FROM posts ORDER BY id DESC`;
    
    // Postgres returns rows as objects, which matches our BlogPost interface
    // Note: id might come back as a string due to BIGINT, we might need to convert it
    const formattedPosts = posts.map(post => ({
      ...post,
      id: Number(post.id)
    }));
    
    return NextResponse.json(formattedPosts);
  } catch (error: any) {
    console.error('Blog GET error:', error);
    return NextResponse.json({ error: 'Failed to load posts from database', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('Authorization');
    const adminPass = process.env.ADMIN_PASSWORD;
    
    if (!adminPass) {
      console.error('CRITICAL: ADMIN_PASSWORD is not set in environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (authHeader !== adminPass) {
      return NextResponse.json({ error: 'Unauthorized: Access Key Denied' }, { status: 401 });
    }

    const newPosts = await request.json();
    
    await initializeTable();

    // Since we are sending the whole array of posts from the frontend,
    // we should sync it with the database.
    // Industrial approach: Perform a transaction or bulk insert.
    // For simplicity with Neon/Serverless SQL: we'll clear and re-insert or use UPSERT.
    
    // Simple way: Clear and re-insert (not ideal for huge datasets, but fine for a blog)
    await sql`BEGIN`;
    try {
      await sql`DELETE FROM posts`;
      for (const post of newPosts) {
        await sql`
          INSERT INTO posts (id, title, excerpt, date, author, category, content)
          VALUES (${post.id}, ${post.title}, ${post.excerpt}, ${post.date}, ${post.author}, ${post.category}, ${post.content})
        `;
      }
      await sql`COMMIT`;
    } catch (e) {
      await sql`ROLLBACK`;
      throw e;
    }

    return NextResponse.json({ message: 'Core archive updated via Postgres synchronization.' });
  } catch (error: any) {
    console.error('Blog POST error:', error);
    return NextResponse.json({ error: 'Failed to save posts to database', details: error.message }, { status: 500 });
  }
}
