"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="ml-2 h-9 w-9 border-none"
      variant="outline"
      size="icon"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle light/dark mode</span>
    </Button>
  );
}
