# ✨ Google Ecosystem Matcher

> An AI-powered adaptive onboarding funnel built with Next.js 14, Groq, Framer Motion, and modern SaaS-inspired UI principles.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animations-black?style=for-the-badge&logo=framer" />
  <img src="https://img.shields.io/badge/Groq-AI-orange?style=for-the-badge" />
</p>

---

## 🌐 Live Demo

🔗 **Deployment:**
`https://ninex-nishusinghal.vercel.app`

---

# 📌 Overview

Google Ecosystem Matcher is a premium AI-powered onboarding and recommendation experience designed to intelligently match users with the most relevant Google services based on their goals, profession, and workflow preferences.

The application uses:

* 🧠 Adaptive Quiz Logic
* ⚡ AI-powered Recommendations
* 🎨 Modern SaaS-style UI
* ✨ Framer Motion Animations
* 🌙 Premium Dark Theme
* 📱 Fully Responsive Experience

Inspired by the design systems of modern SaaS products like Linear, Vercel, and Stripe.

---

# 🚀 Features

## 🎯 Adaptive Quiz Engine

* 10 dynamically changing questions
* Questions adapt based on previous answers
* Personalized onboarding flow
* Keyboard shortcuts support

## 🤖 AI Recommendations

Powered by Groq (`llama-3.1-8b-instant`)

The AI analyzes:

* User persona
* Goals
* Technical comfort
* Workflow preferences
* Team structure

Then recommends:

* Firebase
* Google Cloud
* Gemini API
* Google Workspace
* YouTube Premium
* Google Ads
* Android Enterprise
* and more...

---

## ✨ Premium UI/UX

* Glassmorphism cards
* Animated gradients
* Smooth page transitions
* Framer Motion micro-interactions
* Skeleton loading states
* Responsive layouts
* Production-style onboarding experience

---

# 🖼 Screenshots

> Replace these placeholders with actual screenshots after deployment.

| Landing Page                   | Quiz Experience             | AI Results                     |
| ------------------------------ | --------------------------- | ------------------------------ |
| `docs/screenshots/landing.png` | `docs/screenshots/quiz.png` | `docs/screenshots/results.png` |

---

# 🛠 Tech Stack

| Technology            | Purpose              |
| --------------------- | -------------------- |
| Next.js 14            | App Router Framework |
| TypeScript            | Type Safety          |
| Tailwind CSS          | Styling              |
| Framer Motion         | Animations           |
| Groq API              | AI Recommendations   |
| Lucide React          | Icons                |
| clsx + tailwind-merge | Utility Helpers      |

---

# ⚡ Getting Started

## 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd ninex-nishusinghal
```

---

## 2️⃣ Install dependencies

```bash
npm install
```

---

## 3️⃣ Setup environment variables

Create:

```bash
.env.local
```

Add:

```env
GROQ_API_KEY=your_api_key_here
```

---

## 4️⃣ Start development server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# 🧠 AI Workflow

```text
User Answers Quiz
        ↓
Adaptive Engine Processes Responses
        ↓
Frontend Sends Answers to /api/analyze
        ↓
Groq AI Generates Recommendations
        ↓
Structured JSON Response Returned
        ↓
Animated Results Rendered
```

---

# 🏗 Architecture

```text
app/
 ├── api/analyze/route.ts
 ├── quiz/page.tsx
 ├── page.tsx
 └── template.tsx

components/
 ├── ui/
 ├── loaders/
 ├── quiz/
 └── results/

data/
 └── adaptiveQuiz.ts

hooks/
 └── useQuizSession.ts

services/
 └── groqAnalyze.ts

types/
 └── quiz.ts

lib/
 ├── cn.ts
 ├── heuristics.ts
 └── serviceIcons.ts
```

---

# 🎯 Adaptive Quiz System

The quiz dynamically changes based on user choices.

### Example:

If the user selects:

* 👨‍💻 Developer → developer-focused questions
* 🎥 Creator → creator-focused questions
* 🏢 Business Owner → business-focused flow
* 🎓 Student → learning/productivity flow

This creates a more personalized onboarding experience.

---

# ✨ Animation & UX Highlights

* AnimatePresence page transitions
* Smooth stagger animations
* Interactive hover states
* Animated progress bar
* Skeleton loading screens
* Gradient background effects
* Premium onboarding feel

---

# 📦 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Create production build  |
| `npm run start` | Run production build     |
| `npm run lint`  | Run ESLint               |

---

# 🚀 Deployment

This project is optimized for:

▲ Vercel Deployment

### Steps:

1. Push code to GitHub
2. Import repository into Vercel
3. Add `GROQ_API_KEY`
4. Deploy instantly

No additional configuration required.

---

# 🎨 Design Inspiration

The UI/UX system is inspired by modern SaaS products including:

* Linear
* Vercel
* Stripe

Focus areas:

* visual polish
* smooth interactions
* premium onboarding experience
* modern frontend architecture

---

# 📄 License

This project was created as a frontend engineering assignment and is intended for educational/demo purposes unless extended with a custom license.

---

# 👨‍💻 Author

**Nishu Singhal**

Frontend Developer • MERN Stack • Backend Devloper

---
