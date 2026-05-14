import type { QuizAnswer, QuizQuestion } from "@/types/quiz";

type Role = "developer" | "student" | "business" | "creator";

function roleFromAnswers(answers: QuizAnswer[]): Role | null {
  const first = answers[0];
  if (!first || first.questionId !== "q1_role") return null;
  if (first.optionId === "developer") return "developer";
  if (first.optionId === "student") return "student";
  if (first.optionId === "business") return "business";
  if (first.optionId === "creator") return "creator";
  return null;
}

const Q1: QuizQuestion = {
  id: "q1_role",
  prompt: "What best describes you?",
  subtitle: "We will tune the next questions to your world.",
  options: [
    {
      id: "developer",
      label: "Developer",
      description: "Building products, APIs, and infrastructure",
    },
    {
      id: "student",
      label: "Student",
      description: "Learning, research, and academic projects",
    },
    {
      id: "business",
      label: "Business Owner",
      description: "Operations, growth, and customer delivery",
    },
    {
      id: "creator",
      label: "Content Creator",
      description: "Audience, media, and distribution",
    },
  ],
};

const developerQ2: QuizQuestion = {
  id: "q2_dev_stack",
  prompt: "Where does most of your engineering time go?",
  options: [
    { id: "mobile", label: "Mobile apps", description: "Android / cross-platform" },
    { id: "web", label: "Web platforms", description: "Frontends and full-stack" },
    { id: "data_ml", label: "Data & ML", description: "Pipelines, models, analytics" },
    { id: "infra", label: "Cloud infra", description: "Kubernetes, networking, scale" },
  ],
};

const studentQ2: QuizQuestion = {
  id: "q2_study_focus",
  prompt: "What are you primarily studying?",
  options: [
    { id: "cs", label: "Computer science", description: "Algorithms, systems, software" },
    { id: "stem", label: "STEM / research", description: "Labs, simulations, datasets" },
    { id: "business", label: "Business / marketing", description: "Growth, analytics, ops" },
    { id: "design", label: "Design / media", description: "Motion, UX, storytelling" },
  ],
};

const businessQ2: QuizQuestion = {
  id: "q2_org_stage",
  prompt: "What stage is your organization in?",
  options: [
    { id: "solo", label: "Solo / micro team", description: "1–5 people wearing many hats" },
    { id: "smb", label: "Growing SMB", description: "Structured teams and workflows" },
    { id: "enterprise", label: "Enterprise scale", description: "Security, compliance, SSO" },
    { id: "agency", label: "Agency / consultancy", description: "Many clients and campaigns" },
  ],
};

const creatorQ2: QuizQuestion = {
  id: "q2_creator_surface",
  prompt: "Where does your audience live?",
  options: [
    { id: "youtube", label: "YouTube-first", description: "Long-form and publishing rhythm" },
    { id: "shorts", label: "Short-form social", description: "Reels, Shorts, TikTok-style" },
    { id: "newsletter", label: "Newsletter / community", description: "Owned audience and CRM" },
    { id: "live", label: "Live streaming", description: "Events, webinars, stages" },
  ],
};

const developerQ3: QuizQuestion = {
  id: "q3_dev_delivery",
  prompt: "How do you prefer to ship?",
  options: [
    { id: "serverless", label: "Serverless & managed", description: "Fast iteration, less ops" },
    { id: "containers", label: "Containers on cloud", description: "Portable workloads" },
    { id: "hybrid", label: "Hybrid / on-prem", description: "Regulated or legacy systems" },
    { id: "edge", label: "Edge & global latency", description: "Performance at the boundary" },
  ],
};

const studentQ3: QuizQuestion = {
  id: "q3_student_tooling",
  prompt: "What tooling pain shows up most often?",
  options: [
    { id: "collab", label: "Group projects & files", description: "Version chaos and sharing" },
    { id: "compute", label: "Compute for assignments", description: "Notebooks, VMs, GPUs" },
    { id: "writing", label: "Writing & citations", description: "Docs, slides, research" },
    { id: "career", label: "Career & portfolio", description: "Proof of work and interviews" },
  ],
};

const businessQ3: QuizQuestion = {
  id: "q3_business_motion",
  prompt: "What is moving fastest for you right now?",
  options: [
    { id: "leads", label: "Lead generation", description: "Funnels, ads, landing pages" },
    { id: "support", label: "Customer support", description: "Tickets, SLAs, knowledge base" },
    { id: "product", label: "Product delivery", description: "Roadmaps, releases, QA" },
    { id: "security", label: "Security & IT", description: "Devices, access, audits" },
  ],
};

const creatorQ3: QuizQuestion = {
  id: "q3_creator_goal",
  prompt: "What outcome matters most this quarter?",
  options: [
    { id: "growth", label: "Audience growth", description: "Reach, subscribers, discovery" },
    { id: "revenue", label: "Monetization", description: "Sponsors, memberships, ads" },
    { id: "workflow", label: "Production workflow", description: "Editing, assets, collaboration" },
    { id: "brand", label: "Brand partnerships", description: "Decks, reporting, deliverables" },
  ],
};

const developerQ4: QuizQuestion = {
  id: "q4_dev_ai",
  prompt: "How are you using AI in your stack?",
  options: [
    { id: "core", label: "Core product feature", description: "User-facing intelligence" },
    { id: "internal", label: "Internal automation", description: "Support, ops, codegen" },
    { id: "eval", label: "Experimenting", description: "Prototypes and benchmarks" },
    { id: "none", label: "Not yet", description: "Exploring where it fits" },
  ],
};

const studentQ4: QuizQuestion = {
  id: "q4_student_collab",
  prompt: "How do you collaborate day to day?",
  options: [
    { id: "meet", label: "Video classes & clubs", description: "Lots of live calls" },
    { id: "async", label: "Async docs & threads", description: "Comments and handoffs" },
    { id: "hybrid", label: "Hybrid campus", description: "Split between in-person and online" },
    { id: "solo", label: "Mostly solo deep work", description: "Minimal coordination overhead" },
  ],
};

const businessQ4: QuizQuestion = {
  id: "q4_business_stack",
  prompt: "What does your current stack feel like?",
  options: [
    { id: "google_native", label: "Google-native", description: "Workspace-first workflows" },
    { id: "mixed", label: "Mixed vendors", description: "Integrations are critical" },
    { id: "legacy", label: "Legacy-heavy", description: "Migration and coexistence" },
    { id: "greenfield", label: "Greenfield", description: "Choosing foundations now" },
  ],
};

const creatorQ4: QuizQuestion = {
  id: "q4_creator_assets",
  prompt: "What is hardest about creative assets?",
  options: [
    { id: "storage", label: "Storage & versioning", description: "RAW files and archives" },
    { id: "rights", label: "Music & rights", description: "Clearance and claims risk" },
    { id: "remote", label: "Remote collaboration", description: "Reviews and approvals" },
    { id: "analytics", label: "Analytics depth", description: "Retention and revenue signals" },
  ],
};

const developerQ5: QuizQuestion = {
  id: "q5_dev_priority",
  prompt: "Pick the priority you would fund first.",
  options: [
    { id: "reliability", label: "Reliability & SRE", description: "SLOs, incidents, observability" },
    { id: "velocity", label: "Developer velocity", description: "CI/CD, previews, tooling" },
    { id: "cost", label: "Unit economics", description: "FinOps and autoscaling" },
    { id: "compliance", label: "Compliance", description: "Audit trails and data residency" },
  ],
};

const studentQ5: QuizQuestion = {
  id: "q5_student_future",
  prompt: "What is your next milestone?",
  options: [
    { id: "internship", label: "Internship / job search", description: "Interviews and portfolio" },
    { id: "founder", label: "Side project → startup", description: "Shipping an MVP" },
    { id: "research", label: "Research publication", description: "Reproducibility and data" },
    { id: "skills", label: "Skill depth", description: "Courses, certifications, practice" },
  ],
};

const businessQ5: QuizQuestion = {
  id: "q5_business_customer",
  prompt: "How do customers primarily find you?",
  options: [
    { id: "search", label: "Search & SEO", description: "Organic discovery" },
    { id: "paid", label: "Paid acquisition", description: "Ads and performance marketing" },
    { id: "partner", label: "Partners & outbound", description: "B2B motion and referrals" },
    { id: "community", label: "Community-led", description: "Events, creators, word of mouth" },
  ],
};

const creatorQ5: QuizQuestion = {
  id: "q5_creator_team",
  prompt: "How is your creator operation structured?",
  options: [
    { id: "solo", label: "Solo creator", description: "You do everything end-to-end" },
    { id: "editor", label: "You + editor", description: "A tight post-production loop" },
    { id: "agency", label: "Agency / managers", description: "Multiple stakeholders" },
    { id: "network", label: "Network / multi-channel", description: "Several brands or shows" },
  ],
};

const Q6: QuizQuestion = {
  id: "q6_goal",
  prompt: "What is the primary goal for Google tools in your life?",
  options: [
    { id: "ship", label: "Ship faster with confidence", description: "Quality without bottlenecks" },
    { id: "grow", label: "Grow revenue & reach", description: "Acquisition and conversion" },
    { id: "secure", label: "Secure & govern data", description: "Trust and compliance" },
    { id: "delight", label: "Delight customers", description: "Support, polish, retention" },
  ],
};

const Q7: QuizQuestion = {
  id: "q7_surface",
  prompt: "Where do you want the most leverage?",
  options: [
    { id: "cloud", label: "Cloud & APIs", description: "Backend scale and integrations" },
    { id: "workspace", label: "Docs, mail, calendar", description: "Everyday collaboration" },
    { id: "devices", label: "Devices & mobility", description: "Android, Chromebooks, Meet hardware" },
    { id: "media", label: "Media & distribution", description: "YouTube, ads, creative tooling" },
  ],
};

const Q8: QuizQuestion = {
  id: "q8_budget",
  prompt: "How do you think about budget for tools?",
  options: [
    { id: "bootstrap", label: "Bootstrap mindset", description: "Free tiers and sharp ROI" },
    { id: "balanced", label: "Balanced spend", description: "Pay for what removes pain" },
    { id: "premium", label: "Premium is fine", description: "Speed and support matter most" },
    { id: "unsure", label: "Still evaluating", description: "Need clarity on pricing models" },
  ],
};

const Q9: QuizQuestion = {
  id: "q9_timeline",
  prompt: "What timeline fits your next decision?",
  options: [
    { id: "now", label: "This week", description: "Ready to act immediately" },
    { id: "month", label: "This month", description: "Short evaluation window" },
    { id: "quarter", label: "This quarter", description: "Roadmap-aligned rollout" },
    { id: "explore", label: "Just exploring", description: "Learning the landscape" },
  ],
};

const Q10: QuizQuestion = {
  id: "q10_friction",
  prompt: "What friction would you eliminate first?",
  options: [
    { id: "fragmentation", label: "Tool fragmentation", description: "Too many disconnected systems" },
    { id: "skills", label: "Skills gap", description: "Hard to adopt advanced features" },
    { id: "risk", label: "Risk & governance", description: "Permissions, audits, data leaks" },
    { id: "speed", label: "Slow execution", description: "Waiting on approvals or infra" },
  ],
};

const TOTAL_STEPS = 10;

export function getQuestionForStep(
  stepIndex: number,
  answers: QuizAnswer[],
): QuizQuestion | null {
  if (stepIndex < 0 || stepIndex >= TOTAL_STEPS) return null;
  if (stepIndex === 0) return Q1;

  const role = roleFromAnswers(answers);
  if (!role) return null;

  if (stepIndex === 1) {
    if (role === "developer") return developerQ2;
    if (role === "student") return studentQ2;
    if (role === "business") return businessQ2;
    return creatorQ2;
  }
  if (stepIndex === 2) {
    if (role === "developer") return developerQ3;
    if (role === "student") return studentQ3;
    if (role === "business") return businessQ3;
    return creatorQ3;
  }
  if (stepIndex === 3) {
    if (role === "developer") return developerQ4;
    if (role === "student") return studentQ4;
    if (role === "business") return businessQ4;
    return creatorQ4;
  }
  if (stepIndex === 4) {
    if (role === "developer") return developerQ5;
    if (role === "student") return studentQ5;
    if (role === "business") return businessQ5;
    return creatorQ5;
  }
  if (stepIndex === 5) return Q6;
  if (stepIndex === 6) return Q7;
  if (stepIndex === 7) return Q8;
  if (stepIndex === 8) return Q9;
  return Q10;
}

export const QUIZ_TOTAL_STEPS = TOTAL_STEPS;
