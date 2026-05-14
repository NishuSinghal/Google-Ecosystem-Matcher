export type QuizOption = {
  id: string;
  label: string;
  description?: string;
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  subtitle?: string;
  options: QuizOption[];
};

export type QuizAnswer = {
  questionId: string;
  prompt: string;
  optionId: string;
  optionLabel: string;
};

export type RecommendationItem = {
  service: string;
  percentage: string;
  reason: string;
};

export type AnalyzeResponse = {
  recommendations: RecommendationItem[];
};

export type QuizPhase = "quiz" | "analyzing" | "results";
