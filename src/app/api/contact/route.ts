import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[character] ?? character,
  );

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as ContactPayload;
    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim();
    const trimmedMessage = message?.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        { message: 'Please complete all fields.' },
        { status: 400 },
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !contactEmail || !fromEmail) {
      console.error('Contact form email configuration is incomplete.');
      return NextResponse.json(
        { message: 'The contact form is not configured yet.' },
        { status: 500 },
      );
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [contactEmail],
        reply_to: trimmedEmail,
        subject: `New portfolio inquiry from ${trimmedName}`,
        html: `
          <h2>New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(trimmedMessage).replace(/\n/g, '<br />')}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      console.error('Resend rejected the contact form email.', {
        status: resendResponse.status,
      });
      return NextResponse.json(
        { message: 'Unable to send your message right now.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact form request failed.', error);
    return NextResponse.json(
      { message: 'Unable to send your message right now.' },
      { status: 500 },
    );
  }
}
