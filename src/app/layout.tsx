import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/src/lib/utils";
import { ThemeProvider } from "@/src/components/theme-provider"
import localFont from 'next/font/local'
import { GeistSans } from "geist/font/sans";
import { Noto_Sans_Math } from "next/font/google";

const NewsReader = localFont({
  src: "./fonts/newsreader-italic.ttf",
  variable: "--font-newsreader",
  weight: "500",
  display: "swap"
})

const NotoSansMath = Noto_Sans_Math({
  subsets: ["math"],
  variable: "--font-noto-sans-math",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tlevesconte.me"),
  title: "Tomas Le Vesconte",
  description: "Hi, I'm Tomas, a Software Developer living in Sweden. If you'd like to get in touch, check out my site!",
  authors: [{ name: "Tomas Le Vesconte", url: "https://tlevesconte.me" }],
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
          "font-sans antialiased",
          GeistSans.variable,
          NotoSansMath.variable,
          NewsReader.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <main className="mx-auto my-[30vmin] max-w-screen-sm px-8 py-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
