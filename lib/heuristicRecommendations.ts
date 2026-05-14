import type { QuizAnswer, RecommendationItem } from "@/types/quiz";

export function heuristicRecommendations(answers: QuizAnswer[]): RecommendationItem[] {
  const role = answers[0]?.optionId;
  const base: RecommendationItem[] = [
    {
      service: "Google Workspace",
      percentage: "88%",
      reason: "A premium collaboration layer fits most modern workflows across roles.",
    },
    {
      service: "Google Cloud",
      percentage: "82%",
      reason: "When you need durable infrastructure, data platforms, and enterprise controls.",
    },
    {
      service: "Gemini API",
      percentage: "79%",
      reason: "Useful when you want to embed AI into products, workflows, or support experiences.",
    },
    {
      service: "Firebase",
      percentage: "76%",
      reason: "Strong when you are shipping apps quickly and want auth, hosting, and realtime features.",
    },
  ];

  if (role === "developer") {
    base.unshift({
      service: "Google Cloud",
      percentage: "93%",
      reason: "Developer-heavy answers suggest cloud-native delivery, APIs, and scalable backends.",
    });
  } else if (role === "student") {
    base.unshift({
      service: "Google Workspace for Education",
      percentage: "91%",
      reason: "Student workflows benefit from docs, Meet, and structured collaboration.",
    });
  } else if (role === "business") {
    base.unshift({
      service: "Google Ads",
      percentage: "90%",
      reason: "Business growth signals often map to measurable acquisition and performance campaigns.",
    });
  } else if (role === "creator") {
    base.unshift({
      service: "YouTube Premium / YouTube Studio",
      percentage: "92%",
      reason: "Creator paths usually prioritize distribution, analytics depth, and audience monetization.",
    });
  }

  const seen = new Set<string>();
  const deduped: RecommendationItem[] = [];
  for (const r of base) {
    const k = r.service.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    deduped.push(r);
    if (deduped.length >= 6) break;
  }
  return deduped;
}
