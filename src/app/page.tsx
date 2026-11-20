import { Hero } from "@/components/home/Hero";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HowWeWork } from "@/components/home/HowWeWork";
import { AiRoomTeaser } from "@/components/home/AiRoomTeaser";
import { FaqSection } from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero: headline, sentence, Book consultation button, Try AI link */}
      <Hero />

      {/* 2. Selected projects: 3 real projects with location, size, and what we did */}
      <SelectedProjects />

      {/* 3. What we do: 4 services in a simple list with material swatches */}
      <WhatWeDo />

      {/* 4. How we work: 4 plain language stages */}
      <HowWeWork />

      {/* 5. AI room designer: compact preview and single button */}
      <AiRoomTeaser />

      {/* 6. Short FAQ: 5 honest questions */}
      <FaqSection />
    </div>
  );
}
