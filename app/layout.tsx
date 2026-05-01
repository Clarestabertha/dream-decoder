import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Decoder — The Oracle Awaits",
  description:
    "Whisper your dream to the Oracle. She sees what lies beneath — symbols, omens, prophecies for your waking hours.",
  openGraph: {
    title: "Dream Decoder",
    description: "The Oracle decodes your dreams.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
