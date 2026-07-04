"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const playerCardPool: string[] = [
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

const journeyCards = [
  {
    level: "Starter",
    ovr: "45",
    image: "/cards/Card_Starter.png",
    text: "Every player starts somewhere.",
  },
  {
    level: "Rookie",
    ovr: "60",
    image: "/cards/Card_Rookie.png",
    text: "Every workout moves you forward.",
  },
  {
    level: "Pro",
    ovr: "75",
    image: "/cards/Card_Pro.png",
    text: "Consistency becomes visible.",
  },
  {
    level: "Elite",
    ovr: "90",
    image: "/cards/Card_Elite.png",
    text: "Progress is earned.",
  },
];

function getHeroCards(count: number = 4): string[] {
  return [...playerCardPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

function Navbar() {
  const activeClass =
    "text-black underline decoration-[#00D1B2] decoration-2 underline-offset-8";

  return (
    <header className="sticky top-0 z-50 hidden border-b border-black/10 bg-white md:block">
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

        <nav className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-black/65">
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
      </div>
    </header>
  );
}

function DesktopHeroCards() {
  const [cards, setCards] = useState<string[]>([]);

  useEffect(() => {
    setCards(getHeroCards(4));
  }, []);

  const positions: string[] = [
    "left-0 top-20 z-10 w-[52%] -rotate-7 opacity-95",
    "left-[15%] top-10 z-20 w-[54%] -rotate-3 opacity-95",
    "right-[14%] top-12 z-30 w-[54%] rotate-3 opacity-95",
    "right-0 top-5 z-40 w-[56%] rotate-7 opacity-100",
  ];

  return (
    <div className="relative mx-auto hidden h-[560px] w-full max-w-[680px] md:block">
      {cards.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="IY Player Card"
          className={`absolute rounded-[2rem] shadow-2xl shadow-black/20 transition duration-500 hover:z-50 hover:-translate-y-4 hover:scale-105 ${
            positions[index] ?? ""
          }`}
        />
      ))}
    </div>
  );
}

function MobileHeroCards() {
  const [cards, setCards] = useState<string[]>([]);

  useEffect(() => {
    setCards(getHeroCards(3));
  }, []);

  const positions: string[] = [
    "left-1 top-12 z-10 w-[40%] -rotate-7 opacity-90",
    "left-[30%] top-2 z-30 w-[42%] rotate-1 opacity-100",
    "right-1 top-14 z-20 w-[40%] rotate-7 opacity-90",
  ];

  return (
    <div className="relative mx-auto mt-8 h-[210px] w-full max-w-md md:hidden">
      {cards.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="IY Player Card"
          className={`absolute rounded-[1.2rem] shadow-2xl shadow-black/15 ${
            positions[index] ?? ""
          }`}
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
            creates
            <br />
            identity.
          </h1>

          <p className="mt-8 max-w-2xl text-2xl leading-relaxed text-black/75">
            IY connects real sport with recognition, belonging and measurable impact.
          </p>
        </div>

        <DesktopHeroCards />
      </div>
    </section>
  );
}

function MobileHero() {
  return (
    <section className="bg-white px-5 pb-8 pt-9 md:hidden">
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
          Sport
          <br />
          becomes
          <br />
          identity.
        </h1>

        <p className="mx-auto mt-7 max-w-[19rem] text-center text-lg leading-relaxed text-black/65">
          Where real movement becomes progress, recognition and impact.
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
            How do you want to be part of it?
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
            Where do you belong?
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
              Turn your sport into progress.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65 md:mt-6 md:text-lg">
              Real movement builds your player, your identity and your future.
            </p>
            <div className="mt-7 inline-flex rounded-xl bg-[#00D1B2] px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black md:mt-8 md:px-6">
              Player →
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
              Become part of players&apos; progress.
            </h3>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65 md:mt-6 md:text-lg">
              Every partnership inspires real movement, builds authentic connections and creates measurable impact.
            </p>
            <div className="mt-7 inline-flex rounded-xl bg-[#00D1B2] px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black md:mt-8 md:px-6">
              Partner →
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PlayerJourneySection() {
  return (
    <section className="border-t border-black/10 bg-white px-5 py-14 md:bg-[#FBFBF8] md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
            Player journey
          </p>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight text-black md:text-7xl">
            Every player
            <br />
            starts somewhere.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">
            Real activity shapes your player, unlocks new levels and turns progress into identity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-4">
          {journeyCards.map((card, index) => (
            <div
              key={card.level}
              className="group sticky top-8 rounded-[2rem] border border-black/10 bg-[#FBFBF8] p-4 shadow-xl shadow-black/10 md:static md:p-4"
              style={{ zIndex: index + 1 }}
            >
              <div className="flex items-center justify-between px-2 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                    {card.level}
                  </p>
                  <p className="mt-1 text-4xl font-semibold leading-none tracking-tight text-black">
                    {card.ovr} OVR
                  </p>
                </div>
                <span className="rounded-full bg-black px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                  0{index + 1}
                </span>
              </div>

              <div className="overflow-hidden rounded-[1.6rem] bg-white">
                <img
                  src={card.image}
                  alt={`${card.level} Player Card`}
                  className="w-full transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <p className="px-2 pt-5 text-2xl font-semibold leading-tight tracking-tight text-black">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FBFBF8] text-black">
      <Navbar />
      <DesktopHero />
      <MobileHero />
      <RoleSelection />
      <PlayerJourneySection />
    </main>
  );
}
