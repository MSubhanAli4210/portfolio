import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subhan Ali | Full Stack AI Engineer",
  description:
    "Portfolio of Subhan Ali, a Full Stack AI Engineer building modern web applications, APIs, intelligent systems, and production-ready digital products.",
  keywords: [
    "Subhan Ali",
    "Full Stack AI Engineer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "AI Engineer",
    "Web Developer",
  ],
  authors: [
    {
      name: "Subhan Ali",
    },
  ],
  creator: "Subhan Ali",
  openGraph: {
    title: "Subhan Ali | Full Stack AI Engineer",
    description:
      "Full-stack and AI engineering portfolio featuring modern applications, APIs, intelligent systems, and production-focused projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhan Ali | Full Stack AI Engineer",
    description:
      "Full-stack and AI engineering portfolio featuring modern applications, APIs, intelligent systems, and production-focused projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}