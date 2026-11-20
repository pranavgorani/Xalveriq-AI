export interface FAQItem {
  question: string;
  answer: string;
  category: "Timeline" | "Cost & Budget" | "Materials" | "Process & AI" | "Pune Real Estate";
}

export const FAQS: FAQItem[] = [
  {
    category: "Timeline",
    question: "How does Xalveriq deliver complete luxury interiors in just 45 days?",
    answer: "Unlike traditional contractors who do slow on-site carpentry, 85% of Xalveriq's joinery is precision engineered in our German-automated factory right outside Pune while civil, MEP, and false ceiling works happen simultaneously on site. Once the space is prepped, our modular components lock together in 10-12 days, followed by paint, detailing, and QC inspection. We back this with a written ₹2,500/day penalty guarantee if delayed.",
  },
  {
    category: "Cost & Budget",
    question: "How accurate is the online AI Budget Estimator?",
    answer: "Our AI Budget Estimator is calibrated against real material indices, supplier costs, and labor rates across Pune's micro-markets (Koregaon Park, Baner, Kharadi, Viman Nagar, Hinjawadi). The estimate is typically within ±5% of the final BOQ (Bill of Quantities), assuming no structural changes.",
  },
  {
    category: "Materials",
    question: "What wood and hardware brands do you use, and what is your warranty?",
    answer: "We use exclusively IS:710 Boiling Water Proof (BWP) Marine Plywood with lifetime anti-termite treatment. For hardware, hinges, and lift-up mechanisms, we partner with Blum (Austria) and Hafele (Germany), both carrying a manufacturer lifetime warranty. Every Xalveriq turnkey home is covered by our comprehensive 10-Year Service & Workmanship Warranty.",
  },
  {
    category: "Pune Real Estate",
    question: "Do you have experience with specific societies in Pune like Panchshil, Amanora, or Godrej?",
    answer: "Yes, our architectural team has delivered over 450 homes across major Pune developments including Panchshil Towers (Kharadi), Trump Towers (Koregaon Park), Amanora Gateway Towers (Hadapsar), Castel Royale (Baner), Yoo Pune (Kalyani Nagar), and Kolte Patil Life Republic (Hinjawadi). We are familiar with each society's society management rules, work hour constraints, lift padding protocols, and electrical load approvals.",
  },
  {
    category: "Process & AI",
    question: "How does your AI Design Studio work?",
    answer: "Our proprietary AI engine takes a photo or 2D floor plan of your room, assesses ambient natural lighting and spatial proportions, and applies one of our curated design aesthetics (Modern Minimal, Japandi, Haute Luxury, Indian Contemporary) in seconds. You get an immediate visual preview, which our senior architects then refine into precise 1:1 CAD blueprints and 3D VR renders.",
  },
  {
    category: "Process & AI",
    question: "Can Xalveriq accommodate Vastu Shastra principles in modern futuristic designs?",
    answer: "Absolutely. Our architects specialize in 'Invisible Vastu'—aligning the master bedroom to the South-West, pooja sanctuaries to the North-East, and kitchen fire elements to the South-East seamlessly without compromising the clean, contemporary, and weightless aesthetic of your home.",
  },
  {
    category: "Cost & Budget",
    question: "Are there any hidden costs or surprise escalations after signing?",
    answer: "Zero. We follow a strict 'No Escalation Guarantee'. The itemized Bill of Quantities (BOQ) agreed upon before execution is final. You will never receive unexpected invoices during the project unless you explicitly request a scope addition in writing.",
  },
];

