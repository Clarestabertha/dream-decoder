"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Result is shown inline on the main page (SPA flow).
// This route exists for completeness and redirects home.
export default function ResultPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-cormorant italic text-ghost/40 text-xl">
        Returning to the Oracle...
      </p>
    </div>
  );
}
