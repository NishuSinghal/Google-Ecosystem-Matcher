import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "ninex-nishusinghal · Google Ecosystem Matcher",
    template: "%s · ninex-nishusinghal",
  },
  description:
    "Adaptive quiz funnel powered by Groq — discover Google Cloud, Workspace, Firebase, Gemini, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 font-[family-name:var(--font-geist-sans)] text-zinc-100 antialiased`}
      >
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[1] bg-[linear-gradient(155deg,rgba(79,70,229,0.055)_0%,transparent_38%,transparent_62%,rgba(14,165,233,0.045)_78%,rgba(168,85,247,0.05)_100%)]"
        />
        <div className="relative z-[2] min-h-screen">{children}</div>
      </body>
    </html>
  );
}
