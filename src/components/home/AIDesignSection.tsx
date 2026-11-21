"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  FileText,
  Cpu,
  Layers,
  CheckCircle,
  PlayCircle,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { SITE_DATA, AISpatialWorkflowStep } from "@/content/site";

export function AIDesignSection() {
  const steps = SITE_DATA.aiSpatialWorkflow;
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    <FileText key="f" className="w-5 h-5" />,
    <Cpu key="c" className="w-5 h-5" />,
    <Layers key="l" className="w-5 h-5" />,
    <CheckCircle key="ch" className="w-5 h-5" />,
    <PlayCircle key="p" className="w-5 h-5" />,
  ];

  const previewImages = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80", // Raw Floor Plan / Measure
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80", // AI Concepts
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80", // 3D Renders
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80", // BOQ & Materials
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80", // 45-Day Handover
  ];

  return (
    <section
      id="ai-design"
      className="relative w-full py-24 sm:py-32 bg-[#0F0E0D] text-white overflow-hidden"
    >
      {/* Subtle Blueprint Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#C5A880 1px, transparent 1px), linear-gradient(90deg, #C5A880 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Atmospheric Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-bronze/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bronze/15 border border-bronze/30 text-xs font-semibold text-bronze uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-bronze" />
            <span>Futuristic Spatial Workflow</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4">
            See Your Home Before It Is Built.
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Our AI spatial intelligence scans raw builder floor plans, calculates optimal sun vectors and circulation paths, and models custom millimeter-accurate sanctuaries in days.
          </p>
        </div>

        {/* Interactive 5-Step Architecture + Live Visual Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: 5 Interactive Step Cards */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((s: AISpatialWorkflowStep, idx: number) => {
              const isSelected = activeStep === idx;

              return (
                <motion.div
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`p-5 sm:p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#181716] border-bronze shadow-glow"
                      : "bg-[#141312]/60 border-white/10 hover:border-white/20 hover:bg-[#181716]/60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? "bg-bronze text-white"
                          : "bg-white/5 border border-white/10 text-white/60"
                      }`}
                    >
                      {stepIcons[idx]}
                    </div>

                    <div className="flex-grow space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono tracking-widest text-bronze uppercase">
                          Step {s.step}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] tracking-wider uppercase font-semibold text-bronze bg-bronze/10 px-2 py-0.5 rounded">
                            Active Preview
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-serif font-normal text-white">
                        {s.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                        {s.desc}
                      </p>

                      {isSelected && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-2 text-xs text-bronze-light/90 border-t border-white/10 font-sans"
                        >
                          {s.details}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Photorealistic Spatial Preview */}
          <div className="lg:col-span-6">
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden border border-white/15 bg-[#181716] shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={previewImages[activeStep]}
                    alt={steps[activeStep].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Blueprint HUD Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                      SCAN_LAYER // 0{activeStep + 1}
                    </span>
                    <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-bronze">
                      45-DAY PROTOCOL
                    </span>
                  </div>

                  {/* Bottom Caption */}
                  <div className="absolute bottom-6 left-6 right-6 space-y-1">
                    <div className="text-xs uppercase tracking-widest text-bronze font-semibold">
                      Live Spatial Concept
                    </div>
                    <div className="font-serif text-xl sm:text-2xl text-white">
                      {steps[activeStep].title}
                    </div>
                    <div className="text-xs text-white/70">
                      {steps[activeStep].desc}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Section Bottom CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-center sm:text-left">
                <div className="text-sm font-semibold text-white">Have a floor plan PDF or CAD drawing?</div>
                <div className="text-xs text-white/60">Receive your preliminary 3D concept in 48 hours.</div>
              </div>

              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-bronze text-xs py-3 px-6 rounded-lg whitespace-nowrap shadow-luxury"
              >
                <span>Start With Your Floor Plan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
