"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-8">
      <SignIn
        appearance={{
          variables: {
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
            rootBox: "w-full max-w-sm sm:max-w-md",
            card: "border border-zinc-200 bg-white shadow-none rounded-none px-4 sm:px-6 md:px-8 py-8 sm:py-10 space-y-6",
            headerTitle: "text-black text-lg font-medium tracking-tight",
            headerSubtitle: "text-zinc-500 text-sm",
            formFieldLabel:
              "text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500",
            formFieldInput:
              "bg-zinc-50 border border-zinc-200 rounded-none text-sm focus:ring-0 focus:border-black",
            formButtonPrimary:
              "h-10 rounded-none bg-black text-white text-xs font-semibold tracking-[0.18em] uppercase hover:bg-zinc-900 disabled:bg-zinc-300 disabled:text-zinc-500",
            footer: "text-[11px] text-zinc-400",
            footerActionLink:
              "text-zinc-600 underline underline-offset-4 hover:text-black",
            identityPreview: "bg-zinc-50 border border-zinc-200 rounded-none",
          },
        }}
      />
    </main>
  );
}

