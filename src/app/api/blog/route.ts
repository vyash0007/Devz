import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/data/posts.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    const posts = JSON.parse(fileContents);
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('Authorization');
    if (authHeader !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized: Access Key Denied' }, { status: 401 });
    }

    const newPosts = await request.json();
    fs.writeFileSync(dataPath, JSON.stringify(newPosts, null, 2), 'utf8');
    return NextResponse.json({ message: 'Posts updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to save posts' }, { status: 500 });
  }
}
