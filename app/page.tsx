import { HeroSection } from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ecosystem Matcher",
  description:
    "Premium adaptive assessment that recommends Google services aligned to your workflow.",
};

export default function Home() {
  return <HeroSection />;
}
