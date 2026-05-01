"use client";

import { OracleReading } from "@/lib/gemini";
import { intensityLabel, intensityColor } from "@/lib/utils";
import OracleAvatar from "./OracleAvatar";
import Button from "./ui/Button";

interface OracleResponseProps {
  reading: OracleReading;
  dream: string;
  onReset: () => void;
}

function IntensityBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-3 rounded-sm transition-all duration-300 ${
              i < value
                ? i < 3
                  ? "bg-spirit-blue"
                  : i < 6
                  ? "bg-oracle-gold"
                  : i < 8
                  ? "bg-pale-red"
                  : "bg-blood-red"
                : "bg-white/5"
            }`}
            style={{
              animationDelay: `${i * 0.1}s`,
              boxShadow: i < value ? `0 0 4px currentColor` : "none",
            }}
          />
        ))}
      </div>
      <span className={`font-cinzel text-xs tracking-widest ${intensityColor(value)}`}>
        {intensityLabel(value)} · {value}/10
      </span>
    </div>
  );
}

export default function OracleResponse({
  reading,
  dream,
  onReset,
}: OracleResponseProps) {
  return (
    <div className="w-full max-w-3xl mx-auto animate-rise">
      {/* Header */}
      <div className="text-center mb-12">
        <OracleAvatar size="md" animated />
        <div className="mt-6">
          <p className="font-cinzel text-xs tracking-[0.4em] text-crimson/60 uppercase mb-2">
            Oracle Telah Berbicara
          </p>
          <div className="sep my-4" />
        </div>
      </div>

      {/* Dream echo */}
      <div className="mb-10 p-6 border border-white/5 rounded-sm bg-white/[0.02] relative">
        <span className="absolute -top-2.5 left-6 bg-void px-2 font-cinzel text-[10px] tracking-[0.3em] text-ghost/30 uppercase">
          Mimpimu
        </span>
        <p className="font-cormorant italic text-ghost/50 text-lg leading-relaxed line-clamp-3">
          &ldquo;{dream}&rdquo;
        </p>
      </div>

      {/* Spirit Word */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-crimson/5 blur-2xl" />
        </div>
        <p className="font-cinzel text-[10px] tracking-[0.4em] text-ghost/30 uppercase mb-3 relative">
          Kata Roh
        </p>
        <p className="font-cinzel text-3xl text-oracle-gold oracle-glow relative">
          {reading.spirit_word}
        </p>
      </div>

      {/* Spiritual Intensity */}
      <div className="mb-10 flex flex-col items-center gap-2">
        <p className="font-cinzel text-[10px] tracking-[0.3em] text-ghost/30 uppercase">
          Intensitas Mimpi
        </p>
        <IntensityBar value={reading.intensity} />
      </div>

      <div className="sep mb-10" />

      {/* Interpretation */}
      <section className="mb-10">
        <h3 className="font-cinzel text-xs tracking-[0.3em] text-crimson/60 uppercase mb-5 flex items-center gap-3">
          <span className="text-crimson">⬡</span> Penafsiran
        </h3>
        <p className="font-cormorant text-xl leading-[1.9] text-ghost/85 italic">
          {reading.interpretation}
        </p>
      </section>

      <div className="sep mb-10" />

      {/* Symbols */}
      <section className="mb-10">
        <h3 className="font-cinzel text-xs tracking-[0.3em] text-crimson/60 uppercase mb-6 flex items-center gap-3">
          <span className="text-crimson">⬡</span> Simbol Terungkap
        </h3>
        <div className="space-y-5">
          {reading.symbols.map((sym, i) => (
            <div
              key={i}
              className="group p-5 border border-white/5 bg-white/[0.015] rounded-sm hover:border-crimson/20 transition-colors duration-500 relative overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-crimson/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-start gap-4">
                <span className="font-cinzel text-crimson/50 text-xs mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h4 className="font-cinzel text-sm text-oracle-gold/80 mb-2 tracking-wide">
                    {sym.symbol}
                  </h4>
                  <p className="font-cormorant text-base text-ghost/70 leading-relaxed mb-2">
                    {sym.meaning}
                  </p>
                  <p className="font-cormorant italic text-sm text-pale-red/50 border-t border-white/5 pt-2 mt-2">
                    <span className="font-cinzel text-[9px] tracking-widest text-crimson/40 not-italic mr-2">
                      BAYANGAN
                    </span>
                    {sym.shadow}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="sep mb-10" />

      {/* Prophecy */}
      <section className="mb-10 relative">
        <h3 className="font-cinzel text-xs tracking-[0.3em] text-crimson/60 uppercase mb-5 flex items-center gap-3">
          <span className="text-crimson">⬡</span> Nubuat Hari Ini
        </h3>
        <div className="p-8 border border-crimson/20 bg-crimson/[0.03] rounded-sm relative">
          {/* Decorative corner marks */}
          <span className="absolute top-2 left-2 text-crimson/20 text-xs font-cinzel">✦</span>
          <span className="absolute top-2 right-2 text-crimson/20 text-xs font-cinzel">✦</span>
          <span className="absolute bottom-2 left-2 text-crimson/20 text-xs font-cinzel">✦</span>
          <span className="absolute bottom-2 right-2 text-crimson/20 text-xs font-cinzel">✦</span>

          <p className="font-cormorant text-xl leading-[2] text-ghost/90 italic text-center">
            {reading.prophecy}
          </p>
        </div>
      </section>

      {/* Warning */}
      <section className="mb-10">
        <div className="flex items-center gap-4 p-4 border border-blood-red/20 bg-blood-red/[0.04] rounded-sm">
          <span className="text-blood-red text-lg shrink-0">⚠</span>
          <div>
            <p className="font-cinzel text-[10px] tracking-[0.3em] text-blood-red/50 uppercase mb-1">
              Peringatan Bayangan
            </p>
            <p className="font-cormorant italic text-ghost/70 text-base">
              {reading.warning}
            </p>
          </div>
        </div>
      </section>

      {/* Ritual */}
      <section className="mb-12 text-center">
        <h3 className="font-cinzel text-xs tracking-[0.3em] text-spirit-blue/50 uppercase mb-4 flex items-center justify-center gap-3">
          <span>☽</span> Ritual Hari Ini
        </h3>
        <p className="font-cormorant italic text-ghost/60 text-lg leading-relaxed max-w-lg mx-auto spirit-glow">
          {reading.ritual}
        </p>
      </section>

      <div className="sep mb-10" />

      {/* Footer / Reset */}
      <div className="text-center space-y-4">
        <p className="font-cormorant italic text-ghost/30 text-sm">
          Penglihatan Oracle memudar. Mimpi lain menanti.
        </p>
        <Button onClick={onReset} variant="ghost">
          ← Tafsir Mimpi Lain
        </Button>
      </div>
    </div>
  );
}