"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function DesignPhilosophy() {
  const items = SITE_DATA.designPhilosophy;
  const icons = [
    <Compass key="c" className="w-5 h-5 text-bronze" />,
    <Layers key="l" className="w-5 h-5 text-bronze" />,
    <Sparkles key="s" className="w-5 h-5 text-bronze" />,
    <ShieldCheck key="sc" className="w-5 h-5 text-bronze" />,
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E0D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>Guiding Principles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Our Design Philosophy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#645F58] leading-relaxed">
            We reject frivolous decoration in favor of architectural proportion, natural illumination, and materials that grow richer with age.
          </p>
        </div>

        {/* 4 Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#E0D7C9] rounded-2xl overflow-hidden shadow-card flex flex-col justify-between group hover:border-bronze transition-all"
            >
              {/* Image Frame */}
              <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-ivory-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#18181B] uppercase tracking-wide">
                  {item.tag}
                </span>
              </div>

              {/* Card Information */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-ivory-100 border border-[#E0D7C9] flex items-center justify-center mb-3 group-hover:bg-bronze group-hover:text-white transition-colors">
                    {icons[idx]}
                  </div>

                  <h3 className="font-serif text-xl text-[#18181B] group-hover:text-bronze transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-medium text-bronze uppercase tracking-wider">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#645F58] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE5DA] flex items-center justify-between text-[11px] font-mono text-[#9C958B]">
                  <span>PRINCIPLE 0{idx + 1}</span>
                  <span className="w-6 h-px bg-[#E0D7C9]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
