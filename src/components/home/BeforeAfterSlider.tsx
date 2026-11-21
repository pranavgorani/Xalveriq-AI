"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { SITE_DATA } from "@/content/site";

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const data = SITE_DATA.beforeAfter;

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
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-bronze mb-3">
            <span className="w-6 h-px bg-bronze" />
            <span>The Transformation</span>
            <span className="w-6 h-px bg-bronze" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#18181B] tracking-tight">
            Raw Handover to Luxury Sanctuary
          </h2>

          <p className="mt-3 text-base text-[#645F58] leading-relaxed">
            Drag the slider to see how raw brick, bare screed, and hanging conduits evolve into a warm, weightless architectural haven.
          </p>
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
            className="relative w-full h-[360px] sm:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden shadow-luxury border border-[#E0D7C9] select-none cursor-ew-resize"
          >
            {/* "After" Image (Right / Base Image) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={data.afterImage}
                alt={data.afterLabel}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-cover object-center"
              />
              {/* After Badge */}
              <div className="absolute top-5 right-5 z-10 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
                {data.afterLabel}
              </div>
            </div>

            {/* "Before" Image (Left / Clipped Image) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <Image
                src={data.beforeImage}
                alt={data.beforeLabel}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-cover object-center grayscale contrast-125"
              />
              {/* Before Badge */}
              <div className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wider uppercase">
                {data.beforeLabel}
              </div>
            </div>

            {/* Draggable Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-[#18181B] shadow-2xl border-2 border-bronze flex items-center justify-center pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                <MoveHorizontal className="w-5 h-5 text-bronze" />
              </div>
            </div>
          </div>

          {/* Caption & Legend */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left px-2">
            <p className="font-serif italic text-base sm:text-lg text-[#18181B]">
              “{data.caption}”
            </p>

            <div className="flex items-center gap-6 text-xs text-[#645F58]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                <span>Raw Handover Condition</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-bronze" />
                <span>Xalveriq Finished Handover</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
