/**
 * Xalveriq — Spaces, Intelligently Designed.
 * Single source of truth for all business facts, studio copy, services,
 * projects, testimonials, and contact details for Xalveriq.
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
  title: string;
  tagline: string;
  shortDesc: string;
  description: string;
  included: string[];
  features: string[];
  image: string;
  materials: { name: string; hex: string }[];
  timeline: string;
  typicalTimeline: string;
  typicalBudget: string;
  estimateStarting: string;
  featuredProjectSlug: string;
}

export interface AIStep {
  step: string;
  title: string;
  desc: string;
  details: string;
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

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  isFounder?: boolean;
}

export type ServiceItem = SignatureService;
export type ProjectItem = PortfolioProject;

// Signature services defined with full details
const signatureServicesList: SignatureService[] = [
  {
    id: "full-home",
    slug: "full-home-interiors",
    title: "Full-Home Interior Design",
    tagline: "Turnkey transformation for 2BHK, 3BHK, 4BHK apartments & penthouses.",
    shortDesc: "Complete turnkey interior architecture from bare builder handover to final handover in 45 days.",
    description:
      "From bare builder handover to key delivery in 45 days. We take full ownership of spatial planning, structural modifications, false ceilings, modular woodwork, lighting schemes, and soft furnishings.",
    included: [
      "End-to-end space planning, 3D photorealistic walkthroughs & material selection",
      "False ceiling design with architectural 3000K warm anti-glare recessed illumination",
      "Modular cabinetry for living, dining, kitchen, and all bedrooms",
      "Civil alterations, electrical conduit shifts, and plumbing coordination",
      "Single-source turnkey accountability with zero subcontractor coordination headache",
    ],
    features: [
      "End-to-end space planning, 3D photorealistic walkthroughs & material selection",
      "False ceiling design with architectural 3000K warm anti-glare recessed illumination",
      "Single-source turnkey accountability with zero subcontractor coordination headache",
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    materials: [
      { name: "Smoked Oak", hex: "#8A6D52" },
      { name: "Botticino Marble", hex: "#D4C7B8" },
      { name: "Champagne Bronze", hex: "#B89368" },
    ],
    timeline: "45 Days Handover Guarantee",
    typicalTimeline: "45 Days Handover Guarantee",
    typicalBudget: "Starting ₹14.5L for 2BHK | ₹22L for 3BHK",
    estimateStarting: "Starting ₹14.5L for 2BHK | ₹22L for 3BHK",
    featuredProjectSlug: "serene-meadows-penthouse",
  },
  {
    id: "modular-kitchens",
    slug: "modular-kitchens",
    title: "Modular Kitchens & Pantries",
    tagline: "Ergonomically engineered culinary suites tailored for Indian cooking.",
    shortDesc: "Waterproof BWP marine plywood carcasses, Blum soft-close mechanics, and scratch-resistant Italian nano-surfaces.",
    description:
      "Built to withstand intense heat, moisture, and spices. We pair boiling water-proof IS:710 marine plywood carcasses with ultra-matte scratch-resistant Italian surfaces and lifetime-warranted Blum soft-close mechanics.",
    included: [
      "BWP marine plywood carcasses with anti-pest & anti-delamination warranty",
      "Caesarstone or Dekton heatproof countertops with seamless stone backsplashes",
      "Concealed tandem boxes, spice pull-outs, corner carousels & tall pantry units",
      "Circadian under-cabinet warm 3000K LED task illumination",
    ],
    features: [
      "BWP marine plywood carcasses with anti-pest & anti-delamination warranty",
      "Caesarstone or Dekton heatproof countertops with seamless stone backsplashes",
      "Concealed tandem boxes, spice pull-outs, corner carousels & tall pantry units",
    ],
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    materials: [
      { name: "FENIX Charcoal", hex: "#2E3033" },
      { name: "Quartz Calacatta", hex: "#E8E6E1" },
      { name: "Brushed Brass", hex: "#B89758" },
    ],
    timeline: "21 to 28 Days Production",
    typicalTimeline: "21 to 28 Days Production",
    typicalBudget: "Starting ₹4.5L",
    estimateStarting: "Starting ₹4.5L",
    featuredProjectSlug: "govind-nagar-culinary-suite",
  },
  {
    id: "wardrobes-storage",
    slug: "custom-wardrobes",
    title: "Wardrobes & Custom Dressing",
    tagline: "Floor-to-ceiling storage customized down to the last millimeter.",
    shortDesc: "Full-height sliding or hinged wardrobes, fluted glass, sensor illumination, and velvet organizer trays.",
    description:
      "Every wardrobe is planned around your exact wardrobe inventory. We integrate dedicated saree organizers, watch trays, long-coat hanging zones, and concealed sensor-lit LED profiles behind fluted glass or warm veneer shutters.",
    included: [
      "Full-height floor-to-ceiling doors with anti-warp aluminum tensioners",
      "Soft-close sliding or concealed 110-degree clip-top hinges by Hafele",
      "Integrated velvet accessory trays, hidden digital safes, and pull-out shoe racks",
      "Concealed motion-sensor activated LED wardrobe illumination",
    ],
    features: [
      "Full-height floor-to-ceiling doors with anti-warp aluminum tensioners",
      "Soft-close sliding or concealed 110-degree clip-top hinges by Hafele",
      "Integrated velvet accessory trays, hidden digital safes, and pull-out shoe racks",
    ],
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    materials: [
      { name: "Natural Ash", hex: "#B3A28F" },
      { name: "Tinted Fluted Glass", hex: "#7E8588" },
      { name: "Warm Walnut", hex: "#634731" },
    ],
    timeline: "18 to 24 Days Handover",
    typicalTimeline: "18 to 24 Days Handover",
    typicalBudget: "Starting ₹2.8L per suite",
    estimateStarting: "Starting ₹2.8L per suite",
    featuredProjectSlug: "college-road-executive-suite",
  },
  {
    id: "living-dining",
    slug: "living-dining-spaces",
    title: "Living & Dining Spaces",
    tagline: "Sophisticated social cores crafted for memorable family gatherings.",
    shortDesc: "Bespoke fluted credenzas, concealed wiring raceways, Italian marble dining, and layered warm lighting.",
    description:
      "We treat your main hall as a cohesive architectural volume. Bespoke fluted television credenzas, concealed wiring raceways, custom stone dining tables, and layered ambient lighting create a sense of effortless luxury.",
    included: [
      "Acoustic wall panelling with breathable mineral plasters & subtle brass inlays",
      "Concealed AV integration: zero hanging cords, subwoofers neatly baffled",
      "Custom dining tables crafted from imported marble slabs with sculptural pedestals",
    ],
    features: [
      "Acoustic wall panelling with breathable mineral plasters & subtle brass inlays",
      "Concealed AV integration: zero hanging cords, subwoofers neatly baffled",
      "Custom dining tables crafted from imported marble slabs with sculptural pedestals",
    ],
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
    materials: [
      { name: "Travertine Stone", hex: "#C8B9A6" },
      { name: "Matte Bronze", hex: "#8A7356" },
      { name: "Textured Bouclé", hex: "#ECE6DC" },
    ],
    timeline: "Included in 45-day cycle",
    typicalTimeline: "Included in 45-day cycle",
    typicalBudget: "Starting ₹6.5L",
    estimateStarting: "Starting ₹6.5L",
    featuredProjectSlug: "indira-nagar-family-hall",
  },
  {
    id: "bedrooms-suites",
    slug: "master-bedrooms-suites",
    title: "Bedrooms & Master Suites",
    tagline: "Quiet sanctuaries that insulate you from external noise and fatigue.",
    shortDesc: "Circadian lighting, acoustically softened headboards, study reading corners, and custom bedframes.",
    description:
      "Designed using circadian lighting principles: soft, warm 2700K–3000K illumination that encourages natural sleep cycles. We build bespoke padded headboards, bedside charging ledges, and quiet study reading corners.",
    included: [
      "Acoustically softened wall paneling behind custom upholstered king bedframes",
      "Independent dual bedside reading lamps and two-way master light controls",
      "Private study / vanity nooks with natural morning daylight orientation",
    ],
    features: [
      "Acoustically softened wall paneling behind custom upholstered king bedframes",
      "Independent dual bedside reading lamps and two-way master light controls",
      "Private study / vanity nooks with natural morning daylight orientation",
    ],
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    materials: [
      { name: "Natural Cane", hex: "#D6B88D" },
      { name: "Smoked Oak", hex: "#654C38" },
      { name: "Pure Belgian Linen", hex: "#DED6C9" },
    ],
    timeline: "Included in 45-day cycle",
    typicalTimeline: "Included in 45-day cycle",
    typicalBudget: "Starting ₹4.0L per bedroom",
    estimateStarting: "Starting ₹4.0L per bedroom",
    featuredProjectSlug: "college-road-executive-suite",
  },
  {
    id: "renovation-turnkey",
    slug: "renovation-turnkey-execution",
    title: "Renovation & Turnkey Execution",
    tagline: "Complete overhaul of older homes and bare builder structures.",
    shortDesc: "Wall knocking, waterproofing, bathroom revamps, and turnkey civil execution across Maharashtra.",
    description:
      "Whether transforming an older property in Nashik or a bare shell delivered by a developer, our civil teams handle wall knocking, plumbing rerouting, waterproofing, and new flooring before the design installation.",
    included: [
      "Civil alteration, bathroom revamps, premium tile laying, and plumbing replacement",
      "Full structural inspection and anti-damp chemical waterproofing barriers",
      "Strict site supervision with dedicated daily WhatsApp photo logs for homeowners",
    ],
    features: [
      "Civil alteration, bathroom revamps, premium tile laying, and plumbing replacement",
      "Full structural inspection and anti-damp chemical waterproofing barriers",
      "Strict site supervision with dedicated daily WhatsApp photo logs for homeowners",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    materials: [
      { name: "Microcement", hex: "#A8A59E" },
      { name: "Teak Wood", hex: "#8C5827" },
      { name: "Blackened Steel", hex: "#2B2D2F" },
    ],
    timeline: "45 to 60 Days Turnkey",
    typicalTimeline: "45 to 60 Days Turnkey",
    typicalBudget: "Starting ₹18L full revamp",
    estimateStarting: "Starting ₹18L full revamp",
    featuredProjectSlug: "gangapur-road-luxury-estate",
  },
];

// Portfolio projects list
const portfolioProjectsList: PortfolioProject[] = [
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
];

// Process steps list
const processStepsList: ProcessStep[] = [
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
];

// FAQs list with both question/answer and q/a aliases
const faqsList: FAQItem[] = [
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

  // Primary Contact & Studio Locations
  contact: {
    phone: "+91 98230 92587",
    email: "concierge@xalveriq.com",
    whatsapp: "+919823092587",
    whatsappDisplay: "+91 98230 92587",
    workingHours: "Monday to Saturday, 9:30 AM – 7:30 PM",
    studios: [
      {
        name: "Nashik Flagship Studio",
        tag: "Principal Architecture Office & Material Gallery",
        address: "Crest Promenade, Near Gangapur Road, Nashik 422013, Maharashtra, India",
        landmark: "Close to Serene Meadows & Vise Mala",
        description: "Physical finishes library, German hardware mockups, and client 3D VR lounge.",
      },
      {
        name: "Mumbai & Pune Client Desks",
        tag: "By Consultation Appointment",
        address: "Bandra Kurla Complex, Mumbai & Koregaon Park, Pune",
        landmark: "Serving regional apartment buyers, luxury villas & NRIs",
        description: "Dedicated consulting pods for cross-city homeowners and developers.",
      },
    ],
    serviceLocations: [
      "Nashik (Gangapur Road, Anandwalli, Indira Nagar, Govind Nagar, Serene Meadows, College Road, Mahatma Nagar)",
      "Mumbai & Thane (Luxury Apartments & Villas)",
      "Pune (Koregaon Park, Baner, Kalyani Nagar)",
      "Shirdi & Dhule (Custom Villas & Family Estates)",
    ],
  },

  // 1. Cinematic Hero Slider (4-5 Slides with Ken Burns zoom)
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

  // 2. Trust & Credibility Strip (4 Counters)
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

  // 3. "Design Your Space" Category Slider (10 Categories)
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
  portfolioProjects: portfolioProjectsList,
  projects: portfolioProjectsList,
  processTimeline: processStepsList,
  processSteps: processStepsList,
  faqs: faqsList,

  // 5. AI Spatial Design Section Workflow (5 Steps)
  aiSpatialWorkflow: [
    {
      step: "01",
      title: "Share Floor Plan & Wishlist",
      desc: "Upload your builder brochure or CAD drawing alongside your family lifestyle needs.",
      details: "Our AI model ingests exact dimensions, column drops, balcony orientations, and sunlight vectors.",
    },
    {
      step: "02",
      title: "Receive AI Spatial Concepts",
      desc: "Get 3 distinct layout concepts optimizing circulation, furniture sizing, and storage.",
      details: "Algorithms test 200+ spatial configurations to discover non-obvious ways to increase open floor space.",
    },
    {
      step: "03",
      title: "Review 3D Visuals & Materials",
      desc: "Experience photorealistic 3D renders matching real materials from our Nashik studio.",
      details: "Inspect how sun shifts across the day and verify stone veining and veneer tones under 3000K LEDs.",
    },
    {
      step: "04",
      title: "Approve Final BOQ & Drawings",
      desc: "Lock in an unyielding bill of quantities with fixed line-item pricing and 0 hidden escalations.",
      details: "Receive millimeter-precision architectural working drawings ready for factory CNC fabrication.",
    },
    {
      step: "05",
      title: "Begin 45-Day Execution",
      desc: "Factory assembly runs simultaneously with on-site preparation for rapid, clean handover.",
      details: "Track progress through weekly video walk-throughs until we hand you your finished sanctuary keys.",
    },
  ] as AIStep[],

  // 6. Before / After Transformation
  beforeAfter: {
    beforeLabel: "Builder Handover",
    beforeDesc: "Bare concrete screed, unpainted rough masonry, raw wire bundles, dark and hollow passage.",
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    afterLabel: "Xalveriq Luxury Sanctuary",
    afterDesc: "Warm smoked oak joinery, architectural false ceiling with 3000K cove, and serene spatial balance.",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    caption: "From bare handover to bespoke, weightless luxury.",
  },

  // 9. Client Testimonials (Nashik Homeowners)
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

  // Team Members (Nashik Architecture Studio)
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

  // Warranty Policy
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
