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
    image: "/cards/Card_Rookie.png",
    text: "Every player starts somewhere.",
  },
  {
    level: "Rookie",
    image: "/cards/Card_Starter.png",
    text: "Every workout moves you forward.",
  },
  {
    level: "Pro",
    image: "/cards/Card_Elite.png",
    text: "Consistency becomes visible.",
  },
  {
    level: "Elite",
    image: "/cards/Card_Pro.png",
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
          <Link href="/" className="transition hover:text-black">
            Home
          </Link>
          <Link
            href="/players"
            className={`${activeClass} transition hover:text-black`}
          >
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
            <Link href="/" className="block px-5 py-4 text-sm font-semibold">
              Home
            </Link>
            <Link
              href="/players"
              className="block border-t border-black/10 px-5 py-4 text-sm font-semibold text-[#00D1B2]"
            >
              Player
            </Link>
            <Link
              href="/partners"
              className="block border-t border-black/10 px-5 py-4 text-sm font-semibold"
            >
              Partner
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] ${
        dark ? "text-white/45" : "text-black/45"
      }`}
    >
      {children}
    </p>
  );
}

function HeroCards() {
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
          className={`absolute rounded-[2rem] shadow-2xl shadow-black/40 transition duration-500 hover:z-50 hover:-translate-y-4 hover:scale-105 ${
            positions[index] ?? ""
          }`}
        />
      ))}
    </div>
  );
}

function PlayerHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/header/header_05.png"
          alt="IY Player"
          className="h-full w-full object-cover opacity-60"
          style={{ objectPosition: "center 38%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 pb-16 pt-24 md:min-h-[86vh] md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            Player
          </p>

          <h1 className="text-6xl font-semibold leading-[0.9] tracking-tight md:text-8xl xl:text-[7rem]">
            You are
            <br />
            the player.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/70 md:text-2xl">
            Every real workout changes your player, your skills and your identity.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="mailto:hello@playable-fitness.com?subject=IY%20Early%20Access"
              className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
            >
              Get early access →
            </Link>

          </div>
        </div>

        <HeroCards />
      </div>
    </section>
  );
}

function PlayerJourneySection() {
  return (
    <section className="border-t border-white/10 bg-black px-5 py-16 text-white md:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow dark>Player journey</Eyebrow>
          <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Every player
            <br />
            starts somewhere.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            Real activity shapes your player, unlocks new levels and turns progress into identity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-4">
          {journeyCards.map((card, index) => (
            <div
              key={card.level}
              className="group sticky top-8 rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur md:static"
              style={{ zIndex: index + 1 }}
            >
              <div className="flex items-center justify-between px-2 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    {card.level}
                  </p>
                </div>
                <span className="rounded-full bg-[#00D1B2] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black">
                  0{index + 1}
                </span>
              </div>

              <div className="overflow-hidden rounded-[1.6rem] bg-black">
                <img
                  src={card.image}
                  alt={`${card.level} Player Card`}
                  className="w-full transition duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <p className="px-2 pt-5 text-2xl font-semibold leading-tight tracking-tight text-white">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    ["PAC", "Pace", "Speed, tempo and explosiveness."],
    ["END", "Endurance", "Stamina and resilience."],
    ["STR", "Strength", "Power, stability and physicality."],
    ["TEC", "Technique", "Coordination, control and sport-specific skill."],
    ["MBL", "Mobility", "Agility, movement quality and control."],
    ["DIS", "Discipline", "Consistency, rhythm and commitment."],
  ];

  return (
    <section className="border-t border-black/10 bg-[#FBFBF8] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Skills</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
            Your sport builds your skills.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/65">
            Every sport creates a different player. A runner develops differently than a boxer. A footballer grows in a different way than a strength athlete.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map(([short, title, text]) => (
            <div
              key={short}
              className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D1B2]">
                {short}
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-black">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompetitionSection() {
  const table = [
    ["1", "LA United", "24", "16", "5", "3", "+28", "53"],
    ["2", "Munich City", "24", "15", "4", "5", "+21", "49"],
    ["3", "Berlin Ballers", "24", "13", "5", "6", "+15", "44"],
    ["4", "Urban Runners", "24", "12", "4", "8", "+9", "40"],
  ];

  return (
    <section className="border-t border-white/10 bg-black px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow dark>Competition</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
            Every player matters.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Your activity affects your team, matchdays, rankings and seasons.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#203f3a_0%,#07110f_46%,#020403_100%)] p-4 shadow-2xl shadow-black/40 sm:p-6 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:p-6 md:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D1B2]">
                  Matchday 07
                </p>

                <span className="w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:text-xs">
                  Every 3 days
                </span>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    Home
                  </p>
                  <h3 className="mt-2 text-4xl font-semibold leading-none md:text-5xl">
                    LA
                    <br />
                    United
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#00D1B2]">
                    Team OVR 82
                  </p>
                </div>

                <div className="w-fit rounded-3xl bg-black/55 px-6 py-5 text-center sm:mx-auto">
                  <p className="text-5xl font-semibold leading-none md:text-6xl">
                    2<span className="text-white/25">:</span>1
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    Away
                  </p>
                  <h3 className="mt-2 text-4xl font-semibold leading-none md:text-5xl">
                    Berlin
                    <br />
                    Ballers
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    Team OVR 79
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                League Table
              </p>

              <div className="mt-5 min-w-[560px]">
                <div className="grid grid-cols-[28px_1fr_34px_28px_28px_28px_42px_34px] gap-2 px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                  <span>#</span>
                  <span>Club</span>
                  <span>Sp</span>
                  <span>S</span>
                  <span>U</span>
                  <span>N</span>
                  <span>TD</span>
                  <span>Pts</span>
                </div>

                <div className="mt-3 space-y-3">
                  {table.map(([rank, team, sp, s, u, n, td, pts]) => (
                    <div
                      key={team}
                      className="grid grid-cols-[28px_1fr_34px_28px_28px_28px_42px_34px] items-center gap-2 rounded-2xl bg-black/25 px-4 py-3 text-sm"
                    >
                      <span className="text-white/35">#{rank}</span>
                      <span className="font-semibold">{team}</span>
                      <span className="text-white/45">{sp}</span>
                      <span className="text-white/45">{s}</span>
                      <span className="text-white/45">{u}</span>
                      <span className="text-white/45">{n}</span>
                      <span className="text-[#00D1B2]">{td}</span>
                      <span className="font-semibold">{pts}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  const items = [
    ["Unlock", "New partners, challenges and opportunities become available through activity and progress."],
    ["Choose", "You decide which partners fit your identity, your sport and your mindset."],
    ["Represent", "Partners become part of your card, your look, your team and your story."],
  ];

  return (
    <section className="border-t border-black/10 bg-[#FBFBF8] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Partners</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
            Choose who becomes part of you.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/65">
            Partner brands are not ads. They become part of your identity when they fit your journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
            >
              <h3 className="text-3xl font-semibold text-black">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-black px-6 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl shadow-black/40 md:p-14">
        <Eyebrow dark>Early access</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
          Your player
          <br />
          starts today.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
          Be among the first players to experience IY.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="mailto:hello@playable-fitness.com?subject=IY%20Early%20Access"
            className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black"
          >
            Get early access →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-[#FBFBF8] text-black">
      <Navbar />
      <PlayerHero />
      <PlayerJourneySection />
      <SkillsSection />
      <CompetitionSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}
