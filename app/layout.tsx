import "./globals.css";

import type { Metadata } from "next";
import { cn } from "@/lib/utils"

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
// import localFont from "next/font/local";

// const sitka = localFont({
//   src: "./sitka.ttf",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Tomas Le Vesconte",
  description: "Hi, I'm Tomas. I'm an aspiring Software Engineer living in Sweden.",
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
          "mx-auto my-[30vmin] max-w-3xl px-[6%] bg-background font-sans antialiased",
          GeistSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
