"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, Bot, Cpu } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

export function AiConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "intro-1",
      role: "assistant",
      text: "Namaste! I am the Xalveriq AI Concierge. Ask me about our 45-day handover guarantee, turnkey interior pricing across Pune, or our German factory joinery.",
      timestamp: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingDisplayText, setTypingDisplayText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "What is your 45-day guarantee?",
    "Cost of 3 BHK in Baner?",
    "What materials & warranty?",
    "Visit Koregaon Park studio",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, typingDisplayText]);

  // Simulates typewriter streaming for a realistic AI feel
  const streamBotResponse = (fullText: string) => {
    setIsTyping(false);
    setTypingDisplayText("");
    let currentIdx = 0;
    const interval = setInterval(() => {
      currentIdx += 2;
      setTypingDisplayText(fullText.slice(0, currentIdx));
      if (currentIdx >= fullText.length) {
        clearInterval(interval);
        setTypingDisplayText("");
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            role: "assistant",
            text: fullText,
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }
    }, 18);
  };

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: query,
          history: messages.map((m) => ({ role: m.role, content: m.text })),
        }),
      });

      const data = await res.json();
      const replyText = data.reply || "Thank you for asking. Our Pune architectural team is available to assist you.";
      streamBotResponse(replyText);
    } catch (err) {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "assistant",
          text: "I'm having a brief connection pause, but you can always reach our Pune studio directly on WhatsApp at +91 98230 92587.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 px-4.5 py-3 rounded-full bg-white/95 hover:bg-white border border-[#E4DCCF] hover:border-[#6D4AFF] text-[#16161D] shadow-[0_10px_35px_-5px_rgba(109,74,255,0.22)] backdrop-blur-xl transition-all duration-300 hover:scale-105"
            aria-label="Open Ask Xalveriq AI Concierge"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full btn-primary-gradient flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#14A8D6] animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#14A8D6]" />
            </div>

            <div className="flex flex-col text-left pr-1">
              <span className="text-[10px] text-[#14A8D6] font-bold tracking-wider uppercase flex items-center gap-1">
                <Cpu className="w-2.5 h-2.5" />
                <span>AI Concierge</span>
              </span>
              <span className="text-xs font-bold text-[#16161D] group-hover:text-[#6D4AFF] transition-colors">
                Ask Xalveriq AI
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[92vw] sm:w-[420px] h-[560px] max-h-[85vh] rounded-3xl bg-white/95 border border-[#E4DCCF] shadow-[0_20px_60px_-10px_rgba(22,22,29,0.18)] backdrop-blur-2xl flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 border-b border-[#E4DCCF] bg-[#FAF7F2]/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl btn-primary-gradient p-[1px]">
                <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#6D4AFF]" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#16161D] flex items-center gap-1.5">
                  <span>Ask Xalveriq AI</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </h4>
                <p className="text-[10px] text-[#5E5A55]">
                  Pune Interior Intelligence & Pricing
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-[#5E5A55] hover:text-[#16161D] hover:bg-[#FAF7F2] transition-colors"
              aria-label="Close Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs bg-[#FAF7F2]/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-full bg-white border border-[#E4DCCF] flex items-center justify-center text-[#6D4AFF] shrink-0 mt-0.5 shadow-xs">
                    <Sparkles className="w-3 h-3" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "btn-primary-gradient text-white shadow-sm"
                      : "bg-white border border-[#E4DCCF] text-[#16161D] shadow-xs"
                  }`}
                >
                  {msg.text}
                  <span className={`text-[9px] block text-right mt-1 font-mono ${msg.role === "user" ? "text-white/80" : "text-[#5E5A55]"}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Typewriter Streaming Bubble */}
            {typingDisplayText && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-6 h-6 rounded-full bg-white border border-[#E4DCCF] flex items-center justify-center text-[#6D4AFF] shrink-0 mt-0.5 shadow-xs">
                  <Sparkles className="w-3 h-3" />
                </div>
                <div className="max-w-[82%] rounded-2xl p-3.5 leading-relaxed bg-white border border-[#14A8D6]/50 text-[#16161D] shadow-xs">
                  {typingDisplayText}
                  <span className="inline-block w-1.5 h-3 ml-1 bg-[#14A8D6] animate-pulse" />
                </div>
              </div>
            )}

            {/* Loading Indicator when awaiting API */}
            {isTyping && !typingDisplayText && (
              <div className="flex items-center gap-2 text-[#5E5A55] text-xs pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14A8D6] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D4AFF] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#B08A57] animate-bounce [animation-delay:0.4s]" />
                <span className="text-[10px] font-mono text-[#5E5A55]">Synthesizing architectural knowledge...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-4 py-2 border-t border-[#E4DCCF] bg-[#F1EBE1]/60 overflow-x-auto no-scrollbar flex items-center gap-2">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="shrink-0 px-3 py-1 rounded-full bg-white hover:bg-[#FAF7F2] border border-[#E4DCCF] hover:border-[#B08A57] text-[10px] text-[#5E5A55] hover:text-[#16161D] font-medium transition-all whitespace-nowrap shadow-xs"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-[#E4DCCF] bg-white flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about 45-day guarantee, Pune pricing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E4DCCF] text-xs text-[#16161D] placeholder-[#5E5A55]/60 focus:outline-none focus:border-[#6D4AFF]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl btn-primary-gradient text-white disabled:opacity-40 transition-opacity shadow-sm"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
