"use client";

import { useState, useRef, useEffect } from "react";
import Button from "./ui/Button";

interface DreamInputProps {
  onSubmit: (dream: string) => void;
  loading: boolean;
}

const PLACEHOLDERS = [
  "Aku berdiri di hutan merah, dan pohon-pohonnya seperti bernafas...",
  "Ada pintu di dasar laut yang terus kucoba raih...",
  "Aku melihat seseorang yang kusayangi pergi dan tak bisa kuingat wajahnya...",
  "Bulan berwarna hitam dan jatuh perlahan ke bumi...",
  "Aku terus mendaki tangga yang muncul sendiri di bawah kakiku...",
];

export default function DreamInput({ onSubmit, loading }: DreamInputProps) {
  const [dream, setDream] = useState("");
  const [placeholder, setPlaceholder] = useState(PLACEHOLDERS[0]);
  const [charCount, setCharCount] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholder(PLACEHOLDERS[Math.floor(Math.random() * PLACEHOLDERS.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length <= 2000) {
      setDream(val);
      setCharCount(val.length);
    }
    // Auto-resize
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSubmit = () => {
    if (dream.trim().length >= 10) {
      onSubmit(dream.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Label */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-crimson/40" />
        <span className="font-cinzel text-xs tracking-[0.3em] text-pale-red/60 uppercase">
          Ceritakan Mimpimu
        </span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-crimson/40" />
      </div>

      {/* Textarea container */}
      <div className="relative group">
        {/* Corner ornaments */}
        <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-crimson/40 group-focus-within:border-crimson transition-colors duration-500" />
        <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-crimson/40 group-focus-within:border-crimson transition-colors duration-500" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-crimson/40 group-focus-within:border-crimson transition-colors duration-500" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-crimson/40 group-focus-within:border-crimson transition-colors duration-500" />

        <textarea
          ref={textareaRef}
          value={dream}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={5}
          className="dream-input w-full p-6 resize-none rounded-sm min-h-[140px] leading-relaxed text-ghost/90 text-lg italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        />

        {/* Character count */}
        <div className="absolute bottom-3 right-4 font-cinzel text-xs text-ghost/20">
          {charCount} / 2000
        </div>
      </div>

      {/* Hint */}
      <p className="mt-2 text-xs text-ghost/25 font-cormorant italic text-center">
        Ctrl+Enter untuk kirim · Oracle membaca semua mimpi, seberapapun anehnya
      </p>

      {/* Submit */}
      <div className="flex justify-center mt-8">
        <Button
          onClick={handleSubmit}
          loading={loading}
          disabled={dream.trim().length < 10 || loading}
        >
          ✦ Tanya Oracle ✦
        </Button>
      </div>
    </div>
  );
}