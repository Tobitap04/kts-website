import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, course, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Bitte füllen Sie alle erforderlichen Felder aus.' },
        { status: 400 }
      );
    }

    // Configure the transporter
    let transporter;

    // Use environment variables for Production GMX setup
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (user && pass) {
      // Configuration for GMX
      transporter = nodemailer.createTransport({
        host: 'mail.gmx.net',
        port: 465,
        secure: true, // Use SSL
        auth: {
          user,
          pass,
        },
      });
    } else {
      // Fallback to Ethereal Email for testing if no `.env` is set up yet
      const testAccount = await nodemailer.createTestAccount();
      
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: testAccount.user, // generated ethereal user
          pass: testAccount.pass, // generated ethereal password
        },
      });
    }

    const mailOptions = {
      from: user || '"Katharina Tappe Website" <test@ethereal.email>', // sender address
      to: 'katharina.tappe@gmx.net', // list of receivers (the user's email)
      replyTo: email, // so the client can reply directly to the sender
      subject: course ? `Anmeldung zu Kurs: ${course} (${name})` : `Neue Kontaktanfrage: ${subject} von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\nInteresse an: ${subject}${course ? `\nKurs: ${course}` : ''}\n\nNachricht:\n${message}`, // plain text body
      html: `
        <h3>Neue Anfrage über die Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Interesse an:</strong> ${subject}</p>
        ${course ? `<p><strong>Kurs:</strong> ${course}</p>` : ''}
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `, // html body
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    
    // Log the Ethereal URL if we are using the test account
    const testUrl = nodemailer.getTestMessageUrl(info);
    if (testUrl) {
      console.log('Test email sent! Preview URL: %s', testUrl);
      return NextResponse.json(
        { message: 'E-Mail (Test) erfolgreich gesendet.', testUrl },
        { status: 200 }
      );
    }

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
