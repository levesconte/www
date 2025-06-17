"use client";

import ModeToggle from "@/src/components/theme-toggle";
import Hyperlink from "@/src/components/hyperlink";
import SpecialText from "@/src/components/special-text";

import { useEffect, useRef } from "react";

export default function Home() {
  const FALLBACK_THEME: string = "dark";

  const loaded = useRef<boolean>(false);

  useEffect(() => {
    if (!loaded.current) {
      const theme: string = localStorage.getItem("theme") ?? FALLBACK_THEME;
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
    loaded.current = true;
  }, []);

  return (
    <>
      {/* Header */}
      <header className="animate-slide-down-and-fade-1 flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-reader text-light-special-foreground dark:text-dark-special-foreground pr-4 text-[18px] font-medium italic">
            Tomas Le Vesconte
          </h1>
          <ModeToggle fallback={FALLBACK_THEME} />
        </div>

        {/* Break */}
        <hr className="border-light-primary-foreground dark:border-dark-primary-foreground mt-[8px] mb-[28px] border-dotted opacity-30" />
      </header>

      {/* About */}
      <section className="animate-slide-down-and-fade-2" aria-label="about me">
        {/* Title (for accessibility) */}
        <h2 className="sr-only">About</h2>

        {/* Description */}
        <div className="text-light-primary-foreground dark:text-dark-primary-foreground max-w-full">
          <p className="mb-[22px] leading-relaxed">
            <SpecialText text="Hi!" /> My name is <SpecialText text="Tom" />.
            I&#39;m an avid <SpecialText text="runner" /> and{" "}
            <SpecialText text="software developer" /> living in Sweden. If
            you&#39;d like to get in touch, you can reach me at{" "}
            <SpecialText text="tomas [at] leves [dot] se" />. You can also find
            me on{" "}
            <Hyperlink text="GitHub" href="https://github.com/levesconte" /> and{" "}
            <Hyperlink
              text="LinkedIn"
              href="https://www.linkedin.com/in/tomas-levesconte"
            />
            .
          </p>

          {/* Location */}
          <p>
            Wales
            <span className="font-noto"> → </span>
            <SpecialText text="Sweden" />
          </p>
        </div>
      </section>
    </>
  );
}
