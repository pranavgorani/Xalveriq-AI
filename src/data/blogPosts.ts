export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  category: "Design Trends" | "Space Planning" | "Materials & Cost" | "Vastu & Architecture";
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "luxury-interior-trends-pune-2026",
    title: "Top Luxury Interior Trends in Pune for 2026: Antigravity Cantilevers & Ambient AI",
    excerpt: "From Koregaon Park bungalows to high-rise towers in Baner and Kharadi, discover the design movements redefining Pune's skyline.",
    readTime: "5 min read",
    date: "November 14, 2026",
    category: "Design Trends",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Ar. Aryan Mehta",
      role: "Lead Architect, Xalveriq",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    content: [
      "Pune’s interior design landscape is undergoing a radical shift. Homeowners are no longer satisfied with standard laminate carpentry and beige palettes. Today's tech leaders, doctors, and entrepreneurs in Baner, Kharadi, and Koregaon Park want spaces that reflect their global aspirations.",
      "The 'Antigravity' design concept—characterized by cantilevered furniture, wall-hung consoles with concealed steel supports, and recessed floor-to-ceiling perimeter lighting—makes rooms feel instantly expansive and weightless.",
      "Furthermore, the integration of ambient AI that adjusts lighting temperature based on Pune's seasonal natural light ensures homes stay energetically balanced throughout the year.",
    ],
  },
  {
    slug: "space-planning-pune-apartments",
    title: "Space Planning for 2 & 3 BHK Apartments in Pune: The Zero-Clutter Architecture",
    excerpt: "Strategic spatial tricks to double the usable living area in modern societies across Hinjawadi, Wakad, and Viman Nagar.",
    readTime: "6 min read",
    date: "October 28, 2026",
    category: "Space Planning",
    coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Tanya Sen",
      role: "Senior Space Planner, Xalveriq",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    },
    content: [
      "Modern apartments in high-density Pune hubs like Hinjawadi and Wakad often have efficient floor plans, but poorly planned furniture can quickly make them feel cramped.",
      "By replacing traditional swing doors with floor-to-ceiling concealed pocket sliders and utilizing vertical wall storage up to the slab level, you regain up to 25% of active floor space.",
      "An open-plan kitchen with a dual-purpose breakfast island creates seamless flow between the culinary zone and the living lounge, fostering effortless family interaction.",
    ],
  },
  {
    slug: "marine-ply-vs-mdf-cost-guide-pune",
    title: "BWP 710 Marine Ply vs. Commercial MDF: The Definitive Pune Material & Cost Guide",
    excerpt: "Why material selection dictates longevity in Maharashtra’s monsoon and humidity cycles, and how to allocate your interior budget wisely.",
    readTime: "7 min read",
    date: "October 12, 2026",
    category: "Materials & Cost",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    author: {
      name: "Nikhil Joshi",
      role: "Materials Director, Xalveriq",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    content: [
      "Pune experiences both dry winters and intense monsoon humidity. Using substandard particle board or regular commercial ply often results in swollen shutters and termite infestation within 3-4 years.",
      "At Xalveriq, we mandate IS:710 Boiling Water Proof (BWP) Marine Plywood for all wet areas (kitchens and vanity counters), paired with German PUR edge banding that creates a 100% moisture barrier.",
      "Investing an additional 10-15% upfront in premium core materials saves tens of thousands in repairs and guarantees that your home retains its showroom finish for over a decade.",
    ],
  },
];

