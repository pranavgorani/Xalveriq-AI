"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function ProcessTimeline() {
  const steps = SITE_DATA.processTimeline;
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E0D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>The 45-Day Architecture Protocol</span>
            <span className="w-6 h-px bg-bronze" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            How We Transform Your Space
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#645F58] leading-relaxed">
            A disciplined six-stage journey from bare builder handover to key delivery, backed by milestone tracking and strict schedule enforcement.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Progress Connecting Line */}
          <div className="absolute top-7 left-12 right-12 h-[2px] bg-[#E0D7C9]">
            <motion.div
              className="h-full bg-bronze"
              initial={{ width: "16%" }}
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>

          {/* 6 Step Nodes */}
          <div className="relative z-10 grid grid-cols-6 gap-4">
            {steps.map((st, idx) => {
              const isPassed = idx <= activeStep;
              const isSelected = idx === activeStep;

              return (
                <div
                  key={st.number}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Step Number Dot */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-mono text-sm font-semibold transition-all duration-300 border-2 ${
                      isSelected
                        ? "bg-bronze text-white border-bronze scale-110 shadow-luxury"
                        : isPassed
                        ? "bg-[#18181B] text-white border-[#18181B]"
                        : "bg-white text-[#645F58] border-[#E0D7C9] group-hover:border-bronze"
                    }`}
                  >
                    {st.number}
                  </div>

                  <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-bronze">
                    {st.duration}
                  </span>

                  <h3
                    className={`mt-1 font-serif text-base transition-colors ${
                      isSelected ? "text-[#18181B] font-medium" : "text-[#645F58] group-hover:text-[#18181B]"
                    }`}
                  >
                    {st.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-12 p-8 rounded-2xl bg-white border border-[#E0D7C9] shadow-card flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-ivory-100 border border-[#E0D7C9] text-xs font-semibold text-bronze uppercase">
                  Stage {steps[activeStep].number} • {steps[activeStep].duration}
                </span>
                <span className="text-xs text-[#645F58] italic">
                  {steps[activeStep].subtitle}
                </span>
              </div>
              <h4 className="font-serif text-2xl text-[#18181B]">
                {steps[activeStep].title}
              </h4>
              <p className="text-sm text-[#645F58] leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-ivory-50 border border-[#ECE5DA] flex flex-col gap-2 min-w-[280px]">
              <span className="text-[11px] font-semibold text-bronze uppercase tracking-wider">
                Key Milestone Deliverable:
              </span>
              <div className="flex items-start gap-2 text-xs font-medium text-[#18181B]">
                <CheckCircle2 className="w-4 h-4 text-bronze flex-shrink-0 mt-0.5" />
                <span>{steps[activeStep].deliverable}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden relative pl-6 space-y-10 border-l-2 border-[#E0D7C9] ml-4">
          {steps.map((st, idx) => (
            <motion.div
              key={st.number}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Step indicator node */}
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-bronze text-white font-mono text-xs flex items-center justify-center font-semibold shadow-sm">
                {st.number}
              </div>

              <div className="luxury-card p-5 space-y-2 bg-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-bronze uppercase tracking-wider">
                    {st.duration}
                  </span>
                  <span className="text-[10px] text-[#645F58] italic">
                    {st.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-[#18181B]">
                  {st.title}
                </h3>

                <p className="text-xs text-[#645F58] leading-relaxed">
                  {st.description}
                </p>

                <div className="pt-2 text-xs text-[#18181B] font-medium flex items-center gap-1.5 border-t border-[#ECE5DA]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-bronze" />
                  <span>{st.deliverable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
