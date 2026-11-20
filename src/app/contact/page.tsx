import { Sparkles, Phone, MessageSquare, Clock, Building2 } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SlotPicker } from "@/components/contact/SlotPicker";

export const metadata = {
  title: "Contact Xalveriq | Book Interior Design Consultation in Pune",
  description:
    "Schedule a complimentary architectural consultation with Xalveriq in Pune. Visit our experience centers in Koregaon Park or Baner, or reserve an appointment online.",
};

export default function ContactPage() {
  return (
    <div className="relative pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4DCCF] text-[#8E6835] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B08A57]" />
            <span>Connect with Pune Principals</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-[#16161D] tracking-tight">
            Begin Your <span className="text-gold-gradient">Transformation.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#5E5A55] font-normal leading-relaxed">
            Ready to hand over your bare flat keys and step into a finished luxury home in 45 days? Share your floor plan or reserve an in-person design session.
          </p>
        </div>

        {/* Dual Booking Grid: Lead Form & Calendly Slot Picker */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Slot Picker & Studio Info */}
          <div className="lg:col-span-5 space-y-8">
            <SlotPicker />

            {/* Pune Experience Centers Info */}
            <div className="rounded-3xl bg-white/95 border border-[#E4DCCF] p-6 sm:p-8 space-y-6 backdrop-blur-xl shadow-[0_12px_40px_rgba(22,22,29,0.06)]">
              <h4 className="text-base font-bold text-[#16161D] flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#8E6835]" />
                <span>Visit Our Pune Experience Centers</span>
              </h4>

              <div className="space-y-4 text-xs">
                {/* Center 1: Koregaon Park */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E4DCCF] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#16161D]">1. Koregaon Park Flagship</span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white border border-[#E4DCCF] font-bold text-[#8E6835]">
                      Main Studio
                    </span>
                  </div>
                  <p className="text-[#5E5A55] leading-relaxed">
                    Plot 18, Lane 7, Koregaon Park (Near South Main Road), Pune, Maharashtra 411001
                  </p>
                  <p className="text-[#8E6835] font-mono text-[11px] font-medium">
                    Features: Full VR Room, Modular Kitchen Scullery, Marble Library
                  </p>
                </div>

                {/* Center 2: Baner */}
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E4DCCF] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#16161D]">2. Balewadi High Street Lab</span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white border border-[#E4DCCF] font-bold text-[#6D4AFF]">
                      West Pune
                    </span>
                  </div>
                  <p className="text-[#5E5A55] leading-relaxed">
                    Suite 402, High Street Hub, Balewadi / Baner Link Road, Pune 411045
                  </p>
                  <p className="text-[#6D4AFF] font-mono text-[11px] font-medium">
                    Features: Cantilever Structural Rig, Hardware Testing Bench
                  </p>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="pt-4 border-t border-[#E4DCCF] space-y-2.5 text-xs text-[#5E5A55]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#8E6835]" />
                  <a href="tel:+919823092587" className="hover:text-[#16161D] transition-colors font-semibold">
                    Direct Line: +91 98230 XALV (9258)
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <a
                    href="https://wa.me/919823092587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-800 transition-colors font-bold text-emerald-600"
                  >
                    WhatsApp Architect Support (Instant Response)
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#14A8D6]" />
                  <span>Visiting Hours: Monday - Sunday | 10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
