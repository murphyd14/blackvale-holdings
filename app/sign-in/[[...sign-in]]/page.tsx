"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-8">
      <SignIn
        appearance={{
          elements: {
            rootBox: "w-full max-w-sm sm:max-w-md",
          },
        }}
      />
    </main>
  );
}

