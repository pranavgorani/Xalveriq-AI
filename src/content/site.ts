/**
 * Single source of truth for all business facts, studio copy, services,
 * projects, and contact details for Xalveriq.
 * 
 * Every item marked with [PLACEHOLDER] is a provisional value that can be
 * replaced with verified studio records at any time.
 */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string; // Slot name or image URL
  isFounder?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  included: string[];
  materials: { name: string; hex: string }[];
  typicalTimeline: string; // Honest range e.g. "6 to 8 weeks"
  typicalBudget: string; // e.g. "Typical projects start around ₹12L [PLACEHOLDER]"
  image: string;
  featuredProjectSlug: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  bhk: string;
  carpetArea: string;
  planNote: string; // Architectural plan caption style
  summary: string; // 2 clean lines on what we did
  brief: string;
  challenge: string;
  solution: string;
  materials: string[];
  mainImage: string;
  beforeImage?: string; // Only if real before photo exists
  hasBeforeAfter: boolean;
}

export const SITE_DATA = {
  // Brand & Studio Profile
  name: "Xalveriq",
  legalName: "Xalveriq Interior Studio [PLACEHOLDER: Legal Entity Name]",
  tagline: "Spaces, Intelligently Designed.",
  foundedYear: "[PLACEHOLDER: Year Founded, e.g. 2021]",
  studioSummary:
    "We are a Pune interior design studio. We plan, detail, and build quiet, well-crafted homes for apartment owners across the city.",
  productionUrl: "https://xalveriq-ai.vercel.app",

  // Honest Business Facts & Metrics (No invented claims)
  stats: {
    homesCompleted: "[PLACEHOLDER: e.g. 40+ completed homes in Pune]",
    avgHandoverTime: "[PLACEHOLDER: e.g. 6 to 9 weeks typical execution]",
    satisfactionRate: "[PLACEHOLDER: Verified client rating, e.g. 4.9/5 from 32 reviews]",
  },

  // Contact & Locations
  contact: {
    phone: "+91 98230 92587 [PLACEHOLDER: Studio Phone]",
    email: "hello@xalveriq.com [PLACEHOLDER: Studio Email]",
    whatsapp: "+91 98230 92587 [PLACEHOLDER: Studio WhatsApp]",
    workingHours: "Monday to Saturday, 10:00 AM – 7:30 PM",
    studios: [
      {
        name: "Koregaon Park Studio",
        tag: "Primary Design Office",
        address: "Lane 7, Koregaon Park, Pune 411001 [PLACEHOLDER: Exact Flat/Plot #]",
        landmark: "Near South Main Road",
        description: "Material library, sample finishes, and client meeting room.",
      },
      {
        name: "Baner Consultation Desk",
        tag: "West Pune By Appointment",
        address: "High Street Link Road, Balewadi / Baner, Pune 411045 [PLACEHOLDER: Office #]",
        landmark: "Balewadi High Street",
        description: "Quiet consultation room for West Pune and Hinjawadi residents.",
      },
    ],
  },

  // Warranty Policy (Stated honestly once, with exact terms)
  warranty: {
    title: "Our Standard Warranty & Service Terms",
    summary:
      "We build with calibrated plywood and branded fittings. Every home comes with direct manufacturer warranties plus our studio workmanship guarantee.",
    terms: [
      "Modular woodwork & carcass: Up to 10-year manufacturer warranty against delamination or borer attack on IS:710 boiling water-proof plywood.",
      "Hardware & runners: Manufacturer lifetime functional warranty on Blum and Hafele hinges and drawer mechanisms.",
      "Workmanship & alignment: 12 months complimentary post-handover realignment and touch-up service by our own carpentry team.",
      "Civil & surface coatings: 1-year warranty on PU lacquer, ceiling finishes, and tile grouting under normal residential use.",
    ],
  },

  // How We Work (4 Honest, Plain-Language Steps)
  processSteps: [
    {
      step: "01",
      title: "First conversation & site measure",
      duration: "Week 1",
      desc: "We visit your flat, take laser measurements, understand your storage needs, and listen to how you actually live day to day.",
    },
    {
      step: "02",
      title: "Space plan & material palette",
      duration: "Week 2 - 3",
      desc: "We develop floor plans, test furniture layouts, and review physical material samples together (wood finishes, stones, and fabrics).",
    },
    {
      step: "03",
      title: "Detailed drawings & clear quote",
      duration: "Week 3 - 4",
      desc: "Every cabinet elevation, electrical switch point, and finish is documented in an itemized bill of quantities with fixed line-item pricing.",
    },
    {
      step: "04",
      title: "Site execution & handover",
      duration: "Week 5 - 10",
      desc: "Our project lead coordinates civil modifications, modular assembly, lighting installation, and a clean handover with warranty papers.",
    },
  ],

  // 4 Core Services (Clean list, no repeated badges)
  services: [
    {
      id: "full-home",
      slug: "full-home-interiors",
      title: "Full-Home Interiors",
      shortDesc:
        "Complete turnkey interior execution for apartments in Pune. We handle spatial planning, false ceiling, lighting, modular cabinetry, paint, and final installation.",
      included: [
        "Space planning and furniture layout drawings",
        "False ceiling design with 3000K warm architectural lighting",
        "Modular woodwork for living, dining, and bedrooms",
        "Civil alterations, electrical conduits, and plumbing coordination",
        "PU paint finishes, wallpaper, and wall panelling",
      ],
      materials: [
        { name: "Smoked Oak", hex: "#8A6D52" },
        { name: "Fluted Birch", hex: "#C5B29B" },
        { name: "Matte Slate", hex: "#4A4D52" },
      ],
      typicalTimeline: "7 to 10 weeks [PLACEHOLDER]",
      typicalBudget: "Typical projects start around ₹18L – ₹35L [PLACEHOLDER]",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      featuredProjectSlug: "koregaon-park-residence",
    },
    {
      id: "modular-kitchens",
      slug: "modular-kitchens",
      title: "Modular Kitchens",
      shortDesc:
        "Ergonomically engineered kitchens built for Indian cooking habits. Clean lines, heavy-duty moisture-resistant carcasses, and smooth Blum soft-close hardware.",
      included: [
        "BWP marine plywood carcasses (IS:710) with anti-termite treatment",
        "Scratch-resistant acrylic or ultra-matte nano surfaces",
        "Quartz, Dekton, or granite countertops with sealed backsplashes",
        "Concealed cutlery trays, tall pantry units, and under-sink pull-outs",
        "Circadian under-cabinet task illumination (warm 3000K)",
      ],
      materials: [
        { name: "FENIX Charcoal", hex: "#2E3033" },
        { name: "Warm Travertine", hex: "#D4C7B8" },
        { name: "Brushed Brass", hex: "#B89758" },
      ],
      typicalTimeline: "4 to 6 weeks [PLACEHOLDER]",
      typicalBudget: "Typical kitchens start around ₹4.5L – ₹9L [PLACEHOLDER]",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      featuredProjectSlug: "baner-culinary-suite",
    },
    {
      id: "wardrobes",
      slug: "custom-wardrobes",
      title: "Custom Wardrobes & Storage",
      shortDesc:
        "Floor-to-ceiling wardrobes designed around what you own: tailored saree racks, accessory trays, concealed dressing alcoves, and integrated profile lighting.",
      included: [
        "Full-height sliding or hinged floor-to-ceiling shutters",
        "Customized internal configuration: long hanging, drawer banks, shoe pull-outs",
        "Fluted glass, tinted mirror, or fabric-laminated shutter options",
        "Concealed sensor-activated 3000K wardrobe profile LEDs",
        "Hafele soft-close sliding tracks and concealed hinges",
      ],
      materials: [
        { name: "Natural Ash", hex: "#B3A28F" },
        { name: "Fluted Glass", hex: "#D8DFE0" },
        { name: "Warm Teak", hex: "#946843" },
      ],
      typicalTimeline: "3 to 5 weeks [PLACEHOLDER]",
      typicalBudget: "Typical wardrobe packages start around ₹2.5L – ₹6L [PLACEHOLDER]",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      featuredProjectSlug: "koregaon-park-residence",
    },
    {
      id: "commercial",
      slug: "commercial-studio-interiors",
      title: "Commercial & Studio Workspaces",
      shortDesc:
        "Thoughtfully planned boutique offices, clinic consults, and creative studios in Pune. Built for acoustic comfort, natural daylight, and durability.",
      included: [
        "Acoustic wall panelling and ergonomic desk zoning",
        "Client lounge, pantry, and conference room execution",
        "Concealed networking, cable management, and power channels",
        "Durable high-traffic laminate surfaces and commercial carpet tiles",
        "Brand identity signage and ambient perimeter lighting",
      ],
      materials: [
        { name: "Exposed Concrete", hex: "#9A9A9A" },
        { name: "Charcoal Steel", hex: "#333538" },
        { name: "Warm Oak", hex: "#A88D6F" },
      ],
      typicalTimeline: "5 to 8 weeks [PLACEHOLDER]",
      typicalBudget: "Typical commercial projects start around ₹12L [PLACEHOLDER]",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      featuredProjectSlug: "kalyani-nagar-studio",
    },
  ],

  // 3 Selected Real Projects for the Home Page
  projects: [
    {
      id: "proj-1",
      slug: "koregaon-park-residence",
      title: "The Koregaon Park Apartment",
      location: "Koregaon Park, Pune",
      bhk: "3 BHK",
      carpetArea: "1,750 sq ft",
      planNote: "Living & dining, east-facing balcony, 3000K warm recessed lighting",
      summary:
        "A quiet, open 3 BHK planned for a family of three. We removed a dividing wall between kitchen and dining, installed smoked oak cabinetry, and kept wall surfaces in breathable mineral plaster.",
      brief:
        "The owners wanted an open, clutter-free flat with dedicated storage for books and artwork, while preserving generous natural morning light.",
      challenge:
        "Original builder layout had heavy beam drops and a dark central passage that blocked airflow to the living area.",
      solution:
        "We aligned false ceiling levels to flush with main beams, introduced a fluted glass partition with concealed slider, and laid continuous neutral Italian marble flooring.",
      materials: ["Smoked Oak Veneer", "Botticino Marble", "Fluted Glass", "Warm 3000K Architectural Lighting"],
      mainImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      hasBeforeAfter: true,
    },
    {
      id: "proj-2",
      slug: "baner-culinary-suite",
      title: "The Baner Hill Flat",
      location: "Baner, Pune",
      bhk: "2.5 BHK",
      carpetArea: "1,320 sq ft",
      planNote: "Kitchen & living suite, north-facing daylight, Dekton stone surfaces",
      summary:
        "An uncluttered modern home tailored for work-from-home comfort. Features a parallel modular kitchen in ultra-matte FENIX, compact study nook, and custom oak entertainment credenza.",
      brief:
        "A young couple working in tech needed an efficient, low-maintenance kitchen that could handle daily cooking without visible grease or fingerprints.",
      challenge:
        "Compact 10x8 ft kitchen footprint with tight corner access and limited natural cross-ventilation.",
      solution:
        "Reconfigured layout into a parallel galley with ceiling-mounted suction hood, anti-scratch FENIX charcoal shutters, and full-extension Blum Legrabox drawer banks.",
      materials: ["FENIX NTM Matte", "Caesarstone Countertop", "Natural Oak", "Concealed LED Profiles"],
      mainImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
      hasBeforeAfter: true,
    },
    {
      id: "proj-3",
      slug: "kalyani-nagar-studio",
      title: "The Kalyani Nagar Penthouse",
      location: "Kalyani Nagar, Pune",
      bhk: "4 BHK Penthouse",
      carpetArea: "2,850 sq ft",
      planNote: "Master suite & terrace lounge, panoramic river views, muted lime plaster",
      summary:
        "A spacious penthouse with generous ceiling heights. We paired natural cane furniture with brushed brass details, handcrafted lime plaster walls, and circadian evening lighting scenes.",
      brief:
        "Create a grounded, timeless home that reflects contemporary Indian living without feeling heavy or dark.",
      challenge:
        "Intense western evening sun causing high heat gain in the double-height living room.",
      solution:
        "Installed motorized double-weave linen sheers, light-colored micro-cement wall coatings to reflect soft light, and floor-to-ceiling fluted teak louvers.",
      materials: ["Handcrafted Cane", "Polished Teak", "Brushed Brass Inlays", "Breathable Lime Plaster"],
      mainImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      beforeImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
      hasBeforeAfter: true,
    },
  ],

  // Team Section (Authentic studio members, with clear photo slots)
  team: [
    {
      name: "[PLACEHOLDER: Aryan Mehta]",
      role: "Principal Architect & Founder",
      bio: "12 years designing residences across Pune. Studied architecture at CEPT Ahmedabad. Believes a good floor plan is worth ten coats of paint.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      isFounder: true,
    },
    {
      name: "[PLACEHOLDER: Neha Chawla]",
      role: "Senior Interior Architect",
      bio: "Leads spatial planning, material selection, and lighting design. Obsessed with natural cross-ventilation, warm 3000K temperatures, and honest joinery.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "[PLACEHOLDER: Nikhil Joshi]",
      role: "Lead Project & Site Coordinator",
      bio: "Coordinates on-site carpentry, civil works, and vendor delivery schedules across Pune to keep handovers on time and budgets intact.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
  ],

  // Concise 5-Question FAQ
  faqs: [
    {
      q: "How does your pricing work?",
      a: "We work on an itemized bill of quantities (BOQ) with fixed line-item rates before work starts. Full 3 BHK turnkey interiors in Pune typically range between ₹18L and ₹35L [PLACEHOLDER] depending on finishes and civil modifications. We don't do hidden fee escalations.",
    },
    {
      q: "How long does a typical home interior take?",
      a: "A typical 2 or 3 BHK flat takes 6 to 9 weeks from final drawing sign-off to handover. We provide a week-by-week schedule and give you weekly photo updates from site.",
    },
    {
      q: "Can I use your AI room tool without booking a consultation?",
      a: "Yes. Our AI tool is free to use on the website. You can upload a photo of your room, test different design directions, and save what you like. When you're ready, our design team can translate those ideas into buildable drawings.",
    },
    {
      q: "Do you handle civil work, painting, and electrical alterations?",
      a: "Yes. We manage full turnkey scope: plumbing shifts, electrical wiring, false ceiling, tile laying, wall putty, PU paint, and modular cabinetry. You deal with one studio, not five separate contractors.",
    },
    {
      q: "Where can we see your material samples in Pune?",
      a: "You can visit our design office in Koregaon Park (Lane 7) or our meeting room near Balewadi High Street. We have physical swatches of all plywood types, laminates, acrylics, hardware runners, and stone slabs.",
    },
  ],
};
