import { NextRequest, NextResponse } from 'next/server';

// This is a placeholder for email sending
// To use Resend or SendGrid, add your API key to .env.local
// RESEND_API_KEY=your_key_here
// or
// SENDGRID_API_KEY=your_key_here

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ff6b35 0%, #ffd700 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 8px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
            .button { background: linear-gradient(135deg, #ff6b35 0%, #ffd700 100%); color: black; padding: 12px 24px; border-radius: 6px; text-decoration: none; display: inline-block; margin-top: 15px; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏎️ Hot Wheels Detailing Booking Confirmed</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>Thank you for booking with Hot Wheels Detailing! We&apos;ve received your service request.</p>
              <h3>📋 Booking Details:</h3>
              <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Service:</strong> ${service}</li>
                ${message ? `<li><strong>Additional Notes:</strong> ${message}</li>` : ''}
              </ul>
              <p>Our team will review your booking and contact you within 24 hours to confirm your appointment and discuss any specific requirements for your vehicle.</p>
              <p>If you have any questions, feel free to reply to this email or call us at (555) 123-4567.</p>
              <p>Best regards,<br><strong>Hot Wheels Detailing Team</strong></p>
            </div>
            <div class="footer">
              <p>&copy; 2024 Hot Wheels Detailing. All rights reserved.</p>
              <p>123 Detailing Drive, Auto City, CA 90210 | (555) 123-4567</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #333; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 8px; }
            table { width: 100%; border-collapse: collapse; margin: 15px 0; }
            table td { padding: 8px; border-bottom: 1px solid #ddd; }
            table td:first-child { font-weight: bold; width: 30%; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚗 New Booking Received!</h1>
            </div>
            <div class="content">
              <p>A new client has submitted a booking request:</p>
              <table>
                <tr>
                  <td>Client Name:</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td><a href="tel:${phone}">${phone}</a></td>
                </tr>
                <tr>
                  <td>Service:</td>
                  <td>${service}</td>
                </tr>
                <tr>
                  <td>Timestamp:</td>
                  <td>${new Date().toLocaleString()}</td>
                </tr>
                ${message ? `<tr>
                  <td>Message:</td>
                  <td>${message}</td>
                </tr>` : ''}
              </table>
              <p><strong>Action Required:</strong> Please contact the client to confirm the booking and schedule an appointment.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Try to send emails using Resend if API key is available
    const resendApiKey = process.env.RESEND_API_KEY;
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@hotwheelsdetailing.com';
    
    if (resendApiKey) {
      try {
        // Send client confirmation email
        const clientResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: adminEmail,
            to: email,
            subject: '🏎️ Your Hot Wheels Detailing Booking - Confirmation',
            html: clientEmailHtml,
          }),
        });

        console.log('Client email response:', clientResponse.status);

        // Send admin notification email
        const adminResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: adminEmail,
            to: adminEmail,
            subject: '🚗 New Booking Received - Action Required',
            html: adminEmailHtml,
          }),
        });

        console.log('Admin email response:', adminResponse.status);
      } catch (emailError) {
        console.error('Error sending emails:', emailError);
        // Continue anyway - booking was received
      }
    } else {
      console.warn('RESEND_API_KEY not found in environment variables');
    }

    // Log the booking (in production, save to database)
    console.log('New booking received:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Booking received! We will contact you shortly.',
        bookingData: { name, email, phone, service },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}
