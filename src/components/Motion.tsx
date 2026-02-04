"use client";

import * as React from "react";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";

type MotionWrapProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "span";
  hoverScale?: number;
  tapScale?: number;
} & Omit<MotionProps, "children">;

export function MotionWrap({
  children,
  className,
  as = "div",
  hoverScale = 1.02,
  tapScale = 0.98,
  ...props
}: MotionWrapProps) {
  const reduceMotion = useReducedMotion();

  const Comp = as === "span" ? motion.span : motion.div;

  return (
    <Comp
      className={className}
      whileHover={reduceMotion ? undefined : { scale: hoverScale }}
      whileTap={reduceMotion ? undefined : { scale: tapScale }}
      transition={reduceMotion ? undefined : { type: "spring", stiffness: 350, damping: 22 }}
      {...props}
    >
      {children}
    </Comp>
  );
}

