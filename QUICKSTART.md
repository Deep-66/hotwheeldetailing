# Hot Wheels Detailing Website - Quick Start Guide

## Project Complete! ✅

Your professional Hot Wheels Detailing website is ready to go!

## What's Included

### 📸 Features
- ✨ Animated hero section with floating Hot Wheels emojis
- 🏎️ Featured cars showcase with real Unsplash images
- 📧 Automatic booking email notifications
- 🎬 Smooth page transitions and hover effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🏆 Service showcase and portfolio gallery
- 📞 Contact form with submission feedback

### 🖼️ Real Car Images
The website uses professional car images from **Unsplash** (free stock photos):
- Mercedes-AMG C63 - Professional detailing
- Ferrari F8 Tributo - Sports car excellence
- Porsche 911 Carrera - Luxury vehicle care
- BMW M440i - Premium sedan detailing

## Getting Started

### 1. Start Development Server
```bash
cd "c:\hotweels detailing"
npm run dev
```
Visit: http://localhost:3000

### 2. Set Up Email Notifications (Important!)

To receive booking notifications when clients book:

#### Step 1: Create Resend Account
- Go to https://resend.com
- Sign up (free)
- Verify your email

#### Step 2: Get API Key
- Go to https://resend.com/api-keys
- Create new API key
- Copy the key

#### Step 3: Create .env.local File
In your project root, create `.env.local`:
```
RESEND_API_KEY=re_your_key_here_from_resend
ADMIN_EMAIL=your-email@example.com
```

#### Step 4: Restart Server
```
Stop: Ctrl+C
Run: npm run dev
```

#### Step 5: Test It!
1. Go to http://localhost:3000
2. Scroll down to "Contact" section
3. Fill out the booking form
4. Submit
5. Check your email for confirmation!

### Full Documentation
See `EMAIL_SETUP.md` for detailed setup guide.

## Project Files

### Key Files:
- **Homepage**: `app/page.tsx`
- **Booking API**: `app/api/bookings/route.ts`
- **Contact Form**: `components/Contact.tsx`
- **Featured Cars**: `components/FeaturedCars.tsx`
- **Portfolio**: `components/Portfolio.tsx`
- **Config**: `.env.example` (copy to `.env.local`)

### Important:
- `.env.local` - **Never commit this file!** (already in .gitignore)
- `.env.example` - Shows what variables you need
- `EMAIL_SETUP.md` - Detailed email configuration
- `README.md` - Full project documentation

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Customization

### Edit Content:
- Business name & info: `components/Contact.tsx`
- Services: `components/Services.tsx`
- Portfolio items: `components/Portfolio.tsx`
- Hero text: `components/HeroWithCars.tsx`

### Change Colors:
Edit `tailwind.config.ts`:
- Primary: `#1a1a1a`
- Secondary: `#ff6b35` (orange)
- Accent: `#ffd700` (gold)

### Add Your Car Images:
1. Get images from Unsplash, Pexels, or upload your own
2. Update image URLs in:
   - `components/FeaturedCars.tsx`
   - `components/Portfolio.tsx`
   - `components/CarImageGallery.tsx`

## Testing Email Setup

### Without Email Setup:
- Booking form still works
- Shows success message
- But emails won't send (check console for confirmation)

### With Email Setup:
- Client gets confirmation email
- You get admin notification
- Both emails have professional HTML templates

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables:
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
5. Deploy!

### Deploy to Other Platforms:
- Netlify
- AWS
- DigitalOcean
- Any Node.js host

## Troubleshooting

### Emails not sending?
1. Check `.env.local` file exists in root
2. Verify API key is correct
3. Check Resend dashboard logs
4. Restart dev server after adding `.env.local`

### Images not loading?
- The website uses Unsplash (free stock images)
- Images load from external URLs
- Replace with your own in component files

### Form submission not working?
1. Check browser console for errors
2. Verify `.env.local` has correct format
3. Restart development server
4. Try in incognito mode (bypass cache)

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Resend Email**: https://docs.resend.com
- **Email Setup Guide**: See `EMAIL_SETUP.md` in project

## Next Steps

1. ✅ Server is running
2. ⏭️ Set up email notifications (see EMAIL_SETUP.md)
3. ⏭️ Customize business info
4. ⏭️ Add your car photos
5. ⏭️ Deploy to production

---

**Questions?** Check the documentation files:
- `README.md` - Full feature documentation
- `EMAIL_SETUP.md` - Email configuration guide
- `copilot-instructions.md` - Project setup checklist

Enjoy your Hot Wheels Detailing website! 🏎️✨
