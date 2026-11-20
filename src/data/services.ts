// REPLACE WITH REAL XALVERIQ PROJECT PHOTO
export interface Service {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  startingPrice: string;
  warranty: string;
  timeline: string;
  iconName: string;
  heroImage: string;
  keyHighlights: string[];
  materialsIncluded: string[];
  deliverables: string[];
}

export const SERVICES: Service[] = [
  {
    id: "turnkey-interiors",
    slug: "turnkey-interiors",
    title: "Turnkey Luxury Interiors",
    tagline: "From bare-shell possession to champagne handover in 45 days.",
    shortDesc: "Comprehensive end-to-end design and execution for luxury apartments and villas across Pune. Zero hassle, single point of contact.",
    fullDesc: "Our flagship full-home turnkey service transforms raw concrete builder apartments into bespoke, move-in-ready architectural masterpieces. We handle structural spatial planning, civil modifications, MEP engineering, bespoke carpentry, acoustic ceilings, lighting design, Italian marble flooring, and smart home automation.",
    startingPrice: "₹18 Lakhs onwards",
    warranty: "10-Year Flat Warranty",
    timeline: "40-50 Days Handover Guarantee",
    iconName: "Home",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    keyHighlights: [
      "45-Day Strict Delivery Guarantee with per-day penalty protection",
      "Dedicated Project Architect & On-site QC Supervisor in Pune",
      "Factory-manufactured precision joinery with German PUR edge-banding",
      "Daily live video updates via client dashboard",
    ],
    materialsIncluded: [
      "BWP Grade 710 Marine Plywood (IS 710 certified)",
      "FENIX NTM & Merino Ultra-matte finishes",
      "Blum & Hafele lifetime warranty hardware",
      "Asian Paints Royale Aspira / PU Luxury Enamel",
    ],
    deliverables: [
      "Full 3D AI photorealistic walkthrough and VR simulation",
      "Detailed CAD working drawings & MEP schematics",
      "Complete civil, ceiling, electrical, and plumbing execution",
      "Deep sanitization and white-glove handover ceremony",
    ],
  },
  {
    id: "modular-kitchens",
    slug: "modular-kitchens",
    title: "Aerospace-Grade Modular Kitchens",
    tagline: "German ergonomics engineered for Indian gourmet cooking.",
    shortDesc: "Heat-proof, moisture-proof, and termite-proof modular kitchens featuring motorized Blum lift-ups, Dekton stone, and hidden spice sculleries.",
    fullDesc: "Designed to endure rigorous Indian cooking while looking like a sleek European design gallery. Featuring anti-fingerprint nano-tech surfaces, high-load pantry pullouts, concealed oil-resistant chimneys, and smart sensor task lighting.",
    startingPrice: "₹4.5 Lakhs onwards",
    warranty: "10-Year Kitchen Warranty",
    timeline: "25-30 Days Handover",
    iconName: "CookingPot",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
    keyHighlights: [
      "Boiling Water Resistant (BWR) marine carcass with waterproof base seal",
      "Blum Servo-Drive motorized electrical touch-to-open drawers",
      "Custom Indian spice pullovers, tandem boxes & corner carousel units",
      "Seamless quartz & Dekton waterfall countertops with under-mount sinks",
    ],
    materialsIncluded: [
      "Calibrated Marine Ply Carcass (18mm)",
      "Anti-scratch Acrylic & FENIX NTM Shutters",
      "Blum Legrabox & Tandembox pullouts (70kg capacity)",
      "Kaelo wine cooler & integrated drawer organizers",
    ],
    deliverables: [
      "Ergonomic workflow triangle optimization layout",
      "Plumbing and gas line safety schematic",
      "Factory pre-assembled modular carcasses",
      "Installation by certified master craftsmen",
    ],
  },
  {
    id: "luxury-wardrobes",
    slug: "luxury-wardrobes",
    title: "Weightless Wardrobes & Walk-ins",
    tagline: "Floor-to-ceiling glass, Italian leather, and automated illumination.",
    shortDesc: "Bespoke sliding, hinged, and walk-in dressing suites designed with concealed aluminum profiles, tinted fluted glass, and velvet accessories.",
    fullDesc: "A couture walk-in wardrobe is an architectural celebration of your personal style. We create floor-to-ceiling glass wardrobe systems with integrated soft-diffused LED channels, humidity-controlled jewelry displays, automated tie-racks, and floating islands.",
    startingPrice: "₹3 Lakhs onwards",
    warranty: "10-Year Mechanism Guarantee",
    timeline: "20-25 Days Handover",
    iconName: "Shirt",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    heroImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=80",
    keyHighlights: [
      "Air-glide soft-close sliding systems rated for 100,000 cycles",
      "Built-in electronic digital safes and watch winders",
      "Concealed PIR motion sensors that illuminate upon door opening",
      "Anti-termite treated Belgian linen interior lining",
    ],
    materialsIncluded: [
      "Anodized Champagne Gold & Matte Black Aluminum profiles",
      "Saint-Gobain Fluted, Frosted, and Tinted Bronze Glass",
      "Italian vegan leather pullout trays",
      "Hafele wardrobe accessories & pull-down hangers",
    ],
    deliverables: [
      "Custom wardrobe elevation & compartment ratio plan",
      "Hardware sample kit delivered to your doorstep",
      "Dust-proof magnetic perimeter seals",
    ],
  },
  {
    id: "living-sanctuaries",
    slug: "living-sanctuaries",
    title: "Living Room & Media Lounges",
    tagline: "Antigravity cantilevered TV consoles and acoustic luxury.",
    shortDesc: "Dramatic focal walls with backlit onyx, fluted wooden louvers, invisible Dolby Atmos sound integrations, and floating designer daybeds.",
    fullDesc: "The centerpiece of your home. We engineer living spaces that inspire awe while fostering deep tranquility. From floating marble consoles and concealed home theatre acoustic dampening to motorized floor-to-ceiling sheer curtains and warm ambient layered lighting.",
    startingPrice: "₹5 Lakhs onwards",
    warranty: "10-Year Structural Guarantee",
    timeline: "25-30 Days Handover",
    iconName: "Tv",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    keyHighlights: [
      "Structural steel cantilever anchors supporting weightless 85\" TV setups",
      "Hidden wiring conduits with zero visible cables",
      "Acoustic slatted wood panels with NRC sound absorption rating",
      "Multi-scene smart lighting presets (Cinema, Evening Lounge, Party, Read)",
    ],
    materialsIncluded: [
      "Imported Italian Travertine & Onyx stone slabs",
      "Smoked Walnut & Natural Teak wood louvers",
      "Magnetic track lighting systems (24V safe low-voltage)",
      "PU Italian matte lacquer finishes",
    ],
    deliverables: [
      "Lighting lux calculation & acoustic mapping",
      "Custom media wall architectural blueprint",
      "Sofa and loose furniture curation and styling",
    ],
  },
  {
    id: "master-suites",
    slug: "master-suites",
    title: "Master Bedroom Sanctuaries",
    tagline: "Circadian wellness and tranquil private retreats.",
    shortDesc: "Bespoke upholstered floating beds, sound-insulated bed heads, integrated dressing vanities, and cozy window reading alcoves.",
    fullDesc: "Designed as your private sanctuary away from the bustle of Pune. We prioritize circadian lighting that dims gradually with sunset, acoustic insulation for deep REM sleep, luxurious headboard paneling, and discreet master study nooks.",
    startingPrice: "₹4 Lakhs onwards",
    warranty: "10-Year Guarantee",
    timeline: "25-30 Days Handover",
    iconName: "BedDouble",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80",
    keyHighlights: [
      "Floating bed frames with under-glow ambient night lighting",
      "Acoustic fabric headboards with integrated brass wireless chargers",
      "Custom bay window seating with concealed drawer storage",
      "Integrated ensuite vanity with anti-fog smart LED mirrors",
    ],
    materialsIncluded: [
      "High-density commercial foam with Kvadrat / D'Decor fabrics",
      "Champagne gold metal inlays & veneer wall paneling",
      "Daikin / Mitsubishi concealed VRV AC integration",
    ],
    deliverables: [
      "Spatial furniture layout & ergonomic clearance plans",
      "Bedding, curtain, and rug textile curation",
      "Comprehensive electrical and bedside automation setup",
    ],
  },
  {
    id: "commercial-studios",
    slug: "commercial-studios",
    title: "Executive Commercial & Studios",
    tagline: "High-performance workspaces designed for ambitious teams.",
    shortDesc: "Futuristic corporate offices, boutique clinic suites, and executive headquarters across Pune’s business corridors.",
    fullDesc: "We craft commercial interiors that strengthen employer branding, foster agile collaboration, and leave an unforgettable impression on visiting clients and investors. Specializing in tech headquarters, medical suites, and design studios across Baner, Kharadi, and Viman Nagar.",
    startingPrice: "₹15 Lakhs onwards",
    warranty: "7-Year Commercial Warranty",
    timeline: "30-45 Days Handover",
    iconName: "Building2",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    heroImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    keyHighlights: [
      "Fast-track modular execution to minimize commercial rent downtime",
      "LEED compliant biophilic and energy-efficient lighting designs",
      "Modular breakout booths and acoustic conference pods",
      "Turnkey IT networking, access control, and fire compliance",
    ],
    materialsIncluded: [
      "Heavy commercial carpet tiles & polished concrete",
      "Toughened double-glazed glass partitions with STC 42 rating",
      "Powder-coated steel structural framework",
    ],
    deliverables: [
      "Density space-planning and desk headcount optimization",
      "Local municipal and fire safety compliance documents",
      "Complete MEP and HVAC commissioning",
    ],
  },
];
