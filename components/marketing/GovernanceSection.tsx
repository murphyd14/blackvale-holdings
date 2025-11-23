import { governancePillars } from '@/lib/blackvaleContent'

export default function GovernanceSection() {
  return (
    <section id="governance" className="py-24 lg:py-32 bg-[#0b0b10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Governance
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Built on Discipline and Downside Protection
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Blackvale's commitment to rigorous underwriting, risk management, and governance 
              frameworks ensures alignment with partners and stakeholders. We maintain the highest 
              standards of operational discipline across our portfolio.
            </p>
          </div>

          {/* Right: Pillar Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {governancePillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-[#101018] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mb-3">
                    <div className="w-4 h-4 border-2 border-white/30 rounded" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

