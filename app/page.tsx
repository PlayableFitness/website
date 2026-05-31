"use client";

import Link from "next/link";
import { useRef, useState } from "react";

function Navbar() {
  const activeClass =
    "text-black underline decoration-[#00D1B2] decoration-2 underline-offset-8";

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f2]/85 backdrop-blur-xl">
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

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-black/65">
          
          <Link
            href="/"
            className={`${activeClass} transition hover:text-black`}
          >
            Home
          </Link>

          <Link href="/players" className="transition hover:text-black">
            Players
          </Link>

          <Link href="/partners" className="transition hover:text-black">
            Partners
          </Link>

        </nav>

        <details className="relative md:hidden">
          <summary className="list-none rounded-xl border border-black/10 bg-white/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black cursor-pointer transition hover:bg-white">
            Menu
          </summary>

          <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/10">
            
            <Link
              href="/"
              className="block px-5 py-4 text-sm font-semibold text-[#00D1B2] transition hover:bg-black/[0.03]"
            >
              Home
            </Link>

            <Link
              href="/players"
              className="block border-t border-black/10 px-5 py-4 text-sm font-semibold text-black transition hover:bg-black/[0.03]"
            >
              Players
            </Link>

            <Link
              href="/partners"
              className="block border-t border-black/10 px-5 py-4 text-sm font-semibold text-black transition hover:bg-black/[0.03]"
            >
              Partners
            </Link>

          </div>
        </details>
      </div>
    </header>
  );
}

function PlayerCardStack() {
  const cards = [
    { src: "/cards/card_Julia.png", className: "z-30 rotate-0 scale-100" },
    {
      src: "/cards/card_Jaydon.png",
      className:
        "z-20 -translate-x-16 translate-y-8 -rotate-6 scale-95 opacity-95",
    },
    {
      src: "/cards/card_David.png",
      className:
        "z-10 translate-x-16 translate-y-10 rotate-6 scale-95 opacity-95",
    },
  ];

  return (
    <div className="relative mx-auto h-[560px] w-[420px]">
      {cards.map((card) => (
        <img
          key={card.src}
          src={card.src}
          alt="IY Player Card"
          className={`absolute left-1/2 top-0 h-[540px] w-auto -translate-x-1/2 rounded-[2rem] shadow-2xl shadow-black/25 transition duration-500 hover:z-40 hover:-translate-y-4 hover:scale-105 ${card.className}`}
        />
      ))}
    </div>
  );
}

function MobilePlayerCardStack() {
  const cards = [
    "/cards/card_Julia.png",
    "/cards/card_Jaydon.png",
    "/cards/card_David.png",
    "/cards/card_Felix.png",
    "/cards/card_Lena.png",
  ];

  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const nextCard = () => setIndex((prev) => prev + 1);

  const visibleCards = [
    cards[index % cards.length],
    cards[(index + 1) % cards.length],
    cards[(index + 2) % cards.length],
  ];

  return (
    <div className="relative mx-auto mt-12 h-[390px] w-[270px] md:hidden">
      {visibleCards.map((src, i) => (
        <img
          key={`${src}-${index}-${i}`}
          src={src}
          alt="IY Player Card"
          onPointerDown={(e) => {
            if (i === 0) startX.current = e.clientX;
          }}
          onPointerUp={(e) => {
            if (i !== 0 || startX.current === null) return;
            if (Math.abs(e.clientX - startX.current) > 70) nextCard();
            startX.current = null;
          }}
          onClick={() => {
            if (i === 0) nextCard();
          }}
          className={`absolute inset-0 h-[360px] w-full rounded-[1.7rem] object-cover shadow-2xl shadow-black/25 transition duration-300 ${
            i === 0
              ? "z-30 cursor-pointer active:scale-95"
              : i === 1
              ? "z-20 translate-y-5 -rotate-6 scale-95 opacity-90"
              : "z-10 translate-y-10 rotate-6 scale-90 opacity-75"
          }`}
        />
      ))}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
      {children}
    </p>
  );
}

function Section({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-t border-black/10 bg-[#f7f7f2]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
            {title}
          </h2>
          {text && (
            <p className="mt-6 text-lg leading-relaxed text-black/65">
              {text}
            </p>
          )}
        </div>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

function CoreMechanicSection() {
  const items = [
    {
      label: "Move",
      title: "Real activity improves your player.",
      text: "Runs, workouts, consistency and recovery shape your skills, form and overall rating.",
    },
    {
      label: "Compete",
      title: "Every workout can decide matchday.",
      text: "Teams compete in leagues, rivalries and seasons powered by real-world movement.",
    },
    {
      label: "Progress",
      title: "Build status through movement.",
      text: "Unlock special cards, sponsors, jerseys and rewards as your player grows.",
    },
  ];

  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-6">
      <div className="grid overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-xl shadow-black/5 backdrop-blur-xl md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="border-black/10 p-7 md:border-r last:md:border-r-0"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
              {item.label}
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-black">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-black/60">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlayerIdentitySection() {
  const stages = [
    [
      "Level 01",
      "Rookie",
      "42 OVR",
      "Every player starts somewhere. Small activities create visible progress from day one.",
      "/players/stufe1.jpg",
    ],
    [
      "Level 02",
      "Starter",
      "58 OVR",
      "Consistency builds form, confidence and a player identity you can see.",
      "/players/stufe2.jpg",
    ],
    [
      "Level 03",
      "Elite",
      "74 OVR",
      "Better skills unlock more status, stronger teams and new opportunities.",
      "/players/stufe3.jpg",
    ],
    [
      "Level 04",
      "Pro",
      "91 OVR",
      "Top players earn visibility, special cards and premium brand unlocks.",
      "/players/stufe4.jpg",
    ],
  ];

  return (
    <Section
      eyebrow="Player Identity"
      title="Not your favorite player. You."
      text="Your movement builds your player, your stats, your status and your story."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stages.map(([stage, title, rating, text, image]) => (
          <div
            key={title}
            className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-[#ecece5]">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover object-[center_30%] transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-xl bg-[#00D1B2] px-3 py-2 text-xs font-bold text-black">
                {rating}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  {stage}
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-black/65">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function MatchdaySection() {
  return (
    <Section
      eyebrow="Teams & Matchdays"
      title="Every player matters."
      text="Your next workout could decide the next matchday."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <img
            src="/logik/team.jpg"
            alt="Team"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="relative">
            <Eyebrow>Matchday 07</Eyebrow>
            <h3 className="mt-4 text-4xl font-semibold leading-none tracking-tight text-black md:text-5xl">
              LA United
              <br />
              vs
              <br />
              Berlin Ballers
            </h3>

            <div className="mt-6 rounded-2xl bg-black p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                Last match
              </p>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase text-white/55">
                    LA United
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase text-white/55">
                    Berlin Ballers
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-4xl font-semibold leading-none text-[#00D1B2]">
                    3
                  </p>
                  <p className="mt-1 text-4xl font-semibold leading-none text-white">
                    1
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-black p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Team Power
                </p>
                <p className="mt-2 text-5xl font-semibold text-[#00D1B2]">
                  78
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                  Weekly Form
                </p>
                <p className="mt-2 text-5xl font-semibold text-black">+12%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <Eyebrow>League Table</Eyebrow>

          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10">
            <div className="grid grid-cols-[0.5fr_1.8fr_0.6fr_0.6fr_0.6fr_0.6fr_0.8fr_0.8fr] bg-black px-3 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">
              <span>#</span>
              <span>Team</span>
              <span className="text-center">P</span>
              <span className="text-center">W</span>
              <span className="text-center">D</span>
              <span className="text-center">L</span>
              <span className="text-center">GD</span>
              <span className="text-center">OVR</span>
            </div>

            {[
              ["1", "North Squad", "6", "5", "1", "0", "+18", "82"],
              ["2", "LA United", "6", "4", "1", "1", "+11", "78"],
              ["3", "Berlin Ballers", "6", "3", "1", "2", "+7", "74"],
              ["4", "Urban Runners", "6", "2", "0", "4", "-6", "69"],
            ].map(([rank, team, played, won, draw, lost, gd, ovr]) => (
              <div
                key={team}
                className="grid grid-cols-[0.5fr_1.8fr_0.6fr_0.6fr_0.6fr_0.6fr_0.8fr_0.8fr] items-center border-t border-black/10 bg-[#f7f7f2] px-3 py-4 text-sm"
              >
                <span className="font-semibold text-black/45">#{rank}</span>
                <span className="font-semibold text-black">{team}</span>
                <span className="text-center font-medium text-black/60">
                  {played}
                </span>
                <span className="text-center font-medium text-black/60">
                  {won}
                </span>
                <span className="text-center font-medium text-black/60">
                  {draw}
                </span>
                <span className="text-center font-medium text-black/60">
                  {lost}
                </span>
                <span className="text-center font-semibold text-black">
                  {gd}
                </span>
                <span className="mx-auto rounded-xl bg-[#00D1B2] px-3 py-2 text-xs font-semibold text-black">
                  {ovr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Play2WinSection() {
  return (
    <section className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Fair Competition
          </p>
          <h2 className="mt-5 text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            No Pay2Win.
            <br />
            <span className="text-[#00D1B2]">Play2Win.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65">
            Success is earned through real movement — not money, ads or endless
            screen time.
          </p>
        </div>
      </div>
    </section>
  );
}

function RewardsSection() {
  const rewards = [
    {
      title: "Special Cards",
      text: "Player of the Matchday, Player of the Season and rare achievement cards make progress visible.",
    },
    {
      title: "Jerseys & Sponsors",
      text: "Unlock teamwear, outfitters and sponsors that represent your identity and status.",
    },
    {
      title: "Creator Programs",
      text: "Train with athletes, creators and communities through challenges, programs and events.",
    },
  ];

  return (
    <Section
      eyebrow="Rewards & Identity"
      title="Earn your identity."
      text="Brands, creators and athletes become part of the sport system — not interruptions."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {rewards.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-black">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-black/65">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function VisionSection() {
  return (
    <section className="border-t border-black/10 bg-[#f7f7f2]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <Eyebrow>The Vision</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
            A new category between sport, gaming and real life.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <img
            src="/vision/vision_05.jpg"
            alt="IY Vision"
            className="absolute inset-0 h-full w-full object-cover object-[center_25%] opacity-30"
          />
          <div className="relative">
            <p className="text-lg leading-relaxed text-black/70">
              IY transforms real movement into a competitive sports system
              powered by identity, teams, matchdays, creators and brands.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-black/70">
              The app is not the goal. Real life is the game.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-[#f7f7f2] px-6 pb-16 md:pb-24">
      <div className="mx-auto rounded-3xl border border-black/10 bg-white p-8 text-center shadow-sm md:p-14 max-w-7xl">
        <Eyebrow>Season Zero</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
          Your journey starts now.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-black/65">
          Become part of the first generation building a new sports world
          through real movement.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/players"
            className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
          >
            Create Player →
          </Link>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black/30"
          >
            For Brands & Partners →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-black">
      <Navbar />

      <section className="relative overflow-hidden bg-[#f7f7f2]">
        <div className="absolute inset-0">
          <img
            src="/header/header_16:9_03.png"
            alt="IY Movement"
            className="h-full w-full object-cover object-[75%_25%] opacity-95 md:object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f2]/90 via-[#f7f7f2]/52 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f7f2] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-center gap-10 px-6 py-12 md:min-h-[78vh] md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
              Real movement powered sport
            </p>

            <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight text-black md:text-8xl xl:text-[7.2rem]">
              You are
              <br />
              the player.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-black/75">
              Daily activity improves your player, strengthens your team and
              shapes the next matchday.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/players"
                className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
              >
                Create Player →
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black/30 hover:bg-white"
              >
                For Brands & Partners →
              </Link>
            </div>

            <MobilePlayerCardStack />
          </div>

          <div className="hidden justify-end md:flex">
            <PlayerCardStack />
          </div>
        </div>
      </section>

      <CoreMechanicSection />
      <PlayerIdentitySection />
      <MatchdaySection />
      <Play2WinSection />
      <RewardsSection />
      <VisionSection />
      <CTASection />
    </main>
  );
}
