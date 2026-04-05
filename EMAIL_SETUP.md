# Email Notifications Setup Guide

## Overview

The Hot Wheels Detailing website is configured to send email notifications when clients submit booking requests. This guide shows you how to set up email functionality.

## Option 1: Resend (Recommended - Easiest)

Resend provides a free tier with 100 emails/day, perfect for small businesses.

### Steps:

1. **Create a Resend account**
   - Go to [resend.com](https://resend.com)
   - Sign up with your email
   - Verify your email address

2. **Get your API Key**
   - Go to [API Keys dashboard](https://resend.com/api-keys)
   - Create a new API key
   - Copy the key

3. **Create `.env.local` file**
   - In your project root, create a file named `.env.local`
   - Add your API key:
     ```
     RESEND_API_KEY=re_your_actual_key_here
     ADMIN_EMAIL=your-email@example.com
     ```

4. **Set up verified domain (Optional but recommended)**
   - In Resend dashboard, add your domain
   - Follow DNS configuration steps
   - This allows sending from your domain (e.g., bookings@hotwheelsdetailing.com)

5. **Restart your server**
   - Stop the dev server (Ctrl+C)
   - Run `npm run dev` again
   - The booking form will now send real emails!

### Pricing:
- Free: 100 emails/day
- Pro: $20/month - unlimited emails

## Option 2: SendGrid

SendGrid also offers a free tier (100 emails/day).

1. **Create SendGrid account** at [sendgrid.com](https://sendgrid.com)
2. **Get API key** from Settings > API Keys
3. **Update the booking API route** to use SendGrid instead of Resend

(Code changes required - contact for implementation)

## Testing the Setup

### 1. **Local Testing**

Once you have `.env.local` set up:

```bash
npm run dev
```

Visit http://localhost:3000 and fill out the contact form.

### 2. **Check Email Logs**

In Resend dashboard:
- Go to **Logs** section
- You should see your test email

## What Happens When a Client Books:

### Client Receives:
- ✅ Confirmation email with booking details
- 📋 Details of their service request
- 📞 Contact information in case they have questions
- ⏰ Timeline for when they'll be contacted

### Admin Receives:
- 📧 Notification of new booking
- 👤 Full client details (name, phone, email)
- 🚗 Service type requested
- 📝 Any special notes/messages from client
- 🕐 Timestamp of booking

## File Locations:

- **API Route**: `app/api/bookings/route.ts`
- **Contact Form**: `components/Contact.tsx`
- **Email Config**: `.env.local` (create manually)
- **Environment Example**: `.env.example`

## Troubleshooting:

### "Emails not sending"
1. Check if `.env.local` file exists in root directory
2. Verify `RESEND_API_KEY` is correct (no extra spaces)
3. Check Resend dashboard logs for errors
4. Restart dev server after adding `.env.local`

### "Invalid API Key"
1. Double-check key copied correctly from Resend
2. Make sure you're using the right environment (not staging)
3. Try regenerating a new API key

### "Email domain not verified"
1. For free tier, sender is verified@resend.dev
2. To send from your domain, add it to Resend and verify DNS
3. Or ask Resend to verify your domain

## Production Deployment

When deploying to production (Vercel, etc.):

1. Go to your hosting dashboard (Vercel, Netlify, etc.)
2. Add environment variables:
   - `RESEND_API_KEY=your_key`
   - `ADMIN_EMAIL=your_email@example.com`
3. Deploy

## Security Tips:

✅ **DO:**
- Keep `.env.local` private (never commit to git)
- Use a dedicated email for admin notifications
- Regularly review booking notifications
- Add `.env.local` to `.gitignore` (already done)

❌ **DON'T:**
- Share your API key publicly
- Commit `.env.local` to GitHub
- Use personal email for bookings (use business email)

## Next Steps:

1. Create Resend account → Get API key
2. Create `.env.local` file with your credentials
3. Restart dev server
4. Test the booking form
5. Check email to confirm it works!

---

**Questions?** Check the Resend documentation at [docs.resend.com](https://docs.resend.com) or reach out to their support.
