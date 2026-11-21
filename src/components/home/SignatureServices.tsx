"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, ArrowRight, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function SignatureServices() {
  const services = SITE_DATA.signatureServices;

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E0D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>Turnkey Execution Expertise</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Signature Design & Build Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#645F58] leading-relaxed">
            Every service is executed with architectural rigor, German fittings, and complete turnkey accountability — delivered in 45 days.
          </p>
        </div>

        {/* 6 Alternating Image & Text Blocks */}
        <div className="space-y-24 sm:space-y-32">
          {services.map((service, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={service.id}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-16 xl:gap-20`}
              >
                {/* Visual Frame */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-luxury border border-[#E0D7C9] group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Timeline Badge */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-bronze" />
                      <span>{service.timeline}</span>
                    </div>

                    {/* Material Finishes Swatch overlay */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 hidden sm:flex items-center gap-1.5 p-2 rounded-lg bg-white/90 backdrop-blur-md border border-[#E0D7C9]">
                      {service.materials.map((m) => (
                        <div
                          key={m.name}
                          className="w-5 h-5 rounded-full border border-black/10"
                          style={{ backgroundColor: m.hex }}
                          title={m.name}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Content Block */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-medium tracking-widest text-bronze uppercase">
                      Service 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#18181B] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-[#18181B] italic">
                      {service.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#645F58] leading-relaxed">
                    {service.description}
                  </p>

                  {/* 3 Feature Bullets */}
                  <div className="space-y-3 pt-2">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-bronze flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#18181B] font-medium leading-normal">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Material Tags & Budget Guide */}
                  <div className="pt-4 border-t border-[#ECE5DA] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-[#645F58]">Materials:</span>
                      {service.materials.map((m) => (
                        <span
                          key={m.name}
                          className="px-2.5 py-1 rounded bg-white border border-[#E0D7C9] text-[11px] font-medium text-[#18181B]"
                        >
                          {m.name}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-semibold text-[#18181B]">
                      {service.estimateStarting}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-bronze text-xs sm:text-sm py-3 px-6 rounded-lg inline-flex items-center gap-2 shadow-sm"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Get a Design Estimate</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
