"use client";

import { useState } from "react";
import { investmentCriteria } from "@/lib/blackvaleSiteConfig";
import Section from "./Section";

export default function CriteriaSection() {
  const [view, setView] = useState<"summary" | "detail">("summary");

  return (
    <Section
      id="criteria"
      eyebrow="Investment Criteria"
      title="What We Look For in a Business"
      variant="default"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="max-w-3xl space-y-4 text-base text-gray-300 leading-relaxed">
          <p>
            We focus on profitable, established businesses with resilient revenue,
            aligned leadership teams, and clear opportunities to compound value
            through operational improvements, strategic growth, and platform advantages.
          </p>
        </div>

        {/* Toggle */}
        <div className="hidden md:flex items-center gap-2 border border-white/10 rounded-lg p-1">
          <button
            onClick={() => setView("summary")}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              view === "summary"
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Summary
          </button>
          <button
            onClick={() => setView("detail")}
            className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
              view === "detail"
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Detail
          </button>
        </div>
      </div>

      {view === "summary" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
              Typical Target
            </div>
            <div className="mt-2 text-sm text-gray-100">
              Profitable, established businesses with defensible market positions, 
              revenue $20M–$500M+, EBITDA $5M–$100M+.
            </div>
          </div>
          <div className="border-b border-white/10 pb-4">
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
              Ownership & Geography
            </div>
            <div className="mt-2 text-sm text-gray-100">
              Majority or significant minority positions with governance rights. 
              Primarily U.S.-based, with flexibility for international opportunities.
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {investmentCriteria.map((criterion, index) => (
            <div key={index} className="border-b border-white/10 pb-4">
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                {criterion.title}
              </div>
              <div className="mt-2 text-sm text-gray-100">
                {criterion.description}
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
