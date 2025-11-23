export default function TrustedStrip() {
  return (
    <section className="border-y border-white/5 bg-[#0b0b10]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-center lg:text-left text-sm lg:text-base">
            A modern holding company and alternative investment platform focused
            on acquiring and compounding enduring businesses, supported by
            shared capabilities, data, and disciplined capital.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
              Long-Term Ownership
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
              Disciplined Capital
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
              Platform Approach
            </span>
            <span className="px-4 py-2 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
              Operational Excellence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
