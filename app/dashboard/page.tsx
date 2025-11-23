import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Nav from "@/components/marketing/Nav";

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
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Client Dashboard
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Welcome back, {displayName}.
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-zinc-600">
            We&apos;re currently building out your Blackvale dashboard. Soon,
            you&apos;ll see a clear overview of your{" "}
            <span className="font-medium">assets under management (AUM)</span>{" "}
            and portfolio performance here.
          </p>
        </div>

        {/* Metric cards */}
        <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between border border-zinc-200 bg-zinc-50 p-4 sm:p-5 text-sm">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Total AUM
              </p>
              <p className="mt-4 text-2xl font-semibold text-zinc-900">$2M+</p>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Your aggregated assets under management.
            </p>
          </div>

          <div className="flex flex-col justify-between border border-zinc-200 bg-zinc-50 p-4 sm:p-5 text-sm">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Portfolio Companies
              </p>
              <p className="mt-4 text-2xl font-semibold text-zinc-900">2</p>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Number of companies in the portfolio.
            </p>
          </div>

          <div className="flex flex-col justify-between border border-zinc-200 bg-zinc-50 p-4 sm:p-5 text-sm">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Performance
              </p>
              <p className="mt-4 text-2xl font-semibold text-zinc-900">—%</p>
            </div>
            <p className="mt-4 text-xs text-zinc-500">
              Portfolio performance metrics will be displayed here as data
              becomes available.
            </p>
          </div>
        </div>

        {/* Coming soon strip */}
        <div className="mt-8 sm:mt-10 border border-dashed border-zinc-200 bg-zinc-50 px-4 py-4 text-xs text-zinc-500 md:flex md:items-center md:justify-between gap-3">
          <p className="leading-relaxed">
            The Blackvale dashboard is in active development. Soon, this page
            will become your daily view into portfolio performance, risk, and
            allocation.
          </p>
          <p className="mt-2 md:mt-0 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 whitespace-nowrap">
            Coming soon
          </p>
        </div>
      </section>
    </main>
  );
}
