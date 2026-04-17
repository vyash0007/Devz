import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const adminPass = process.env.ADMIN_PASSWORD;

    if (!adminPass) {
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    if (password === adminPass) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid access key' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
