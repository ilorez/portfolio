import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export type ContactBody = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT) || 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === 'true';

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, email, subject, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    if (!toEmail) {
      return NextResponse.json(
        { error: 'Contact form is not configured (CONTACT_TO_EMAIL).' },
        { status: 503 }
      );
    }

    const transporter = getTransporter();
    if (!transporter) {
      return NextResponse.json(
        { error: 'Contact form is not configured (SMTP settings).' },
        { status: 503 }
      );
    }

    const subjectLine = subject?.trim() || 'Message from portfolio';
    const text = [
      message.trim(),
      '',
      '---',
      `From: ${name.trim()}`,
      `Reply-To: ${email.trim()}`,
    ].join('\n');

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: toEmail,
      replyTo: email.trim(),
      subject: subjectLine,
      text,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
