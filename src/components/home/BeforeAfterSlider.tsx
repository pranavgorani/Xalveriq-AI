"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MoveHorizontal, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function BeforeAfterSlider() {
  const pairs = SITE_DATA.beforeAfterPairs;
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activePair = pairs[activeTab];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAF8F5] border-t border-[#E0D7C9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>Before & After Transformations</span>
            <span className="w-6 h-px bg-bronze" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Raw Handover to Bespoke Luxury
          </h2>

          <p className="mt-3 text-base text-[#645F58] leading-relaxed">
            Drag the handle across each room category to examine the architectural transformation from bare builder screed to calibrated craftsmanship.
          </p>
        </div>

        {/* Room Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {pairs.map((p, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setActiveTab(idx);
                  setSliderPos(50);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-bronze ${
                  isActive
                    ? "bg-[#18181B] text-white shadow-card"
                    : "bg-white border border-[#E0D7C9] text-[#645F58] hover:text-[#18181B] hover:border-bronze"
                }`}
              >
                {p.category}
              </button>
            );
          })}
        </div>

        {/* Draggable Slider Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[360px] sm:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-luxury border border-[#E0D7C9] select-none cursor-ew-resize bg-ivory-200"
          >
            {/* After (Right Base Image) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`after-${activePair.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={activePair.afterImage}
                  alt={activePair.afterLabel}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  className="object-cover object-center"
                />
                <div className="absolute top-5 right-5 z-10 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
                  {activePair.afterLabel}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Before (Left Clipped Image) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src={activePair.beforeImage}
                alt={activePair.beforeLabel}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-cover object-center grayscale contrast-125"
              />
              <div className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
                {activePair.beforeLabel}
              </div>
            </div>

            {/* Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-[#18181B] shadow-2xl border-2 border-bronze flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-bronze" />
              </div>
            </div>
          </div>

          {/* Active Transformation Scope Details */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-[#E0D7C9] shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-bronze font-semibold">
                Transformation Brief • {activePair.roomTitle}
              </span>
              <p className="text-sm sm:text-base text-[#18181B] font-medium leading-relaxed">
                {activePair.scopeSummary}
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-[#645F58] flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                <span>Raw Handover</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-bronze" />
                <span>Finished Xalveriq Handover</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
