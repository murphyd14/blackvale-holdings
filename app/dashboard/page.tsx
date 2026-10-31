import { currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/marketing/Nav";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    return (
      <main className="min-h-screen bg-white text-black">
        <Nav variant="dashboard" />
        <section className="mx-auto flex max-w-3xl flex-col gap-4 px-4 sm:px-6 py-10 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Dashboard
          </p>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
            You&apos;re not signed in.
          </h1>
          <p className="text-sm text-zinc-600">
            Please sign in as a Blackvale client to access your dashboard.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] underline underline-offset-4"
          >
            Return to homepage
          </Link>
        </section>
      </main>
    );
  }

  const displayName =
    user.firstName || user.lastName
      ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim()
      : "Client";

  return (
    <main className="min-h-screen bg-white text-black">
      <Nav variant="dashboard" />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10 md:py-16">
        {/* Top intro */}
        <div className="flex flex-col gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500"></p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Welcome back, {displayName}.
          </h1>
          <p className="max-w-2xl text-base text-zinc-600">
            This portal is under development. No investment accounts, holdings,
            or financial performance data are currently available here.
          </p>
        </div>
      </section>
    </main>
  );
}
