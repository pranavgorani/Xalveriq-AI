"use client";

import { useState } from "react";
import { Sparkles, RotateCcw, ArrowRight, Palette, Sun, Armchair, Sliders } from "lucide-react";

interface Question {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  options: {
    label: string;
    description: string;
    styleWeight: "japandi" | "modern-luxury" | "indian-contemporary" | "scandinavian";
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "How does natural light enter your Pune home?",
    subtitle: "Sun orientation dictates texture reflectivity and ceiling light temperatures.",
    icon: Sun,
    options: [
      {
        label: "Abundant Bright Sunlight (East/West facing)",
        description: "Intense daylight that pairs best with matte surfaces, anti-glare FENIX, and sheer filtering.",
        styleWeight: "japandi",
      },
      {
        label: "Soft Indirect Ambient Light (North facing)",
        description: "Balanced diffused light ideal for high-gloss Italian marble, bronze mirrors, and brass inlays.",
        styleWeight: "modern-luxury",
      },
      {
        label: "Warm Golden Evening Sun",
        description: "Golden hour glow enhanced by rich natural teak, cane weaves, and terracotta warmth.",
        styleWeight: "indian-contemporary",
      },
      {
        label: "Limited / High-Density Urban Light",
        description: "Needs reflective light-oak finishes, floating cantilever units, and perimeter illumination.",
        styleWeight: "scandinavian",
      },
    ],
  },
  {
    id: 2,
    title: "What is your primary living & entertaining philosophy?",
    subtitle: "Spaces should be tailored to how you decompress and host.",
    icon: Armchair,
    options: [
      {
        label: "Tranquil Zero-Clutter Retreat",
        description: "Hidden storage, minimal visual noise, wabi-sabi simplicity, deep relaxation.",
        styleWeight: "japandi",
      },
      {
        label: "Sophisticated Cocktail & Dinner Parties",
        description: "Dramatic backlit onyx bar, Dolby Atmos acoustic lounges, luxury statement furniture.",
        styleWeight: "modern-luxury",
      },
      {
        label: "Multi-Generational Warmth & Family Living",
        description: "Vastu-compliant layouts, serene pooja units, welcoming living room seating.",
        styleWeight: "indian-contemporary",
      },
      {
        label: "Compact Smart Living & Work-from-Home",
        description: "Ergonomic study nooks, convertible furniture, clean lines, effortless maintenance.",
        styleWeight: "scandinavian",
      },
    ],
  },
  {
    id: 3,
    title: "Which tactile material texture speaks to you most?",
    subtitle: "Surfaces you touch daily define the emotional warmth of your interior.",
    icon: Palette,
    options: [
      {
        label: "Fluted Ash Wood & Micro-Cement Plaster",
        description: "Earthy, organic, soft to the touch with serene wabi-sabi character.",
        styleWeight: "japandi",
      },
      {
        label: "Italian Statuario Marble & Champagne Brass",
        description: "Opulent, cool stone surfaces accented with warm architectural metals.",
        styleWeight: "modern-luxury",
      },
      {
        label: "Handcrafted Cane Weave & Polished Teak",
        description: "Heritage craftsmanship blended seamlessly into sleek modern profiles.",
        styleWeight: "indian-contemporary",
      },
      {
        label: "Natural Blonde Oak & Textured Belgian Linen",
        description: "Crisp, airy, and inviting with timeless Scandinavian restraint.",
        styleWeight: "scandinavian",
      },
    ],
  },
  {
    id: 4,
    title: "What level of smart home automation do you desire?",
    subtitle: "Integration of modern technology with interior architecture.",
    icon: Sliders,
    options: [
      {
        label: "Circadian Rhythm Lighting & Climate Only",
        description: "Light automatically shifts from invigorating daylight to warm 2200K amber at sunset.",
        styleWeight: "japandi",
      },
      {
        label: "Full Aerospace-Grade Automation",
        description: "Voice & touch screens control motorized sheers, cinema presets, and scullery.",
        styleWeight: "modern-luxury",
      },
      {
        label: "Subtle & Intuitive Controls",
        description: "Discrete bedside master switches and motion-activated night guidance.",
        styleWeight: "indian-contemporary",
      },
      {
        label: "Minimal Tech / Essential USB-C Integration",
        description: "Clean hidden conduits without unnecessary digital complexity.",
        styleWeight: "scandinavian",
      },
    ],
  },
];

const STYLE_PROFILES = {
  "modern-luxury": {
    name: "Modern Haute Luxury",
    tagline: "Weightless grandeur with Italian stone, champagne gold, and cinema-grade lighting.",
    palette: ["#FAF7F2", "#16161D", "#B08A57", "#6D4AFF", "#F1EBE1"],
    materials: ["Italian Statuario Marble", "Smoked Eucalyptus", "Champagne Gold Inlays", "Blum Motorized Hardware"],
    quote: "Ideal for high-rise penthouses in Koregaon Park and Baner where dramatic architectural presence meets cutting-edge tech.",
  },
  "japandi": {
    name: "Celestial Japandi Sanctuary",
    tagline: "Wabi-sabi organic tranquility fused with Scandinavian functional precision.",
    palette: ["#FAF7F2", "#E4DCCF", "#B08A57", "#5E5A55", "#FFFFFF"],
    materials: ["Micro-Cement Plaster", "Fluted Ash Wood", "Natural Travertine", "Linen Drapery"],
    quote: "A perfect sanctuary to decompress from Pune’s bustling tech corridors, prioritizing mental clarity and natural breathing space.",
  },
  "indian-contemporary": {
    name: "Heritage Contemporary",
    tagline: "Timeless Indian craftsmanship reimagined with sleek, weightless modern profiles.",
    palette: ["#FAF7F2", "#8E6835", "#B08A57", "#5E5A55", "#FFFFFF"],
    materials: ["Handwoven Natural Cane", "Polished Teak", "Brushed Brass", "Invisible Vastu Layouts"],
    quote: "A celebration of cultural heritage and multigenerational warmth without any of the heavy, dark visual clutter of old-school carpentry.",
  },
  "scandinavian": {
    name: "Scandinavian Serenity",
    tagline: "Bright, airy space-optimization engineered for effortless modern living.",
    palette: ["#FFFFFF", "#FAF7F2", "#14A8D6", "#B08A57", "#16161D"],
    materials: ["Light European Oak", "Caesarstone Quartz", "Matte Aluminum", "Concealed Storage"],
    quote: "Maximizes every single square foot in 2 and 3 BHK Pune apartments, turning compact rooms into expansive retreats.",
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
      // Calculate winner
      const counts: Record<string, number> = {};
      nextAnswers.forEach((w) => {
        counts[w] = (counts[w] || 0) + 1;
      });
      let highestKey: keyof typeof STYLE_PROFILES = "modern-luxury";
      let highestCount = 0;
      Object.entries(counts).forEach(([k, v]) => {
        if (v > highestCount) {
          highestCount = v;
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
    <div className="relative rounded-3xl bg-white/95 border border-[#E4DCCF] p-6 sm:p-10 backdrop-blur-2xl shadow-[0_16px_50px_rgba(22,22,29,0.07)]">
      {!result ? (
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Progress Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[#5E5A55]">
              <span className="font-mono text-[#8E6835] font-bold">
                QUESTION 0{currentStep + 1} OF 0{QUESTIONS.length}
              </span>
              <span className="font-semibold">
                {Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% Complete
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-[#FAF7F2] border border-[#E4DCCF] overflow-hidden">
              <div
                className="h-full btn-primary-gradient transition-all duration-300"
                style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Title */}
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#16161D]">
              {currentQ.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5E5A55] font-normal">
              {currentQ.subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="space-y-3">
            {currentQ.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(opt.styleWeight)}
                className="w-full p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-[#E4DCCF] hover:border-[#6D4AFF] hover:bg-white hover:shadow-sm text-left transition-all duration-200 group flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full border border-[#E4DCCF] group-hover:border-[#6D4AFF] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-[#5E5A55] group-hover:text-[#6D4AFF]">
                  {String.fromCharCode(65 + idx)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#16161D] group-hover:text-[#6D4AFF] transition-colors">
                    {opt.label}
                  </p>
                  <p className="text-xs text-[#5E5A55] font-normal mt-1 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Quiz Result Card */
        <div className="max-w-2xl mx-auto space-y-6 text-center animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
            <span>Your AI Aesthetic Match</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-bold text-[#16161D] tracking-tight">
            {STYLE_PROFILES[result].name}
          </h3>

          <p className="text-sm text-[#5E5A55] font-normal max-w-lg mx-auto">
            {STYLE_PROFILES[result].tagline}
          </p>

          <p className="text-xs text-[#8E6835] font-medium italic max-w-md mx-auto">
            &ldquo;{STYLE_PROFILES[result].quote}&rdquo;
          </p>

          {/* Material Specs */}
          <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E4DCCF] text-left space-y-4">
            <h4 className="text-xs font-bold text-[#16161D] uppercase tracking-wider">
              Recommended Architectural Specification:
            </h4>
            <div className="flex flex-wrap gap-2">
              {STYLE_PROFILES[result].materials.map((m, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-[#E4DCCF] text-xs font-medium text-[#16161D] shadow-xs"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Color Palette Chips */}
            <div className="pt-2">
              <span className="text-[11px] text-[#5E5A55] font-semibold block mb-2">
                Harmonized Pune Color Palette:
              </span>
              <div className="flex items-center gap-3">
                {STYLE_PROFILES[result].palette.map((color, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="w-10 h-10 rounded-xl border border-[#E4DCCF] shadow-xs"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[9px] font-mono text-[#5E5A55] font-medium">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <a
              href="#estimator"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full btn-primary-gradient text-xs font-bold tracking-wide flex items-center justify-center gap-2"
            >
              <span>Estimate Budget with this Style</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full btn-secondary-light text-xs font-semibold flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#8E6835]" />
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
