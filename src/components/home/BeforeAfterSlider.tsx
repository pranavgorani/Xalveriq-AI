"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles, MapPin, Building } from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const project = FEATURED_PROJECTS[activeProjectIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="relative py-28 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
            <span>Interactive Real Estate Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#16161D] tracking-tight">
            From Bare Concrete to <br />
            <span className="text-gold-gradient">Weightless Luxury.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5E5A55] font-normal leading-relaxed">
            Drag the glowing laser slider horizontally to witness how Xalveriq transforms standard builder handovers across Pune into bespoke architectural sanctuaries in 45 days.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {FEATURED_PROJECTS.slice(0, 3).map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveProjectIndex(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2.5 ${
                activeProjectIndex === idx
                  ? "bg-white text-[#16161D] border-2 border-[#B08A57] shadow-sm"
                  : "bg-white/80 text-[#5E5A55] border border-[#E4DCCF] hover:text-[#16161D] hover:bg-white shadow-xs"
              }`}
            >
              <Building className="w-3.5 h-3.5 text-[#8E6835]" />
              <span>{item.society}</span>
              <span className="text-[11px] text-[#5E5A55] font-mono font-normal">({item.bhk})</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider Container with Antigravity Glow Frame */}
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white/90 border border-[#E4DCCF] shadow-[0_16px_50px_rgba(22,22,29,0.08)] p-3 sm:p-5">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-[#16161D]"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <div className="absolute inset-0">
              {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
              <Image
                src={project.afterImage}
                alt={`${project.title} - After Transformation`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              {/* After Label Badge */}
              <div className="absolute bottom-6 right-6 z-10 px-4 py-2.5 rounded-2xl bg-white/95 border border-[#B08A57]/40 backdrop-blur-md shadow-xl">
                <span className="text-xs font-bold text-[#8E6835] tracking-wider uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
                  Xalveriq Turnkey Finish
                </span>
                <p className="text-[11px] text-[#16161D] font-medium">
                  {project.budget} • Handed over in {project.duration}
                </p>
              </div>
            </div>

            {/* Before Image (Clipped by slider percentage) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full min-w-[320px] sm:min-w-[700px] lg:min-w-[1000px]">
                {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                <Image
                  src={project.beforeImage}
                  alt={`${project.title} - Raw Builder Handover`}
                  fill
                  priority
                  className="object-cover grayscale contrast-125 brightness-95"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              {/* Before Label Badge */}
              <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-xl bg-white/95 border border-[#E4DCCF] backdrop-blur-md shadow-xl">
                <span className="text-xs font-bold text-[#16161D] tracking-wider uppercase">
                  Raw Builder Handover
                </span>
                <p className="text-[10px] text-[#5E5A55] font-medium">
                  Bare concrete & standard electrical
                </p>
              </div>
            </div>

            {/* Glowing Laser Divider Bar & Draggable Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#14A8D6] shadow-[0_0_15px_#14A8D6,0_0_8px_#6D4AFF] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#14A8D6] shadow-[0_4px_20px_rgba(20,168,214,0.4)] flex items-center justify-center text-[#6D4AFF]">
                <MoveHorizontal className="w-5 h-5 text-[#6D4AFF]" />
              </div>
            </div>
          </div>

          {/* Project Details Footer on Card */}
          <div className="mt-4 px-3 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5E5A55]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#6D4AFF]" />
              <span className="text-[#16161D] font-bold">{project.location}</span>
              <span className="text-[#A9A49C]">•</span>
              <span className="font-medium">{project.style}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#5E5A55] font-medium">Materials:</span>
              <span className="text-[#16161D] font-semibold">{project.materials.slice(0, 3).join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
