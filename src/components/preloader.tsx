"use client";

import { cn } from "@/lib/utils";

export function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative h-24 w-24">
        <div className="absolute h-full w-full animate-[preloader-spin_1s_linear_infinite] rounded-full border-4 border-primary border-t-transparent" />
        <div className="absolute inset-2 animate-[preloader-pulse_1.5s_ease-in-out_infinite] rounded-full bg-primary/20" />
      </div>
    </div>
  );
}
