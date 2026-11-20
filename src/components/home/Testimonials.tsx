import Image from "next/image";
import { Star, Quote, Building } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Aditya & Sanjana Deshmukh",
      role: "VP Product (Fintech) & Neurosurgeon",
      location: "Panchshil Towers, Kharadi, Pune",
      quote: "Xalveriq's AI studio gave us the exact 3D render during our very first coffee. What astonished us was that the delivered penthouse was even more stunning than the AI preview, and handed over in exactly 44 days without a rupee of budget escalation.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Rohan & Meera Kulkarni",
      role: "SaaS Founders",
      location: "Castel Royale, Baner, Pune",
      quote: "The antigravity feeling is real. Every storage element is wall-hung with hidden structural cantilever brackets. Our living room feels double its size, and the acoustic panelling makes our Zoom calls crystal clear.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Vikram Singhania",
      role: "Hospitality Entrepreneur & Restaurateur",
      location: "One North, Koregaon Park, Pune",
      quote: "As someone who loves hosting gourmet dinners, the modular kitchen engineered by Xalveriq is a culinary work of art. The motorized Blum drawers, Dekton stone, and hidden scullery are flawless.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <section className="relative py-28 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider shadow-xs">
            <span>Pune Homeowner Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#16161D] tracking-tight">
            Voices of <span className="text-gold-gradient">Elegance.</span>
          </h2>
          <p className="text-sm text-[#5E5A55] font-normal">
            Real stories from homeowners in Pune’s most prestigious residential towers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-8 bg-white/90 border border-[#E4DCCF] hover:border-[#B08A57] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-[0_10px_35px_rgba(22,22,29,0.06)] hover:shadow-[0_16px_45px_rgba(109,74,255,0.1)]"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#B08A57] text-[#B08A57]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#6D4AFF]/30" />
                </div>

                <p className="text-sm text-[#16161D] leading-relaxed font-normal italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E4DCCF]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#B08A57]/50 shrink-0 shadow-xs">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#16161D]">{t.name}</h4>
                  <p className="text-[11px] text-[#8E6835] font-semibold">{t.role}</p>
                  <p className="text-[10px] text-[#5E5A55] flex items-center gap-1 mt-0.5">
                    <Building className="w-3 h-3 text-[#14A8D6]" />
                    <span>{t.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
