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
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

**Important**: Use Clerk **test keys** (`pk_test_...` / `sk_test_...`) for local development.

### Production (Vercel)

For production deployment on Vercel:

1. Add the following environment variables in your Vercel project settings:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` → Use your **live** key (`pk_live_...`)
   - `CLERK_SECRET_KEY` → Use your **live** key (`sk_live_...`)
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard`
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard`

2. Configure your production domain in the Clerk dashboard.

3. Once live keys are set in Vercel and the domain is configured, the "Development mode" banner will not appear in production.

**Note**: The codebase does not hard-code any Clerk keys. All keys are read from environment variables automatically by `@clerk/nextjs`.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library
- **Clerk** - Authentication and user management

## License

© 2024 Blackvale Holdings

