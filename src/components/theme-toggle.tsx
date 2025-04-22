"use client";

import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeToggle() {
  const DEFAULT_THEME = "dark";

  const [mounted, setMounted] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);

  useEffect(() => {
    if (mounted) {
      // removes
      document.documentElement.classList.remove("dark", "light");
      localStorage.removeItem("theme");

      // adds
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }

    if (!mounted && "theme" in localStorage) {
      // fetch the localStorage theme value (if it exists),
      // otherwise use a default value.
      const value: string = localStorage.getItem("theme") ?? DEFAULT_THEME;

      document.documentElement.classList.add(value);
      setTheme(value); // sync state with local

      setMounted(true);
    }
  }, [mounted, theme]);

  return (
    <button
      className="ml-2 inline-flex h-9 w-9 items-center justify-center hover:cursor-pointer"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {/* Dark Icon */}
      <MoonIcon className="text-light-special-foreground h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />

      {/* Light Icon */}
      <SunIcon className="dark:text-dark-special-foreground absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />

      {/* For accessibility */}
      <span className="sr-only">Toggle light/dark mode</span>
    </button>
  );
}
