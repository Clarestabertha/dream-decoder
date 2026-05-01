export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function intensityLabel(n: number): string {
  if (n <= 2) return "Whisper";
  if (n <= 4) return "Echo";
  if (n <= 6) return "Vision";
  if (n <= 8) return "Omen";
  return "Revelation";
}

export function intensityColor(n: number): string {
  if (n <= 3) return "text-spirit-blue";
  if (n <= 6) return "text-oracle-gold";
  if (n <= 8) return "text-pale-red";
  return "text-blood-red";
}
