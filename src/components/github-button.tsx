"use client";

import { Button } from "./button";

export default function GitHubButton() {
  return (
    <Button className="h-9 w-16 border-none" variant="ghost" size="icon">
      <span>GitHub</span>
      <span className="sr-only">(opens in a new tab)</span>
    </Button>
  );
}
