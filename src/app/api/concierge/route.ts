import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const lower = message.toLowerCase();

    // Check for Anthropic API key in environment
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (apiKey && !apiKey.includes("your_anthropic") && apiKey.startsWith("sk-")) {
      try {
        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": apiKey,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-3-haiku-20240307",
            max_tokens: 300,
            system: `You are the AI Concierge for "Xalveriq", a luxury, futuristic interior architecture firm in Pune, Maharashtra, India.
Key facts:
- Tagline: "Spaces, Intelligently Designed."
- Handover guarantee: Strictly 45 days with a written ₹2,500/day penalty clause if delayed.
- Warranty: 10-year comprehensive warranty on all modular woodwork and hardware.
- Materials: 100% IS:710 Boiling Water Proof (BWP) Marine Plywood, Blum (Austria) and Hafele (Germany) lifetime fittings, FENIX NTM nano-tech surfaces, Italian Statuario marble.
- Pricing in Pune:
  - Essential Elegance: ₹1,550 - ₹1,850 / sq.ft (Typical 2BHK: ₹16L - ₹19L)
  - Signature Luxury: ₹2,150 - ₹2,550 / sq.ft (Typical 3BHK: ₹28L - ₹34L)
  - Haute Architectural: ₹2,950 - ₹3,600 / sq.ft (Penthouses: ₹45L+)
- Experience Centers: Koregaon Park (Lane 7) and Balewadi High Street / Baner.
- Pune Societies served: Panchshil Towers, Trump Towers, Amanora Gateway, Yoo Pune, Castel Royale, Kolte Patil Life Republic.
Always be polite, elegant, crisp, and helpful. Offer to book a consultation or connect on WhatsApp (+91 98230 92587).`,
            messages: [
              ...(history || []).map((h: Message) => ({
                role: h.role === "assistant" ? "assistant" : "user",
                content: h.content,
              })),
              { role: "user", content: message },
            ],
          }),
        });

        const data = await response.json();
        if (data?.content?.[0]?.text) {
          return NextResponse.json({ reply: data.content[0].text });
        }
      } catch (err) {
        console.error("External AI call failed, falling back to local engine:", err);
      }
    }

    // High-Intelligence Fallback Knowledge Engine
    let reply = "";

    if (lower.includes("45 day") || lower.includes("guarantee") || lower.includes("timeline") || lower.includes("delay")) {
      reply = "Our 45-Day Handover Guarantee is backed by a written contract clause: if we delay by even a single day beyond 45 days, we pay you ₹2,500/day in penalties. We achieve this by manufacturing 85% of modular joinery in our German-automated factory while civil and ceiling works happen on-site in parallel.";
    } else if (lower.includes("cost") || lower.includes("price") || lower.includes("budget") || lower.includes("rate") || lower.includes("bhk")) {
      reply = "In Pune, our turnkey interior architecture ranges across three calibrated tiers:\n• Essential Elegance: ₹1,550 - ₹1,850/sq.ft (approx ₹18L for 2BHK)\n• Signature Luxury: ₹2,150 - ₹2,550/sq.ft (approx ₹28L-₹35L for 3BHK)\n• Haute Architectural: ₹2,950 - ₹3,600/sq.ft (for luxury duplexes & penthouses)\nAll packages include a 10-year warranty and a final no-escalation Bill of Quantities.";
    } else if (lower.includes("material") || lower.includes("ply") || lower.includes("hardware") || lower.includes("wood")) {
      reply = "We exclusively specify IS:710 Boiling Water Proof (BWP) Marine Grade Plywood treated against termites. For all hardware, soft-close hinges, and lift-up flaps, we use Blum (Austria) and Hafele (Germany), both carrying lifetime manufacturer warranties.";
    } else if (lower.includes("location") || lower.includes("office") || lower.includes("studio") || lower.includes("address") || lower.includes("pune")) {
      reply = "You are warmly welcome to visit our Flagship Experience Centre at Lane 7, Koregaon Park, or our Design Lab on Balewadi High Street / Baner, Pune. We also conduct on-site visits across Kharadi, Kalyani Nagar, Viman Nagar, and Hinjawadi.";
    } else if (lower.includes("vastu") || lower.includes("vasthu")) {
      reply = "Yes, our team specializes in 'Invisible Vastu'—aligning spatial orientations (kitchen in South-East, master bed in South-West, pooja in North-East) seamlessly without compromising the weightless, futuristic minimalist aesthetic.";
    } else if (lower.includes("book") || lower.includes("consult") || lower.includes("contact") || lower.includes("call")) {
      reply = "You can schedule a complimentary design consultation right here on our Contact page, or message our senior architects directly on WhatsApp at +91 98230 XALV (92587). What society or area in Pune is your property located in?";
    } else {
      reply = "Welcome to Xalveriq. We are Pune's first AI-integrated luxury interior architecture practice. Whether you're curious about our strict 45-day handover guarantee, turnkey pricing for your 2/3/4 BHK, or our proprietary AI Studio, I'm here to assist!";
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Concierge outer error:", error?.message || error);
    return NextResponse.json(
      { error: "Internal server error occurred.", details: error?.message },
      { status: 500 }
    );
  }
}
