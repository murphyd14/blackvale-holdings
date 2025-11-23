"use client";

import { useState } from "react";
import { partnerPersonas } from "@/lib/blackvaleSiteConfig";
import Section from "./Section";
import FadeInUp from "./FadeInUp";

export default function PartnersSection() {
  const [selectedPersona, setSelectedPersona] = useState(0);

  return (
    <Section
      id="partners"
      eyebrow="Partners"
      title="Who We Work With"
      variant="alt"
    >
      <div className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          We partner with owners, operators, and investors who share a long-term
          mindset and a commitment to building enduring, cash-generative businesses.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left: Persona Nav (Desktop) */}
        <div className="hidden md:block col-span-4">
          <div className="space-y-2">
            {partnerPersonas.map((persona, index) => (
              <button
                key={index}
                onClick={() => setSelectedPersona(index)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                  selectedPersona === index
                    ? "bg-white/10 border-white/20 text-white"
                    : "border-white/5 text-gray-400 hover:text-white hover:border-white/10"
                }`}
              >
                <div className="text-sm font-medium">{persona.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Detail Panel (Desktop) / Cards (Mobile) */}
        <div className="col-span-12 md:col-span-8">
          {/* Mobile: Stacked Cards */}
          <div className="md:hidden space-y-4">
            {partnerPersonas.map((persona, index) => (
              <div
                key={index}
                className="bg-[#090a10] rounded-xl p-4 sm:p-6 border border-white/5"
              >
                <h3 className="text-base font-semibold text-white mb-3">
                  {persona.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {persona.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop: Detail Panel */}
          <div className="hidden md:block">
            <FadeInUp key={selectedPersona}>
              <div className="bg-[#090a10] rounded-xl p-4 sm:p-6 border border-white/5">
                <h3 className="text-base font-semibold text-white mb-3">
                  {partnerPersonas[selectedPersona].title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {partnerPersonas[selectedPersona].description}
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </Section>
  );
}
