"use client";

import { useEffect, useState } from "react";
import OracleAvatar from "./OracleAvatar";

const WHISPERS = [
  "Oracle membuka matanya...",
  "Menyaring benang-benang alam bawah sadarmu...",
  "Simbol-simbol muncul dari air yang gelap...",
  "Membaca apa yang diungkap pikiran tidurmu...",
  "Bunga spider lily merah bergoyang di angin roh...",
  "Di antara dua dunia, makna mulai terbentuk...",
  "Ia melihat wujud dari apa yang kau impikan...",
];

export default function LoadingWhisper() {
  const [whisperIdx, setWhisperIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWhisperIdx((i) => (i + 1) % WHISPERS.length);
        setVisible(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 py-16 animate-fade-in">
      {/* Avatar with stronger glow during loading */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-crimson/20 blur-3xl animate-pulse-slow scale-150" />
        <OracleAvatar size="lg" animated />
      </div>

      {/* Whisper text */}
      <div className="text-center">
        <p
          className={`font-cormorant italic text-xl text-ghost/70 transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {WHISPERS[whisperIdx]}
        </p>
      </div>

      {/* Animated separator */}
      <div className="flex items-center gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-crimson/60 animate-bounce"
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>

      {/* Rune circles */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border border-crimson/20 rounded-full animate-spin-slow" />
        <div
          className="absolute inset-2 border border-crimson/10 rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "15s" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-crimson/50 text-lg">✦</span>
        </div>
      </div>
    </div>
  );
}