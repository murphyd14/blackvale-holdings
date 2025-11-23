"use client";

import { useState } from "react";
import { sectors } from "@/lib/blackvaleSiteConfig";
import Section from "./Section";
import FadeInUp from "./FadeInUp";

export default function SectorsSection() {
  const [selectedSector, setSelectedSector] = useState(0);

  return (
    <Section
      id="sectors"
      eyebrow="Sector Focus"
      title="Where We Invest"
      variant="band"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-base text-gray-300 leading-relaxed">
          We concentrate on resilient, cash-generative sectors with defensible
          competitive positions and clear opportunities to compound value through
          operational excellence and disciplined growth.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left: Sector Selector */}
        <div className="col-span-12 md:col-span-5">
          <div className="flex flex-wrap md:flex-col gap-2 md:gap-2">
            {sectors.map((sector, index) => (
              <button
                key={index}
                onClick={() => setSelectedSector(index)}
                className={`rounded-full border px-4 py-2 text-sm transition-all flex-shrink-0 ${
                  selectedSector === index
                    ? "bg-white/10 border-white/30 text-white"
                    : "border-white/10 text-gray-400 hover:text-white"
                }`}
              >
                {sector.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Sector Detail Panel */}
        <div className="col-span-12 md:col-span-7">
          <FadeInUp key={selectedSector}>
            <div className="border border-white/10 rounded-2xl p-4 sm:p-6 text-sm max-w-xl">
              <h3 className="text-base font-semibold text-white mb-4">
                {sectors[selectedSector].title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {sectors[selectedSector].description}
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </Section>
  );
}
