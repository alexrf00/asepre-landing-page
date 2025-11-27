# ASEPRE Landing Page

A modern, premium landing page for ASEPRE - a private security company based in the Dominican Republic. Built with Next.js 15, Tailwind CSS, and Resend for email functionality.

## Features

- **Hero Section** - Cinematic full-screen hero with animated elements and call-to-action
- **Stats Section** - Animated counters showcasing company achievements
- **About Section** - Company history and values with timeline
- **Services Section** - Interactive service cards with hover effects
- **Why Us Section** - Key differentiators with icon grid
- **Testimonials** - Client testimonials carousel
- **Contact Form** - Functional form with Resend email integration
- **Location Map** - Embedded Google Maps
- **Floating Contact** - WhatsApp and phone quick-access buttons

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Email**: Resend
- **Fonts**: Montserrat, Playfair Display
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run the development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`env
# Required for contact form email functionality
RESEND_API_KEY=your_resend_api_key_here
\`\`\`

### Getting a Resend API Key

1. Create an account at [resend.com](https://resend.com)
2. Go to API Keys and create a new key
3. Add the key to your environment variables

### Optional: Custom Email Domain

By default, emails are sent from `onboarding@resend.dev`. To use your own domain:

1. Verify your domain in Resend dashboard
2. Update the `from` field in `app/actions/contact.tsx`

## Project Structure

\`\`\`
├── app/
│   ├── actions/
│   │   └── contact.tsx      # Server action for form submission
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main landing page
├── components/
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── floating-contact.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── map-section.tsx
│   ├── navbar.tsx
│   ├── services-section.tsx
│   ├── stats-section.tsx
│   ├── testimonials-section.tsx
│   └── why-us-section.tsx
└── public/
    └── images/
        └── asepreasset.jpg  # Company logo
\`\`\`

## Customization

### Colors

The color palette is defined in `app/globals.css` using CSS custom properties:

- **Primary**: Deep red (#7f1d1d)
- **Accent**: Gold (#d4af37)
- **Background**: Near black (#0a0a0a)
- **Foreground**: Off-white (#fafafa)

### Contact Information

Update the following files to change contact details:

- `components/contact-section.tsx` - Contact info display
- `components/floating-contact.tsx` - WhatsApp and phone numbers
- `components/footer.tsx` - Footer contact details
- `app/actions/contact.tsx` - Email recipient address

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add `RESEND_API_KEY` to environment variables
4. Deploy

### Other Platforms

Build the production version:

\`\`\`bash
npm run build
npm start
\`\`\`

## License

This project is proprietary to ASEPRE S.R.L. All rights reserved.

---

**ASEPRE S.R.L.** - Protegiendo lo que más importa desde 2008
