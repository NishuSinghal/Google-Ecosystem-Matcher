import { QuizExperience } from "@/components/QuizExperience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment · Google Ecosystem Matcher",
  description: "Ten adaptive questions. AI-matched Google services.",
};

export default function QuizPage() {
  return <QuizExperience />;
}
