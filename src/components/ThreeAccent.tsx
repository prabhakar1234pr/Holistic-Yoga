"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const ThreeAccentCanvas = dynamic(() => import("@/components/ThreeAccentCanvas"), {
  ssr: false,
});

type ThreeAccentProps = {
  className?: string;
};

function shouldDisable3D() {
  if (typeof navigator === "undefined") return true;

  // Data Saver mode.
  const nav = navigator as Navigator & {
    connection?: {
      saveData?: boolean;
    };
    deviceMemory?: number;
  };

  const saveData = nav.connection?.saveData === true;
  if (saveData) return true;

  // Very low-end heuristic (best-effort).
  const deviceMemory = nav.deviceMemory;
  if (typeof deviceMemory === "number" && deviceMemory > 0 && deviceMemory < 4) return true;

  const cores = navigator.hardwareConcurrency;
  if (typeof cores === "number" && cores > 0 && cores <= 4) return true;

  return false;
}

export default function ThreeAccent({ className }: ThreeAccentProps) {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (reduceMotion) return;
    if (shouldDisable3D()) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setEnabled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px 10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const fallback = (
    <div
      className={cn(
        "rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(52,211,153,0.65),rgba(139,92,246,0.18)_55%,rgba(16,185,129,0.10)_75%,transparent_100%)] ring-1 ring-emerald-200/60",
        className
      )}
      aria-hidden="true"
    />
  );

  return (
    <div ref={ref} className={cn("relative", className)} aria-hidden="true">
      {enabled ? (
        <div className="absolute inset-0">
          <ThreeAccentCanvas />
        </div>
      ) : (
        fallback
      )}
    </div>
  );
}

