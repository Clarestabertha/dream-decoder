"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  loading?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  const base =
    "relative font-cinzel tracking-[0.2em] uppercase text-sm transition-all duration-500 overflow-hidden group";

  const variants = {
    primary: cn(
      "px-10 py-4 border border-crimson/60 text-pale-red",
      "hover:border-crimson hover:text-ghost hover:shadow-[0_0_30px_rgba(139,0,0,0.4)]",
      "active:scale-[0.98]",
      "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-crimson/60"
    ),
    ghost: cn(
      "px-6 py-2 border border-white/10 text-ghost/50 text-xs",
      "hover:border-white/30 hover:text-ghost/80"
    ),
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      disabled={disabled || loading}
      {...props}
    >
      {/* Background shimmer */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-crimson/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

      {loading ? (
        <span className="flex items-center gap-3">
          <span className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1 h-1 rounded-full bg-pale-red animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </span>
          <span>Membaca tabir...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
}