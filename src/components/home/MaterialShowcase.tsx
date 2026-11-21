"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function MaterialShowcase() {
  const materials = SITE_DATA.materialShowcase;

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E0D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>Honest Craftsmanship & Finishes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Curated Material Palette
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#645F58] leading-relaxed">
            We partner directly with quarry masters, veneer mills, and European hardware manufacturers to ensure authentic, durable textures in every home.
          </p>
        </div>

        {/* 6 Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((mat, idx) => (
            <motion.div
              key={mat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white border border-[#E0D7C9] rounded-2xl overflow-hidden shadow-card hover:border-bronze transition-all flex flex-col justify-between group"
            >
              {/* Material Image */}
              <div className="relative w-full h-56 overflow-hidden bg-ivory-200">
                <Image
                  src={mat.image}
                  alt={mat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-[#E0D7C9] text-xs font-medium text-[#18181B]">
                  <span
                    className="w-3 h-3 rounded-full border border-black/20"
                    style={{ backgroundColor: mat.colorHex }}
                  />
                  <span>{mat.origin}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex flex-col flex-grow justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#18181B] group-hover:text-bronze transition-colors">
                    {mat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#645F58] leading-relaxed">
                    {mat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ECE5DA] space-y-1">
                  <span className="text-[11px] font-semibold text-bronze uppercase tracking-wider block">
                    Architectural Application:
                  </span>
                  <p className="text-xs text-[#18181B] font-medium leading-relaxed">
                    {mat.application}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
