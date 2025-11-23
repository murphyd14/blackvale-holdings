import { stewardshipPillars } from "@/lib/blackvaleSiteConfig";
import Section from "./Section";
import FadeInUp from "./FadeInUp";

export default function StewardshipSection() {
  return (
    <Section
      id="stewardship"
      eyebrow="Stewardship"
      title="Stewardship & Governance"
      variant="default"
    >
      <div className="max-w-2xl mb-10">
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          We take seriously our responsibility to steward businesses, people,
          and communities over the long term, with aligned incentives, disciplined
          governance, and transparent reporting.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">

        {/* Timeline */}
        <div className="relative pl-6 border-l border-white/15">
          {stewardshipPillars.map((pillar, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="relative mb-8 last:mb-0">
                {/* Circle Marker */}
                <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-white/20 border-2 border-[#050509]" />

                {/* Content */}
                <div className="ml-4">
                  <h3 className="text-base font-semibold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
