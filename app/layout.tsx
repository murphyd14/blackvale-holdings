import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import localFont from "next/font/local";
import { site } from "@/lib/blackvaleSiteConfig";
const geist = localFont({
  src: "../public/fonts/geist.ttf",
  variable: "--font-geist",
  display: "swap",
});
const instrument = localFont({
  src: [
    {
      path: "../public/fonts/instrument-serif.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/instrument-serif-italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument",
  display: "swap",
});

// Layout configuration - ClerkProvider wraps the entire app

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Blackvale Holdings | Built to Endure",
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Blackvale Holdings",
    title: "Blackvale Holdings | Built to Endure",
    description: site.description,
    images: [
      {
        url: "/assets/blackvale-social.png",
        width: 1200,
        height: 379,
        alt: "Blackvale Holdings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackvale Holdings | Built to Endure",
    description: site.description,
    images: ["/assets/blackvale-social.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
        variables: {
          // Monochrome theme
          colorBackground: "#ffffff",
          colorForeground: "#020617",
          colorPrimary: "#000000",
          colorPrimaryForeground: "#ffffff",
          colorBorder: "#e5e5e5",
          colorNeutral: "#e5e5e5",
          colorMuted: "#f5f5f5",
          colorMutedForeground: "#4b5563",
          colorInput: "#f5f5f5",
          colorInputForeground: "#020617",
          colorDanger: "#ef4444",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        },
        elements: {
          // Outer card for the auth UI
          card: "border border-zinc-200 bg-white shadow-none rounded-none px-4 sm:px-6 md:px-8 py-8 sm:py-10 space-y-6",

          // Heading + subtitle
          headerTitle: "text-black text-lg font-medium tracking-tight",
          headerSubtitle: "text-zinc-500 text-sm",

          // Field labels + inputs
          formFieldLabel:
            "text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500",
          formFieldInput:
            "bg-zinc-50 border border-zinc-200 rounded-none text-sm focus:ring-0 focus:border-black",

          // Primary button
          formButtonPrimary:
            "h-10 rounded-none bg-black text-white text-xs font-semibold tracking-[0.18em] uppercase hover:bg-zinc-900 disabled:bg-zinc-300 disabled:text-zinc-500",

          // Footer / links
          footer: "text-[11px] text-zinc-400",
          footerActionLink:
            "text-zinc-600 underline underline-offset-4 hover:text-black",

          // Identity preview chip
          identityPreview: "bg-zinc-50 border border-zinc-200 rounded-none",
        },
      }}
    >
      <html lang="en">
        <body className={`${geist.variable} ${instrument.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
