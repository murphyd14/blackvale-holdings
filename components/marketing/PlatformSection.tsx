import { platformCapabilities } from "@/lib/blackvaleSiteConfig";
import Section from "./Section";
import FadeInUp from "./FadeInUp";

export default function PlatformSection() {
  const nodes = [
    { id: "center", label: "Blackvale Platform", x: 50, y: 50 },
    { id: "capital", label: "Capital & Structuring", x: 50, y: 20 },
    { id: "operations", label: "Operations & Playbooks", x: 80, y: 50 },
    { id: "data", label: "Data & Technology", x: 50, y: 80 },
    { id: "talent", label: "Talent & Governance", x: 20, y: 50 },
  ];

  return (
    <Section
      id="platform"
      eyebrow="Platform"
      title="The Blackvale Platform"
      variant="alt"
    >
      <div className="grid grid-cols-12 gap-10 items-start">
        {/* Left: Text + Flywheel */}
        <div className="col-span-12 md:col-span-6 space-y-6">
          <div className="max-w-2xl mb-6">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              The Blackvale platform provides portfolio companies with access to
              shared capabilities, operating playbooks, and strategic resources
              that accelerate growth and build durable competitive advantages.
            </p>
          </div>
          <div className="space-y-4 text-base text-gray-300 leading-relaxed max-w-2xl">
            <p>
              Portfolio companies can leverage shared capabilities across
              capital allocation, operating support, data and technology, and
              talent and governance—enabling them to focus on growth while
              benefiting from collective expertise and infrastructure.
            </p>
          </div>

          {/* Horizontal Flywheel */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
              {[
                "Ecosystem",
                "Capital Allocation",
                "Operational Support",
                "Data & Insights",
              ].map((item, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400 whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Network Diagram */}
        <div className="col-span-12 md:col-span-6">
          <FadeInUp>
            <div className="relative aspect-square max-w-lg mx-auto min-h-[400px]">
              {/* SVG for connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="10%"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="90%"
                  y2="50%"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="90%"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="10%"
                  y2="50%"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
              </svg>

              {/* Center Node */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-white whitespace-nowrap">
                  Blackvale Platform
                </div>
              </div>

              {/* Outer Nodes */}
              <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-gray-300 whitespace-nowrap">
                  Capital & Structuring
                </div>
              </div>
              <div className="absolute top-1/2 right-[10%] transform translate-x-1/2 -translate-y-1/2 z-10">
                <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-gray-300 whitespace-nowrap">
                  Operations & Playbooks
                </div>
              </div>
              <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-gray-300 whitespace-nowrap">
                  Data & Technology
                </div>
              </div>
              <div className="absolute top-1/2 left-[10%] transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-gray-300 whitespace-nowrap">
                  Talent & Governance
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </Section>
  );
}
