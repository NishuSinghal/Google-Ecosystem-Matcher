import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Cloud,
  Flame,
  LayoutGrid,
  Megaphone,
  MonitorSmartphone,
  PlayCircle,
  Shield,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

const DEFAULT: LucideIcon = Sparkles;

const MAP: { k: string; Icon: LucideIcon }[] = [
  { k: "firebase", Icon: Flame },
  { k: "google cloud", Icon: Cloud },
  { k: "gemini", Icon: Bot },
  { k: "workspace", Icon: Users },
  { k: "youtube", Icon: PlayCircle },
  { k: "google ads", Icon: Megaphone },
  { k: "ads", Icon: Megaphone },
  { k: "android", Icon: MonitorSmartphone },
  { k: "meet", Icon: Video },
  { k: "analytics", Icon: BarChart3 },
  { k: "bigquery", Icon: LayoutGrid },
  { k: "chrome enterprise", Icon: Shield },
  { k: "looker", Icon: BarChart3 },
  { k: "google one", Icon: Sparkles },
  { k: "education", Icon: Users },
];

export function getServiceIcon(service: string): LucideIcon {
  const s = service.toLowerCase();
  for (const { k, Icon } of MAP) {
    if (s.includes(k)) return Icon;
  }
  return DEFAULT;
}
