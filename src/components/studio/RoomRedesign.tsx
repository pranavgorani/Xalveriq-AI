"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Wand2, RefreshCw, Check, Share2 } from "lucide-react";

interface StyleOption {
  id: string;
  name: string;
  desc: string;
  previewBefore: string;
  previewAfter: string;
}

// REPLACE WITH REAL XALVERIQ PROJECT PHOTO
const STYLES: StyleOption[] = [
  {
    id: "modern-luxury",
    name: "Modern Haute Luxury",
    desc: "Italian Statuario marble, champagne gold profiles, floating cantilever consoles, and concealed magnetic track lighting.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewBefore: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewAfter: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "japandi",
    name: "Japandi Sanctuary",
    desc: "Organic wabi-sabi textures, micro-cement walls, fluted ash wood louvers, and warm ambient circadian lighting.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewBefore: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewAfter: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "scandinavian",
    name: "Scandinavian Serenity",
    desc: "Airy light oak woods, ergonomic modular storage, white stone waterfall surfaces, and cozy linen textiles.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewBefore: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewAfter: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "indian-contemporary",
    name: "Indian Contemporary",
    desc: "Hand-woven cane weaves, polished brass inlays, natural warm teak, and Vastu-harmonized spatial orientation.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewBefore: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewAfter: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "neo-industrial",
    name: "Neo-Industrial Chic",
    desc: "Matte FENIX NTM charcoal, Dekton stone, exposed architectural concrete textures, and bronze accent shelving.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewBefore: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    previewAfter: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
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
    }, 1100);
  };

  return (
    <div className="relative rounded-3xl bg-white/95 border border-[#E4DCCF] p-6 sm:p-8 backdrop-blur-2xl shadow-[0_16px_50px_rgba(22,22,29,0.07)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Controls */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4DCCF] text-[#6D4AFF] text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#14A8D6]" />
              <span>AI Neural Renderer</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#16161D]">
              Instant Room Redesign Preview
            </h3>
            <p className="text-xs text-[#5E5A55] font-normal mt-1">
              Select your room type, pick a design language, and let AI generate a customized concept.
            </p>
          </div>

          {/* Room Type Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#16161D]">
              1. Select Room Space
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Living Room", "Modular Kitchen", "Master Bedroom"].map((room) => (
                <button
                  key={room}
                  onClick={() => setRoomType(room)}
                  className={`py-2 px-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                    roomType === room
                      ? "bg-white border-2 border-[#B08A57] text-[#16161D] shadow-xs"
                      : "bg-[#FAF7F2] border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D] hover:bg-white"
                  }`}
                >
                  {room}
                </button>
              ))}
            </div>
          </div>

          {/* Style Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#16161D]">
              2. Design Language
            </label>
            <div className="space-y-2">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    selectedStyle.id === style.id
                      ? "bg-white border-2 border-[#6D4AFF] text-[#16161D] shadow-[0_6px_20px_rgba(109,74,255,0.12)]"
                      : "bg-[#FAF7F2] border-[#E4DCCF] text-[#5E5A55] hover:bg-white hover:text-[#16161D]"
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-[#16161D]">{style.name}</p>
                    <p className="text-[11px] text-[#5E5A55] line-clamp-1">{style.desc}</p>
                  </div>
                  {selectedStyle.id === style.id && (
                    <Check className="w-4 h-4 text-[#6D4AFF] shrink-0 ml-2" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Architectural Instructions */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-[#16161D]">
              3. Custom Preferences (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Add fluted charcoal louvers, pet-friendly fabric, pooja corner..."
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs text-[#16161D] placeholder-[#5E5A55]/60 focus:outline-none focus:border-[#6D4AFF]"
            />
          </div>

          {/* Action Button */}
          <button
            onClick={handleGenerate}
            disabled={isProcessing}
            className="w-full py-4 rounded-full btn-primary-gradient text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isProcessing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Synthesizing AI Spatial Model...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4 text-[#DFBA87]" />
                <span>Generate AI Redesign (Concept #{generatedCount})</span>
              </>
            )}
          </button>
        </div>

        {/* Right Preview Display */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border border-[#E4DCCF] bg-[#16161D] aspect-[16/10] shadow-[0_16px_45px_rgba(22,22,29,0.08)]">
            {/* REPLACE WITH REAL XALVERIQ PROJECT PHOTO */}
            <Image
              src={viewMode === "after" ? selectedStyle.previewAfter : selectedStyle.previewBefore}
              alt="AI Studio Design Visualization"
              fill
              className={`object-cover transition-all duration-500 ${
                isProcessing ? "opacity-30 blur-md scale-105" : "opacity-100 blur-0 scale-100"
              }`}
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            {/* Toggle View Mode Header */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/90 border border-[#E4DCCF] backdrop-blur-md shadow-md">
                <button
                  onClick={() => setViewMode("before")}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold transition-all ${
                    viewMode === "before"
                      ? "bg-[#16161D] text-white shadow-xs"
                      : "text-[#5E5A55] hover:text-[#16161D]"
                  }`}
                >
                  Raw Builder Flat
                </button>
                <button
                  onClick={() => setViewMode("after")}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-bold transition-all flex items-center gap-1.5 ${
                    viewMode === "after"
                      ? "btn-primary-gradient text-white shadow-xs"
                      : "text-[#5E5A55] hover:text-[#16161D]"
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-[#DFBA87]" />
                  <span>AI Redesign</span>
                </button>
              </div>

              <div className="px-3 py-1 rounded-full bg-white/90 border border-[#E4DCCF] text-[10px] font-mono font-bold text-[#16161D] backdrop-blur-md shadow-xs">
                {roomType.toUpperCase()} • PUNE 2026
              </div>
            </div>

            {/* Processing Spinner Overlay */}
            {isProcessing && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-20 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full border-2 border-t-[#14A8D6] border-r-[#6D4AFF] border-b-transparent border-l-transparent animate-spin mb-3" />
                <p className="text-xs font-bold text-[#16161D]">
                  Rendering {selectedStyle.name}...
                </p>
                <p className="text-[10px] text-[#5E5A55]">
                  Applying Pune daylight simulation & material textures
                </p>
              </div>
            )}

            {/* Bottom Spec Sheet Overlay */}
            <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-white/95 border border-[#E4DCCF] backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#16161D] block">
                    {selectedStyle.name}
                  </span>
                  <span className="text-[11px] text-[#8E6835] font-semibold block mt-0.5">
                    {selectedStyle.desc}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-[#5E5A55]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Estimated Execution Time: <strong className="text-[#16161D]">40-45 Days</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/919823092587?text=${encodeURIComponent(
                  `Hi Xalveriq, I just generated an AI redesign concept for a ${roomType} in ${selectedStyle.name} style. Can your architect review it with me?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4.5 py-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#1E7E34] hover:bg-[#25D366] hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Send Concept to WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
