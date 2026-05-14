import { heuristicRecommendations } from "@/lib/heuristicRecommendations";
import { analyzeWithGroq } from "@/services/groqAnalyze";
import type { QuizAnswer } from "@/types/quiz";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { answers?: QuizAnswer[] };
    const answers = body.answers;
    if (!Array.isArray(answers) || answers.length === 0) {
      return NextResponse.json({ error: "answers required" }, { status: 400 });
    }

    try {
      const recommendations = await analyzeWithGroq(answers);
      if (recommendations.length === 0) {
        return NextResponse.json({
          recommendations: heuristicRecommendations(answers),
          fallback: true,
        });
      }
      return NextResponse.json({ recommendations });
    } catch {
      return NextResponse.json({
        recommendations: heuristicRecommendations(answers),
        fallback: true,
      });
    }
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
