"use client";

import { useState } from "react";
import { insightsPlaceholders } from "@/lib/blackvaleSiteConfig";
import Section from "./Section";
import FadeInUp from "./FadeInUp";

export default function InsightsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Perspective", "Case Study"];

  const filteredInsights =
    activeFilter === "All"
      ? insightsPlaceholders
      : insightsPlaceholders.filter((insight) => insight.tag === activeFilter);

  return (
    <Section
      id="insights"
      eyebrow="Insights"
      title="Perspectives & Case Studies"
      variant="alt"
    >
      <div className="max-w-2xl mb-8">
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Perspectives, case studies, and long-term thinking from Blackvale on
          building enduring, cash-generative businesses.
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              activeFilter === category
                ? "bg-white/10 border-white/20 text-white"
                : "border-white/10 text-gray-400 hover:text-white hover:border-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredInsights.map((insight, index) => {
          const isFeatured = index === 0 && filteredInsights.length >= 2;
          return (
            <FadeInUp key={index} delay={index * 0.1}>
              <div
                className={`bg-[#090a10] rounded-xl p-6 border border-white/5 hover:border-white/10 hover:-translate-y-1 hover:shadow-lg/10 transition-all duration-300 ${
                  isFeatured ? "md:col-span-2" : ""
                }`}
              >
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                    {insight.tag}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-3">
                  {insight.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {insight.description}
                </p>

                <div className="text-xs text-gray-500">
                  {insight.date || "January 2025"}
                </div>
              </div>
            </FadeInUp>
          );
        })}
      </div>
    </Section>
  );
}
