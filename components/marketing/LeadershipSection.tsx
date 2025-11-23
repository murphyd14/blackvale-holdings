"use client";

import { useState } from "react";
import { leadershipPlaceholders } from "@/lib/blackvaleSiteConfig";
import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";

interface Leader {
  name: string;
  title: string;
  bio: string;
  expandedBio?: string;
}

export default function LeadershipSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const leaders: Leader[] = [
    {
      name: "Leadership Team",
      title: "Experienced Operators & Investors",
      bio: "Experienced operators and investors focused on long-term value creation.",
    },
  ];

  return (
    <Section
      id="leadership"
      eyebrow="Leadership"
      title="Experienced Operators & Investors"
      variant="default"
    >
      <div className="max-w-2xl mb-10">
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Our leadership team brings deep experience across private equity,
          operations, and building enduring businesses. We combine disciplined
          investment judgment with an owner-operator mindset.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-10 items-start">
        {/* Left: Philosophy */}
        <div className="col-span-12 md:col-span-6 space-y-4 max-w-2xl">
          <div className="space-y-4 text-base text-gray-300 leading-relaxed">
            <p>
              We are committed to responsible stewardship, working closely with
              management teams to create sustainable value while maintaining the
              highest standards of governance and ethical conduct.
            </p>
          </div>
        </div>

        {/* Right: Editorial List */}
        <div className="col-span-12 md:col-span-6 space-y-0">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="border-b border-white/10 py-3 last:border-b-0 cursor-pointer"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <div className="text-sm font-semibold text-white mb-1">
                {leader.name}
              </div>
              <div className="text-xs text-gray-400 mb-2">{leader.title}</div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {leader.bio}
              </p>
              <AnimatePresence>
                {expandedIndex === index && leader.expandedBio && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-gray-400 leading-relaxed mt-3 pt-3 border-t border-white/5">
                      {leader.expandedBio}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
