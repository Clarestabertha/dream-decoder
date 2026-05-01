"use client";

import { useState, useEffect } from "react";
import OracleAvatar from "@/components/OracleAvatar";
import DreamInput from "@/components/DreamInput";
import LoadingWhisper from "@/components/LoadingWhisper";
import OracleResponse from "@/components/OracleResponse";
import { OracleReading } from "@/lib/gemini";

type State = "idle" | "loading" | "result" | "error";

// Floating particles background
function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            borderRadius: "50%",
            background: i % 3 === 0 ? "rgba(139,0,0,0.5)" : i % 3 === 1 ? "rgba(123,143,196,0.3)" : "rgba(201,168,76,0.3)",
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

// Logo mark
function LogoMark() {
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(139,0,0,0.5)" strokeWidth="0.5" />
          <circle cx="16" cy="16" r="10" fill="none" stroke="rgba(139,0,0,0.3)" strokeWidth="0.5" />
          {/* Eye symbol */}
          <ellipse cx="16" cy="16" rx="8" ry="5" fill="none" stroke="rgba(201,168,76,0.7)" strokeWidth="0.8" />
          <circle cx="16" cy="16" r="3" fill="rgba(139,0,0,0.8)" />
          <circle cx="16" cy="16" r="1.2" fill="rgba(201,168,76,0.9)" />
          {/* Top/bottom marks */}
          <line x1="16" y1="1" x2="16" y2="5" stroke="rgba(139,0,0,0.4)" strokeWidth="0.5" />
          <line x1="16" y1="27" x2="16" y2="31" stroke="rgba(139,0,0,0.4)" strokeWidth="0.5" />
        </svg>
      </div>
      <div>
        <span className="font-cinzel text-sm tracking-[0.2em] text-ghost/80 block leading-none">DREAM</span>
        <span className="font-cinzel text-xs tracking-[0.35em] text-crimson/70 block leading-none mt-0.5">DECODER</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [state, setState] = useState<State>("idle");
  const [reading, setReading] = useState<OracleReading | null>(null);
  const [dream, setDream] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (dreamText: string) => {
    setDream(dreamText);
    setState("loading");
    setError("");

    try {
      const res = await fetch("/api/decode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dream: dreamText }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Oracle sedang diam.");
      }

      setReading(data.reading);
      setState("result");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gangguan tak dikenal.");
      setState("error");
    }
  };

  const handleReset = () => {
    setState("idle");
    setReading(null);
    setDream("");
    setError("");
  };

  return (
    <main className="relative min-h-screen bg-radial-void">
      {mounted && <Particles />}

      {/* Top crimson mist */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent z-10" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/5">
        <LogoMark />
        <p className="font-cormorant italic text-ghost/25 text-sm hidden md:block">
          &ldquo;Di antara tidur dan terjaga, kebenaran menyingkap dirinya.&rdquo;
        </p>
        <div className="w-24" />
      </header>

      {/* Main content */}
      <div className="relative z-10 px-6 py-12 md:py-20">

        {state === "idle" && (
          <div className="animate-rise">
            {/* Hero */}
            <div className="flex flex-col items-center text-center mb-16">
              <OracleAvatar size="lg" animated />

              <div className="mt-8 mb-4">
                <p className="font-cinzel text-xs tracking-[0.5em] text-crimson/50 uppercase mb-3">
                  閻魔 Yomi — Oracle Mimpi
                </p>
                <h1 className="font-cinzel text-4xl md:text-5xl text-ghost/90 oracle-glow glitch">
                  Dream Decoder
                </h1>
                <div className="sep my-5 max-w-xs mx-auto" />
                <p className="font-cormorant italic text-xl text-ghost/50 max-w-md mx-auto leading-relaxed">
                  Bisikkan mimpimu. Oracle melihat melampaui tabir — simbol, bayangan, dan nubuat yang dibawa pikiran tidurmu.
                </p>
              </div>

              {/* Candle decorations */}
              <div className="flex items-end gap-16 mt-8 mb-2">
                {[16, 24, 16].map((h, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className="relative w-1.5 animate-candle"
                      style={{ height: `${h}px`, background: "rgba(201,168,76,0.9)" }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-3 bg-oracle-gold/60 blur-sm rounded-full animate-candle" />
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-white/80 rounded-full" />
                    </div>
                    <div className="w-4 h-1 bg-oracle-gold/30 mt-0.5 rounded-sm" />
                  </div>
                ))}
              </div>
            </div>

            <DreamInput onSubmit={handleSubmit} loading={false} />

            {/* Bottom tagline */}
            <p className="text-center font-cormorant italic text-ghost/20 text-sm mt-12">
              Semua mimpi itu suci. Semua makna itu nyata. ✦
            </p>
          </div>
        )}

        {state === "loading" && <LoadingWhisper />}

        {state === "result" && reading && (
          <OracleResponse reading={reading} dream={dream} onReset={handleReset} />
        )}

        {state === "error" && (
          <div className="flex flex-col items-center gap-6 py-20 text-center animate-rise">
            <OracleAvatar size="md" animated />
            <div>
              <p className="font-cinzel text-xs tracking-[0.3em] text-crimson/60 uppercase mb-3">
                Gangguan Roh
              </p>
              <p className="font-cormorant italic text-xl text-ghost/60 max-w-md">
                {error}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="font-cinzel text-xs tracking-widest text-ghost/30 hover:text-ghost/60 uppercase transition-colors border border-white/10 px-6 py-3 hover:border-white/20"
            >
              ← Kembali
            </button>
          </div>
        )}
      </div>

      {/* Bottom border */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />
    </main>
  );
}