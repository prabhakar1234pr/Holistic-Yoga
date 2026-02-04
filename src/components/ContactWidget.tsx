"use client";

import * as React from "react";

export default function ContactWidget() {
  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    // Even with reduced motion, we still want correct show/hide behavior.
    void reduceMotion;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        setShow(entry.isIntersecting);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/7718820274"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex size-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 animate-fade-in"
      aria-label="Contact on WhatsApp"
    >
      <span className="sr-only">Contact on WhatsApp</span>
      <svg
        viewBox="0 0 32 32"
        className="size-7"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M19.11 17.46c-.25-.13-1.45-.72-1.67-.8-.22-.08-.39-.13-.55.13-.16.25-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.52.11-.11.25-.29.38-.43.13-.14.17-.25.25-.41.08-.16.04-.3-.02-.43-.06-.13-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.13.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.4.51.59.19 1.13.16 1.56.1.48-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.29Z"
        />
        <path
          fill="currentColor"
          d="M16.02 3.2c-7.05 0-12.8 5.72-12.8 12.75 0 2.25.6 4.45 1.74 6.39L3.2 28.8l6.63-1.73c1.86 1.01 3.97 1.55 6.19 1.55 7.05 0 12.8-5.72 12.8-12.75S23.07 3.2 16.02 3.2Zm0 23.25c-2.09 0-4.12-.57-5.87-1.65l-.42-.25-3.94 1.03 1.05-3.83-.27-.4a10.6 10.6 0 0 1-1.72-5.78c0-5.84 4.78-10.6 10.66-10.6 5.88 0 10.66 4.75 10.66 10.6 0 5.84-4.78 10.6-10.66 10.6Z"
        />
      </svg>
    </a>
  );
}

