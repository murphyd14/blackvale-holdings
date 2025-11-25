# Blackvale Holdings - Marketing Website

A modern, minimal marketing homepage for Blackvale Holdings, built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Ultra-sleek, black & white, tech-focused aesthetic
- **Responsive**: Mobile-first design that works across all devices
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Performance**: Optimized with Next.js 14 App Router and server components
- **Type-Safe**: Full TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage (assembles all sections)
│   └── globals.css          # Global styles
├── components/
│   └── marketing/          # Marketing page components
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── TrustedStrip.tsx
│       ├── OverviewSection.tsx
│       ├── StrategySection.tsx
│       ├── PlatformSection.tsx
│       ├── GovernanceSection.tsx
│       ├── PartnersSection.tsx
│       ├── FinalCTA.tsx
│       └── Footer.tsx
├── lib/
│   └── blackvaleContent.ts # Content configuration
└── public/
    └── assets/             # Images and static assets
```

## Environment Variables

### Local Development

The project uses `.env.local` for local development (this file is git-ignored). It should contain:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_SITE_URL=https://blackvaleholdings.com
```

**Note**: The `.env.local` file uses live keys for local development. This file is git-ignored and will not be committed. Contact the project maintainer for the actual keys.

### Production (Vercel)

For production deployment on Vercel:

1. Add the following environment variables in your Vercel project settings:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` → Use your **live** key (`pk_live_...`)
   - `CLERK_SECRET_KEY` → Use your **live** key (`sk_live_...`)
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`
   - `NEXT_PUBLIC_SITE_URL` → Your production domain (e.g., `https://blackvaleholdings.com`)

**Important**: Get the actual live keys from the Clerk Dashboard. Do not commit keys to the repository.

2. Configure your production domain in the Clerk dashboard.

3. Once live keys are set in Vercel and the domain is configured, the "Development mode" banner will not appear in production.

**Note**: The codebase does not hard-code any Clerk keys. All keys are read from environment variables automatically by `@clerk/nextjs`.

## Build for Production

```bash
npm run build
npm start
```

## SEO & Metadata

The site includes comprehensive SEO metadata for Google search results:

- **Open Graph tags** for social media sharing (Facebook, LinkedIn, etc.)
- **Twitter Card** metadata for Twitter sharing
- **Structured Data (JSON-LD)** for Google's knowledge graph
- **Meta keywords, description, and canonical URLs**
- **Robots directives** for search engine crawling

When someone searches "Blackvale Holdings" on Google, the site will display:

- Company name and description
- Logo image (from `/assets/Blackvale_Icon.png`)
- Rich snippet information

**Note**: For optimal results, ensure `NEXT_PUBLIC_SITE_URL` is set to your production domain in both local `.env.local` and Vercel environment variables.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library
- **Clerk** - Authentication and user management

## License

© 2024 Blackvale Holdings
