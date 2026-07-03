"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const playerCardPool = [
  "/cards/PlayerCard01.png",
  "/cards/PlayerCard02.png",
  "/cards/PlayerCard03.png",
  "/cards/PlayerCard04.png",
  "/cards/PlayerCard05.png",
  "/cards/PlayerCard06.png",
  "/cards/PlayerCard07.png",
  "/cards/PlayerCard08.png",
  "/cards/PlayerCard09.png",
  "/cards/PlayerCard10.png",
];

function getHeroCards(count = 4) {
  return [...playerCardPool].sort(() => Math.random() - 0.5).slice(0, count);
}

function Navbar() {
  const activeClass =
    "text-black underline decoration-[#00D1B2] decoration-2 underline-offset-8";

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo/IY Logo.png"
            alt="IY Logo"
            className="h-9 w-9 rounded-xl object-cover"
          />
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/55">
            Improve Yourself
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-black/65 md:flex">
          <Link href="/" className={`${activeClass} transition hover:text-black`}>
            Home
          </Link>
          <Link href="/players" className="transition hover:text-black">
            Player
          </Link>
          <Link href="/partners" className="transition hover:text-black">
            Partner
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer rounded-xl border border-black/10 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black">
            Menu
          </summary>

          <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/10">
            <Link href="/" className="block px-5 py-4 text-sm font-semibold text-[#00D1B2]">
              Home
            </Link>
            <Link href="/players" className="block border-t border-black/10 px-5 py-4 text-sm font-semibold">
              Player
            </Link>
            <Link href="/partners" className="block border-t border-black/10 px-5 py-4 text-sm font-semibold">
              Partner
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

function HeroCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(getHeroCards(4));
  }, []);

  const positions = [
    "left-0 top-20 z-10 w-[52%] -rotate-7 opacity-95",
    "left-[15%] top-10 z-20 w-[54%] -rotate-3 opacity-95",
    "right-[14%] top-12 z-30 w-[54%] rotate-3 opacity-95",
    "right-0 top-5 z-40 w-[56%] rotate-7 opacity-100",
  ];

  if (!cards.length) {
    return (
      <div className="relative mx-auto hidden h-[560px] w-full max-w-[680px] md:block" />
    );
  }

  return (
    <div className="relative mx-auto hidden h-[560px] w-full max-w-[680px] md:block">
      {cards.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="IY Player Card"
          className={`absolute rounded-[2rem] shadow-2xl shadow-black/20 transition duration-500 hover:z-50 hover:-translate-y-4 hover:scale-105 ${positions[index]}`}
        />
      ))}
    </div>
  );
}

function MobileHeroCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(getHeroCards(3));
  }, []);

  const positions = [
    "left-4 top-12 z-10 w-[38%] -rotate-7 opacity-90",
    "left-[31%] top-2 z-30 w-[40%] rotate-1 opacity-100",
    "right-4 top-14 z-20 w-[38%] rotate-7 opacity-90",
  ];

  if (!cards.length) {
    return <div className="mt-8 h-[205px] md:hidden" />;
  }

  return (
    <div className="relative mt-8 h-[205px] w-full md:hidden">
      {cards.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="IY Player Card"
          className={`absolute rounded-[1.2rem] shadow-2xl shadow-black/15 ${positions[index]}`}
        />
      ))}
    </div>
  );
}

function DesktopHero() {
  return (
    <section className="relative hidden overflow-hidden bg-[#FBFBF8] md:block">
      <div className="absolute inset-0">
        <img
          src="/header/header_16:9_03.png"
          alt="IY Movement"
          className="h-full w-full object-cover opacity-95"
          style={{ objectPosition: "center 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBFBF8]/95 via-[#FBFBF8]/72 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FBFBF8] to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[82vh] max-w-7xl grid-cols-[0.9fr_1.1fr] items-center gap-12 px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
            Improve Yourself
          </p>

          <h1 className="text-8xl font-semibold leading-[0.92] tracking-tight text-black xl:text-[7rem]">
            Movement
            <br />
            becomes
            <br />
            identity.
          </h1>

          <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-black/75">
            IY connects real sport with recognition, belonging and measurable impact.
          </p>
        </div>

        <HeroCards />
      </div>
    </section>
  );
}

function MobileHero() {
  return (
    <section className="bg-[#FBFBF8] px-5 pb-8 pt-9 md:hidden">
      <div className="mx-auto max-w-md">
        <div className="flex justify-center">
          <img
            src="/logo/IY Logo.png"
            alt="IY Logo"
            className="h-14 w-14 rounded-2xl object-cover shadow-lg shadow-black/10"
          />
        </div>

        <p className="mt-7 text-center text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
          Improve Yourself
        </p>

        <h1 className="mt-5 text-center text-[4.05rem] font-semibold leading-[0.86] tracking-[-0.07em] text-black">
          Movement
          <br />
          becomes
          <br />
          identity.
        </h1>

        <p className="mx-auto mt-7 max-w-[19rem] text-center text-lg leading-relaxed text-black/65">
          Real sport creates recognition, belonging and measurable impact.
        </p>

        <MobileHeroCards />
      </div>
    </section>
  );
}

function RoleSelection() {
  return (
    <section className="border-t border-black/10 bg-[#FBFBF8]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
            Choose your role
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
            Enter the world of IY.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
          <Link
            href="/players"
            className="group rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 md:rounded-[2rem] md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
              Player
            </p>
            <h3 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
              Build your player.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65 md:mt-6 md:text-lg">
              Turn your real movement into visible progress, identity and status.
            </p>
            <div className="mt-7 inline-flex rounded-xl bg-[#00D1B2] px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black md:mt-8 md:px-6">
              Explore Player →
            </div>
          </Link>

          <Link
            href="/partners"
            className="group rounded-[1.75rem] border border-black/10 bg-black p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 md:rounded-[2rem] md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              Partner
            </p>
            <h3 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Move people.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:mt-6 md:text-lg">
              Become part of real activity, player identity and measurable impact.
            </p>
            <div className="mt-7 inline-flex rounded-xl bg-[#00D1B2] px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black md:mt-8 md:px-6">
              Explore Partner →
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ManifestSection() {
  return (
    <section className="border-t border-black/10 bg-[#FBFBF8] px-5 py-10 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm md:rounded-[2rem] md:p-16 md:text-center">
        <h2 className="text-[3.05rem] font-semibold leading-[0.92] tracking-tight text-black md:text-8xl md:leading-[0.98]">
          Create movement.
          <br />
          Build identity.
          <br />
          Measure impact.
        </h2>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FBFBF8] text-black">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <DesktopHero />
      <MobileHero />
      <RoleSelection />
      <ManifestSection />
    </main>
  );
}
