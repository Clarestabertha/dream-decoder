import { NextRequest, NextResponse } from "next/server";
import { decodeDream } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { dream } = body;

    if (!dream || typeof dream !== "string" || dream.trim().length < 10) {
      return NextResponse.json(
        { error: "The Oracle requires more detail. Describe your dream." },
        { status: 400 }
      );
    }

    if (dream.trim().length > 2000) {
      return NextResponse.json(
        { error: "Your dream is too vast even for the Oracle. Keep it under 2000 characters." },
        { status: 400 }
      );
    }

    const reading = await decodeDream(dream.trim());
    return NextResponse.json({ reading });
  } catch (err) {
    console.error("[Dream Decoder API Error]", err);

    if (err instanceof SyntaxError) {
      return NextResponse.json(
        { error: "The Oracle's vision was clouded. Try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "The Oracle is silent. A disturbance in the spirit realm. Try again." },
      { status: 500 }
    );
  }
}
