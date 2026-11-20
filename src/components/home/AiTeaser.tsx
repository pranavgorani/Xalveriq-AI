"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Wand2, Check, Crosshair } from "lucide-react";
import { MagneticButton } from "../motion/MagneticButton";

// REPLACE WITH REAL XALVERIQ PROJECT PHOTO
const STYLES = [
  {
    id: "modern-minimal",
    name: "Modern Haute Luxury",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    tags: "Cantilevered Consoles • Concealed LED • Italian Statuario",
    hudPins: [
      { label: "Floating Cantilever Console", x: "28%", y: "65%" },
      { label: "Concealed 2700K Warm LED", x: "72%", y: "24%" },
      { label: "Italian Statuario Bookmatch", x: "50%", y: "45%" },
    ],
  },
  {
    id: "japandi",
    name: "Japandi Sanctuary",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    tags: "Micro-Cement • Fluted Ash Wood • Organic Minimalism",
    hudPins: [
      { label: "Wabi-Sabi Lime Plaster", x: "35%", y: "30%" },
      { label: "Fluted Ash Louvers", x: "80%", y: "55%" },
      { label: "Low-Profile Platform Seating", x: "45%", y: "75%" },
    ],
  },
  {
    id: "haute-luxury",
    name: "Quantum Culinary Suite",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    tags: "FENIX NTM Matte • Motorized Blum • Dekton Stone",
    hudPins: [
      { label: "Anti-Fingerprint FENIX", x: "30%", y: "50%" },
      { label: "Blum Servo-Drive Lift", x: "65%", y: "35%" },
      { label: "Dekton Laurent Countertop", x: "52%", y: "78%" },
    ],
  },
  {
    id: "indian-contemporary",
    name: "Indian Contemporary",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    tags: "Cane Weave • Warm Teak • Modern Brass • Vastu Aligned",
    hudPins: [
      { label: "Natural Handwoven Cane", x: "32%", y: "42%" },
      { label: "Brushed Champagne Brass Inlays", x: "75%", y: "68%" },
      { label: "Circadian Bedside Lighting", x: "20%", y: "70%" },
    ],
  },
];

export function AiTeaser() {
  const [selectedStyle, setSelectedStyle] = useState(STYLES[0]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleStyleChange = (style: typeof STYLES[0]) => {
    setIsGenerating(true);
    setSelectedStyle(style);
    setTimeout(() => {
      setIsGenerating(false);
    }, 450);
  };

  return (
    <section className="relative py-28 bg-[#F1EBE1] overflow-hidden border-t border-[#E4DCCF]">
      {/* Background Pastel Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#14A8D6]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6D4AFF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: AI Studio Concept */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#6D4AFF] text-xs font-bold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#14A8D6]" />
              <span>Proprietary AI Spatial Engine</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-[#16161D] tracking-tight leading-[1.12]">
              Visualize Your Home in <br />
              <span className="text-ai-gradient">Under 15 Seconds.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5E5A55] font-normal leading-relaxed">
              Don&apos;t wait weeks for an architect&apos;s initial mood board. Upload your bare builder flat photo or 2D floor plan, select your design language, and let Xalveriq AI generate photorealistic 3D interior renders customized for Pune daylight and weather.
            </p>

            {/* Interactive Style Switcher Pills */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider text-[#5E5A55] font-semibold block">
                Select a Design Language:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {STYLES.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => handleStyleChange(style)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-xs font-medium border transition-all text-left ${
                      selectedStyle.id === style.id
                        ? "bg-white border-2 border-[#6D4AFF] text-[#16161D] shadow-[0_6px_20px_rgba(109,74,255,0.15)]"
                        : "bg-white/80 border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D] hover:bg-white shadow-xs"
                    }`}
                  >
                    <div>
                      <p className="font-bold text-[#16161D]">{style.name}</p>
                    </div>
                    {selectedStyle.id === style.id && (
                      <Check className="w-4 h-4 text-[#6D4AFF] shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Launch Studio CTA with Magnetic Aura */}
            <div className="pt-4">
              <MagneticButton strength={0.2}>
                <Link
                  href="/studio"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full btn-primary-gradient font-semibold text-xs tracking-wider uppercase"
                >
                  <Wand2 className="w-4 h-4 text-[#DFBA87] animate-pulse" />
                  <span>Open Full AI Studio & Pune Budget Estimator</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Dynamic Preview Screen with Laser Scanning Line & Spatial Pins */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden bg-white/90 border border-[#E4DCCF] shadow-[0_16px_45px_rgba(22,22,29,0.08)] p-3 sm:p-4">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#16161D] select-none">
                {/* Visual Image */}
                {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
                <Image
                  src={selectedStyle.image}
                  alt={`${selectedStyle.name} interior preview`}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    isGenerating ? "scale-105 blur-sm opacity-50" : "scale-100 blur-0 opacity-100"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Laser Scanning Line Animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#14A8D6] to-transparent shadow-[0_0_15px_#14A8D6] animate-[scan_4s_linear_infinite]" />
                </div>

                {/* Floating Spatial HUD Pins */}
                {selectedStyle.hudPins.map((pin, i) => (
                  <div
                    key={i}
                    style={{ left: pin.x, top: pin.y }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer hidden sm:flex items-center gap-2"
                  >
                    <div className="relative flex items-center justify-center">
                      <span className="w-5 h-5 rounded-full bg-[#14A8D6]/40 animate-ping absolute" />
                      <span className="w-3 h-3 rounded-full bg-[#14A8D6] border-2 border-white shadow-lg" />
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-white/95 border border-[#14A8D6]/50 backdrop-blur-md text-[10px] font-mono text-[#16161D] font-semibold whitespace-nowrap shadow-xl">
                      {pin.label}
                    </div>
                  </div>
                ))}

                {/* Live Processing HUD overlay */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E4DCCF] backdrop-blur-md shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#14A8D6] animate-ping" />
                  <span className="text-[11px] font-mono text-[#16161D] font-bold tracking-wider">
                    STYLE: {selectedStyle.name.toUpperCase()}
                  </span>
                </div>

                {/* Bottom Spec Sheet Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-white/95 border border-[#E4DCCF] backdrop-blur-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
                  <div>
                    <p className="text-xs font-bold text-[#16161D] flex items-center gap-1.5">
                      <Crosshair className="w-3.5 h-3.5 text-[#14A8D6]" />
                      <span>AI Neural Spatial Model Active</span>
                    </p>
                    <p className="text-[11px] text-[#8E6835] font-semibold mt-0.5">
                      {selectedStyle.tags}
                    </p>
                  </div>
                  <Link
                    href={`/studio?style=${selectedStyle.id}`}
                    className="shrink-0 text-xs font-semibold px-4 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F1EBE1] text-[#16161D] border border-[#E4DCCF] transition-colors shadow-xs"
                  >
                    Customize This Theme →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
