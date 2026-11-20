"use client";

import { useState } from "react";
import Image from "next/image";
import { RefreshCw, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

interface StyleOption {
  id: string;
  name: string;
  desc: string;
  previewBefore: string;
  previewAfter: string;
}

const STYLES: StyleOption[] = [
  {
    id: "modern-minimal",
    name: "Modern Minimalist",
    desc: "Light oak cabinetry, matte off-white surfaces, flush storage, and concealed 3000K warm lighting.",
    previewBefore: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    previewAfter: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "japandi",
    name: "Japandi Sanctuary",
    desc: "Muted lime plaster, fluted ash louvers, low-profile seating, and calm natural cross-ventilation.",
    previewBefore: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    previewAfter: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "scandinavian",
    name: "Scandinavian Wood & Stone",
    desc: "European birch, light grey quartz counters, linen drapery, and ergonomic modular drawer banks.",
    previewBefore: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    previewAfter: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "contemporary-indian",
    name: "Warm Contemporary",
    desc: "Natural teak veneers, woven cane accents, brushed brass hardware, and neutral Botticino marble.",
    previewBefore: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
    previewAfter: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
  },
];

export function RoomRedesign() {
  const [selectedStyle, setSelectedStyle] = useState<StyleOption>(STYLES[0]);
  const [roomType, setRoomType] = useState<string>("Living Room");
  const [userPrompt, setUserPrompt] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"after" | "before">("after");
  const [generatedCount, setGeneratedCount] = useState<number>(1);

  const handleGenerate = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setGeneratedCount((prev) => prev + 1);
      setViewMode("after");
    }, 900);
  };

  return (
    <div className="p-6 sm:p-10 bg-white border border-border rounded-[4px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Form: Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink">
              Preview a room direction.
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Select your room type, pick a material theme, and generate an indicative concept.
            </p>
          </div>

          {/* 1. Room Type Selector */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-ink">
              1. Space Configuration
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Living Room", "Modular Kitchen", "Master Bedroom"].map((room) => (
                <button
                  key={room}
                  onClick={() => setRoomType(room)}
                  className={`py-2 px-2 rounded-[2px] text-xs transition-colors ${
                    roomType === room
                      ? "bg-ink text-white font-medium"
                      : "bg-paper border border-border text-text-muted hover:text-ink"
                  }`}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Style Selector */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-ink">
              2. Material & Style Direction
            </label>
            <div className="space-y-2">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
                  className={`w-full p-3 rounded-[2px] border text-left transition-colors flex items-center justify-between ${
                    selectedStyle.id === style.id
                      ? "bg-paper border-ink text-ink font-medium"
                      : "bg-white border-border text-text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  <div>
                    <p className="text-xs font-medium text-ink">{style.name}</p>
                    <p className="text-[11px] text-text-muted line-clamp-1">{style.desc}</p>
                  </div>
                  {selectedStyle.id === style.id && (
                    <Check className="w-3.5 h-3.5 text-terracotta shrink-0 ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Notes */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">
              3. Custom priorities (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Work-from-home desk, pooja corner, extra book shelving..."
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              className="studio-input text-xs"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={handleGenerate}
            disabled={isProcessing}
            className="w-full btn-terracotta text-xs py-3 px-5 rounded-[4px] disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Generating style direction...</span>
              </>
            ) : (
              <span>Preview Style Concept ({generatedCount})</span>
            )}
          </button>
        </div>

        {/* Right Preview Display */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-[4px] overflow-hidden border border-border bg-[#EFE9DF] aspect-[16/10]">
            <Image
              src={viewMode === "after" ? selectedStyle.previewAfter : selectedStyle.previewBefore}
              alt="Room preview visualization"
              fill
              className={`object-cover transition-opacity duration-300 ${
                isProcessing ? "opacity-30 blur-xs" : "opacity-100"
              }`}
              sizes="(max-width: 1024px) 100vw, 58vw"
            />

            {/* Toggle View Mode Header */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 p-1 bg-white/95 border border-border rounded-[2px]">
              <button
                onClick={() => setViewMode("before")}
                className={`px-2.5 py-1 rounded-[2px] text-[11px] transition-colors ${
                  viewMode === "before" ? "bg-ink text-white" : "text-text-muted hover:text-ink"
                }`}
              >
                Raw Builder State
              </button>
              <button
                onClick={() => setViewMode("after")}
                className={`px-2.5 py-1 rounded-[2px] text-[11px] transition-colors ${
                  viewMode === "after" ? "bg-ink text-white" : "text-text-muted hover:text-ink"
                }`}
              >
                Style Preview
              </button>
            </div>

            <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/95 border border-border text-[10px] font-mono text-ink rounded-[2px]">
              {roomType.toUpperCase()} • PUNE
            </div>

            {/* Bottom Spec Sheet */}
            <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 border border-border rounded-[2px] text-xs">
              <span className="font-medium text-ink block">{selectedStyle.name}</span>
              <span className="text-[11px] text-text-muted block mt-0.5">{selectedStyle.desc}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-text-muted pt-2 border-t border-border/60">
            <span>Our designers translate this concept into buildable CAD drawings.</span>
            <Link href="/contact" className="text-terracotta hover:underline font-medium inline-flex items-center gap-1">
              <span>Discuss with an architect</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
