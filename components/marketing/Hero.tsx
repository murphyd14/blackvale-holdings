"use client";

import Image from "next/image";
import FadeInUp from "./FadeInUp";
import SectorTicker from "./SectorTicker";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050509] via-[#080910] to-[#050509]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 w-full">
        <div className="grid grid-cols-12 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left: Text Content */}
          <div className="col-span-12 md:col-span-7 space-y-6 sm:space-y-8 max-w-xl">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Alternative Holding Company
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Long-Term Owners of Enduring Businesses
            </h1>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                Blackvale is a holding company that acquires and builds durable,
                cash-generative businesses. We combine long-term ownership with
                shared capabilities, technology, and disciplined capital
                allocation to compound value over decades.
              </p>
              <p>
                Our platform enables portfolio companies to leverage collective
                resources, operational playbooks, and data-driven insights.
              </p>
            </div>

            {/* Subtle text link */}
            <div className="pt-2">
              <a
                href="#firm"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#firm");
                  element?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
              >
                Explore Blackvale
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Platform Visual */}
          <div className="col-span-12 md:col-span-5">
            <FadeInUp>
              <div className="relative bg-white/5 rounded-2xl border border-white/10 p-5 md:p-6 backdrop-blur-sm">
                {/* Logo in corner */}
                <div className="absolute top-4 right-4">
                  <Image
                    src="/assets/Blackvale_No_Background.png"
                    alt="Blackvale"
                    width={180}
                    height={51}
                    className="h-12 w-auto opacity-50"
                  />
                </div>

                {/* Platform Title */}
                <div className="mb-5">
                  <h3 className="text-sm font-semibold text-white">
                    Blackvale Platform
                  </h3>
                </div>

                {/* Platform Capabilities */}
                <div className="space-y-2.5 mb-5">
                  <div className="text-sm text-gray-300">
                    <span className="text-gray-500">Capital</span> · Strategic
                    allocation & structuring
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="text-gray-500">Operations</span> · Shared
                    playbooks & services
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="text-gray-500">Data & Technology</span> ·
                    Analytics & infrastructure
                  </div>
                  <div className="text-sm text-gray-300">
                    <span className="text-gray-500">Talent</span> · Executive
                    network & governance
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mb-5"></div>

                {/* Metrics */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-400">
                    <span className="text-gray-500">Time Horizon</span> ·
                    Decades
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="text-gray-500">Target Sectors</span> ·
                    Industrial, Services, Technology
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="text-gray-500">Target Equity Check</span> ·
                    $10M–$100M+
                  </div>
                  <div className="text-xs text-gray-400">
                    <span className="text-gray-500">Value Creation</span> ·
                    Operational Excellence, Data, Strategic M&A
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* Sector Ticker - Centered */}
        <div className="col-span-12 mt-8 sm:mt-12">
          <div className="flex justify-center">
            <SectorTicker />
          </div>
        </div>
      </div>
    </section>
  );
}
