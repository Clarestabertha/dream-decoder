import { GoogleGenerativeAI } from "@google/generative-ai";
import { ORACLE_SYSTEM_PROMPT, buildUserPrompt } from "./prompt";

export interface OracleSymbol {
  symbol: string;
  meaning: string;
  shadow: string;
}

export interface OracleReading {
  symbols: OracleSymbol[];
  interpretation: string;
  prophecy: string;
  warning: string;
  spirit_word: string;
  ritual: string;
  intensity: number;
}

export async function decodeDream(dreamText: string): Promise<OracleReading> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction: ORACLE_SYSTEM_PROMPT,
    generationConfig: {
      temperature: 0.9,
      topP: 0.95,
      maxOutputTokens: 2048,
      responseMimeType: "application/json",
    },
  });

  const userPrompt = buildUserPrompt(dreamText);
  const result = await model.generateContent(userPrompt);
  const text = result.response.text();

  // Strip markdown fences if present
  const cleaned = text.replace(/```json\n?|\n?```/g, "").trim();
  const reading: OracleReading = JSON.parse(cleaned);

  // Clamp intensity
  reading.intensity = Math.max(1, Math.min(10, Number(reading.intensity)));

  return reading;
}
