import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/src/components/theme-provider";

import { cn } from "@/src/lib/utils";

import { Noto_Sans_Math } from "next/font/google";
import { Baskervville } from "next/font/google";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: "500",
  display: "swap",
});

const baskervville = Baskervville({
  subsets: ["latin"],
  variable: "--font-baskervville",
  weight: "400",
  display: "swap",
});

const notosansmath = Noto_Sans_Math({
  subsets: ["math"],
  variable: "--font-noto-sans-math",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tlevesconte.me"),
  title: "Tomas Le Vesconte",
  description:
    "Hi, My name is Tom, and I'm a Software Developer living in Sweden.",
  authors: [{ name: "Tomas Le Vesconte", url: "https://tlevesconte.me" }],
  keywords: [
    "Tomas Le Vesconte",
    "tlevesconte",
    "levescontet",
    "Software Engineer",
    "Software Developer",
  ],
  creator: "tlevesconte",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-baskervville antialiased text-[16px]",
          notosansmath.variable,
          newsreader.variable,
          baskervville.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main className="mx-auto my-[30vmin] max-w-[700px] px-8 py-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
