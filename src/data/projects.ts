// REPLACE WITH REAL XALVERIQ PROJECT PHOTO
export interface Project {
  id: string;
  title: string;
  category: "Turnkey Residence" | "Modular Kitchen" | "Master Suite" | "Living Sanctuary" | "Commercial & Studio";
  style: "Modern Haute Luxury" | "Japandi Minimal" | "Indian Contemporary" | "Scandinavian Serenity" | "Neo-Industrial";
  location: string;
  society: string;
  bhk: string;
  area: string;
  budget: string;
  duration: string;
  featured: boolean;
  description: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
  materials: string[];
  smartFeatures: string[];
  testimonial?: {
    quote: string;
    author: string;
    designation: string;
  };
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "panchshil-kharadi-penthouse",
    title: "The Zero-Gravity Penthouse",
    category: "Turnkey Residence",
    style: "Modern Haute Luxury",
    location: "Kharadi, Pune",
    society: "Panchshil Towers",
    bhk: "4.5 BHK Duplex",
    area: "3,850 sq.ft",
    budget: "₹68 Lakhs",
    duration: "45 Days Handover",
    featured: true,
    description: "A weightless luxury transformation featuring floating Italian Statuario marble TV consoles, concealed magnetic track lighting, acoustic smoked eucalyptus wood paneling, and an integrated AI home automation ecosystem.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Italian Statuario Marble", "Smoked Eucalyptus Veneer", "Hafele Matrix Runners", "BWP 710 Marine Ply"],
    smartFeatures: ["Lutron Caseta Smart Lighting", "Motorized Somfy Sheers", "Voice-Activated Kitchen Scullery"],
    testimonial: {
      quote: "Xalveriq's AI studio gave us the exact 3D render during our very first coffee. What astonished us was that the delivered penthouse was even more stunning than the AI preview, and handed over in exactly 44 days.",
      author: "Aditya & Sanjana Deshmukh",
      designation: "VP Product & Neurosurgeon, Kharadi",
    },
  },
  {
    id: "baner-castel-japandi",
    title: "Celestial Japandi Sanctuary",
    category: "Living Sanctuary",
    style: "Japandi Minimal",
    location: "Baner, Pune",
    society: "Castel Royale Excellente",
    bhk: "3 BHK Luxury",
    area: "2,200 sq.ft",
    budget: "₹38 Lakhs",
    duration: "40 Days Handover",
    featured: true,
    description: "Warm architectural minimalism fusing Japanese organic wabi-sabi textures with Scandinavian functionality. Micro-cement textured walls, fluted ash wood, and floating daybeds overlooking Baner Hill.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Natural White Oak", "Micro-cement Lime Plaster", "Brushed Brass Accents", "Linen Drapery"],
    smartFeatures: ["Circadian Rhythm Lighting", "Concealed AC Plenum", "Integrated Smart Bookshelf"],
    testimonial: {
      quote: "The antigravity feeling is real. Every storage element is wall-hung with hidden structural cantilever brackets. Our living room feels double its size.",
      author: "Rohan & Meera Kulkarni",
      designation: "Tech Founders, Baner",
    },
  },
  {
    id: "koregaon-park-culinary-studio",
    title: "Quantum Culinary Suite",
    category: "Modular Kitchen",
    style: "Neo-Industrial",
    location: "Koregaon Park, Pune",
    society: "One North",
    bhk: "Island Kitchen + Butler Pantry",
    area: "480 sq.ft",
    budget: "₹24 Lakhs",
    duration: "30 Days Handover",
    featured: true,
    description: "An aerospace-grade modular kitchen engineered with matte anti-fingerprint FENIX NTM surfaces, Dekton heat-proof countertops, Blum motorized tip-on drawers, and temperature-controlled wine cabinetry.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["FENIX NTM Matte Charcoal", "Dekton Laurent Ceramic", "Blum Aventos Bi-fold Lift", "Hafele Loox5 LED"],
    smartFeatures: ["Gesture Controlled Chimney", "Touch-to-Open Pantry", "Smart Water Purifier Integration"],
    testimonial: {
      quote: "As someone who loves hosting gourmet dinners, this kitchen is a culinary engineering masterpiece. Zero scratches, zero stains, pure elegance.",
      author: "Vikram Singhania",
      designation: "Restaurateur & Investor, Koregaon Park",
    },
  },
  {
    id: "kalyani-nagar-master-suite",
    title: "Aura Master Retreat",
    category: "Master Suite",
    style: "Indian Contemporary",
    location: "Kalyani Nagar, Pune",
    society: "Yoo Pune",
    bhk: "Master Suite & Walk-In Wardrobe",
    area: "950 sq.ft",
    budget: "₹29 Lakhs",
    duration: "35 Days Handover",
    featured: true,
    description: "A sumptuous sanctuary combining royal Indian cane weave craftsmanship with fluted lacquered glass, walk-in glass wardrobes with motion sensors, and an en-suite spa bath.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    beforeImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1400&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    afterImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Bespoke Natural Cane", "Champagne Gold Aluminum Profiles", "Fluted Saint-Gobain Glass", "Italian Travertine"],
    smartFeatures: ["Smart Ambient Wakeup Lighting", "Automated Wardrobe Dehumidifiers", "Concealed Soundbar"],
    testimonial: {
      quote: "Walking into our bedroom feels like checking into a 6-star luxury resort in Udaipur, yet with all the sleek minimalism of Zurich.",
      author: "Dr. Ananya & Prateek Joshi",
      designation: "Cardiologist & Architect, Kalyani Nagar",
    },
  },
  {
    id: "viman-nagar-commercial-atelier",
    title: "The Kinetic Design HQ",
    category: "Commercial & Studio",
    style: "Neo-Industrial",
    location: "Viman Nagar, Pune",
    society: "Marvel Edge",
    bhk: "Executive Penthouse Office",
    area: "2,600 sq.ft",
    budget: "₹45 Lakhs",
    duration: "38 Days Handover",
    featured: false,
    description: "Biophilic commercial workspace designed for agile tech executives. Features floating collaborative pods, sound-dampening moss walls, and ergonomic sit-stand workstations.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    beforeImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    afterImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["Corten Steel Accents", "Reclaimed Teak Wood", "Acoustic Felt Baffles", "Polished Terrazzo"],
    smartFeatures: ["Facial Recognition Access", "Automated Conference AV", "Smart HVAC Zoning"],
  },
  {
    id: "hinjawadi-turnkey-haven",
    title: "Cosmopolitan Minimalist Haven",
    category: "Turnkey Residence",
    style: "Scandinavian Serenity",
    location: "Hinjawadi, Pune",
    society: "Kolte Patil Life Republic",
    bhk: "2.5 BHK Smart Home",
    area: "1,450 sq.ft",
    budget: "₹22 Lakhs",
    duration: "35 Days Handover",
    featured: false,
    description: "Smart space-optimized urban home designed for IT leaders. Convertible guest bedroom / home studio, modular quartz kitchen, and custom balcony bar unit.",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    beforeImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
    // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
    afterImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      // REPLACE WITH REAL XALVERIQ PROJECT PHOTO
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    materials: ["German Laminated Panels", "Caesarstone Quartz", "Matte Black Hardware", "Textured Linen"],
    smartFeatures: ["Smart Lock Entry", "App-controlled Mood Lighting", "Motorized Murphy Desk"],
  },
];
