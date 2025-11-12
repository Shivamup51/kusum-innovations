import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Create Gmail API client using OAuth2
function createGmailClient() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const userEmail = process.env.GMAIL_USER || process.env.GMAIL_SENDER;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI || 'https://developers.google.com/oauthplayground';

  if (!clientId || !clientSecret || !refreshToken || !userEmail) {
    const missing = [];
    if (!clientId) missing.push('GOOGLE_CLIENT_ID');
    if (!clientSecret) missing.push('GOOGLE_CLIENT_SECRET');
    if (!refreshToken) missing.push('GOOGLE_REFRESH_TOKEN');
    if (!userEmail) missing.push('GMAIL_USER or GMAIL_SENDER');
    throw new Error(`Missing required Gmail OAuth2 credentials: ${missing.join(', ')}`);
  }

  console.log('📧 Creating Gmail API client for:', userEmail);
  console.log('🔑 Client ID:', clientId?.substring(0, 20) + '...');

  // Create OAuth2 client
  const oAuth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirectUri
  );

  oAuth2Client.setCredentials({
    refresh_token: refreshToken,
  });

  // Create Gmail API client
  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

  console.log('✅ Gmail API client created successfully');

  return gmail;
}

// Create email message in MIME format
function createEmailMessage(
  to: string,
  from: string,
  replyTo: string,
  subject: string,
  htmlBody: string,
  textBody: string
): string {
  const message = [
    `To: ${to}`,
    `From: ${from}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="boundary123"',
    '',
    '--boundary123',
    'Content-Type: text/plain; charset=utf-8',
    'Content-Transfer-Encoding: 7bit',
    '',
    textBody,
    '',
    '--boundary123',
    'Content-Type: text/html; charset=utf-8',
    'Content-Transfer-Encoding: 7bit',
    '',
    htmlBody,
    '',
    '--boundary123--',
  ].join('\n');

  // Base64url encode the message
  return Buffer.from(message)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create Gmail API client
    const gmail = createGmailClient();

    // Email addresses
    const fromEmail = process.env.GMAIL_USER || process.env.GMAIL_SENDER || '';
    const toEmail = process.env.CONTACT_EMAIL || 'kusuminnovationquery@gmail.com';
    const subject = `New Contact Form Submission${service ? ` - ${service}` : ''}`;
    
    // HTML email content
    const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background: linear-gradient(135deg, #B944EA 0%, #00B7FF 100%);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 8px 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 1px solid #eee;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label {
                font-weight: bold;
                color: #B944EA;
                margin-bottom: 5px;
                display: block;
              }
              .value {
                color: #555;
                margin-top: 5px;
              }
              .message-box {
                background-color: #f5f5f5;
                padding: 15px;
                border-radius: 5px;
                border-left: 4px solid #B944EA;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}" style="color: #B944EA; text-decoration: none; font-weight: 500;">${email}</a></span>
                  <p style="color: #666; font-size: 12px; margin-top: 5px; font-style: italic;">💬 You can reply directly to this email to contact the user.</p>
                </div>
                
                ${phone ? `
                <div class="field">
                  <span class="label">Phone:</span>
                  <span class="value">${phone}</span>
                </div>
                ` : ''}
                
                ${company ? `
                <div class="field">
                  <span class="label">Company:</span>
                  <span class="value">${company}</span>
                </div>
                ` : ''}
                
                ${service ? `
                <div class="field">
                  <span class="label">Service Interested In:</span>
                  <span class="value">${service}</span>
                </div>
                ` : ''}
                
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="message-box">
                    <p class="value" style="white-space: pre-wrap; margin: 0;">${message}</p>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

    // Text email content
    const text = `
New Contact Form Submission${service ? ` - ${service}` : ''}

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}
${service ? `Service Interested In: ${service}` : ''}

Message:
${message}
    `.trim();

    // Create email message in MIME format
    const fromAddress = `Kusum Innovations Contact Form <${fromEmail}>`;
    const emailMessage = createEmailMessage(
      toEmail,
      fromAddress,
      email, // Reply-To
      subject,
      html,
      text
    );

    // Send email using Gmail API
    const response = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: emailMessage,
      },
    });

    console.log('✅ Email sent successfully via Gmail API');
    console.log('📧 Message ID:', response.data.id);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      command: error.command
    });
    
    // Return user-friendly error message
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.message?.includes('Missing required')) {
      errorMessage = 'Email service configuration error. Please check your environment variables.';
    } else if (error.message?.includes('access token') || error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please verify your OAuth2 credentials (Client ID, Secret, and Refresh Token) are correct.';
    } else if (error.responseCode === 535) {
      errorMessage = `Gmail authentication failed (Error 535). This means Gmail rejected your OAuth2 credentials.

Most common causes:
1. ❌ The refresh token is invalid/expired - Generate a NEW refresh token
2. ❌ The Gmail account (${process.env.GMAIL_USER || process.env.GMAIL_SENDER || 'GMAIL_USER'}) doesn't match the account used to create the refresh token
3. ❌ The Client ID/Secret don't match the refresh token

🔧 SOLUTION:
1. Go to https://developers.google.com/oauthplayground/
2. Click gear icon → Check "Use your own OAuth credentials"
3. Enter your Client ID and Secret
4. Select "Gmail API v1" → "https://www.googleapis.com/auth/gmail.send"
5. Click "Authorize APIs" → Sign in with: ${process.env.GMAIL_USER || process.env.GMAIL_SENDER || 'YOUR_GMAIL_ACCOUNT'}
6. Click "Exchange authorization code for tokens"
7. Copy the NEW refresh token
8. Update your .env.local file with the new refresh token
9. Restart your dev server`;
    }

    return NextResponse.json(
      { 
        error: errorMessage,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

