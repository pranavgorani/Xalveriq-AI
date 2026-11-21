"use client";

import { motion } from "framer-motion";
import { Clock, Palette, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function TrustBar() {
  const icons = [
    <Clock key="clock" className="w-6 h-6 text-bronze" />,
    <Palette key="palette" className="w-6 h-6 text-bronze" />,
    <Sparkles key="ai" className="w-6 h-6 text-bronze" />,
    <CheckCircle2 key="check" className="w-6 h-6 text-bronze" />,
  ];

  return (
    <section className="relative w-full bg-[#FAF8F5] border-y border-[#E0D7C9] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#E0D7C9]">
          {SITE_DATA.trustCounters.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-8 group"
            >
              <div className="w-12 h-12 rounded-xl bg-ivory-100 border border-[#E0D7C9] flex items-center justify-center mb-4 group-hover:border-bronze group-hover:bg-[#FFFFFF] transition-all">
                {icons[idx]}
              </div>

              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#18181B] tracking-tight">
                  {item.value}
                </span>
              </div>

              <h3 className="text-sm font-semibold text-[#18181B] tracking-wide mb-1.5 font-sans uppercase">
                {item.label}
              </h3>

              <p className="text-xs sm:text-[13px] text-[#645F58] leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
