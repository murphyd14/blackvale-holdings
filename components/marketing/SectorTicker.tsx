"use client";

export default function SectorTicker() {
  const sectors = [
    "Essential Services",
    "Industrial & Manufacturing",
    "B2B Software & Tools",
    "Real Assets & Infrastructure-Adjacent",
  ];

  return (
    <div className="overflow-hidden border-t border-b border-white/5 py-4 max-w-4xl mx-auto">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...sectors, ...sectors, ...sectors].map((sector, index) => (
          <span key={index} className="mx-8 text-sm text-gray-400">
            {sector} ·
          </span>
        ))}
      </div>
    </div>
  );
}

