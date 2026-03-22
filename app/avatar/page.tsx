"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Pill = { id: string; label: string };
type Sport = { id: string; label: string; emoji: string };

const SPORTS: Sport[] = [
  { id: "running", label: "Running", emoji: "🏃" },
  { id: "football", label: "Fußball", emoji: "⚽" },
  { id: "fitness", label: "Fitness", emoji: "🏋️" },
  { id: "combat", label: "Kampfsport", emoji: "🥊" },
  { id: "yoga", label: "Yoga", emoji: "🧘" },
  { id: "mobility", label: "Dehnen", emoji: "🤸" },
  { id: "basketball", label: "Basketball", emoji: "🏀" },
  { id: "swim", label: "Schwimmen", emoji: "🏊" },
];

const PERSONALITY: Pill[] = [
  { id: "starter", label: "Starter" },
  { id: "steady", label: "Konstant" },
  { id: "social", label: "Team-Mensch" },
  { id: "solo", label: "Solo-Fokus" },
  { id: "competitive", label: "Competitive" },
  { id: "calm", label: "Calm" },
];

const HABITS: Pill[] = [
  { id: "morning", label: "Morgens" },
  { id: "evening", label: "Abends" },
  { id: "short", label: "Kurz & oft" },
  { id: "long", label: "Länger & selten" },
  { id: "outdoor", label: "Draußen" },
  { id: "indoor", label: "Indoor" },
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
            Onboarding · 02/04
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

function PillButton({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-2 text-xs transition",
        active
          ? "border-white/25 bg-white/10 text-white"
          : "border-white/10 bg-black/30 text-white/70 hover:bg-white/5 hover:text-white"
      )}
    >
      {children}
    </button>
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

export default function AppAvatarPage() {
  const [name, setName] = useState("Tada");
  const [sports, setSports] = useState<string[]>(["running"]);
  const [personality, setPersonality] = useState<string[]>(["steady"]);
  const [habits, setHabits] = useState<string[]>(["outdoor", "short"]);
  const [experience, setExperience] = useState<number>(2); // 0..4
  const [intensity, setIntensity] = useState<number>(2); // 0..4

  const toggle = (arr: string[], id: string) =>
    arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];

  const experienceLabel = useMemo(() => {
    return ["Neu", "Beginner", "Regular", "Advanced", "Pro"][experience] || "Regular";
  }, [experience]);

  const intensityLabel = useMemo(() => {
    return ["Easy", "Chill", "Normal", "Hard", "Beast"][intensity] || "Normal";
  }, [intensity]);

  const avatarTagline = useMemo(() => {
    const sportNames = sports
      .map((id) => SPORTS.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .slice(0, 2)
      .join(" · ");

    const p = personality
      .map((id) => PERSONALITY.find((x) => x.id === id)?.label)
      .filter(Boolean)
      .slice(0, 2)
      .join(" · ");

    return [sportNames, p].filter(Boolean).join(" — ");
  }, [sports, personality]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <AppTopbar />

      {/* Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/header/header_16:9_03.png"
            alt=""
            className="h-full w-full object-cover opacity-25"
            style={{ objectPosition: "center 55%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20 grid gap-10 md:grid-cols-12 items-start">
          {/* Left: minimal copy */}
          <div className="md:col-span-6">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">
              Avatar Builder
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              Bau deinen Spieler.
            </h1>

            <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-xl">
              Kurz auswählen, nicht ausfüllen. Dein Spieler passt sich an — und wächst mit jeder Bewegung.
            </p>

            <div className="mt-8 flex gap-2 flex-wrap">
              {["Persönlichkeit", "Skills", "Gewohnheiten"].map((x) => (
                <span
                  key={x}
                  className="text-xs border border-white/10 bg-black/30 text-white/70 px-3 py-1 rounded-full"
                >
                  {x}
                </span>
              ))}
            </div>

            <div className="mt-10 flex gap-3">
              <Link
                href="/app"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 hover:bg-white/10 transition font-medium text-sm px-6 py-3"
              >
                ← Zurück
              </Link>
              <Link
                href="/app/team"
                className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-100 transition font-medium text-sm px-6 py-3"
              >
                Weiter →
              </Link>
            </div>
          </div>

          {/* Right: Phone UI */}
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
                        Dein Spieler
                      </p>
                      <p className="text-xs text-white/50 mt-1">
                        {avatarTagline || "Wähle deinen Stil"}
                      </p>
                    </div>

                    <span className="text-xs text-white/50 border border-white/10 bg-black/30 px-3 py-1 rounded-full">
                      02/04
                    </span>
                  </div>
                </div>

                {/* Screen Body */}
                <div className="flex-1 px-6 py-5 overflow-y-auto no-scrollbar space-y-4">
                  {/* Player identity */}
                  <Card title="Name" subtitle="Du bist dein eigener Spieler.">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="z.B. Tada"
                      className="w-full rounded-2xl bg-black/50 border border-white/15 px-4 py-3 outline-none focus:border-white/40 transition placeholder:text-white/30"
                    />
                  </Card>

                  {/* Sports */}
                  <Card title="Sport" subtitle="Wähle 1–3 (du kannst später ändern)">
                    <div className="grid grid-cols-2 gap-3">
                      {SPORTS.map((s) => {
                        const active = sports.includes(s.id);
                        return (
                          <button
                            key={s.id}
                            onClick={() => {
                              // limit to 3
                              if (!active && sports.length >= 3) return;
                              setSports(toggle(sports, s.id));
                            }}
                            className={cn(
                              "text-left rounded-3xl border p-4 transition",
                              active
                                ? "border-white/25 bg-white/10"
                                : "border-white/10 bg-black/30 hover:bg-white/5"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-semibold">
                                {s.emoji} {s.label}
                              </p>
                              {active && (
                                <span className="text-xs text-white/60">✓</span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-3 text-xs text-white/40">
                      {sports.length}/3 ausgewählt
                    </p>
                  </Card>

                  {/* Personality */}
                  <Card title="Persönlichkeit" subtitle="Wähle, wie du spielst">
                    <div className="flex flex-wrap gap-2">
                      {PERSONALITY.map((p) => (
                        <PillButton
                          key={p.id}
                          active={personality.includes(p.id)}
                          onClick={() => setPersonality(toggle(personality, p.id))}
                        >
                          {p.label}
                        </PillButton>
                      ))}
                    </div>
                  </Card>

                  {/* Skills */}
                  <Card title="Skills" subtitle="Kurz einstellen, statt lange erklären">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-white/50">Erfahrung</p>
                          <p className="text-xs text-white/70">{experienceLabel}</p>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={4}
                          value={experience}
                          onChange={(e) => setExperience(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-white/50">Intensity</p>
                          <p className="text-xs text-white/70">{intensityLabel}</p>
                        </div>
                        <input
                          type="range"
                          min={0}
                          max={4}
                          value={intensity}
                          onChange={(e) => setIntensity(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Habits */}
                  <Card title="Gewohnheiten" subtitle="Was passt zu deinem Alltag?">
                    <div className="flex flex-wrap gap-2">
                      {HABITS.map((h) => (
                        <PillButton
                          key={h.id}
                          active={habits.includes(h.id)}
                          onClick={() => setHabits(toggle(habits, h.id))}
                        >
                          {h.label}
                        </PillButton>
                      ))}
                    </div>
                  </Card>

                  {/* Summary / Continue */}
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold">{name || "Dein Spieler"}</p>
                        <p className="text-xs text-white/50 mt-1">
                          {sports.length ? `Sport: ${sports.map(id => SPORTS.find(s=>s.id===id)?.label).filter(Boolean).join(", ")}` : "Wähle mindestens einen Sport"}
                        </p>
                        <p className="text-xs text-white/50 mt-1">
                          {`Erfahrung: ${experienceLabel} · Intensity: ${intensityLabel}`}
                        </p>
                      </div>

                      <Link
                        href="/app/team"
                        className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-100 transition font-medium text-xs px-5 py-2 h-10"
                      >
                        Weiter →
                      </Link>
                    </div>
                  </div>

                  <div className="pb-6 text-center text-xs text-white/35">
                    Du kannst alles später ändern. Entwicklung bleibt.
                  </div>
                </div>
              </div>
            </PhoneFrame>

            <div className="mt-6 text-center text-sm text-white/50">
              Nächster Screen: <span className="text-white/70">Team</span> (wir bauen ihn als nächstes).
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
