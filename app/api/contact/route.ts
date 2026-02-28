import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, units, message } = body

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${name}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Company</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${company}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${phone || "—"}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Units Managed</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${units || "—"}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Message</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${message || "—"}</td></tr>
      </table>
    `

    await transporter.sendMail({
      from: `"A&E Consulting Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New inquiry from ${name} – ${company}`,
      html: htmlBody,
      text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone || "—"}\nUnits: ${units || "—"}\nMessage: ${message || "—"}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
