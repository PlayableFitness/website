"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Team = {
  id: string;
  name: string;
  tag: string;
  vibe: string;
  accent: string; // tailwind gradient
};

type Role = {
  id: string;
  title: string;
  desc: string;
  tag: string;
};

type Kit = {
  id: string;
  name: string;
  badge: string;
};

const TEAMS: Team[] = [
  {
    id: "city",
    name: "City Crew",
    tag: "Public",
    vibe: "Für alle, die zusammen starten wollen",
    accent: "from-cyan-500/18 via-white/5 to-transparent",
  },
  {
    id: "friends",
    name: "Friends League",
    tag: "Invite",
    vibe: "Mit Freunden – ohne Vergleichsdruck",
    accent: "from-emerald-500/16 via-white/5 to-transparent",
  },
  {
    id: "club",
    name: "Club Mode",
    tag: "Teams",
    vibe: "Für Vereine & Gruppen",
    accent: "from-violet-500/18 via-white/5 to-transparent",
  },
];

const ROLES: Role[] = [
  {
    id: "runner",
    title: "Mover",
    tag: "Aktivität",
    desc: "Du bringst Rhythmus rein: Schritte, Runs, Sessions.",
  },
  {
    id: "anchor",
    title: "Anchor",
    tag: "Konstanz",
    desc: "Du hältst das Team stabil – auch in ruhigen Wochen.",
  },
  {
    id: "spark",
    title: "Spark",
    tag: "Push",
    desc: "Du zündest Matchday-Momente. Kleine Peaks, große Wirkung.",
  },
  {
    id: "support",
    title: "Support",
    tag: "Motivation",
    desc: "Du machst’s gemeinsam. Du holst Leute zurück ins Spiel.",
  },
];

const KITS: Kit[] = [
  { id: "night", name: "Midnight", badge: "⚫" },
  { id: "ice", name: "Ice", badge: "⚪" },
  { id: "neon", name: "Neon", badge: "🟢" },
  { id: "royal", name: "Royal", badge: "🟣" },
];

function cn(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function AppTopbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/app"
          className="text-lg font-bold tracking-tight text-white hover:text-white/80 transition"
        >
          Playable Fitness
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs text-white/50 border border-white/10 bg-black/40 px-3 py-1 rounded-full">
            Onboarding · 03/04
          </span>
          <Link
            href="/"
            className="text-xs text-white/60 hover:text-white transition"
          >
            Website →
          </Link>
        </div>
      </div>
    </header>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      <div className="relative overflow-hidden rounded-[44px] border border-white/15 bg-black/40 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
        <div className="rounded-[36px] overflow-hidden border border-white/10 bg-black aspect-[9/19] relative">
          {children}
        </div>
        <div className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 h-5 w-28 rounded-full bg-black border border-white/10" />
      </div>
    </div>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4">
        <p className="text-sm font-semibold">{title}</p>
        {subtitle && <p className="text-xs text-white/50 mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

export default function AppTeamPage() {
  const [teamId, setTeamId] = useState(TEAMS[0].id);
  const [roleId, setRoleId] = useState(ROLES[0].id);
  const [kitId, setKitId] = useState(KITS[0].id);
  const [joinCode, setJoinCode] = useState("");

  const team = useMemo(
    () => TEAMS.find((t) => t.id === teamId) || TEAMS[0],
    [teamId]
  );
  const role = useMemo(
    () => ROLES.find((r) => r.id === roleId) || ROLES[0],
    [roleId]
  );
  const kit = useMemo(() => KITS.find((k) => k.id === kitId) || KITS[0], [kitId]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <AppTopbar />

      {/* Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/header/header_16:9_03.png"
            alt=""
            className="h-full w-full object-cover opacity-18"
            style={{ objectPosition: "center 55%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/85 to-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20 grid gap-10 md:grid-cols-12 items-start">
          {/* Left */}
          <div className="md:col-span-6">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">
              Team
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Du levelst nicht allein.
            </h1>

            <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-xl">
              Wähle ein Team, eine Rolle und ein Kit. Dann bist du drin.
            </p>

            <div className="mt-10 flex gap-3">
              <Link
                href="/app/avatar"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 hover:bg-white/10 transition font-medium text-sm px-6 py-3"
              >
                ← Zurück
              </Link>
              <Link
                href="/app/matchday"
                className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-100 transition font-medium text-sm px-6 py-3"
              >
                Weiter →
              </Link>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold">Dein Setup</p>
              <p className="text-xs text-white/50 mt-2">
                Team · Rolle · Kit — alles später änderbar.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { k: "Team", v: team.name },
                  { k: "Rolle", v: role.title },
                  { k: "Kit", v: kit.name },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/10 bg-black/30 p-3"
                  >
                    <p className="text-xs text-white/50">{x.k}</p>
                    <p className="text-sm text-white/80 mt-1 line-clamp-1">
                      {x.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Phone */}
          <div className="md:col-span-6">
            <PhoneFrame>
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black" />
                <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/6 blur-3xl" />
                <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Screen Header */}
                <div className="px-6 pt-10 pb-4 border-b border-white/10 bg-black/40 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/50">
                        Playable Fitness
                      </p>
                      <p className="text-xl font-semibold leading-tight">
                        Dein Team
                      </p>
                      <p className="text-xs text-white/50 mt-1">
                        {team.name} · {role.title} · {kit.badge} {kit.name}
                      </p>
                    </div>

                    <span className="text-xs text-white/50 border border-white/10 bg-black/30 px-3 py-1 rounded-full">
                      03/04
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex-1 px-6 py-5 overflow-y-auto no-scrollbar space-y-4">
                  {/* Team select */}
                  <Card title="Team wählen" subtitle="Public oder Invite – du entscheidest">
                    <div className="space-y-3">
                      {TEAMS.map((t) => {
                        const active = t.id === teamId;
                        return (
                          <button
                            key={t.id}
                            onClick={() => setTeamId(t.id)}
                            className={cn(
                              "w-full text-left rounded-3xl border p-4 transition relative overflow-hidden",
                              active
                                ? "border-white/25 bg-white/10"
                                : "border-white/10 bg-black/30 hover:bg-white/5"
                            )}
                          >
                            <div
                              className={cn(
                                "absolute inset-0 bg-gradient-to-r opacity-100",
                                t.accent
                              )}
                            />
                            <div className="relative z-10 flex items-start justify-between gap-4">
                              <div>
                                <p className="text-sm font-semibold">{t.name}</p>
                                <p className="text-xs text-white/60 mt-1">{t.vibe}</p>
                              </div>
                              <span className="text-xs text-white/60 border border-white/10 bg-black/30 px-3 py-1 rounded-full">
                                {t.tag}
                              </span>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Invite code (optional) */}
                    <div className="mt-4 rounded-3xl border border-white/10 bg-black/30 p-4">
                      <p className="text-xs text-white/50">Invite Code (optional)</p>
                      <input
                        value={joinCode}
                        onChange={(e) => setJoinCode(e.target.value)}
                        placeholder="z.B. PF-2048"
                        className="mt-2 w-full rounded-2xl bg-black/50 border border-white/15 px-4 py-3 outline-none focus:border-white/40 transition placeholder:text-white/30"
                      />
                    </div>
                  </Card>

                  {/* Role */}
                  <Card title="Rolle" subtitle="Wie du dein Team stärkst">
                    <div className="grid grid-cols-2 gap-3">
                      {ROLES.map((r) => {
                        const active = r.id === roleId;
                        return (
                          <button
                            key={r.id}
                            onClick={() => setRoleId(r.id)}
                            className={cn(
                              "text-left rounded-3xl border p-4 transition",
                              active
                                ? "border-white/25 bg-white/10"
                                : "border-white/10 bg-black/30 hover:bg-white/5"
                            )}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-sm font-semibold">{r.title}</p>
                                <p className="text-xs text-white/50 mt-1">{r.tag}</p>
                              </div>
                              {active && <span className="text-xs text-white/60">✓</span>}
                            </div>
                            <p className="text-xs text-white/60 mt-3 leading-relaxed">
                              {r.desc}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </Card>

                  {/* Kit */}
                  <Card title="Kit" subtitle="Badge & Look (später: Trikot, Colors, Drops)">
                    <div className="grid grid-cols-2 gap-3">
                      {KITS.map((k) => {
                        const active = k.id === kitId;
                        return (
                          <button
                            key={k.id}
                            onClick={() => setKitId(k.id)}
                            className={cn(
                              "text-left rounded-3xl border p-4 transition",
                              active
                                ? "border-white/25 bg-white/10"
                                : "border-white/10 bg-black/30 hover:bg-white/5"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold">
                                <span className="mr-2">{k.badge}</span>
                                {k.name}
                              </p>
                              {active && <span className="text-xs text-white/60">✓</span>}
                            </div>
                            <p className="text-xs text-white/50 mt-2">
                              Badge unlocked on Matchdays
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </Card>

                  {/* Continue */}
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold">Ready for Matchday?</p>
                        <p className="text-xs text-white/50 mt-1">
                          Nächster Screen: Matchday
                        </p>
                      </div>
                      <Link
                        href="/app/matchday"
                        className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-100 transition font-medium text-xs px-5 py-2 h-10"
                      >
                        Weiter →
                      </Link>
                    </div>
                  </div>

                  <div className="pb-6 text-center text-xs text-white/35">
                    Team = Zugehörigkeit. Fortschritt entsteht gemeinsam.
                  </div>
                </div>
              </div>
            </PhoneFrame>

            <div className="mt-6 text-center text-sm text-white/50">
              Next: <span className="text-white/70">/app/matchday</span> (Countdown, Score, Moment).
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
