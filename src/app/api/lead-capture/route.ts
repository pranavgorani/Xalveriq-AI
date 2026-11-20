import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  whatsappConsent?: boolean;
  bhk: string;
  budgetRange: string;
  timeline: string; // e.g. "Immediate (Next 30 days)", "1-3 Months", "3-6 Months", "Exploring"
  locality: string;
  notes?: string;
}

export async function POST(req: NextRequest) {
  try {
    const data: LeadPayload = await req.json();

    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    // Smart Lead Scoring Algorithm
    // Hot: Ready possession (within 60 days) OR budget >= ₹30 Lakhs
    // Warm: Possession within 3-6 months OR budget ₹18-30 Lakhs
    // Cold: Just exploring (> 6 months) OR lower budget
    let score: "Hot" | "Warm" | "Cold" = "Warm";
    let priorityReason = "";

    const isUrgent =
      data.timeline.includes("Immediate") ||
      data.timeline.includes("30 days") ||
      data.timeline.includes("1-2 Months");

    const isHighBudget =
      data.budgetRange.includes("35L") ||
      data.budgetRange.includes("50L") ||
      data.budgetRange.includes("Haute") ||
      data.bhk.includes("4 BHK") ||
      data.bhk.includes("Penthouse");

    if (isUrgent && isHighBudget) {
      score = "Hot";
      priorityReason = "Immediate Possession & High-Ticket Luxury Scope";
    } else if (isUrgent || isHighBudget) {
      score = "Hot";
      priorityReason = "High Priority Scheduling - Fast Timeline / Prime Budget";
    } else if (data.timeline.includes("Exploring")) {
      score = "Cold";
      priorityReason = "Early Research Stage";
    } else {
      score = "Warm";
      priorityReason = "Standard Active Lead Pipeline";
    }

    const leadRecord = {
      ...data,
      score,
      priorityReason,
      receivedAt: new Date().toISOString(),
      id: `LEAD-PUN-${Date.now().toString().slice(-6)}`,
    };

    console.log("New Xalveriq Lead Captured:", leadRecord);

    return NextResponse.json({
      success: true,
      leadId: leadRecord.id,
      score: leadRecord.score,
      message:
        score === "Hot"
          ? "Priority Consultation Request Received! A senior architect from our Pune studio will contact you within 2 business hours."
          : "Consultation Request Confirmed! Our design team will review your requirements and reach out within 24 hours.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process lead request." },
      { status: 500 }
    );
  }
}

