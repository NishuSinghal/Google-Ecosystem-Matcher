import { heuristicRecommendations } from "@/lib/heuristicRecommendations";
import type { QuizAnswer, QuizPhase, RecommendationItem } from "@/types/quiz";
import { getQuestionForStep, QUIZ_TOTAL_STEPS } from "@/data/adaptiveQuiz";
import { useCallback, useMemo, useState } from "react";

export function useQuizSession() {
  const [phase, setPhase] = useState<QuizPhase>("quiz");
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [recommendations, setRecommendations] = useState<RecommendationItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = useMemo(
    () => getQuestionForStep(stepIndex, answers),
    [stepIndex, answers],
  );

  const progress = useMemo(() => {
    if (phase !== "quiz") return 1;
    return (stepIndex + 1) / QUIZ_TOTAL_STEPS;
  }, [phase, stepIndex]);

  const reset = useCallback(() => {
    setPhase("quiz");
    setStepIndex(0);
    setAnswers([]);
    setRecommendations([]);
    setError(null);
  }, []);

  const selectOption = useCallback(
    async (optionId: string, optionLabel: string) => {
      if (!currentQuestion || phase !== "quiz") return;

      const nextAnswers: QuizAnswer[] = [
        ...answers,
        {
          questionId: currentQuestion.id,
          prompt: currentQuestion.prompt,
          optionId,
          optionLabel,
        },
      ];

      setAnswers(nextAnswers);

      const isLast = stepIndex >= QUIZ_TOTAL_STEPS - 1;
      if (!isLast) {
        setStepIndex((s) => s + 1);
        return;
      }

      setPhase("analyzing");
      setError(null);

      try {
        const res = await fetch("/api/analyze", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers: nextAnswers }),
        });
        const data = (await res.json()) as {
          recommendations?: RecommendationItem[];
          error?: string;
        };
        if (!res.ok) {
          throw new Error(data.error || "Analysis failed");
        }
        const recs = data.recommendations ?? [];
        setRecommendations(
          recs.length > 0 ? recs : heuristicRecommendations(nextAnswers),
        );
        setPhase("results");
      } catch (e) {
        setError(e instanceof Error ? e.message : "Something went wrong");
        setPhase("results");
        setRecommendations(heuristicRecommendations(nextAnswers));
      }
    },
    [answers, currentQuestion, phase, stepIndex],
  );

  return {
    phase,
    stepIndex,
    answers,
    currentQuestion,
    progress,
    recommendations,
    error,
    selectOption,
    reset,
    QUIZ_TOTAL_STEPS,
  };
}
