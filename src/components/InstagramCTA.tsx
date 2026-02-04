import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export default function InstagramCTA() {
  return (
    <section
      aria-label="Instagram"
      className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-white to-amber-50/70"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm sm:text-base tracking-wide text-slate-600">
            Follow along for short practices and calm reminders
          </p>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900">
            View on Instagram
          </h2>
          <div className="mt-6 flex justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 h-auto bg-white/80 text-slate-900 ring-1 ring-amber-200 shadow-sm hover:bg-white"
            >
              <a
                href="https://instagram.com/holisticyoga.with.tejasree"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Instagram
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

