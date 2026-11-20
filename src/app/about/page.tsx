import Image from "next/image";
import Link from "next/link";
import { Sparkles, Award, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Xalveriq | Luxury AI Interior Architecture Firm in Pune",
  description:
    "Meet Xalveriq: Pune's forward-thinking interior architecture studio founded by architects and AI engineers. Our story, philosophy, team, and 45-day handover commitment.",
};

const TEAM = [
  {
    name: "Ar. Aryan Mehta",
    role: "Co-Founder & Principal Architect",
    creds: "B.Arch (CEPT Ahmedabad), ex-Foster+Partners",
    bio: "Over 14 years shaping high-end residences across Pune and Mumbai. Aryan leads design direction, cantilever structural concepts, and material curation.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tanya Sen",
    role: "Co-Founder & Head of AI Spatial Systems",
    creds: "M.Tech Computational Design (IIT Bombay)",
    bio: "Pioneered Xalveriq's neural daylight simulation and automated BOQ pricing algorithms, bridging computational precision with bespoke luxury.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Nikhil Joshi",
    role: "Director of Precision Manufacturing",
    creds: "Mechanical Engineering (COEP Pune)",
    bio: "Manages our 24,000 sq.ft German-automated joinery facility in Chakan, ensuring zero tolerance errors, PUR edge banding, and strict 45-day timelines.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Neha Chawla",
    role: "Principal Lighting & Vastu Consultant",
    creds: "M.Des Interior Architecture (NID)",
    bio: "Specializes in 'Invisible Vastu' and circadian illumination, ensuring spaces promote deep physical restoration and harmonious energy flow.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
];

const CERTIFICATIONS = [
  { title: "Blum Certified Partner (Austria)", desc: "Lifetime warranty on all motorized and mechanical drawer fittings" },
  { title: "Hafele Platinum Design Studio (Germany)", desc: "Direct factory-sourced architectural hardware and acoustic seals" },
  { title: "ISO 9001:2015 Precision Joinery", desc: "Standardized quality manufacturing process with sub-millimeter calibration" },
  { title: "IGBC Green Interior Compliant", desc: "Low-VOC paints, sustainable engineered woods, and energy-efficient LED scenes" },
];

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
            <span>The Xalveriq Chronicle</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#16161D] tracking-tight">
            Architecting the <br />
            <span className="text-ai-gradient">Weightless Future.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5E5A55] font-normal leading-relaxed">
            Founded in Pune to challenge the chaotic, delayed, and opaque world of traditional interior contracting through generative intelligence and aerospace-grade factory joinery.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#16161D] leading-tight">
              Why We Built <span className="text-gold-gradient">Xalveriq.</span>
            </h2>
            <p className="text-sm text-[#5E5A55] leading-relaxed font-normal">
              For years, Pune homeowners buying landmark flats in Koregaon Park, Baner, and Kharadi faced the same frustrating ordeal: unkept contractor promises, 6-month delays, dust-filled construction sites, and surprise budget escalations.
            </p>
            <p className="text-sm text-[#5E5A55] leading-relaxed font-normal">
              We asked: <em>What if interior architecture operated with the precision of high-end aerospace engineering?</em> What if AI could generate photorealistic 3D concepts instantly, and a German automated manufacturing line could fabricate every module to sub-millimeter tolerances while civil works happened in parallel?
            </p>
            <p className="text-sm text-[#5E5A55] leading-relaxed font-normal">
              That insight became <strong>Xalveriq</strong>. Today, we have handed over 450+ bespoke luxury residences across Pune, backed by our ironclad 45-day delivery guarantee.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E4DCCF] shadow-xs">
                <span className="text-3xl font-bold text-[#16161D] font-display">450+</span>
                <span className="text-xs text-[#5E5A55] font-medium block mt-1">Pune Homes Delivered</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E4DCCF] shadow-xs">
                <span className="text-3xl font-bold text-[#8E6835] font-display">45 Days</span>
                <span className="text-xs text-[#5E5A55] font-medium block mt-1">Guaranteed Handover</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#E4DCCF] shadow-[0_16px_50px_rgba(22,22,29,0.08)] bg-[#F1EBE1]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Xalveriq Architectural Studio Pune"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-mono uppercase tracking-widest text-[#8E6835] font-bold">
                  Koregaon Park Flagship
                </p>
                <h3 className="text-lg font-bold text-[#16161D]">
                  Where Spatial AI Meets Haute Craftsmanship
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#6D4AFF] font-bold">
              The Minds Behind the Space
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#16161D]">
              Principal Architects & Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={i}
                className="group rounded-3xl bg-white/95 border border-[#E4DCCF] hover:border-[#B08A57] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-[0_10px_35px_rgba(22,22,29,0.06)]"
              >
                <div>
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-[#F1EBE1] border border-[#E4DCCF]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#16161D]">{member.name}</h3>
                  <p className="text-xs text-[#8E6835] font-bold">{member.role}</p>
                  <p className="text-[10px] text-[#5E5A55] font-mono mt-0.5">{member.creds}</p>
                  <p className="text-xs text-[#5E5A55] font-normal mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Quality Commitments */}
        <div className="rounded-3xl bg-[#F1EBE1] border border-[#E4DCCF] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>International Accreditation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#16161D]">
              Certified Hardware & Environmental Standards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-[#E4DCCF] space-y-2 shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] flex items-center justify-center text-[#14A8D6]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#16161D]">{cert.title}</h4>
                <p className="text-xs text-[#5E5A55] font-normal leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Studio CTA */}
        <div className="text-center space-y-6 pt-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#16161D]">
            Experience Antigravity in Person
          </h3>
          <p className="text-xs sm:text-sm text-[#5E5A55] max-w-lg mx-auto font-normal">
            Touch our sample materials, test motorized Blum lift-ups, and view your home in virtual reality over freshly brewed single-origin coffee.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full btn-primary-gradient text-white font-bold text-xs tracking-wider uppercase shadow-md"
          >
            <span>Book Studio Visit in Koregaon Park</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
