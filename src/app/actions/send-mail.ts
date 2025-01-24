'use server';
import { transporter } from '@/lib/nodemailer';

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM || '"Your App" <dev@example.com>',
    to,
    subject,
    text,
    html,
  });

  return info;
}
