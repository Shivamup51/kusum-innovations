import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Create Gmail transporter using App Password
 */
function createTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error("Missing GMAIL_USER or GMAIL_APP_PASSWORD");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactFormPayload;
    const { name, email, phone, company, service, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || process.env.GMAIL_USER;

    await transporter.sendMail({
      from: `Contact Form <${process.env.GMAIL_USER}>`, // always your Gmail
      to: CONTACT_EMAIL, // your inbox
      replyTo: email, // 👈 user email (dynamic)
      subject: `New Contact Form Submission${service ? ` - ${service}` : ""}`,
      text: `
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${company ? `Company: ${company}` : ""}
${service ? `Service: ${service}` : ""}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family:Arial;background:#f6f6f6;padding:20px">
          <div style="max-width:600px;margin:auto;background:#fff;border-radius:8px;padding:24px">
            <h2 style="color:#7c3aed">New Contact Form Submission</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}

            <hr />

            <p><strong>Message:</strong></p>
            <p style="white-space:pre-wrap">${message}</p>

            <p style="margin-top:20px;font-size:12px;color:#666">
              Replying to this email will respond directly to the user.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error("Unknown error");

    console.error("❌ Email send failed:", error);

    return NextResponse.json(
      {
        error: "Failed to send email",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
