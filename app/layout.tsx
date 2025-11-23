import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blackvale Holdings | Holding Company for a New Era",
  description:
    "A tech-driven holding company building an ecosystem of businesses that reinforce each other through strategic expansion, shared capabilities, and long-term value creation.",
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
        <body className="font-sans bg-white text-black antialiased min-h-screen overflow-x-hidden">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
