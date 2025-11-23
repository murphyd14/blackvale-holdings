import { firmPrinciples } from "@/lib/blackvaleSiteConfig";
import Section from "./Section";
import FadeInUp from "./FadeInUp";

export default function FirmSection() {
  return (
    <Section
      id="firm"
      eyebrow="Firm"
      title="A Holding Company Built for Compounding"
      variant="alt"
    >
      <div className="grid grid-cols-12 gap-10 items-start">
        {/* Left: Text */}
        <div className="col-span-12 md:col-span-7 space-y-5 max-w-2xl">
          <FadeInUp>
            <div className="space-y-4 text-base text-gray-300 leading-relaxed">
              <p>
                Blackvale operates as a long-term owner of enduring,
                cash-generative businesses. We combine patient capital with
                operational partnership, providing portfolio companies with the
                resources, expertise, and strategic support needed to compound
                value over decades.
              </p>
              <p>
                Our model centers on acquiring businesses with strong fundamentals
                and durable competitive advantages, then leveraging shared
                capabilities, technology, and disciplined capital allocation to
                accelerate growth and create sustainable value.
              </p>
            </div>
          </FadeInUp>
        </div>

        {/* Right: Principles */}
        <div className="col-span-12 md:col-span-5 space-y-3">
          {firmPrinciples.map((principle, index) => (
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="bg-[#090a10] rounded-2xl p-4 border border-white/10 hover:border-white/15 hover:-translate-y-1 hover:shadow-lg/10 transition-all duration-300 text-sm">
                <div className="text-xs text-gray-500 mb-2">
                  {String(index + 1).padStart(2, "0")} / {String(firmPrinciples.length).padStart(2, "0")}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </Section>
  );
}
