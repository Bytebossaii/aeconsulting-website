import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, units, pain, message } = body

    if (!name || !company || !email) {
      return NextResponse.json(
        { error: "Name, company, and email are required." },
        { status: 400 }
      )
    }

    const safeName = escapeHtml(String(name).trim())
    const safeCompany = escapeHtml(String(company).trim())
    const safeEmail = escapeHtml(String(email).trim())
    const safePhone = escapeHtml(String(phone || "-").trim())
    const safeUnits = escapeHtml(String(units || "-").trim())
    const safePain = escapeHtml(String(pain || "-").trim())
    const safeMessage = escapeHtml(String(message || "-").trim()).replace(/\n/g, "<br />")

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
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${safeName}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Company</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${safeCompany}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${safePhone}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Units Managed</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${safeUnits}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Biggest Bottleneck</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${safePain}</td></tr>
        <tr><td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #e2e0db;">Message</td><td style="padding:8px 12px;border-bottom:1px solid #e2e0db;">${safeMessage}</td></tr>
      </table>
    `

    await transporter.sendMail({
      from: `"A&E Consulting Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: String(email).trim(),
      subject: `New inquiry from ${safeName} - ${safeCompany}`,
      html: htmlBody,
      text: `Name: ${String(name).trim()}\nCompany: ${String(company).trim()}\nEmail: ${String(email).trim()}\nPhone: ${String(phone || "-").trim()}\nUnits: ${String(units || "-").trim()}\nBottleneck: ${String(pain || "-").trim()}\nMessage: ${String(message || "-").trim()}`,
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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
