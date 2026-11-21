/**
 * Xalveriq — Spaces, Intelligently Designed.
 * Single source of truth for all business facts, studio copy, services,
 * projects, visual galleries, materials, and consultation details.
 * 
 * Location Focus: Nashik, Maharashtra, India (serving Nashik, Mumbai, Pune, Shirdi, Dhule).
 */

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  roomTag: string;
  image: string;
  alt: string;
}

export interface TrustCounter {
  value: string;
  label: string;
  desc: string;
}

export interface RoomCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface SignatureService {
  id: string;
  slug: string;
  serviceNumber: string;
  title: string;
  benefitStatement: string; // One-line benefit statement
  shortDesc: string;
  description: string;
  highlights: string[]; // 3-5 important service highlights
  features: string[]; // compatibility
  included: string[]; // compatibility
  materials: { name: string; hex: string }[];
  startingPrice: string; // Formatted in INR e.g. "₹14,50,000"
  startingPriceNote: string; // "Final pricing depends on property size, materials and selected scope."
  typicalBudget: string;
  estimateStarting: string;
  timeline: string; // Estimated completion time e.g. "45 Days"
  typicalTimeline: string;
  image: string;
  featuredProjectSlug: string;
}

export interface DesignPhilosophyItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface BeforeAfterPair {
  id: string;
  category: "Living Room" | "Kitchen" | "Bedroom" | "Renovation";
  roomTitle: string;
  scopeSummary: string;
  beforeLabel: string;
  beforeDesc: string;
  beforeImage: string;
  afterLabel: string;
  afterDesc: string;
  afterImage: string;
}

export interface MaterialShowcaseItem {
  id: string;
  name: string;
  origin: string;
  description: string;
  application: string;
  image: string;
  colorHex: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  statOrBadge: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Living Room" | "Kitchen" | "Bedroom" | "Bathroom" | "Renovation" | "Villa";
  location: string;
  image: string;
  aspect: "landscape" | "portrait" | "square";
  description: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: "2BHK" | "3BHK" | "Villa" | "Modular Kitchen" | "Master Bedroom" | "Living Room";
  location: string;
  bhk: string;
  carpetArea: string;
  styleTag: string;
  planNote: string;
  summary: string;
  brief: string;
  challenge: string;
  solution: string;
  image: string;
  mainImage: string;
  beforeImage?: string;
  hasBeforeAfter: boolean;
  materials: string[];
}

export interface ProcessStep {
  number: string;
  step?: string;
  title: string;
  subtitle: string;
  desc?: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
  quote: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  q: string;
  a: string;
}

export type ProjectItem = PortfolioProject;

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  isFounder?: boolean;
}

export interface AISpatialWorkflowStep {
  step: string;
  title: string;
  desc: string;
  details: string;
}

export interface StudioOffice {
  id: string;
  title: string;
  name?: string;
  type: string;
  tag?: string;
  address: string;
  landmark: string;
  appointmentLabel: string;
  hours: string;
  phone: string;
  whatsapp: string;
  description: string;
}

// 6 Signature Services with concise customer-focused structure
const signatureServicesList: SignatureService[] = [
  {
    id: "full-home",
    slug: "full-home-interiors",
    serviceNumber: "01",
    title: "Full-Home Interior Architecture",
    benefitStatement: "Turnkey luxury execution from bare builder handover to key handover in 45 days.",
    shortDesc: "Complete architectural space planning, false ceiling, modular woodwork, and custom furnishings.",
    description: "Complete architectural space planning, false ceiling, modular woodwork, and custom furnishings.",
    highlights: [
      "End-to-end space planning, circulation analysis & photorealistic 3D visuals.",
      "Architectural false ceiling with warm 3000K recessed lighting.",
      "Custom modular cabinetry for living, dining, kitchen, and all bedrooms.",
      "Electrical, civil conduit shifts, and plumbing synchronization.",
      "Dedicated studio project supervision with zero subcontractor coordination.",
    ],
    features: [
      "End-to-end space planning, circulation analysis & photorealistic 3D visuals.",
      "Architectural false ceiling with warm 3000K recessed lighting.",
      "Custom modular cabinetry for living, dining, kitchen, and all bedrooms.",
    ],
    included: [
      "Full space planning drawings",
      "False ceiling & lighting layouts",
      "Modular living, kitchen & bedroom joinery",
      "Wall panelling and premium emulsion finish",
      "Post-installation deep cleaning & 10-year warranty",
    ],
    materials: [
      { name: "Smoked Oak", hex: "#8A6D52" },
      { name: "Botticino Marble", hex: "#D4C7B8" },
      { name: "Champagne Bronze", hex: "#B89368" },
    ],
    startingPrice: "₹14,50,000",
    startingPriceNote: "Starting for 2 BHK | ₹22,00,000 for 3 BHK. Final pricing depends on property size, materials and selected scope.",
    typicalBudget: "Starting from ₹14,50,000",
    estimateStarting: "Starting from ₹14,50,000",
    timeline: "45 Days Handover Guarantee",
    typicalTimeline: "45 Days",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    featuredProjectSlug: "serene-meadows-penthouse",
  },
  {
    id: "modular-kitchens",
    slug: "modular-kitchens",
    serviceNumber: "02",
    title: "Modular Kitchens & Pantries",
    benefitStatement: "Precision German mechanics, waterproof carcasses, and scratch-resistant Italian surfaces.",
    shortDesc: "Engineered specifically for heavy Indian cooking habits with zero-maintenance materials.",
    description: "Engineered specifically for heavy Indian cooking habits with zero-maintenance materials.",
    highlights: [
      "100% Boiling Water-Proof (IS:710 Marine Plywood) carcass structure.",
      "Anti-fingerprint, ultra-matte nano surfaces with thermal scratch healing.",
      "Blum soft-close drawer banks with lifetime functional warranty.",
      "Seamless quartz or Dekton heatproof countertops and matching backsplashes.",
      "Concealed tandem pantries, corner pull-outs, and under-cabinet LED task coves.",
    ],
    features: [
      "100% Boiling Water-Proof (IS:710 Marine Plywood) carcass structure.",
      "Anti-fingerprint, ultra-matte nano surfaces with thermal scratch healing.",
      "Blum soft-close drawer banks with lifetime functional warranty.",
    ],
    included: [
      "BWP marine plywood carcasses",
      "Countertop quartz stone fabrication",
      "Blum hardware & cutlery organizers",
      "Appliance integration & exhaust ducting",
    ],
    materials: [
      { name: "FENIX Charcoal", hex: "#2E3033" },
      { name: "Calacatta Quartz", hex: "#E8E6E1" },
      { name: "Brushed Brass", hex: "#B89758" },
    ],
    startingPrice: "₹4,50,000",
    startingPriceNote: "Starting price for modular layouts. Final pricing depends on property size, materials and selected scope.",
    typicalBudget: "Starting from ₹4,50,000",
    estimateStarting: "Starting from ₹4,50,000",
    timeline: "21–28 Days",
    typicalTimeline: "21–28 Days",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    featuredProjectSlug: "govind-nagar-culinary-suite",
  },
  {
    id: "wardrobes-storage",
    slug: "custom-wardrobes",
    serviceNumber: "03",
    title: "Wardrobes & Custom Dressing",
    benefitStatement: "Floor-to-ceiling tailored storage designed around your exact wardrobe inventory.",
    shortDesc: "Bespoke internal configurations, fluted glass, sensor profile lights, and velvet organizer trays.",
    description: "Bespoke internal configurations, fluted glass, sensor profile lights, and velvet organizer trays.",
    highlights: [
      "Full-height floor-to-ceiling doors with anti-warp aluminum tensioners.",
      "Hafele soft-close sliding systems and 110-degree concealed clip-on hinges.",
      "Tailored saree trays, long-coat hanging, watch niches, and jewelry drawers.",
      "Integrated motion-sensor 3000K LED warm profile illumination.",
      "Tinted fluted glass, natural veneer, or fabric-laminated shutter options.",
    ],
    features: [
      "Full-height floor-to-ceiling doors with anti-warp aluminum tensioners.",
      "Hafele soft-close sliding systems and 110-degree concealed clip-on hinges.",
      "Tailored saree trays, long-coat hanging, watch niches, and jewelry drawers.",
    ],
    included: [
      "Custom internal division CAD",
      "Hardware and sliding track assemblies",
      "Concealed LED profile channels",
      "Integrated vanity / mirror alcove",
    ],
    materials: [
      { name: "Natural Ash", hex: "#B3A28F" },
      { name: "Tinted Fluted Glass", hex: "#7E8588" },
      { name: "Warm Walnut", hex: "#634731" },
    ],
    startingPrice: "₹2,80,000",
    startingPriceNote: "Starting per master wardrobe suite. Final pricing depends on property size, materials and selected scope.",
    typicalBudget: "Starting from ₹2,80,000",
    estimateStarting: "Starting from ₹2,80,000",
    timeline: "18–24 Days",
    typicalTimeline: "18–24 Days",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85",
    featuredProjectSlug: "college-road-executive-suite",
  },
  {
    id: "living-dining",
    slug: "living-dining-spaces",
    serviceNumber: "04",
    title: "Living & Dining Spaces",
    benefitStatement: "Architectural social cores crafted for memorable family gatherings and effortless entertaining.",
    shortDesc: "Sculptural media consoles, concealed wiring raceways, Italian marble dining, and layered lighting.",
    description: "Sculptural media consoles, concealed wiring raceways, Italian marble dining, and layered lighting.",
    highlights: [
      "Suspended fluted media credenzas with concealed AV raceways and zero visible wires.",
      "Handcrafted Italian marble or travertine dining tables with custom pedestals.",
      "Acoustic wall panelling paired with breathable lime and mineral plaster.",
      "Multi-circuit warm 3000K lighting scenes for daytime gathering and evening dining.",
      "Custom fluted glass crockery vitrines with integrated edge illumination.",
    ],
    features: [
      "Suspended fluted media credenzas with concealed AV raceways and zero visible wires.",
      "Handcrafted Italian marble or travertine dining tables with custom pedestals.",
      "Acoustic wall panelling paired with breathable lime and mineral plaster.",
    ],
    included: [
      "Main living false ceiling & coving",
      "Custom entertainment focal wall",
      "Bespoke dining table & crockery unit",
      "Acoustic panelling & wallpaper detailing",
    ],
    materials: [
      { name: "Travertine Stone", hex: "#C8B9A6" },
      { name: "Matte Bronze", hex: "#8A7356" },
      { name: "Textured Bouclé", hex: "#ECE6DC" },
    ],
    startingPrice: "₹6,50,000",
    startingPriceNote: "Starting for complete living & dining package. Final pricing depends on property size, materials and selected scope.",
    typicalBudget: "Starting from ₹6,50,000",
    estimateStarting: "Starting from ₹6,50,000",
    timeline: "Included in 45-day cycle",
    typicalTimeline: "30–45 Days",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=85",
    featuredProjectSlug: "indira-nagar-family-hall",
  },
  {
    id: "bedrooms-suites",
    slug: "master-bedrooms-suites",
    serviceNumber: "05",
    title: "Bedrooms & Master Suites",
    benefitStatement: "Acoustically insulated personal retreats designed around restful, circadian sleep cycles.",
    shortDesc: "Floor-to-ceiling padded headboards, dual reading controls, integrated vanities, and Belgian linen.",
    description: "Floor-to-ceiling padded headboards, dual reading controls, integrated vanities, and Belgian linen.",
    highlights: [
      "Acoustically softened wall paneling behind custom king bedframes.",
      "Independent dual bedside reading controls with two-way master off switches.",
      "Integrated study / vanity desk nook oriented for morning daylight.",
      "Floor-to-ceiling double-weave linen sheers for total glare and privacy control.",
      "Discreet bedside charging alcoves and hidden wire management channels.",
    ],
    features: [
      "Acoustically softened wall paneling behind custom king bedframes.",
      "Independent dual bedside reading controls with two-way master off switches.",
      "Integrated study / vanity desk nook oriented for morning daylight.",
    ],
    included: [
      "Custom king bedframe & padded headboard",
      "Twin bedside credenzas with reading sconces",
      "Vanity / study desk joinery",
      "Acoustic wallpaper & mood lighting",
    ],
    materials: [
      { name: "Natural Cane", hex: "#D6B88D" },
      { name: "Smoked Oak", hex: "#654C38" },
      { name: "Belgian Linen", hex: "#DED6C9" },
    ],
    startingPrice: "₹4,00,000",
    startingPriceNote: "Starting per master bedroom suite. Final pricing depends on property size, materials and selected scope.",
    typicalBudget: "Starting from ₹4,00,000",
    estimateStarting: "Starting from ₹4,00,000",
    timeline: "Included in 45-day cycle",
    typicalTimeline: "25–35 Days",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
    featuredProjectSlug: "college-road-executive-suite",
  },
  {
    id: "renovation-turnkey",
    slug: "renovation-turnkey-execution",
    serviceNumber: "06",
    title: "Renovation & Turnkey Execution",
    benefitStatement: "Transform your existing home into a modern luxury space with zero contractor chaos.",
    shortDesc: "Complete civil overhaul, structural modifications, luxury bathrooms, and waterproofing.",
    description: "Complete civil overhaul, structural modifications, luxury bathrooms, and waterproofing.",
    highlights: [
      "Complete civil renovation and structural modifications.",
      "Premium flooring, bathroom upgrades, and multi-layer chemical waterproofing.",
      "Plumbing and electrical replacement with concealed conduit rerouting.",
      "Custom furniture and architectural detailing under one studio contract.",
      "Dedicated project supervision and weekly video progress updates.",
    ],
    features: [
      "Complete civil renovation and structural modifications.",
      "Premium flooring, bathroom upgrades, and multi-layer chemical waterproofing.",
      "Plumbing and electrical replacement with concealed conduit rerouting.",
    ],
    included: [
      "Site structural audit & demolition coordination",
      "Bathroom waterproofing & Grohe plumbing",
      "Large-format porcelain & Italian marble laying",
      "Entire electrical rewiring & panel overhaul",
      "Complete modular cabinetry & painting",
    ],
    materials: [
      { name: "Microcement", hex: "#A8A59E" },
      { name: "Teak Wood", hex: "#8C5827" },
      { name: "Blackened Steel", hex: "#2B2D2F" },
    ],
    startingPrice: "₹18,00,000",
    startingPriceNote: "Starting for complete civil & turnkey renovation. Final pricing depends on property size, materials and selected scope.",
    typicalBudget: "Starting from ₹18,00,000",
    estimateStarting: "Starting from ₹18,00,000",
    timeline: "45–60 Days",
    typicalTimeline: "45–60 Days",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
    featuredProjectSlug: "serene-meadows-penthouse",
  },
];

// Design Philosophy
const designPhilosophyList: DesignPhilosophyItem[] = [
  {
    id: "phil-1",
    title: "Intelligent Space Planning",
    subtitle: "Circulation over decoration",
    description: "We analyze sunlight vectors, air cross-ventilation, and family circulation to unlock 20-30% more usable floor area from your builder layout.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    tag: "Spatial Rigor",
  },
  {
    id: "phil-2",
    title: "Premium Material Selection",
    subtitle: "Authentic, tactile finishes",
    description: "Every surface is selected for longevity: calibrated BWP marine plywood, Italian marble, anti-fingerprint nano laminates, and genuine brass accents.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
    tag: "Pure Craftsmanship",
  },
  {
    id: "phil-3",
    title: "Functional Luxury",
    subtitle: "Designed around how you live",
    description: "Luxury is not fragile. We engineer Indian-cooking-ready kitchens, scratch-resistant surfaces, and circadian lighting that reduces evening eye fatigue.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
    tag: "Ergonomics",
  },
  {
    id: "phil-4",
    title: "End-to-End Execution",
    subtitle: "Single-source studio accountability",
    description: "No dealing with five separate contractors. We manage civil modifications, modular fabrication, paint, electrical, and handover under a committed timeline.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    tag: "45-Day Protocol",
  },
];

// 4-Room Before & After Gallery Pairs
const beforeAfterPairsList: BeforeAfterPair[] = [
  {
    id: "ba-living",
    category: "Living Room",
    roomTitle: "Living Room & Balcony Integration",
    scopeSummary: "Concealed heavy beam drops, laid continuous Italian marble, installed 14-ft fluted oak entertainment wall.",
    beforeLabel: "Builder Handover",
    beforeDesc: "Bare concrete screed, unpainted rough masonry, raw wire bundles, dark and hollow passage.",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    afterLabel: "Xalveriq Luxury Sanctuary",
    afterDesc: "Warm smoked oak joinery, architectural false ceiling with 3000K cove, and serene spatial balance.",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "ba-kitchen",
    category: "Kitchen",
    roomTitle: "Modular Kitchen Transformation",
    scopeSummary: "Replaced builder tiled kitchen with parallel FENIX matte cabinetry, quartz waterfall island, and Blum servo-drive drawers.",
    beforeLabel: "Standard Builder Kitchen",
    beforeDesc: "Standard granite slab, mismatched wall tiles, exposed gas cylinders, and dark corner pockets.",
    beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80",
    afterLabel: "Ergonomic Culinary Suite",
    afterDesc: "Waterproof marine plywood, anti-fingerprint FENIX charcoal shutters, and concealed pull-out pantry.",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "ba-bedroom",
    category: "Bedroom",
    roomTitle: "Master Suite & Dressing Alcove",
    scopeSummary: "Acoustically softened wall paneling, full-height walk-in wardrobes with fluted glass, and circadian mood scenes.",
    beforeLabel: "Raw Master Bedroom",
    beforeDesc: "Echoing bare walls, stark tube light points, and unutilized wardrobe niche with uneven plaster.",
    beforeImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1400&q=80",
    afterLabel: "Acoustic Master Sanctuary",
    afterDesc: "Belgian linen upholstered headboard, floor-to-ceiling tinted glass wardrobes, and concealed LED tracks.",
    afterImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "ba-renovation",
    category: "Renovation",
    roomTitle: "Complete Turnkey Villa Overhaul",
    scopeSummary: "Removed 3 non-loadbearing walls, upgraded waterproofing, installed double-glazed louvers and microcement finishes.",
    beforeLabel: "Aged 15-Year Villa Shell",
    beforeDesc: "Water-damaged ceilings, cramped partition walls, squeaking doors, and outdated plumbing fixtures.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80",
    afterLabel: "Weightless Contemporary Villa",
    afterDesc: "Double-height volume, natural teak woodwork, brushed bronze hardware, and seamless indoor-outdoor terrace.",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  },
];

// Material Showcase
const materialShowcaseList: MaterialShowcaseItem[] = [
  {
    id: "mat-1",
    name: "Italian Botticino Marble",
    origin: "Imported Natural Stone",
    description: "Honed matte finish with warm beige veining, reflecting natural morning light without harsh glare.",
    application: "Living room flooring, feature entrance walls & custom dining tops",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    colorHex: "#D4C7B8",
  },
  {
    id: "mat-2",
    name: "Natural Indian Teak Wood",
    origin: "Sustainably Harvested Hardwood",
    description: "Rich, golden-brown grain treated with matte organic oils, offering exceptional durability and warmth.",
    application: "Architectural louvers, main entrance portals & bespoke dining chairs",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    colorHex: "#8C5827",
  },
  {
    id: "mat-3",
    name: "Engineered Quartz Stone",
    origin: "Non-Porous Architectural Solid Surface",
    description: "Zero porosity, heat-resistant up to 250°C, completely immune to turmeric, lemon, and oil stains.",
    application: "Kitchen countertops, seamless backsplashes & bathroom vanity decks",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80",
    colorHex: "#E5DDD0",
  },
  {
    id: "mat-4",
    name: "Seamless Mineral Microcement",
    origin: "Polymer-Modified Breathable Coating",
    description: "Jointless tactile finish creating continuous architectural flows across floors, walls, and ceiling coves.",
    application: "Accent media focal walls, powder rooms & minimalist balcony lounges",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
    colorHex: "#A8A59E",
  },
  {
    id: "mat-5",
    name: "Champagne Bronze Hardware",
    origin: "Solid PVD-Coated Brass",
    description: "Muted brushed metallic finish resistant to oxidation, salt moisture, and fingerprint marks.",
    application: "Custom door pulls, profile framing, bathroom mixers & subtle inlay trims",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    colorHex: "#B89368",
  },
  {
    id: "mat-6",
    name: "Ultra-Matte Nano Laminates",
    origin: "FENIX NTM Smart Surface (Italy)",
    description: "Extremely low light reflectivity, soft touch, anti-fingerprint, and thermal healing of superficial micro-scratches.",
    application: "Modular kitchen shutters, master wardrobes & executive desk tops",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    colorHex: "#2E3033",
  },
];

// Why Choose Xalveriq
const whyChooseList: WhyChooseItem[] = [
  {
    id: "wc-1",
    title: "Personalized Architectural Designs",
    description: "No repeated templates. Every floor plan is tailored specifically to your family's daily habits, sunlight angles, and storage inventory.",
    statOrBadge: "100% Bespoke",
  },
  {
    id: "wc-2",
    title: "Transparent Project Quotations",
    description: "Line-by-line itemized bill of quantities with fixed rates before work starts. Zero surprise cost escalations during execution.",
    statOrBadge: "0 Hidden Costs",
  },
  {
    id: "wc-3",
    title: "Professional Project Supervision",
    description: "Full-time studio project lead stationed on-site in Nashik with daily WhatsApp video and photo logs for complete peace of mind.",
    statOrBadge: "Dedicated Lead",
  },
  {
    id: "wc-4",
    title: "Premium Material Selection",
    description: "Built strictly with IS:710 boiling water-proof plywood, Blum German hardware, and branded finishes backed by manufacturer warranties.",
    statOrBadge: "10-Year Warranty",
  },
  {
    id: "wc-5",
    title: "Dedicated Customer Communication",
    description: "Transparent milestones, scheduled studio material walkthroughs, and responsive concierge support for NRI and resident homeowners alike.",
    statOrBadge: "Weekly Updates",
  },
  {
    id: "wc-6",
    title: "Complete Turnkey Execution",
    description: "From civil demolition and plumbing shifts to false ceiling, cabinetry, and final handover deep clean — delivered within 45 days.",
    statOrBadge: "45-Day Delivery",
  },
];

// Dedicated Visual Gallery (14+ high-res architectural photos)
const visualGalleryList: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Open-Concept Smoked Oak Living Lounge",
    category: "Living Room",
    location: "Gangapur Road, Nashik",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "Continuous Botticino marble flooring with integrated 3000K warm ceiling coving.",
  },
  {
    id: "gal-2",
    title: "Minimalist Master Bedroom Suite",
    category: "Bedroom",
    location: "Serene Meadows, Nashik",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "Acoustically softened wall paneling with bedside mood sconces and linen sheers.",
  },
  {
    id: "gal-3",
    title: "Ultra-Matte FENIX Modular Kitchen",
    category: "Kitchen",
    location: "Govind Nagar, Nashik",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "Quartz waterfall island paired with Blum soft-close tandem boxes and concealed pantry.",
  },
  {
    id: "gal-4",
    title: "Double-Height Travertine Villa Living",
    category: "Villa",
    location: "Anandwalli, Nashik",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "22-foot double height ceiling framed by natural teak louvers and sculptural chandelier.",
  },
  {
    id: "gal-5",
    title: "Floor-to-Ceiling Tinted Glass Wardrobe",
    category: "Bedroom",
    location: "College Road, Nashik",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    description: "Hafele sliding track system with integrated motion-sensor LED profiles and velvet trays.",
  },
  {
    id: "gal-6",
    title: "Spa Bathroom with Fluted Stone Wall",
    category: "Bathroom",
    location: "Mahatma Nagar, Nashik",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    description: "Grohe concealed thermostatic fixtures, floating teak vanity, and illuminated niches.",
  },
  {
    id: "gal-7",
    title: "Complete Civil Renovation & Dining Suite",
    category: "Renovation",
    location: "Indira Nagar, Nashik",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "Removed structural dividing wall to unite living, kitchen, and Italian marble dining.",
  },
  {
    id: "gal-8",
    title: "Executive Study & Library Pod",
    category: "Living Room",
    location: "Vise Mala, Nashik",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "Ergonomic oak desk with concealed cable channels and architectural library shelves.",
  },
  {
    id: "gal-9",
    title: "Sunset Terrace & Balcony Deck",
    category: "Villa",
    location: "Serene Meadows, Nashik",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "Weather-resistant composite decking with vertical planters and recessed floor washlights.",
  },
  {
    id: "gal-10",
    title: "Contemporary Monolithic Kitchen",
    category: "Kitchen",
    location: "Gangapur Road, Nashik",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "Dekton heatproof surfaces, anti-scratch cabinetry, and circadial task illumination.",
  },
  {
    id: "gal-11",
    title: "Luxury Guest Bathroom Suite",
    category: "Bathroom",
    location: "Anandwalli, Nashik",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    description: "Large format Italian porcelain slabs with champagne bronze mixers and frameless glass.",
  },
  {
    id: "gal-12",
    title: "Turnkey Penthouse Renovation Handover",
    category: "Renovation",
    location: "Serene Meadows, Nashik",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "Complete overhaul of 15-year old property into weightless luxury sanctuary in 52 days.",
  },
];

// Office Information Cards
const studioOfficesList: StudioOffice[] = [
  {
    id: "office-nashik",
    title: "Nashik Flagship Studio",
    name: "Nashik Flagship Studio",
    type: "Principal Architecture Office & Material Gallery",
    tag: "Principal Architecture Office",
    address: "Crest Promenade, Near Gangapur Road, Nashik 422013, Maharashtra, India.",
    landmark: "Close to Serene Meadows & Vise Mala",
    appointmentLabel: "Design Consultations by Appointment",
    hours: "Monday to Saturday, 9:30 AM – 7:30 PM",
    phone: "+91 98230 92587",
    whatsapp: "+919823092587",
    description: "Our primary studio houses our physical finishes library, full-scale German hardware mockups, and client 3D VR spatial review lounge.",
  },
  {
    id: "office-regional",
    title: "Mumbai & Pune Client Desks",
    name: "Mumbai & Pune Client Desks",
    type: "Regional Consultation & Execution Hubs",
    tag: "Regional Consultation Hub",
    address: "Bandra Kurla Complex, Mumbai & Koregaon Park, Pune.",
    landmark: "Serving Mumbai Metropolitan Region, Pune & Shirdi",
    appointmentLabel: "Private Client Desks by Appointment",
    hours: "Monday to Saturday, 10:00 AM – 7:00 PM",
    phone: "+91 98230 92587",
    whatsapp: "+919823092587",
    description: "Dedicated consulting pods for cross-city homeowners, luxury apartment buyers, family villa estates, and NRI investors.",
  },
];

export const SITE_DATA = {
  // Brand & Studio Profile
  name: "Xalveriq",
  legalName: "Xalveriq Interior Architecture & Design Studio",
  tagline: "Spaces, Intelligently Designed.",
  positioning:
    "Futuristic AI-powered interior architecture. We transform raw builder handovers into bespoke, weightless luxury sanctuaries delivered in 45 days.",
  studioSummary:
    "We are an architectural interior design studio headquartered in Nashik, Maharashtra. We transform raw builder handovers into bespoke, weightless luxury sanctuaries in 45 days.",
  foundedYear: "2021",
  productionUrl: "https://xalveriq-ai.vercel.app",

  // Business Facts
  stats: {
    homesCompleted: "65+ luxury residences delivered in Maharashtra",
    avgHandoverTime: "45-day guaranteed project delivery",
    satisfactionRate: "4.9/5 verified client satisfaction rating",
  },

  // Primary Contact
  contact: {
    phone: "+91 98230 92587",
    phoneFormatted: "+91 98230 92587",
    email: "concierge@xalveriq.com",
    whatsapp: "+919823092587",
    whatsappDisplay: "+91 98230 92587",
    workingHours: "Monday to Saturday, 9:30 AM – 7:30 PM",
    studios: studioOfficesList,
    serviceLocations: [
      "Nashik (Gangapur Road, Anandwalli, Indira Nagar, Govind Nagar, Serene Meadows, College Road, Mahatma Nagar)",
      "Mumbai & Thane (Luxury Apartments & Villas)",
      "Pune (Koregaon Park, Baner, Kalyani Nagar)",
      "Shirdi & Dhule (Custom Villas & Family Estates)",
    ],
  },

  // Collections
  heroSlides: [
    {
      id: "slide-1",
      title: "Your Builder Handover. Reimagined as a Luxury Sanctuary.",
      subtitle:
        "AI-guided interior architecture, bespoke detailing, and turnkey execution — delivered in 45 days.",
      roomTag: "Living Room Architecture",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=85",
      alt: "Bespoke contemporary living room with smoked oak panelling and panoramic daylight",
    },
    {
      id: "slide-2",
      title: "Precision Modular Kitchens. Engineered for Connoisseurs.",
      subtitle:
        "German Blum motion runners, scratch-resistant Italian nano-surfaces, and circadian under-cabinet illumination.",
      roomTag: "Culinary Suites",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=85",
      alt: "Ultra-matte modular kitchen with quartz waterfall island and concealed pantry",
    },
    {
      id: "slide-3",
      title: "Acoustically Calmed Suites. Designed for Restful Slumber.",
      subtitle:
        "Floor-to-ceiling upholstered bed alcoves, concealed climate registers, and breathable mineral plaster finishes.",
      roomTag: "Master Suites",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1920&q=85",
      alt: "Minimalist master bedroom suite with soft neutral linen and recessed lighting",
    },
    {
      id: "slide-4",
      title: "Floor-to-Ceiling Wardrobes Built for What You Own.",
      subtitle:
        "Tinted fluted glass shutters, sensor-driven ambient lighting, tailored saree racks, and custom vanity suites.",
      roomTag: "Bespoke Wardrobes",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1920&q=85",
      alt: "Luxury walk-in wardrobe with glass doors and warm accent illumination",
    },
    {
      id: "slide-5",
      title: "Expansive Villa Architecture. Weightless Elegance.",
      subtitle:
        "Double-height volumes framed in natural teak, Italian travertine, and seamless indoor-outdoor transitions.",
      roomTag: "Bespoke Villas",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85",
      alt: "Double-height luxury villa living room with travertine stone wall and bespoke chandelier",
    },
  ] as HeroSlide[],

  trustCounters: [
    {
      value: "45 Days",
      label: "Guaranteed Delivery",
      desc: "Contractually committed handover timeline with weekly milestone tracking.",
    },
    {
      value: "100%",
      label: "Custom Design",
      desc: "No cookie-cutter templates. Every layout engineered for your floor plan.",
    },
    {
      value: "3D AI",
      label: "Spatial Visualization",
      desc: "Photorealistic ray-traced walkthroughs before a single hammer is struck.",
    },
    {
      value: "Turnkey",
      label: "End-to-End Execution",
      desc: "Complete civil, electrical, modular cabinetry, paint, and styling under one roof.",
    },
  ] as TrustCounter[],

  // Room categories
  roomCategories: [
    {
      id: "cat-living",
      title: "Living Rooms",
      description: "Airy architectural ceilings, custom media credenzas, and sculpted focal walls.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
      tag: "Social Spaces",
    },
    {
      id: "cat-kitchen",
      title: "Modular Kitchens",
      description: "IS:710 Marine ply carcasses, anti-fingerprint FENIX surfaces, and Blum soft-close mechanics.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
      tag: "Culinary",
    },
    {
      id: "cat-bedroom",
      title: "Master Bedrooms",
      description: "Sound-damped headboards, circadian 3000K mood lighting, and tranquil natural textures.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80",
      tag: "Private Sanctuaries",
    },
    {
      id: "cat-wardrobe",
      title: "Wardrobes & Dressing",
      description: "Full-height sliding systems, fluted bronze glass, accessory drawers, and sensor LEDs.",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80",
      tag: "Storage Solutions",
    },
    {
      id: "cat-bathroom",
      title: "Spa Bathrooms",
      description: "Concealed thermostatic fittings, floating vanities, fluted stone tiles, and illuminated niches.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80",
      tag: "Wellness",
    },
    {
      id: "cat-kids",
      title: "Kids' Rooms",
      description: "Ergonomic study nooks, rounded architectural edges, modular toy storage, and non-toxic paint.",
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=80",
      tag: "Family",
    },
    {
      id: "cat-balcony",
      title: "Balconies & Decks",
      description: "Weather-resistant composite decking, vertical planters, and sunset tea seating.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
      tag: "Outdoor Living",
    },
    {
      id: "cat-foyer",
      title: "Entrance Foyers",
      description: "Statement architectural portals, discreet shoe credenzas, key alcoves, and ambient sconces.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
      tag: "First Impression",
    },
    {
      id: "cat-dining",
      title: "Dining Rooms",
      description: "Handcrafted stone dining tables, fluted glass crockery vitrines, and sculptural chandeliers.",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=900&q=80",
      tag: "Entertaining",
    },
    {
      id: "cat-office",
      title: "Home Offices",
      description: "Acoustically isolated study pods, integrated power hubs, and floor-to-ceiling library shelving.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
      tag: "Productivity",
    },
  ] as RoomCategory[],

  // Primary Collections
  signatureServices: signatureServicesList,
  services: signatureServicesList,
  designPhilosophy: designPhilosophyList,
  beforeAfterPairs: beforeAfterPairsList,
  materialShowcase: materialShowcaseList,
  whyChooseUs: whyChooseList,
  visualGallery: visualGalleryList,
  offices: studioOfficesList,

  // AI Spatial 5-Step Workflow
  aiSpatialWorkflow: [
    {
      step: "01",
      title: "Floor Plan Upload & 3D Spatial Scan",
      desc: "Our neural engine scans your 2D CAD or builder brochure floor plan, extracting exact room perimeters and structural columns.",
      details: "Detects door swings, window sill heights, plumbing shafts, and beam drops with 99.4% dimensional accuracy.",
    },
    {
      step: "02",
      title: "Solar Vector & Circadian Lighting Analysis",
      desc: "Simulates sunlight angles and airflow patterns throughout the year based on your building's precise orientation.",
      details: "Maps morning glare, natural cross-ventilation corridors, and automatically places task versus mood lighting.",
    },
    {
      step: "03",
      title: "Real-Time 3D Material & Texture Mapping",
      desc: "Instantly swaps materials on your photorealistic 3D room model — from Italian statuario marble to fluted oak.",
      details: "Generates high-resolution architectural walkthroughs with realistic caustics, soft shadows, and reflections.",
    },
    {
      step: "04",
      title: "Algorithmic Precision BOQ & Cost Breakdown",
      desc: "Every design decision generates a transparent, itemized Bill of Quantities down to the running foot of joinery.",
      details: "Zero unexpected mid-project cost escalation. Locked pricing for woodwork, hardware, electricals, and civil finishes.",
    },
    {
      step: "05",
      title: "Factory CNC File Generation & Handover Plan",
      desc: "Approved 3D designs convert directly into factory-ready CNC cutting files and a 45-day milestone construction gantt.",
      details: "Off-site precision cutting on German CNC machinery ensures zero on-site dust, perfect joinery, and rapid 45-day assembly.",
    },
  ] as AISpatialWorkflowStep[],

  // Single default beforeAfter for legacy compatibility
  beforeAfter: beforeAfterPairsList[0],

  // Portfolio projects
  portfolioProjects: [
    {
      id: "proj-1",
      slug: "serene-meadows-penthouse",
      title: "The Serene Meadows Penthouse",
      category: "Villa",
      location: "Serene Meadows, Gangapur Road, Nashik",
      bhk: "4 BHK Penthouse",
      carpetArea: "3,400 sq ft",
      styleTag: "Modern Architectural Luxury",
      planNote: "Double-height living space, private terrace pool lounge, 3000K warm lighting",
      summary: "Double-height living space framed by Botticino marble, fluted teak louvers, and a private terrace pool lounge.",
      brief: "A business family wanted a resort-like residence with expansive entertaining zones and acoustic privacy.",
      challenge: "High ambient heat gain on the top terrace floor and echo across the 22-foot double height ceiling.",
      solution: "Engineered motorized double-weave linen sheers, acoustic fabric wall backing, and micro-grooved acoustic oak panels.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      mainImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      hasBeforeAfter: true,
      materials: ["Botticino Marble", "Teak Louvers", "Champagne Bronze", "Lime Plaster"],
    },
    {
      id: "proj-2",
      slug: "anandwalli-river-residence",
      title: "The Anandwalli River Residence",
      category: "3BHK",
      location: "Anandwalli, Nashik",
      bhk: "3 BHK",
      carpetArea: "1,850 sq ft",
      styleTag: "Contemporary Minimalist",
      planNote: "Open-concept layout, river-facing balcony, smoked oak cabinetry",
      summary: "Open-concept 3BHK overlooking Godavari river, featuring custom smoked oak cabinetry and concealed circadian lighting.",
      brief: "A tech director family returning from California wanted a low-maintenance, tranquil home that maximized river views.",
      challenge: "Original builder layout had dark corridors and cramped kitchen access.",
      solution: "Removed non-loadbearing wall to integrate kitchen with dining, installed continuous neutral Italian marble flooring.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      mainImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
      hasBeforeAfter: true,
      materials: ["Smoked Oak", "Quartz White", "Concealed LEDs", "Neutral Bouclé"],
    },
    {
      id: "proj-3",
      slug: "govind-nagar-culinary-suite",
      title: "The Govind Nagar Culinary Suite",
      category: "Modular Kitchen",
      location: "Govind Nagar, Nashik",
      bhk: "3 BHK",
      carpetArea: "280 sq ft kitchen",
      styleTag: "German Precision Ergonomics",
      planNote: "Parallel island kitchen, ultra-matte FENIX charcoal, Blum servo-drive drawers",
      summary: "Parallel island kitchen in ultra-matte FENIX charcoal with Blum servo-drive drawers and concealed walk-in pantry.",
      brief: "An industrialist family who entertain frequently needed an industrial-grade kitchen with residential elegance.",
      challenge: "High grease and steam from heavy Indian cooking alongside delicate imported stone requirements.",
      solution: "Paired Dekton heatproof countertops with anti-fingerprint nano FENIX surfaces and a ceiling-recessed high CFM exhaust.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      mainImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      hasBeforeAfter: false,
      materials: ["FENIX NTM Matte", "Caesarstone", "Blum Servo-Drive", "Fluted Glass"],
    },
    {
      id: "proj-4",
      slug: "college-road-executive-suite",
      title: "The College Road Executive Suite",
      category: "Master Bedroom",
      location: "College Road, Nashik",
      bhk: "4 BHK",
      carpetArea: "450 sq ft master suite",
      styleTag: "Warm Boutique Hospitality",
      planNote: "Master suite with walk-in dressing room, Belgian linen upholstered headboard",
      summary: "Acoustically isolated suite with a floor-to-ceiling walk-in dressing room and motorized double-weave linen sheers.",
      brief: "Create a peaceful sanctuary for senior medical professionals needing total blackout and acoustic quiet.",
      challenge: "Traffic noise from College Road main artery.",
      solution: "Installed double-glazed acoustic window seals and floor-to-ceiling padded fabric wall panels.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      mainImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      hasBeforeAfter: false,
      materials: ["Belgian Linen", "Natural Walnut", "Tinted Mirror", "Acoustic Fabric"],
    },
    {
      id: "proj-5",
      slug: "mahatma-nagar-urban-flat",
      title: "The Mahatma Nagar Urban Flat",
      category: "2BHK",
      location: "Mahatma Nagar, Nashik",
      bhk: "2 BHK",
      carpetArea: "1,220 sq ft",
      styleTag: "Intelligent Space-Optimized",
      planNote: "Space-optimized 2BHK with concealed study niche and microcement walls",
      summary: "Clever spatial layout with dual-function study, hidden dining bench storage, and microcement feature walls.",
      brief: "A young couple needed multi-functional rooms for remote tech work and hosting weekend guests.",
      challenge: "Narrow footprint with only 12-foot living room width.",
      solution: "Engineered floating media credenzas with zero floor contact and integrated a fold-away desk behind fluted ash slats.",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      mainImage: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      hasBeforeAfter: false,
      materials: ["Light Ash Veneer", "Microcement", "Brushed Brass", "Warm Grey Laminate"],
    },
    {
      id: "proj-6",
      slug: "indira-nagar-family-hall",
      title: "The Indira Nagar Family Hall",
      category: "Living Room",
      location: "Indira Nagar, Nashik",
      bhk: "3 BHK",
      carpetArea: "750 sq ft living & dining",
      styleTag: "Weightless Luxury",
      planNote: "14-foot suspended television wall, 6-seater Italian marble dining table",
      summary: "Seamless living and dining zone with a 14-foot suspended television panel and a 6-seater Italian marble dining table.",
      brief: "Transform a boxy living room into an airy, welcoming hub for multi-generational family festivals.",
      challenge: "Heavy structural column in the middle of living and dining divider.",
      solution: "Clad column in natural smoked oak with integrated warm 3000K profile light channels, making it a sculptural feature.",
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      mainImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
      hasBeforeAfter: false,
      materials: ["Italian Marble", "Fluted Oak", "Champagne Gold Inlays", "Warm 3000K Cove"],
    },
  ] as PortfolioProject[],
  projects: [] as PortfolioProject[], // initialized below

  // Process steps
  processTimeline: [
    {
      number: "01",
      step: "01",
      title: "Consultation & Brief",
      subtitle: "Understanding your vision & family rhythm",
      desc: "We meet at our Nashik studio or online to analyze your builder floor plan, storage priorities, and aesthetic tastes.",
      description: "We meet at our Nashik studio or online to analyze your builder floor plan, storage priorities, and aesthetic tastes.",
      duration: "Days 1–3",
      deliverable: "Initial Design Brief & Spatial Feasibility Note",
    },
    {
      number: "02",
      step: "02",
      title: "Site Study & Laser Measure",
      subtitle: "Millimeter-precision site capture",
      desc: "Our technical team visits your property in Nashik to capture true laser dimensions, plumbing points, and sunlight exposures.",
      description: "Our technical team visits your property in Nashik to capture true laser dimensions, plumbing points, and sunlight exposures.",
      duration: "Days 4–6",
      deliverable: "As-Built Digital 3D Floor Layout",
    },
    {
      number: "03",
      step: "03",
      title: "AI Spatial Concepts",
      subtitle: "Algorithmic layout generation",
      desc: "We test multiple furniture flow configurations to maximize usable square footage and natural ventilation.",
      description: "We test multiple furniture flow configurations to maximize usable square footage and natural ventilation.",
      duration: "Days 7–12",
      deliverable: "3 Detailed 2D Spatial Options with Circulation Plans",
    },
    {
      number: "04",
      step: "04",
      title: "3D Design & Material Selection",
      subtitle: "Experience your sanctuary before building",
      desc: "Photorealistic ray-traced walkthroughs paired with hands-on material sampling in our Gangapur Road studio.",
      description: "Photorealistic ray-traced walkthroughs paired with hands-on material sampling in our Gangapur Road studio.",
      duration: "Days 13–18",
      deliverable: "Full-Home 3D Renders & Physical Sample Palette Box",
    },
    {
      number: "05",
      step: "05",
      title: "BOQ, Budget & Timeline Lock",
      subtitle: "100% price transparency, zero surprises",
      desc: "Line-by-line itemized bill of quantities with fixed rates, material specifications, and committed handover dates.",
      description: "Line-by-line itemized bill of quantities with fixed rates, material specifications, and committed handover dates.",
      duration: "Days 19–21",
      deliverable: "Signed Turnkey Contract with 45-Day Handover Guarantee",
    },
    {
      number: "06",
      step: "06",
      title: "Execution & Handover",
      subtitle: "Simultaneous precision fabrication & site install",
      desc: "Off-site CNC manufacturing occurs parallel to civil prep, followed by flawless modular assembly and deep cleaning.",
      description: "Off-site CNC manufacturing occurs parallel to civil prep, followed by flawless modular assembly and deep cleaning.",
      duration: "Days 22–45",
      deliverable: "Keys to your finished sanctuary + 10-Year Warranty Packet",
    },
  ] as ProcessStep[],
  processSteps: [] as ProcessStep[],

  // Testimonials
  testimonials: [
    {
      id: "test-1",
      name: "Adv. Rajesh Deshmukh",
      role: "High Court Advocate",
      location: "Gangapur Road, Nashik",
      projectType: "4BHK Luxury Apartment (2,450 sq ft)",
      rating: 5,
      quote:
        "When our builder handed over the bare flat, it felt cavernous and cold. Xalveriq’s AI spatial layout gave us 25% more usable storage without making any room feel cramped. The 45-day handover promise was kept to the exact calendar date. Absolutely world-class craftsmanship.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "test-2",
      name: "Dr. Suniti & Dr. Manoj Kulkarni",
      role: "Senior Surgeons",
      location: "Serene Meadows, Nashik",
      projectType: "Custom Villa (3,800 sq ft)",
      rating: 5,
      quote:
        "With our busy hospital schedules, we couldn’t babysit carpenters. Xalveriq’s single-point turnkey execution gave us complete peace of mind. The German modular kitchen and the circadian bedroom lighting feel like an ultra-luxury boutique hotel.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "test-3",
      name: "Amitabh & Priya Bhave",
      role: "NRI Tech Director (California)",
      location: "Anandwalli, Nashik",
      projectType: "3BHK River View Flat (1,780 sq ft)",
      rating: 5,
      quote:
        "Managing an interior project from the US was our biggest fear. Xalveriq's digital 3D renders and weekly photo updates made the process completely transparent. We landed in India and walked straight into a fully furnished, immaculate home.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "test-4",
      name: "Vikas & Meena Patel",
      role: "Industrialist",
      location: "Govind Nagar, Nashik",
      projectType: "Modular Kitchen & Living Suite",
      rating: 5,
      quote:
        "The FENIX modular kitchen they designed for us is flawless. Not a single smudge or visible hinge gap. The team’s attention to architectural detailing and honest pricing is unmatched in Nashik.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: "test-5",
      name: "Siddharth Shinde",
      role: "Real Estate Developer",
      location: "Mahatma Nagar, Nashik",
      projectType: "Sample Penthouse Suite",
      rating: 5,
      quote:
        "We partnered with Xalveriq to design our flagship sample flat. It helped us close 8 luxury apartment bookings within the first month of opening. The weightless luxury aesthetic is truly magnetic.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    },
  ] as Testimonial[],

  // FAQs
  faqs: [
    {
      id: "faq-1",
      question: "What is included in a Xalveriq design consultation?",
      answer:
        "Your complimentary design consultation includes a comprehensive review of your floor plan, an analysis of your family lifestyle habits and storage requirements, preliminary 3D spatial ideas, and a transparent budget estimate based on our itemized BOQ structure. You also get to experience physical material samples (veneers, quartz, laminates, and Blum hardware) in our Nashik studio.",
      q: "What is included in a Xalveriq design consultation?",
      a: "Your complimentary design consultation includes a comprehensive review of your floor plan, an analysis of your family lifestyle habits and storage requirements, preliminary 3D spatial ideas, and a transparent budget estimate based on our itemized BOQ structure.",
    },
    {
      id: "faq-2",
      question: "How does AI spatial design work?",
      answer:
        "Our proprietary AI spatial engine analyzes your builder floor plan dimensions against thousands of architectural ergonomics principles. It automatically identifies under-utilized circulation zones, tests optimal furniture orientations for natural daylight, and generates 3D spatial models in hours rather than weeks. Our senior architects then refine every detail to perfection.",
      q: "How does AI spatial design work?",
      a: "Our proprietary AI spatial engine analyzes your builder floor plan dimensions against thousands of architectural ergonomics principles. It automatically identifies under-utilized circulation zones, tests optimal furniture orientations for natural daylight, and generates 3D spatial models in hours.",
    },
    {
      id: "faq-3",
      question: "Can you work from a builder-handover floor plan?",
      answer:
        "Yes, absolutely. Over 80% of our projects begin directly from a raw builder handover or developer floor plan PDF. You can share your floor plan even before taking formal possession, allowing us to complete design and fabrication drawings early so execution starts the day you receive keys.",
      q: "Can you work from a builder-handover floor plan?",
      a: "Yes, absolutely. Over 80% of our projects begin directly from a raw builder handover or developer floor plan PDF. You can share your floor plan even before taking formal possession.",
    },
    {
      id: "faq-4",
      question: "What is the typical project timeline and how does the 45-day delivery work?",
      answer:
        "Our standard turnkey execution for 2BHK and 3BHK residences is completed within 45 days from final drawing sign-off. We achieve this through simultaneous off-site CNC factory fabrication of modular woodwork while our on-site civil and electrical teams prepare your flat. Everything arrives pre-finished for rapid, dust-controlled assembly.",
      q: "What is the typical project timeline and how does the 45-day delivery work?",
      a: "Our standard turnkey execution for 2BHK and 3BHK residences is completed within 45 days from final drawing sign-off.",
    },
    {
      id: "faq-5",
      question: "Do you provide turnkey execution?",
      answer:
        "Yes. Xalveriq is a 100% turnkey studio. We manage civil modifications, electrical wiring, false ceiling, architectural 3000K lighting, bathroom remodels, modular kitchen and wardrobe fabrication, painting, and deep cleaning. You interact with a single dedicated project manager, eliminating subcontractor chaos.",
      q: "Do you provide turnkey execution?",
      a: "Yes. Xalveriq is a 100% turnkey studio. We manage civil modifications, electrical wiring, false ceiling, lighting, modular cabinetry, and painting under one roof.",
    },
    {
      id: "faq-6",
      question: "Which locations do you serve?",
      answer:
        "Our flagship studio is located in Nashik, Maharashtra, serving Gangapur Road, Anandwalli, Indira Nagar, Govind Nagar, Serene Meadows, College Road, and Mahatma Nagar. We also undertake luxury residences and villas across Mumbai, Thane, Pune, Shirdi, and Dhule.",
      q: "Which locations do you serve?",
      a: "Our flagship studio is located in Nashik, Maharashtra, serving Gangapur Road, Anandwalli, Indira Nagar, Govind Nagar, and Serene Meadows, plus luxury residences across Mumbai, Pune, and Shirdi.",
    },
  ] as FAQItem[],

  // Team
  team: [
    {
      name: "Aryan Mehta",
      role: "Principal Architect & Founder",
      bio: "12 years designing luxury residences and villas across Maharashtra. Studied architecture at CEPT Ahmedabad. Believes a good floor plan is worth ten coats of paint.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      isFounder: true,
    },
    {
      name: "Neha Chawla",
      role: "Lead Interior Architect",
      bio: "Leads spatial planning, circadian lighting design, and material curation. Obsessed with natural cross-ventilation, warm 3000K illumination, and honest joinery.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Nikhil Joshi",
      role: "Project & Execution Director",
      bio: "Coordinates factory CNC manufacturing, on-site civil teams, and vendor logistics across Nashik and Mumbai to guarantee our 45-day handover clause.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
  ] as TeamMember[],

  // Warranty
  warranty: {
    title: "Our Standard 10-Year Warranty & Service Terms",
    summary:
      "We build with calibrated IS:710 boiling water-proof marine plywood and German fittings. Every home comes with direct manufacturer warranties plus our studio workmanship guarantee.",
    terms: [
      "Modular woodwork & carcass: Up to 10-year manufacturer warranty against delamination or borer attack on IS:710 boiling water-proof plywood.",
      "Hardware & runners: Manufacturer lifetime functional warranty on Blum and Hafele hinges and drawer mechanisms.",
      "Workmanship & alignment: 12 months complimentary post-handover realignment and touch-up service by our own carpentry team.",
      "Civil & surface coatings: 1-year warranty on PU lacquer, ceiling finishes, and tile grouting under normal residential use.",
    ],
  },
};

// Aliases
SITE_DATA.projects = SITE_DATA.portfolioProjects;
SITE_DATA.processSteps = SITE_DATA.processTimeline;
