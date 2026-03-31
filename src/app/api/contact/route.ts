import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // use app password
      },
    })

    // Email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
          <h2 style="color:#4F46E5;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    // Auto reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Message Has Been Received ✅",
      html: `
        <div style="font-family: Arial, sans-serif; color: #1F2937; line-height: 1.6; max-width:600px; margin:auto; padding:20px; border-radius:12px; border:1px solid #E5E7EB; background: #F9FAFB;">
          <div style="text-align:center; margin-bottom:20px;">
            <h2 style="color:#4F46E5;">Hi ${name},</h2>
          </div>
          <p>Thank you for reaching out! Your message has been received successfully, and I will get back to you as soon as possible.</p>
          <hr style="margin:20px 0; border-color:#E5E7EB;">
          <p style="text-align:center; font-weight:bold; color:#111;">Best regards,<br>
          <span style="color:#4F46E5;">Usman Yousaf</span><br>
          AI Developer & Portfolio Owner</p>
          <div style="text-align:center; margin-top:20px;">
            <a href="https://yourportfolio.com" style="text-decoration:none; color:white; background:#4F46E5; padding:10px 20px; border-radius:8px; display:inline-block;">Visit Portfolio</a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false })
  }
}