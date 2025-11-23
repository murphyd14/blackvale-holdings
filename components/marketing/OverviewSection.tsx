import { statCards } from '@/lib/blackvaleContent'

export default function OverviewSection() {
  return (
    <section id="overview" className="py-24 lg:py-32 bg-[#050506]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Overview
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Holding Company Designed for Synergy
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Blackvale builds an ecosystem of businesses that support and enhance each other's 
              capabilities. We focus on sustainable, compounding growth and long-term value creation 
              through strategic expansion and innovation.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span className="text-gray-300">Strategic expansion across complementary sectors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span className="text-gray-300">Shared capabilities and centralized infrastructure</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span className="text-gray-300">Long-term ownership mindset</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white mt-1">•</span>
                <span className="text-gray-300">Playbooks informed by leading investment firms</span>
              </li>
            </ul>
          </div>

          {/* Right: Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#0b0b10] rounded-xl p-6 border border-white/5 hover:border-white/10 hover:translate-y-[-2px] transition-all duration-300"
              >
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-[0.1em] text-gray-400">
                    {card.label}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

