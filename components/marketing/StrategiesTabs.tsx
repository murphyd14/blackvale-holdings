"use client";

import { useState } from "react";
import { strategies } from "@/lib/blackvaleSiteConfig";
import { motion, AnimatePresence } from "framer-motion";

export default function StrategiesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const strategyMetrics = [
    { risk: 2, complexity: 3, involvement: 4 },
    { risk: 3, complexity: 4, involvement: 5 },
    { risk: 4, complexity: 5, involvement: 4 },
  ];

  return (
    <div>
      {/* Tab Row */}
      <div className="flex flex-col sm:flex-row gap-2 mb-6 border-b border-white/10">
        {strategies.map((strategy, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeTab === index
                ? "border-white text-white"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            {strategy.title}
          </button>
        ))}
      </div>

      {/* Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            {strategies[activeTab].title}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            {strategies[activeTab].description}
          </p>

          {/* Strategy Map Bars */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 w-24">Risk</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-1 w-3 rounded ${
                      i <= strategyMetrics[activeTab].risk
                        ? "bg-white/40"
                        : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 w-24">Complexity</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-1 w-3 rounded ${
                      i <= strategyMetrics[activeTab].complexity
                        ? "bg-white/40"
                        : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 w-24">Operational Involvement</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-1 w-3 rounded ${
                      i <= strategyMetrics[activeTab].involvement
                        ? "bg-white/40"
                        : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Micro-Data Row */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] text-gray-400 bg-white/5 rounded-full px-3 py-1">
                Control / Significant Minority
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-gray-400 bg-white/5 rounded-full px-3 py-1">
                {strategies[activeTab].snapshot.split("•")[1]?.trim() || "5–15+ Year Horizon"}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-gray-400 bg-white/5 rounded-full px-3 py-1">
                {strategies[activeTab].snapshot.split("•")[2]?.trim() || "$10M–$100M+ EBITDA"}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
