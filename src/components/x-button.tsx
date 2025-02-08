"use client";

import { Button } from "./button";

export default function XButton() {
  return (
    <Button className="h-9 w-9 border-none" variant="ghost" size="icon">
      <span className="text-xl">𝕏</span>
      <span className="sr-only">(opens in a new tab)</span>
    </Button>
  );
}
