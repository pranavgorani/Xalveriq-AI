import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  propertyType?: string;
  designScope?: string;
  estimatedBudget?: string;
  details?: string;
  whatsappConsent?: boolean;
  bhk?: string;
  budgetRange?: string;
  timeline?: string;
  locality?: string;
  notes?: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: LeadPayload = await req.json();

    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Name and mobile number are required." },
        { status: 400 }
      );
    }

    // Clean and validate Indian phone number (10 digits)
    const cleanPhone = data.phone.replace(/[\s\-\+\(\)]/g, "").slice(-10);
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    // Normalize property and budget info from either form schema
    const property = data.propertyType || data.bhk || "Residential Property";
    const budget = data.estimatedBudget || data.budgetRange || "₹18,00,000 – ₹30,00,000";
    const city = data.city || data.locality || "Nashik";
    const scope = data.designScope || "Full Home Interior";
    const projectNotes = data.details || data.notes || "";

    // Smart Lead Scoring Algorithm
    let score: "Hot" | "Warm" | "Cold" = "Warm";
    let priorityReason = "Standard Active Lead Pipeline";

    const isHighTicket =
      budget.includes("40,00,000") ||
      budget.includes("75,00,000") ||
      budget.includes("Above") ||
      property.includes("Villa") ||
      property.includes("Penthouse") ||
      property.includes("4 BHK");

    if (isHighTicket) {
      score = "Hot";
      priorityReason = "High-Ticket Luxury Villa / Penthouse Consultation";
    } else if (budget.includes("Under ₹5,00,000")) {
      score = "Warm";
      priorityReason = "Modular Scope";
    }

    const leadRecord = {
      id: `XLV-${Date.now().toString().slice(-6)}`,
      name: data.name.trim(),
      phone: `+91 ${cleanPhone}`,
      email: data.email?.trim() || "",
      city,
      propertyType: property,
      designScope: scope,
      estimatedBudget: budget,
      details: projectNotes,
      score,
      priorityReason,
      receivedAt: new Date().toISOString(),
    };

    console.log("New Xalveriq Consultation Lead Logged:", leadRecord);

    return NextResponse.json({
      success: true,
      leadId: leadRecord.id,
      score: leadRecord.score,
      message:
        "Your consultation request has been confirmed. Our senior architectural team will reach out to schedule your meeting.",
    });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Failed to process consultation request. Please try again or reach out on WhatsApp." },
      { status: 500 }
    );
  }
}
