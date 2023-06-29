import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const { fullName, email, phone, message } = body;

  try {


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME, // your Gmail account
        pass: process.env.EMAIL_PASSWORD, // your Gmail password or App Password if you have 2FA enabled
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // sender address
      to: process.env.EMAIL_USERNAME, // list of receivers
      subject: 'Contact form submission', // Subject line
      html: `<p>You have a new contact form submission</p><br>
        <h3>Contact Details</h3>
        <ul>
          <li>Name: ${fullName}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
        </ul>
        <h3>Message</h3>
        <p>${message}</p>`, // plain text body
    };

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json(info);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Error sending the email' }, { status: 500 });
  }

};
