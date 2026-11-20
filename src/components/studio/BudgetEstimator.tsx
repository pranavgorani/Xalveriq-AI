"use client";

import { useState } from "react";
import { Calculator, Check, ShieldCheck, Share2 } from "lucide-react";
import { PUNE_LOCALITIES } from "@/data/puneLocalities";

interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  minRate: number; // in INR per sq.ft
  maxRate: number; // in INR per sq.ft
  features: string[];
}

const PACKAGES: PackageTier[] = [
  {
    id: "essential",
    name: "Essential Elegance",
    tagline: "High durability and timeless aesthetics for rental or first home investments.",
    minRate: 1550,
    maxRate: 1850,
    features: [
      "IS:710 Marine Grade BWP Plywood",
      "Merino Anti-Scratch & Anti-Fingerprint Laminates",
      "Hafele Soft-Close Hinges & Drawer Runners",
      "Gyproc False Ceiling with Philips Warm LED Recessed Lights",
      "Asian Paints Royale Luxury Emulsion",
      "10-Year Service Warranty",
    ],
  },
  {
    id: "signature",
    name: "Signature Luxury",
    tagline: "Our most popular package for 3 & 4 BHK residences across Pune.",
    minRate: 2150,
    maxRate: 2550,
    features: [
      "FENIX NTM Ultra-Matte Nano-Tech Surfaces",
      "Blum Legrabox Motorized Servo-Drive Systems",
      "24V Magnetic Low-Voltage Architectural Track Lights",
      "Italian PU Lacquer Satin Enamel on Feature Walls",
      "Caesarstone / Silestone Kitchen Countertop",
      "Concealed Soundbar & Cantilever TV Consoles",
    ],
  },
  {
    id: "haute",
    name: "Haute Architectural",
    tagline: "Bespoke zero-gravity luxury for penthouses and villas.",
    minRate: 2950,
    maxRate: 3600,
    features: [
      "Imported Italian Statuario Marble & Travertine Stone",
      "Full Lutron / Legrand Smart Home Scene Automation",
      "Structural Cantilevered Floating Daybeds & Consoles",
      "Dekton Laurent Heat-Proof Kitchen Surfaces",
      "Belgian Linen Drapery with Motorized Somfy Tracks",
      "Dedicated Project Architect & Daily Drone/Cam Updates",
    ],
  },
];

const BHK_PRESETS: Record<string, number> = {
  "1 BHK": 650,
  "2 BHK": 1050,
  "2.5 BHK": 1300,
  "3 BHK": 1750,
  "4 BHK": 2400,
  "Penthouse / Villa": 3600,
};

export function BudgetEstimator() {
  const [selectedBhk, setSelectedBhk] = useState<string>("3 BHK");
  const [carpetArea, setCarpetArea] = useState<number>(1750);
  const [selectedLocality, setSelectedLocality] = useState<string>(PUNE_LOCALITIES[1].id); // Baner
  const [selectedPackage, setSelectedPackage] = useState<PackageTier>(PACKAGES[1]); // Signature

  const handleBhkChange = (bhk: string) => {
    setSelectedBhk(bhk);
    setCarpetArea(BHK_PRESETS[bhk]);
  };

  // Calculate pricing
  const minCostTotal = (carpetArea * selectedPackage.minRate);
  const maxCostTotal = (carpetArea * selectedPackage.maxRate);

  const minLakhs = (minCostTotal / 100000).toFixed(2);
  const maxLakhs = (maxCostTotal / 100000).toFixed(2);
  const avgCost = (minCostTotal + maxCostTotal) / 2;

  // Breakdown percentages
  const breakdown = [
    { label: "Modular Woodwork & Carcass (45%)", amount: (avgCost * 0.45) },
    { label: "Civil, Countertops & Stone (20%)", amount: (avgCost * 0.20) },
    { label: "False Ceiling & Magnetic Lighting (18%)", amount: (avgCost * 0.18) },
    { label: "Paint, PU Lacquer & Wall Textures (12%)", amount: (avgCost * 0.12) },
    { label: "Smart Automation & Hardware (5%)", amount: (avgCost * 0.05) },
  ];

  const currentLocality = PUNE_LOCALITIES.find((l) => l.id === selectedLocality) || PUNE_LOCALITIES[0];

  return (
    <div id="estimator" className="relative rounded-3xl bg-white/95 border border-[#E4DCCF] p-6 sm:p-10 backdrop-blur-2xl shadow-[0_16px_50px_rgba(22,22,29,0.07)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
              <Calculator className="w-3.5 h-3.5 text-[#B08A57]" />
              <span>Real-Time Pune Pricing Engine</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#16161D]">
              Instant Interior Budget Estimator
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5A55] font-normal mt-1">
              Transparent, itemized pricing calibrated against real material and labor costs across Pune.
            </p>
          </div>

          {/* 1. BHK Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#16161D]">
              1. Choose Apartment Configuration
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {Object.keys(BHK_PRESETS).map((bhk) => (
                <button
                  key={bhk}
                  onClick={() => handleBhkChange(bhk)}
                  className={`py-2 px-2 rounded-xl text-xs font-bold border text-center transition-all ${
                    selectedBhk === bhk
                      ? "bg-white border-2 border-[#B08A57] text-[#16161D] shadow-xs"
                      : "bg-[#FAF7F2] border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D] hover:bg-white"
                  }`}
                >
                  {bhk}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Carpet Area Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#16161D]">
                2. Carpet Area (Square Feet)
              </span>
              <span className="font-mono text-[#14A8D6] font-bold text-sm">
                {carpetArea} sq.ft
              </span>
            </div>
            <input
              type="range"
              min={500}
              max={5000}
              step={50}
              value={carpetArea}
              onChange={(e) => setCarpetArea(Number(e.target.value))}
              className="w-full h-2 bg-[#FAF7F2] border border-[#E4DCCF] rounded-lg appearance-none cursor-pointer accent-[#B08A57]"
            />
            <div className="flex justify-between text-[10px] text-[#5E5A55] font-mono">
              <span>500 sq.ft</span>
              <span>2,500 sq.ft</span>
              <span>5,000 sq.ft</span>
            </div>
          </div>

          {/* 3. Locality Dropdown */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#16161D] flex items-center justify-between">
              <span>3. Pune Neighborhood / Society Zone</span>
              <span className="text-[10px] text-[#8E6835] font-semibold">{currentLocality.tier} Zone</span>
            </label>
            <select
              value={selectedLocality}
              onChange={(e) => setSelectedLocality(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs font-medium text-[#16161D] focus:outline-none focus:border-[#6D4AFF]"
            >
              {PUNE_LOCALITIES.map((loc) => (
                <option key={loc.id} value={loc.id} className="bg-white text-[#16161D]">
                  {loc.name} ({loc.zone}) — e.g. {loc.notableProjects.slice(0, 2).join(", ")}
                </option>
              ))}
            </select>
          </div>

          {/* 4. Package Tier Selection */}
          <div className="space-y-3">
            <label className="text-xs font-bold text-[#16161D]">
              4. Architectural Execution Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                    selectedPackage.id === pkg.id
                      ? "bg-white border-2 border-[#6D4AFF] text-[#16161D] shadow-[0_6px_20px_rgba(109,74,255,0.12)]"
                      : "bg-[#FAF7F2] border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D] hover:bg-white"
                  }`}
                >
                  {selectedPackage.id === pkg.id && (
                    <div className="absolute top-3 right-3 w-4 h-4 rounded-full btn-primary-gradient flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-[#16161D] mb-1">{pkg.name}</h4>
                    <p className="text-[10px] text-[#5E5A55] font-normal mb-3 line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>
                  <div className="text-xs font-bold text-[#8E6835] pt-2 border-t border-[#E4DCCF]">
                    ₹{pkg.minRate} - ₹{pkg.maxRate} / sq.ft
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output: Detailed Quote Card */}
        <div className="lg:col-span-5 rounded-2xl bg-[#FAF7F2] border border-[#E4DCCF] p-6 sm:p-8 space-y-6 shadow-sm relative">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8E6835] font-bold">
              ESTIMATED TURNKEY INVESTMENT
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-bold font-display text-[#16161D]">
                ₹{minLakhs} - ₹{maxLakhs}
              </span>
              <span className="text-sm text-[#5E5A55] font-semibold">Lakhs</span>
            </div>
            <p className="text-[11px] text-[#5E5A55] pt-1">
              For a <strong className="text-[#16161D]">{selectedBhk}</strong> ({carpetArea} sq.ft) in <strong className="text-[#16161D]">{currentLocality.name}</strong> under <strong className="text-[#16161D]">{selectedPackage.name}</strong>.
            </p>
          </div>

          {/* Delivery & Warranty Guarantees */}
          <div className="p-3.5 rounded-xl bg-white border border-[#E4DCCF] flex items-center justify-between text-xs shadow-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8E6835]" />
              <span className="text-[#16161D] font-bold">10-Year Flat Warranty</span>
            </div>
            <span className="text-emerald-600 font-mono text-[11px] font-bold">45-Day Handover</span>
          </div>

          {/* Itemized Cost Breakdown */}
          <div className="space-y-3 pt-2">
            <h5 className="text-xs font-bold text-[#16161D] uppercase tracking-wider">
              Itemized Cost Allocation
            </h5>
            <div className="space-y-2">
              {breakdown.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-xs">
                  <span className="text-[#5E5A55]">{item.label}</span>
                  <span className="font-mono text-[#16161D] font-bold">
                    ₹{(item.amount / 100000).toFixed(2)}L
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Included Specifications in selected tier */}
          <div className="space-y-2 pt-2 border-t border-[#E4DCCF]">
            <h5 className="text-[11px] font-bold text-[#6D4AFF] uppercase tracking-wider">
              Key Inclusions:
            </h5>
            <ul className="space-y-1.5 text-xs text-[#5E5A55]">
              {selectedPackage.features.slice(0, 4).map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8E6835] shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Button */}
          <div className="pt-4 space-y-2">
            <a
              href={`https://wa.me/919823092587?text=${encodeURIComponent(
                `Hi Xalveriq, I used the AI Budget Estimator for my ${selectedBhk} (${carpetArea} sq.ft) in ${currentLocality.name}. The estimated budget is ₹${minLakhs}L - ₹${maxLakhs}L with the ${selectedPackage.name} tier. Can you share the detailed BOQ?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full btn-primary-gradient text-white font-bold text-xs tracking-wide shadow-md flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Detailed Estimate to WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
