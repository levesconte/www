"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="ml-2 inline-flex h-9 w-9 items-center justify-center"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle light/dark mode</span>
    </button>
  );
}
