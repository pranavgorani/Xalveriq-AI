"use client";

import { useState } from "react";
import { Calendar, MapPin, Video, Check } from "lucide-react";

export function SlotPicker() {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("11:30 AM");
  const [meetingType, setMeetingType] = useState<"koregaon-park" | "baner" | "virtual">("koregaon-park");
  const [isBooked, setIsBooked] = useState(false);

  // Generate next 7 days
  const days = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      index: i,
      dayName: d.toLocaleDateString("en-IN", { weekday: "short" }),
      dateNum: d.getDate(),
      month: d.toLocaleDateString("en-IN", { month: "short" }),
      fullDateStr: d.toLocaleDateString("en-IN", { dateStyle: "medium" }),
    };
  });

  const timeSlots = [
    "10:30 AM",
    "11:30 AM",
    "02:00 PM",
    "03:30 PM",
    "05:00 PM",
    "06:30 PM",
  ];

  const handleConfirm = () => {
    setIsBooked(true);
  };

  return (
    <div className="relative rounded-3xl bg-white/95 border border-[#E4DCCF] p-6 sm:p-8 space-y-6 shadow-[0_12px_40px_rgba(22,22,29,0.06)]">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4DCCF] text-[#6D4AFF] text-xs font-bold uppercase tracking-wider mb-2 shadow-xs">
          <Calendar className="w-3.5 h-3.5 text-[#14A8D6]" />
          <span>Interactive Calendar</span>
        </div>
        <h4 className="text-xl sm:text-2xl font-bold text-[#16161D]">
          Reserve an Architectural Slot
        </h4>
        <p className="text-xs text-[#5E5A55] font-normal">
          Meet our senior principal architect for a 45-minute spatial blueprint review.
        </p>
      </div>

      {isBooked ? (
        <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
          <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-600 flex items-center justify-center mx-auto">
            <Check className="w-6 h-6 stroke-[3]" />
          </div>
          <h5 className="text-base font-bold text-[#16161D]">
            Appointment Reserved!
          </h5>
          <p className="text-xs text-[#5E5A55] leading-relaxed max-w-sm mx-auto font-normal">
            Your consultation is confirmed for <strong className="text-[#16161D]">{days[selectedDateIndex].fullDateStr}</strong> at <strong className="text-[#16161D]">{selectedTimeSlot}</strong> ({meetingType === "koregaon-park" ? "Koregaon Park Flagship" : meetingType === "baner" ? "Baner Design Lab" : "Virtual 3D Video Call"}). A calendar invite has been sent.
          </p>
          <button
            onClick={() => setIsBooked(false)}
            className="text-xs text-[#8E6835] font-bold hover:underline pt-2 block mx-auto"
          >
            Change Time Slot
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Meeting Type Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#16161D]">
              Meeting Format
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setMeetingType("koregaon-park")}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  meetingType === "koregaon-park"
                    ? "bg-white border-2 border-[#B08A57] text-[#16161D] shadow-xs"
                    : "bg-[#FAF7F2] border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D] hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8E6835]" />
                  <span>Koregaon Park</span>
                </div>
                <span className="text-[10px] text-[#5E5A55] block">Flagship Studio</span>
              </button>

              <button
                type="button"
                onClick={() => setMeetingType("baner")}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  meetingType === "baner"
                    ? "bg-white border-2 border-[#6D4AFF] text-[#16161D] shadow-xs"
                    : "bg-[#FAF7F2] border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D] hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#6D4AFF]" />
                  <span>Baner / Balewadi</span>
                </div>
                <span className="text-[10px] text-[#5E5A55] block">High Street Lab</span>
              </button>

              <button
                type="button"
                onClick={() => setMeetingType("virtual")}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  meetingType === "virtual"
                    ? "bg-white border-2 border-[#14A8D6] text-[#16161D] shadow-xs"
                    : "bg-[#FAF7F2] border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D] hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <Video className="w-3.5 h-3.5 text-[#14A8D6]" />
                  <span>Virtual 3D Call</span>
                </div>
                <span className="text-[10px] text-[#5E5A55] block">Zoom Live 3D</span>
              </button>
            </div>
          </div>

          {/* Date Selector Row */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#16161D]">
              Select Date
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
              {days.map((day) => (
                <button
                  key={day.index}
                  type="button"
                  onClick={() => setSelectedDateIndex(day.index)}
                  className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center ${
                    selectedDateIndex === day.index
                      ? "bg-white border-2 border-[#6D4AFF] text-[#16161D] shadow-xs"
                      : "bg-[#FAF7F2] border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D] hover:bg-white"
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono font-bold text-[#8E6835]">{day.dayName}</span>
                  <span className="text-sm font-bold text-[#16161D] my-0.5">{day.dateNum}</span>
                  <span className="text-[9px] text-[#5E5A55]">{day.month}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot Picker */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#16161D]">
              Select Time Slot (IST)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTimeSlot(slot)}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                    selectedTimeSlot === slot
                      ? "btn-primary-gradient text-white shadow-xs"
                      : "bg-[#FAF7F2] border-[#E4DCCF] text-[#5E5A55] hover:text-[#16161D] hover:bg-white"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            className="w-full py-3.5 rounded-full btn-primary-gradient text-white font-bold text-xs uppercase tracking-wider"
          >
            Confirm Reservation: {days[selectedDateIndex].dayName}, {days[selectedDateIndex].dateNum} {days[selectedDateIndex].month} at {selectedTimeSlot}
          </button>
        </div>
      )}
    </div>
  );
}
