"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, ArrowRight, Sparkles, Tag } from "lucide-react";
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
            <span>Turnkey Execution Scopes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Signature Design & Build Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#645F58] leading-relaxed">
            Every service is planned with architectural rigor, German fittings, and complete turnkey accountability — delivered under our committed 45-day protocol.
          </p>
        </div>

        {/* 6 Alternating Image & Text Blocks with concise customer-focused structure */}
        <div className="space-y-24 sm:space-y-32">
          {services.map((service, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-10 lg:gap-16 xl:gap-20 scroll-mt-28`}
              >
                {/* Visual Column */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] rounded-2xl overflow-hidden shadow-card border border-[#E0D7C9] group bg-ivory-200">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                    {/* Timeline Badge */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium flex items-center gap-2">
                      <Clock className="w-4 h-4 text-bronze" />
                      <span>Estimated Timeline: {service.timeline}</span>
                    </div>

                    {/* Service Number Tag */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-[#E0D7C9] text-xs font-mono font-bold text-[#18181B]">
                      SERVICE {service.serviceNumber}
                    </div>
                  </div>
                </motion.div>

                {/* Content Details Column */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="w-full lg:w-1/2 space-y-6"
                >
                  {/* Service Number & Title */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-medium tracking-widest text-bronze uppercase">
                      SERVICE {service.serviceNumber}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#18181B] tracking-tight">
                      {service.title.toUpperCase()}
                    </h3>
                    <p className="text-base font-medium text-[#18181B] leading-relaxed">
                      {service.benefitStatement}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-3 pt-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#18181B] block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-2.5">
                      {service.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-bronze flex-shrink-0 mt-1" />
                          <span className="text-xs sm:text-sm text-[#645F58] leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials Used */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#18181B] block mb-2">
                      Materials:
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      {service.materials.map((m) => (
                        <span
                          key={m.name}
                          className="px-3 py-1.5 rounded-md bg-white border border-[#E0D7C9] text-xs font-medium text-[#18181B] inline-flex items-center gap-2"
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/15"
                            style={{ backgroundColor: m.hex }}
                          />
                          <span>{m.name}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dedicated Pricing Presentation */}
                  <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#E0D7C9] shadow-soft space-y-1">
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <span className="text-xs uppercase tracking-wider text-[#645F58] font-medium">
                        Starting Price:
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl text-bronze font-normal">
                        {service.startingPrice}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#9C958B] leading-normal pt-1">
                      {service.startingPriceNote}
                    </p>
                  </div>

                  {/* Get a Design Estimate Button */}
                  <div className="pt-2">
                    <Link
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="btn-bronze text-xs sm:text-sm py-3.5 px-6 rounded-lg inline-flex items-center gap-2 shadow-sm"
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
