import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import ThemeProvider from "@/components/ThemeProvider";
import { PostHogProvider } from "@/components/PostHogProvider";
import { initEnv } from "@/env";

import "./globals.css";

initEnv();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fractional CTO Services",
  description:
    "Expert tech leadership when you need it, without the full-time cost.",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          <ThemeProvider>
            <Suspense>{children}</Suspense>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
