"use client";

import { useState } from "react";
import { Check, Share2 } from "lucide-react";
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
    name: "Essential Specification",
    tagline: "Durable marine plywood, anti-scratch laminates, and reliable Hafele hardware.",
    minRate: 1550,
    maxRate: 1850,
    features: [
      "IS:710 Marine Grade BWP Plywood",
      "Merino Anti-Scratch & Anti-Fingerprint Laminates",
      "Hafele Soft-Close Hinges & Drawer Runners",
      "Gyproc False Ceiling with Warm LED Recessed Lights (3000K)",
      "Asian Paints Royale Luxury Emulsion",
      "Manufacturer warranty papers registered at handover",
    ],
  },
  {
    id: "premium",
    name: "Enhanced Architectural",
    tagline: "Our most requested specification for 3 and 4 BHK residences in Pune.",
    minRate: 2150,
    maxRate: 2550,
    features: [
      "FENIX NTM Ultra-Matte Nano-Tech Surfaces",
      "Blum Legrabox Soft-Close Drawer Systems",
      "Architectural Profile & Task Track Lighting",
      "PU Lacquer Satin Enamel on Key Feature Cabinetry",
      "Quartz / Granite Kitchen Countertop with Sealed Splashback",
      "Concealed Electrical & Sound Conduit Provision",
    ],
  },
  {
    id: "tailored",
    name: "Tailored Premium",
    tagline: "Imported natural stone, custom wood veneers, and integrated architectural scenes.",
    minRate: 2950,
    maxRate: 3600,
    features: [
      "Natural Wood Veneers & Hand-Polished Teak",
      "Italian Botticino / Travertine Stone Elements",
      "Motorized Drapery Track Provision",
      "Dekton Heat-Resistant Kitchen Worktops",
      "Full Fluted Louver Feature Panelling",
      "Dedicated Project Architect & Weekly On-Site Logs",
    ],
  },
];

const BHK_PRESETS: Record<string, number> = {
  "1 BHK": 650,
  "2 BHK": 1050,
  "2.5 BHK": 1300,
  "3 BHK": 1750,
  "4 BHK": 2400,
  "Penthouse": 3600,
};

export function BudgetEstimator() {
  const [selectedBhk, setSelectedBhk] = useState<string>("3 BHK");
  const [carpetArea, setCarpetArea] = useState<number>(1750);
  const [selectedLocality, setSelectedLocality] = useState<string>(PUNE_LOCALITIES[1].id); // Baner
  const [selectedPackage, setSelectedPackage] = useState<PackageTier>(PACKAGES[1]);

  const handleBhkChange = (bhk: string) => {
    setSelectedBhk(bhk);
    setCarpetArea(BHK_PRESETS[bhk]);
  };

  const minCostTotal = carpetArea * selectedPackage.minRate;
  const maxCostTotal = carpetArea * selectedPackage.maxRate;

  const minLakhs = (minCostTotal / 100000).toFixed(2);
  const maxLakhs = (maxCostTotal / 100000).toFixed(2);
  const avgCost = (minCostTotal + maxCostTotal) / 2;

  const breakdown = [
    { label: "Modular Woodwork & Cabinetry (45%)", amount: avgCost * 0.45 },
    { label: "Civil, Countertops & Stone (20%)", amount: avgCost * 0.2 },
    { label: "False Ceiling & 3000K Lighting (18%)", amount: avgCost * 0.18 },
    { label: "Paint, PU Finishes & Wall Prep (12%)", amount: avgCost * 0.12 },
    { label: "Hardware & Fittings (5%)", amount: avgCost * 0.05 },
  ];

  const currentLocality =
    PUNE_LOCALITIES.find((l) => l.id === selectedLocality) || PUNE_LOCALITIES[0];

  return (
    <div className="p-6 sm:p-10 bg-white border border-border rounded-[4px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink">
              Pune Apartment Budget Estimator.
            </h3>
            <p className="text-xs text-text-muted leading-relaxed">
              Typical projects start around ₹15L [PLACEHOLDER]. Use this calculator to view indicative estimates based on your flat size and material specification.
            </p>
          </div>

          {/* 1. BHK Selection */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-ink">
              1. Flat Configuration
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {Object.keys(BHK_PRESETS).map((bhk) => (
                <button
                  key={bhk}
                  onClick={() => handleBhkChange(bhk)}
                  className={`py-2 px-1 text-xs rounded-[2px] transition-colors ${
                    selectedBhk === bhk
                      ? "bg-ink text-white font-medium"
                      : "bg-paper border border-border text-text-muted hover:text-ink"
                  }`}
                >
                  {bhk}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Carpet Area */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-ink">
                2. Carpet Area: <strong className="text-ink font-semibold">{carpetArea} sq ft</strong>
              </span>
              <span className="plan-note">Adjust to your floor plan</span>
            </div>
            <input
              type="range"
              min={500}
              max={4500}
              step={50}
              value={carpetArea}
              onChange={(e) => setCarpetArea(Number(e.target.value))}
              className="w-full accent-terracotta cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-text-muted font-mono">
              <span>500 sq ft</span>
              <span>2,500 sq ft</span>
              <span>4,500 sq ft</span>
            </div>
          </div>

          {/* 3. Locality */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink">
              3. Pune Area / Society Zone
            </label>
            <select
              value={selectedLocality}
              onChange={(e) => setSelectedLocality(e.target.value)}
              className="studio-input text-xs bg-white"
            >
              {PUNE_LOCALITIES.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name} ({loc.zone})
                </option>
              ))}
            </select>
          </div>

          {/* 4. Specification Tier */}
          <div className="space-y-3">
            <label className="text-xs font-medium text-ink">
              4. Material Specification Level
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PACKAGES.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-3.5 rounded-[2px] border text-left transition-colors flex flex-col justify-between ${
                    selectedPackage.id === pkg.id
                      ? "bg-paper border-ink text-ink font-medium"
                      : "bg-white border-border text-text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-medium text-ink mb-1">{pkg.name}</h4>
                    <p className="text-[10px] text-text-muted leading-relaxed line-clamp-2 mb-2">
                      {pkg.tagline}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-terracotta font-medium pt-2 border-t border-border/60">
                    ₹{pkg.minRate} - ₹{pkg.maxRate} / sq ft
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output: Breakdown */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-paper border border-border rounded-[4px] space-y-6">
          <div className="space-y-1">
            <span className="plan-note block">Indicative Budget Estimate</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-serif text-ink">
                ₹{minLakhs} – ₹{maxLakhs}
              </span>
              <span className="text-sm text-text-muted">Lakhs [PLACEHOLDER]</span>
            </div>
            <p className="text-xs text-text-muted pt-1">
              For a {selectedBhk} ({carpetArea} sq ft) in {currentLocality.name} under {selectedPackage.name}.
            </p>
          </div>

          {/* Itemized Cost Breakdown */}
          <div className="space-y-2 pt-2 border-t border-border/60">
            <h5 className="plan-note block mb-2">Estimated Allocation:</h5>
            {breakdown.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className="text-text-muted">{item.label}</span>
                <span className="font-mono text-ink font-medium">
                  ₹{(item.amount / 100000).toFixed(2)}L
                </span>
              </div>
            ))}
          </div>

          {/* Key Inclusions */}
          <div className="space-y-2 pt-2 border-t border-border/60">
            <h5 className="plan-note block mb-1">Specification Highlights:</h5>
            <ul className="space-y-1.5 text-xs text-text-muted">
              {selectedPackage.features.slice(0, 4).map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-terracotta mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-border/60">
            <a
              href={`https://wa.me/919823092587?text=${encodeURIComponent(
                `Hello Xalveriq, I used the budget estimator for my ${selectedBhk} (${carpetArea} sq ft) in ${currentLocality.name}. Estimated range is ₹${minLakhs}L - ₹${maxLakhs}L. Can we review the floor plan together?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-terracotta text-xs py-3 px-4 rounded-[4px] flex items-center justify-center gap-2"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Estimate to WhatsApp for Review</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
