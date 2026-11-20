"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    styleWeight: "japandi" | "modern-minimal" | "warm-contemporary" | "scandinavian";
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "How does natural light enter your Pune flat?",
    subtitle: "Daylight angle influences surface reflection, veneer tones, and lighting color temperatures.",
    options: [
      {
        label: "Direct morning or evening sunlight",
        description: "Intense daylight that pairs best with matte surfaces, anti-glare finishes, and linen drapery.",
        styleWeight: "japandi",
      },
      {
        label: "Soft indirect light throughout the day",
        description: "Balanced daylight suited for neutral Italian marble, light oak, and brushed metal details.",
        styleWeight: "modern-minimal",
      },
      {
        label: "Warm afternoon golden light",
        description: "Complemented by natural teak, cane textures, and warm earth-toned mineral paints.",
        styleWeight: "warm-contemporary",
      },
      {
        label: "Compact urban light facing adjacent towers",
        description: "Requires light birch cabinetry, continuous flooring, and concealed perimeter illumination.",
        styleWeight: "scandinavian",
      },
    ],
  },
  {
    id: 2,
    title: "How do you primarily live and host in your space?",
    subtitle: "Your daily routines dictate storage volumes and furniture orientation.",
    options: [
      {
        label: "Quiet, clutter-free retreat",
        description: "Full-height concealed storage, low visual noise, and breathing room between furniture.",
        styleWeight: "japandi",
      },
      {
        label: "Hosting friends for dinners and conversation",
        description: "Open dining credenza, warm architectural lighting scenes, and comfortable lounge seating.",
        styleWeight: "modern-minimal",
      },
      {
        label: "Multi-generational family living",
        description: "Vastu-aligned orientations, dedicated pooja unit, and durable, easy-to-clean fabrics.",
        styleWeight: "warm-contemporary",
      },
      {
        label: "Work-from-home and compact efficiency",
        description: "Dedicated study alcoves, clean cable management, and ergonomic storage units.",
        styleWeight: "scandinavian",
      },
    ],
  },
  {
    id: 3,
    title: "Which surface texture feels most comfortable to you?",
    subtitle: "Materials you touch daily define the emotional warmth of your interior.",
    options: [
      {
        label: "Fluted ash wood and mineral lime plaster",
        description: "Natural, breathable, and understated with subtle organic texture.",
        styleWeight: "japandi",
      },
      {
        label: "Smoked oak veneer and honed light stone",
        description: "Quiet architectural lines with durable matte surfaces.",
        styleWeight: "modern-minimal",
      },
      {
        label: "Polished teak and handcrafted cane weave",
        description: "Warm, familiar craftsmanship crafted into clean modern profiles.",
        styleWeight: "warm-contemporary",
      },
      {
        label: "Natural blonde birch and textured neutral linen",
        description: "Airy, functional, and effortless to maintain.",
        styleWeight: "scandinavian",
      },
    ],
  },
  {
    id: 4,
    title: "What level of home technology do you prefer?",
    subtitle: "Integrating lighting and electrical hardware thoughtfully.",
    options: [
      {
        label: "Warm circadian lighting only",
        description: "Lighting that shifts naturally from 4000K task lighting to warm 2700K in the evening.",
        styleWeight: "japandi",
      },
      {
        label: "Concealed scenes with remote controls",
        description: "Integrated drapery tracks and scene switching for living and media areas.",
        styleWeight: "modern-minimal",
      },
      {
        label: "Simple, tactile manual switches",
        description: "Quality brass or matte switch plates without digital complexity.",
        styleWeight: "warm-contemporary",
      },
      {
        label: "Functional USB-C ports and clean cable conduits",
        description: "Concealed wiring, bedside charging nooks, and practical electrical points.",
        styleWeight: "scandinavian",
      },
    ],
  },
];

const STYLE_PROFILES = {
  "modern-minimal": {
    name: "Modern Minimalist",
    tagline: "Quiet architectural lines with light oak, honed stone, and warm 3000K lighting.",
    palette: ["#F6F2EA", "#1B1B1B", "#B5573A", "#6B665E", "#EFE9DF"],
    materials: ["Smoked Oak Veneer", "Honed Quartz", "Brushed Brass Details", "Blum Hardware"],
    note: "Works particularly well in open 3 BHK flats in Koregaon Park and Baner where daylight is generous.",
  },
  "japandi": {
    name: "Japandi Clean",
    tagline: "Natural mineral plaster, fluted ash wood, and understated storage.",
    palette: ["#F6F2EA", "#DDD5C8", "#B5573A", "#6B665E", "#FFFFFF"],
    materials: ["Lime Plaster", "Fluted Ash Louvers", "Natural Stone", "Linen Drapery"],
    note: "Ideal for homeowners seeking a quiet, calming retreat from Pune’s bustling traffic corridors.",
  },
  "warm-contemporary": {
    name: "Warm Contemporary",
    tagline: "Indian craftsmanship with teak, woven cane, and Vastu-aligned spatial layouts.",
    palette: ["#F6F2EA", "#946843", "#B5573A", "#6B665E", "#FFFFFF"],
    materials: ["Natural Cane", "Polished Teak", "Botticino Marble", "Vastu-Aligned Planning"],
    note: "Brings cultural warmth and family comfort without heavy visual clutter.",
  },
  "scandinavian": {
    name: "Scandinavian Serenity",
    tagline: "Light birch, generous storage, and bright space-optimization.",
    palette: ["#FFFFFF", "#F6F2EA", "#B5573A", "#6B665E", "#1B1B1B"],
    materials: ["Light Birch", "Caesarstone Quartz", "Concealed Storage", "Anti-Fingerprint Laminate"],
    note: "Maximizes floor space and storage in 2 and 3 BHK Pune apartments.",
  },
};

export function StyleQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<keyof typeof STYLE_PROFILES | null>(null);

  const handleSelectOption = (weight: string) => {
    const nextAnswers = [...answers, weight];
    setAnswers(nextAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const counts: Record<string, number> = {};
      nextAnswers.forEach((w) => {
        counts[w] = (counts[w] || 0) + 1;
      });
      let highestKey: keyof typeof STYLE_PROFILES = "modern-minimal";
      let highestCount = 0;
      Object.entries(counts).forEach(([k, v]) => {
        if (v > highestCount) {
          highestCount = v;
          highestKey = k as keyof typeof STYLE_PROFILES;
        }
      });
      setResult(highestKey);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
  };

  const currentQ = QUESTIONS[currentStep];

  return (
    <div className="p-6 sm:p-10 bg-white border border-border rounded-[4px]">
      {!result ? (
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-text-muted">
              <span className="plan-note font-mono">
                Question 0{currentStep + 1} of 0{QUESTIONS.length}
              </span>
              <span>
                {Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% Complete
              </span>
            </div>
            <div className="w-full h-1 bg-paper border border-border rounded-[1px] overflow-hidden">
              <div
                className="h-full bg-terracotta transition-all duration-200"
                style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Title */}
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-normal text-ink">
              {currentQ.title}
            </h3>
            <p className="text-xs text-text-muted">
              {currentQ.subtitle}
            </p>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.styleWeight)}
                className="w-full p-4 rounded-[2px] bg-paper border border-border hover:border-ink hover:bg-white text-left transition-all duration-150 flex items-start gap-4"
              >
                <span className="w-5 h-5 rounded-[2px] border border-border bg-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono text-text-muted">
                  {String.fromCharCode(65 + idx)}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{opt.label}</p>
                  <p className="text-xs text-text-muted mt-0.5 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Quiz Result */
        <div className="max-w-2xl mx-auto space-y-6 text-center">
          <span className="plan-note">Aesthetic Match</span>

          <h3 className="text-3xl font-serif font-normal text-ink">
            {STYLE_PROFILES[result].name}
          </h3>

          <p className="text-sm text-text-muted max-w-lg mx-auto leading-relaxed">
            {STYLE_PROFILES[result].tagline}
          </p>

          <p className="text-xs text-text-muted italic max-w-md mx-auto">
            &ldquo;{STYLE_PROFILES[result].note}&rdquo;
          </p>

          {/* Recommended Materials */}
          <div className="p-6 rounded-[2px] bg-paper border border-border text-left space-y-4">
            <h4 className="plan-note block">Recommended Material Specification:</h4>
            <div className="flex flex-wrap gap-2">
              {STYLE_PROFILES[result].materials.map((m, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white border border-border text-xs text-ink rounded-[2px]"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Harmonized Colors */}
            <div className="pt-2 border-t border-border/60">
              <span className="plan-note block mb-2">Suggested Palette:</span>
              <div className="flex items-center gap-2">
                {STYLE_PROFILES[result].palette.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="w-8 h-8 rounded-[2px] border border-border"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[9px] font-mono text-text-muted">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#estimator"
              className="btn-terracotta text-xs py-3 px-6 rounded-[4px]"
            >
              <span>Estimate Budget with this Style</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleReset}
              className="btn-outline text-xs py-3 px-5 rounded-[4px] flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5 text-text-muted" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
