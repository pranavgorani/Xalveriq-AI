import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { SITE_DATA } from "@/content/site";

export const metadata = {
  title: "Contact the Studio | Xalveriq Pune",
  description:
    "Schedule a consultation with our interior design team in Pune. Visit our studios in Koregaon Park and Baner, or reach us on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="plan-note">Get in Touch</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-ink">
            Start a conversation.
          </h1>
          <p className="text-base text-text-muted leading-relaxed">
            Whether you just got possession of a bare flat or want to redesign your kitchen, we would love to review your floor plan.
          </p>
        </div>

        {/* Form and Studio Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form: 7 cols */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Studio Locations & Map Details: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            {/* Studio Addresses Card */}
            <div className="p-8 bg-white border border-border rounded-[4px] space-y-6">
              <span className="plan-note block">Visiting Our Pune Offices</span>

              <div className="space-y-5 text-xs">
                {SITE_DATA.contact.studios.map((studio, i) => (
                  <div key={i} className="p-4 bg-paper border border-border rounded-[2px] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-ink">{studio.name}</span>
                      <span className="text-[10px] text-terracotta font-mono">{studio.tag}</span>
                    </div>
                    <p className="text-text-muted leading-relaxed">{studio.address}</p>
                    <p className="text-[11px] text-text-muted italic">{studio.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border/60 space-y-2 text-xs text-text-muted">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-ink shrink-0" />
                  <span>{SITE_DATA.contact.workingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-ink shrink-0" />
                  <a href={`tel:${SITE_DATA.contact.phone.split(" ")[0]}`} className="text-ink hover:text-terracotta">
                    {SITE_DATA.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Stylized Architectural Map Card */}
            <div className="p-6 bg-paper-alt border border-border rounded-[4px] space-y-4 text-xs">
              <span className="plan-note block">Pune Operational Coverage</span>
              <p className="text-text-muted leading-relaxed">
                We handle turnkey interior projects across East & West Pune: Koregaon Park, Kalyani Nagar, Viman Nagar, Kharadi, Magarpatta, Baner, Balewadi, Aundh, Kothrud, and Bavdhan.
              </p>
              <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                <span className="font-medium text-ink">Have a flat in Pune?</span>
                <a
                  href={`https://wa.me/919823092587`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-terracotta font-medium"
                >
                  Send layout on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
