import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-1 border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Playable Fitness
          </div>
          <p className="mt-2 text-sm text-white/50">
            Move. Play. Progress.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
          <Link href="/players" className="hover:text-white transition">
            For Players
          </Link>

          <Link href="/partners" className="hover:text-white transition">
            For Partners
          </Link>

          <Link href="/impressum" className="hover:text-white transition">
            Impressum
          </Link>

          <Link href="/datenschutz" className="hover:text-white transition">
            Privacy
          </Link>

          <a
            href="mailto:hello@playable-fitness.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-8 space-y-2">
        <p className="text-xs text-white/35">
          © 2026 Playable Fitness. All rights reserved.
        </p>

        {/* Optional: kleiner Trust-Hinweis */}
        <p className="text-xs text-white/20">
          Early-stage concept. Built for testing & feedback.
        </p>
      </div>
    </footer>
  );
}
