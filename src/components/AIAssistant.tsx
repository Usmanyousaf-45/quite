"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { handleAICommand, speak } from "@/lib/aiEngine";

export default function AIAssistant() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi 👋 Try saying 'open facebook' or 'open projects'" },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🎤 VOICE
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      speak("Voice not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    setListening(true);

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const text = event.results[0][0].transcript;
      setInput(text);
      send(text);
      setListening(false);
    };

    recognition.onerror = () => setListening(false);

    recognition.start();
  };

  // 🚀 SEND
  const send = (custom?: string) => {
    const text = custom || input;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);

    handleAICommand(text, router);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text: "Done ✅" }]);
    }, 300);

    setInput("");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* BUTTON */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setOpen(!open);
          speak("Assistant activated");
        }}
        className="w-14 h-14 rounded-full bg-linear-to-r from-pink-500 to-cyan-400 text-black font-bold shadow-xl"
      >
        🤖
      </motion.button>

      {/* PANEL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="mt-3 w-80 h-105 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col overflow-hidden"
          >
            {/* HEADER */}
            <div className="p-3 border-b border-white/10 text-white text-sm flex justify-between">
              🤖 AI Assistant
              <button onClick={() => setOpen(false)}>✖</button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    m.role === "user"
                      ? "ml-auto bg-cyan-500/20 text-cyan-200"
                      : "bg-white/10 text-gray-200"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="p-2 flex gap-2 border-t border-white/10">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type or speak..."
                className="flex-1 p-2 rounded-lg bg-white/5 text-white outline-none text-sm"
              />

              <button
                onClick={startListening}
                className={`px-3 rounded-lg ${
                  listening ? "bg-red-500" : "bg-cyan-500"
                }`}
              >
                🎤
              </button>

              <button
                onClick={() => send()}
                className="px-3 bg-pink-500 text-black rounded-lg"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}