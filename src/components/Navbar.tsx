"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 w-full">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
              Holistic Yoga
            </a>
          </div>
          <div>
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-none px-3 sm:px-4"
            >
              <a
                href="https://wa.me/7718820274"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 w-4 h-4" />
                <span className="hidden sm:inline">Contact via WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
