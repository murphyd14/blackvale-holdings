'use client'

import { ecosystemPhases, flywheelNodes } from '@/lib/blackvaleContent'
import Image from 'next/image'

export default function StrategySection() {
  return (
    <section id="strategy" className="relative py-24 lg:py-32 bg-[#0b0b10] overflow-hidden">
      {/* NYC Background Image - Subtle */}
      <div className="absolute inset-0 opacity-[0.03]">
        <Image
          src="/assets/NYC_Black.jpg"
          alt=""
          fill
          className="object-cover blur-3xl"
          priority={false}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Timeline / Flow */}
          <div className="space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Strategy
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ecosystem & Strategy
            </h2>
            
            <div className="space-y-8 mt-12">
              {ecosystemPhases.map((phase, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10">
                  <div className="absolute left-[-6px] top-0 w-3 h-3 bg-white rounded-full" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Flywheel Card */}
          <div className="relative">
            <div className="bg-[#101018] rounded-2xl p-12 border border-white/10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Blackvale Ecosystem Flywheel
                </h3>
                <p className="text-gray-400 text-sm">
                  A self-reinforcing system of value creation
                </p>
              </div>

              {/* Circular Flywheel Layout */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Center Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/5 rounded-full border border-white/10 flex items-center justify-center">
                    <span className="text-xs text-gray-400 text-center px-2">Ecosystem</span>
                  </div>
                </div>

                {/* Nodes positioned in a circle */}
                {flywheelNodes.map((node, index) => {
                  const angle = (index * 360) / flywheelNodes.length - 90 // Start at top
                  const radius = 120
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius

                  return (
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div className="bg-[#0b0b10] rounded-lg px-4 py-2 border border-white/10 text-sm text-white whitespace-nowrap">
                        {node}
                      </div>
                    </div>
                  )
                })}

                {/* Subtle connecting lines using SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="120"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

