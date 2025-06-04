"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export default function ThemeToggle({ fallback }: { fallback: string }) {
  function toggleTheme() {
    let theme: string = localStorage.getItem("theme") ?? fallback;
    theme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.remove("dark", "light");
    localStorage.removeItem("theme");

    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <button
      className="ml-2 inline-flex h-9 w-9 items-center justify-center hover:cursor-pointer"
      onClick={toggleTheme}
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
