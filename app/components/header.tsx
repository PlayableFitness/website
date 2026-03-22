"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Section links: auf Home #... , auf Unterseiten /#...
  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  // Dropdown
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white hover:text-white/80 transition"
        >
          Playable Fitness
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href={sectionHref("#vision")} className="hover:text-white transition">
            Vision
          </a>
          <a href={sectionHref("#app")} className="hover:text-white transition">
            App
          </a>
          <a href={sectionHref("#produkt")} className="hover:text-white transition">
            Produkt
          </a>
          <a href={sectionHref("#erlebnis")} className="hover:text-white transition">
            Erlebnis
          </a>
          <a href={sectionHref("#faq")} className="hover:text-white transition">
            FAQ
          </a>

          {/* Dropdown: Story */}
          <div className="relative" ref={wrapRef}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="hover:text-white transition inline-flex items-center gap-2"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Story <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
            </button>

            {open && (
              <div
                className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.65)] overflow-hidden"
                role="menu"
              >
                <Link
                  href="/spieler"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                  role="menuitem"
                >
                  Dein Spieler
                </Link>
                <Link
                  href="/entwicklung"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                  role="menuitem"
                >
                  Entwicklung
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <a
          href={sectionHref("#early-access")}
          className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-100 transition font-medium text-sm px-5 py-2 h-10"
        >
          Early Access
        </a>
      </div>
    </header>
  );
}
