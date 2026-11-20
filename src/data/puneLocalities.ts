export interface PuneLocality {
  id: string;
  name: string;
  zone: "East Pune" | "West Pune" | "Central Pune" | "South Pune";
  notableProjects: string[];
  averageSqFtCost: number; // in INR for interiors
  tier: "Luxury" | "Ultra Luxury" | "Premium";
}

export const PUNE_LOCALITIES: PuneLocality[] = [
  {
    id: "koregaon-park",
    name: "Koregaon Park",
    zone: "Central Pune",
    notableProjects: ["Trump Towers Pune", "One North", "Gera Isle Royale"],
    averageSqFtCost: 2800,
    tier: "Ultra Luxury",
  },
  {
    id: "baner",
    name: "Baner",
    zone: "West Pune",
    notableProjects: ["Castel Royale", "Panache", "Rohan Leher", "Amar Paradigm"],
    averageSqFtCost: 2200,
    tier: "Luxury",
  },
  {
    id: "kalyani-nagar",
    name: "Kalyani Nagar",
    zone: "East Pune",
    notableProjects: ["Yoo Pune by Philippe Starck", "Waterfront Suites", "Marathon Monte South"],
    averageSqFtCost: 2600,
    tier: "Ultra Luxury",
  },
  {
    id: "kharadi",
    name: "Kharadi",
    zone: "East Pune",
    notableProjects: ["Panchshil Towers", "Gera World of Joy", "Zen Elite", "Kolte Patil Tuscan"],
    averageSqFtCost: 1950,
    tier: "Premium",
  },
  {
    id: "viman-nagar",
    name: "Viman Nagar",
    zone: "East Pune",
    notableProjects: ["Lunkad Sky Lounge", "Rohan Mithila", "Sky Privé"],
    averageSqFtCost: 2100,
    tier: "Luxury",
  },
  {
    id: "kothrud",
    name: "Kothrud",
    zone: "West Pune",
    notableProjects: ["Sobha Nesara", "Dahanukar Colony Luxury Bungalows", "Paranjape Schemes"],
    averageSqFtCost: 2000,
    tier: "Luxury",
  },
  {
    id: "balewadi",
    name: "Balewadi High Street",
    zone: "West Pune",
    notableProjects: ["Majestique Signature Towers", "Kundan Eternia", "F Residences"],
    averageSqFtCost: 2100,
    tier: "Luxury",
  },
  {
    id: "hinjawadi-wakad",
    name: "Hinjawadi & Wakad",
    zone: "West Pune",
    notableProjects: ["Kolte Patil Life Republic", "Godrej Elements", "VTP HiLife"],
    averageSqFtCost: 1750,
    tier: "Premium",
  },
];

