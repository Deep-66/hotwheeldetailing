# Hot Wheels Detailing - Next.js Website

## Project Setup

This is a professional, responsive website for Hot Wheels Detailing, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion for stunning animations.

### Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up email notifications (Optional)**
   - See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for Resend setup
   - Create `.env.local` file with your credentials
   - This enables automatic booking notifications

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Features

✨ **Animated Hero Section with Cars**
- Parallax scrolling with animated Hot Wheels emojis
- Floating car elements with smooth animations
- Smooth entrance animations
- Eye-catching gradient text

🏎️ **Featured Hot Wheels Showcase**
- Interactive car selection carousel
- Real premium car images from Unsplash
- Animated card transitions
- Detailed car information display
- Shine effects on images

📸 **Car Image Gallery**
- Gallery grid with professional car photos
- Hover animations on gallery items
- Before & after project showcase
- Instructions for adding real car photos

📧 **Booking Email Notifications**
- Automatic confirmation emails to clients
- Admin notifications for new bookings
- Professional HTML email templates
- Powered by Resend (free tier available)
- See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for setup

🎬 **Smooth Page Transitions**
- Framer Motion animations throughout
- Scroll-triggered animations
- Hover effects on interactive elements
- Animated background elements

📱 **Fully Responsive Design**
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation

🏆 **Service Showcase**
- Interactive service cards
- Hover animations and transitions
- Professional descriptions

📞 **Contact & Booking**
- Responsive contact form with validation
- Business information
- Call-to-action buttons
- Real-time form submission feedback

🎨 **Modern Design**
- Dark theme with orange/gold accents
- Professional gradient effects
- Custom scrollbar styling
- Free premium stock images

## Project Structure

```
hotweels-detailing/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   └── favicon.ico
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── HeroWithCars.tsx     # Hero with animated Hot Wheels
│   ├── FeaturedCars.tsx     # Featured cars showcase
│   ├── CarImageGallery.tsx  # Car image gallery
│   ├── Services.tsx         # Services showcase
│   ├── Portfolio.tsx        # Portfolio with filtering
│   ├── Contact.tsx          # Contact form & info
│   └── Footer.tsx           # Footer section
├── public/
│   └── images/              # Add car photos here
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── postcss.config.js        # PostCSS configuration
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Package Manager**: npm

## Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Adding Car Images

### Using Free Stock Images
The website currently uses professional car images from **Unsplash** (free stock photo service).

#### Current Images:
- Mercedes-AMG C63 - Professional detailing showcase
- Ferrari F8 Tributo - Sports car perfection
- Porsche 911 Carrera - Luxury vehicle detailing
- BMW M440i - Premium sedan care

#### To Use Your Own Images:
1. **Create images directory:**
   ```bash
   mkdir public/images
   ```

2. **Add your car photos:**
   - Replace image URLs in component files
   - Update `FeaturedCars.tsx`
   - Update `Portfolio.tsx`
   - Update `CarImageGallery.tsx`

3. **Image recommendations:**
   - Format: JPG or PNG
   - Resolution: 1920×1080px or higher
   - File size: < 500KB for optimal loading
   - Aspect ratio: 16:9

#### Free Stock Image Sources:
- **Unsplash** - https://unsplash.com (High quality, free)
- **Pexels** - https://pexels.com (Great for cars)
- **Pixabay** - https://pixabay.com (Diverse selection)
- **Unsplash API** - For automated integration

### Colors
Edit the `tailwind.config.ts` to customize colors:
- Primary: `#1a1a1a` (dark)
- Secondary: `#ff6b35` (orange)
- Accent: `#ffd700` (gold)

### Content Updates
- **Hero**: Edit `components/HeroWithCars.tsx`
- **Featured Cars**: Update car details in `components/FeaturedCars.tsx`
- **Gallery**: Add more showcase items in `components/CarImageGallery.tsx`
- **Services**: Modify descriptions in `components/Services.tsx`
- **Portfolio**: Update portfolio items in `components/Portfolio.tsx`
- **Contact**: Edit information in `components/Contact.tsx`

### Animations
Framer Motion animations are used throughout. Modify animation properties in:
- `components/HeroWithCars.tsx` - Hero animations with car emojis
- `components/FeaturedCars.tsx` - Featured car showcase animations
- `components/CarImageGallery.tsx` - Gallery animations
- `components/Services.tsx` - Service card animations
- `components/Portfolio.tsx` - Portfolio item animations
- `components/Contact.tsx` - Form animations

## Email Notifications Setup

### Automatic Booking Emails

When clients submit a booking request, the system automatically sends:
- **Client Confirmation** - Booking details and next steps
- **Admin Notification** - New booking alert with client info

### Quick Setup:

1. Create account at [resend.com](https://resend.com) (free tier available)
2. Get your API key from dashboard
3. Create `.env.local` file in project root:
   ```
   RESEND_API_KEY=your_api_key_here
   ADMIN_EMAIL=your-email@example.com
   ```
4. Restart dev server (`npm run dev`)
5. Test the booking form

For detailed setup instructions, see [EMAIL_SETUP.md](./EMAIL_SETUP.md).

### Features:
- ✅ Automatic confirmation emails to clients
- ✅ Admin notification alerts
- ✅ Professional HTML email templates
- ✅ Form submission feedback to users
- ✅ Error handling
- ✅ Production-ready

### Pricing (Resend):
- Free: 100 emails/day (perfect for startups)
- Pro: $20/month - unlimited emails

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Images are already optimized
- Lazy loading is enabled for sections
- CSS is minified in production
- Next.js handles code splitting

## Deployment

The website can be deployed to:
- **Vercel** (recommended, created by Next.js team)
- **Netlify**
- **AWS**
- **Any Node.js host**

### Deploy to Vercel
1. Push code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically deploy

## License

All rights reserved © 2024 Hot Wheels Detailing

## Support

For questions or issues, please contact info@hotwheelsdetailing.com
