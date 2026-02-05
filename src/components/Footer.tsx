import Reveal from "@/components/Reveal";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 py-10 sm:py-12 md:py-14">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-slate-900">Holistic Yoga</h3>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Online yoga, wherever you are.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5 text-slate-900">Quick Links</h4>
            <ul className="space-y-3 text-slate-600">
              <li>
                <a href="#offerings" className="hover:text-emerald-700 transition-colors text-base sm:text-lg">
                  Our Offerings
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-emerald-700 transition-colors text-base sm:text-lg">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-700 transition-colors text-base sm:text-lg">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5 text-slate-900">Connect</h4>
            <ul className="space-y-3 text-slate-600">
              <li>
                <a
                  href="https://wa.me/7718820274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors text-base sm:text-lg"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/holisticyoga.with.tejasree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emerald-700 transition-colors text-base sm:text-lg"
                >
                  <Instagram className="h-5 w-5 shrink-0" aria-hidden />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="h-px w-full bg-slate-200 mb-8" />
        <Reveal className="text-center text-slate-500">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Holistic Yoga. All rights reserved.</p>
        </Reveal>
      </div>
    </footer>
  );
}
