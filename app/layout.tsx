import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "./components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Noto_Sans_Math, Newsreader } from "next/font/google";

const NotoSansMath = Noto_Sans_Math({
  subsets: ["math"],
  variable: "--font-noto-sans-math",
  weight: "400",
  display: "swap",
});

const NewsReader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tomas Le Vesconte",
  description: "Hi, I'm Tomas. I'm a Software Developer living in Sweden.",
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
          "bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
          NotoSansMath.variable,
          NewsReader.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="mx-auto my-[30vmin] max-w-screen-sm px-8 py-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
