"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Ruler, Receipt, Users, Clock, Award } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function WhyChooseUs() {
  const points = SITE_DATA.whyChooseUs;
  const icons = [
    <Ruler key="r" className="w-5 h-5 text-bronze" />,
    <Receipt key="rc" className="w-5 h-5 text-bronze" />,
    <Users key="u" className="w-5 h-5 text-bronze" />,
    <Award key="a" className="w-5 h-5 text-bronze" />,
    <ShieldCheck key="sc" className="w-5 h-5 text-bronze" />,
    <Clock key="cl" className="w-5 h-5 text-bronze" />,
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E0D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>Studio Standards</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Why Choose Xalveriq?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#645F58] leading-relaxed">
            We operate with the discipline of an architectural consultancy and the end-to-end accountability of a turnkey general contractor.
          </p>
        </div>

        {/* 6 Value Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <motion.div
              key={pt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E0D7C9] shadow-soft hover:border-bronze transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-ivory-100 border border-[#E0D7C9] flex items-center justify-center group-hover:bg-bronze group-hover:text-white transition-colors">
                    {icons[idx]}
                  </div>

                  <span className="text-xs font-mono font-semibold text-bronze px-2.5 py-1 rounded bg-ivory-100 border border-[#E0D7C9]">
                    {pt.statOrBadge}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#18181B] group-hover:text-bronze transition-colors">
                  {pt.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#645F58] leading-relaxed">
                  {pt.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ECE5DA] flex items-center gap-2 text-xs text-[#18181B] font-medium">
                <CheckCircle2 className="w-4 h-4 text-bronze flex-shrink-0" />
                <span>Strict studio guarantee</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
