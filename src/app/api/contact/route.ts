import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: 'Server is missing WEB3FORMS_ACCESS_KEY.' },
      { status: 500 }
    );
  }

  try {
    const incomingFormData = await request.formData();

    const payload = new FormData();
    payload.append('access_key', accessKey);
    payload.append('subject', 'New Black Ridge Inquiry');

    const name = String(incomingFormData.get('name') ?? '').trim();
    const email = String(incomingFormData.get('email') ?? '').trim();
    const projectType = String(incomingFormData.get('project_type') ?? '').trim();
    const message = String(incomingFormData.get('message') ?? '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and project details are required.' },
        { status: 400 }
      );
    }

    payload.append('name', name);
    payload.append('email', email);
    payload.append('project_type', projectType);
    payload.append('message', message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: payload,
      cache: 'no-store',
    });

    const rawBody = await response.text();
    let result: { success?: boolean; message?: string } = {};

    try {
      result = JSON.parse(rawBody);
    } catch {
      result = { message: rawBody || 'Invalid upstream response.' };
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { success: false, message: result?.message || 'Failed to submit form.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: 'Inquiry sent successfully.' });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unexpected runtime failure.';

    return NextResponse.json(
      { success: false, message: `Unexpected error during submission: ${errorMessage}` },
      { status: 500 }
    );
  }
}
