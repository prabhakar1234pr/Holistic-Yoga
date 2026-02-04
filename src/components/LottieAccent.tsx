"use client";

import * as React from "react";
import Lottie from "lottie-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type LottieAccentProps = {
  src?: string;
  className?: string;
  label?: string;
};

export default function LottieAccent({
  src = "/lottie/breathe.json",
  className,
  label = "Breathing accent animation",
}: LottieAccentProps) {
  const reduceMotion = useReducedMotion();
  const [animationData, setAnimationData] = React.useState<object | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(src);
        if (!res.ok) return;
        const json = (await res.json()) as object;
        if (!cancelled) setAnimationData(json);
      } catch {
        // ignore
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [src]);

  const fallback = (
    <span
      className={cn(
        "inline-block rounded-full bg-emerald-200/50 ring-1 ring-emerald-200/60",
        className
      )}
      aria-hidden="true"
    />
  );

  if (reduceMotion) {
    return fallback;
  }

  if (!animationData) {
    return fallback;
  }

  return (
    <span className={cn("inline-block", className)} aria-label={label} role="img">
      <Lottie
        animationData={animationData}
        loop
        autoplay={!reduceMotion}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />
    </span>
  );
}

