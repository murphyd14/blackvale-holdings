"use client";

import Section from "./Section";

export default function FinalCTA() {
  return (
    <>
      <div className="border-t border-white/5"></div>
      <Section id="contact" variant="default" className="pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 text-center">
            Let's Build the Next Generation of Enduring Businesses
          </h2>
          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            If you're an owner, operator, or investor seeking a long-term
            partner committed to sustainable growth and operational excellence,
            we'd like to hear from you.
          </p>

          <div className="flex justify-center">
            <a
              href="mailto:contact@blackvaleholdings.com"
              className="text-gray-400 hover:text-white underline underline-offset-4 transition-colors text-base"
            >
              Email us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
