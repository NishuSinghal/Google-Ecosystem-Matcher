import type { QuizAnswer, RecommendationItem } from "@/types/quiz";

const MODEL = "llama-3.1-8b-instant";

const SYSTEM = `You are an expert Google ecosystem strategist.
Given a user's quiz answers, recommend the most relevant Google services.
Use concise, confident language. Prefer specific products over vague categories.

Allowed service examples (you may include others if strongly justified):
Firebase, Google Cloud, Gemini API, Google Workspace, YouTube Premium,
Google Ads, Android Enterprise, Google Meet, Google Analytics, BigQuery,
Chrome Enterprise, Google One, Google Domains (legacy awareness ok), Looker Studio.

Return ONLY valid JSON matching this shape (no markdown fences):
{"recommendations":[{"service":"string","percentage":"string like 92%","reason":"string"}]}

Rules:
- 4 to 6 recommendations, sorted by match descending.
- percentage must be a string ending with %.
- Each reason: 1-2 sentences, concrete and tied to their answers.`;

function buildUserContent(answers: QuizAnswer[]): string {
  const lines = answers.map(
    (a, i) => `Q${i + 1}: ${a.prompt}\nA${i + 1}: ${a.optionLabel} (${a.optionId})`,
  );
  return `User answers:\n${lines.join("\n\n")}`;
}

function sanitizeRecommendations(raw: unknown): RecommendationItem[] {
  if (!raw || typeof raw !== "object") return [];
  const recs = (raw as { recommendations?: unknown }).recommendations;
  if (!Array.isArray(recs)) return [];
  return recs
    .map((r) => {
      if (!r || typeof r !== "object") return null;
      const o = r as Record<string, unknown>;
      const service = typeof o.service === "string" ? o.service.trim() : "";
      const percentage = typeof o.percentage === "string" ? o.percentage.trim() : "";
      const reason = typeof o.reason === "string" ? o.reason.trim() : "";
      if (!service || !percentage || !reason) return null;
      return { service, percentage, reason };
    })
    .filter(Boolean) as RecommendationItem[];
}

function extractJsonObject(text: string): string {
  const trimmed = text.trim();
  const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence?.[1]) return fence[1].trim();
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) {
    return trimmed.slice(start, end + 1);
  }
  return trimmed;
}

export async function analyzeWithGroq(answers: QuizAnswer[]): Promise<RecommendationItem[]> {
  const key = process.env.GROQ_API_KEY;
  if (!key) {
    throw new Error("GROQ_API_KEY is not configured");
  }

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      temperature: 0.35,
      messages: [
        { role: "system", content: SYSTEM },
        { role: "user", content: buildUserContent(answers) },
      ],
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    const errText = await res.text().catch(() => "");
    throw new Error(`Groq error ${res.status}: ${errText || res.statusText}`);
  }

  const body = (await res.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const content = body.choices?.[0]?.message?.content;
  if (!content) {
    throw new Error("Empty model response");
  }

  const jsonText = extractJsonObject(content);
  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    throw new Error("Model returned non-JSON");
  }

  return sanitizeRecommendations(parsed);
}
