"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, MessageSquare } from "lucide-react";
import { SITE_DATA } from "@/content/site";

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
      text: `Hello. I am the Xalveriq studio assistant. Ask me anything about our typical timelines, what is included in full-home interiors in Pune, or how we plan your space.`,
      timestamp: "Just now",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingDisplayText, setTypingDisplayText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Typical cost for a 3 BHK?",
    "How does your process work?",
    "What materials do you use?",
    "Visit Koregaon Park studio",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, typingDisplayText]);

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
      const replyText = data.reply || "Thank you. Our Pune team can review your specific layout during a consultation.";
      streamBotResponse(replyText);
    } catch (err) {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: "assistant",
          text: `You can reach our design team directly via WhatsApp at ${SITE_DATA.contact.phone} for immediate queries.`,
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
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[4px] bg-white border border-border hover:border-ink text-ink shadow-soft transition-all duration-200"
            aria-label="Open Studio AI Assistant"
          >
            <div className="w-6 h-6 rounded-[2px] bg-paper-alt flex items-center justify-center text-ink">
              <MessageSquare className="w-3.5 h-3.5 text-terracotta" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-text-muted uppercase tracking-wider font-sans">
                Studio Assistant
              </span>
              <span className="text-xs font-medium text-ink">
                Ask a Question
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[92vw] sm:w-[380px] h-[520px] max-h-[85vh] rounded-[4px] bg-white border border-border shadow-card flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 border-b border-border bg-paper flex items-center justify-between">
            <div>
              <h4 className="text-sm font-serif font-normal text-ink">
                Xalveriq Assistant
              </h4>
              <p className="text-[11px] text-text-muted">
                Answers regarding Pune flat planning & process
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-text-muted hover:text-ink transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs bg-paper/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-[4px] p-3 leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-terracotta text-white"
                      : "bg-white border border-border text-ink"
                  }`}
                >
                  {msg.text}
                  <span
                    className={`text-[9px] block text-right mt-1 font-mono ${
                      msg.role === "user" ? "text-white/80" : "text-text-muted"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Typewriter Streaming Bubble */}
            {typingDisplayText && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-[4px] p-3 leading-relaxed bg-white border border-border text-ink">
                  {typingDisplayText}
                  <span className="inline-block w-1.5 h-3 ml-1 bg-terracotta animate-pulse" />
                </div>
              </div>
            )}

            {isTyping && !typingDisplayText && (
              <div className="text-[11px] text-text-muted pl-1 italic">
                Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 border-t border-border bg-paper/60 overflow-x-auto no-scrollbar flex items-center gap-1.5">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="shrink-0 px-2.5 py-1 rounded-[2px] bg-white border border-border hover:border-ink text-[11px] text-text-muted hover:text-ink transition-all whitespace-nowrap"
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
            className="p-3 border-t border-border bg-white flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about Pune projects, costs, or process..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 border border-border rounded-[4px] text-xs text-ink focus:outline-none focus:border-ink placeholder:text-[#9C958B]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 bg-terracotta text-white rounded-[4px] disabled:opacity-40 transition-opacity"
              aria-label="Send"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
