import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, topic, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Bitte füllen Sie alle erforderlichen Felder aus.' },
        { status: 400 }
      );
    }

    // Configure the transporter
    let transporter;

    // Use environment variables for Production GMX setup
    const user = process.env.EMAIL_USER?.trim();
    const pass = process.env.EMAIL_PASS?.trim();

    if (user && pass) {
      // Configuration for GMX
      transporter = nodemailer.createTransport({
        host: 'mail.gmx.net',
        port: 587,
        secure: false, // Use STARTTLS
        auth: {
          user,
          pass,
        },
      });
    } else {
      // Fail gracefully in non-prod or missing env vars
      console.warn('EMAIL_USER or EMAIL_PASS not set. Email not sent.');
      return NextResponse.json(
        { message: 'E-Mail-Versand ist derzeit nicht konfiguriert.' },
        { status: 200 } // Return 200 to not break the UI flow for the user
      );
    }

    const mailOptions = {
      from: user, // sender address
      to: 'katharina.tappe@gmx.net', // list of receivers (the user's email)
      replyTo: email, // so the client can reply directly to the sender
      subject: `Anmeldung/Anfrage: ${topic} (${name})`,
      text: `Name: ${name}\nE-Mail: ${email}\nAnliegen: ${topic}\n\nNachricht:\n${message}`, // plain text body
      html: `
        <h3>Neue Anfrage über die Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Anliegen / Kurs:</strong> ${topic}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `, // html body
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { message: 'E-Mail erfolgreich gesendet.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Beim Senden der E-Mail ist ein Fehler aufgetreten.', error: String(error) },
      { status: 500 }
    );
  }
}
