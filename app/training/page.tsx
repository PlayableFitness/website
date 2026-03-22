"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type SkillKey = "ausdauer" | "power" | "konstanz" | "mobility" | "teamplay";

type PlayerLS = {
  name: string;
  avatarImg: string;
  skills: Record<SkillKey, number>;
  xpBar: { xp: number; xpMax: number };
  lastActiveTs: number;
  league?: string;
  status?: string;
};

type TrainingEntry = {
  id: string;
  ts: number;
  sport: string;
  minutes: number;
  intensity: number; // 1..5
  mood: string;
  xp: number;
  notes?: string;
};

const LS_PLAYER = "pf_player";
const LS_ENTRIES = "pf_training_entries";

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}
function cn(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function getDefaultPlayer(): PlayerLS {
  return {
    name: "Tada",
    avatarImg: "/avatars/avatar_02.png",
    skills: { ausdauer: 60, power: 55, konstanz: 58, mobility: 52, teamplay: 56 },
    xpBar: { xp: 30, xpMax: 99 },
    lastActiveTs: Date.now(),
    league: "Starter League",
    status: "Steady",
  };
}

function loadPlayer(): PlayerLS {
  const fallback = getDefaultPlayer();
  try {
    const raw = localStorage.getItem(LS_PLAYER);
    if (!raw) return fallback;
    const p = JSON.parse(raw);
    return {
      ...fallback,
      ...p,
      skills: { ...fallback.skills, ...(p.skills || {}) },
      xpBar: { ...fallback.xpBar, ...(p.xpBar || {}) },
      lastActiveTs: typeof p.lastActiveTs === "number" ? p.lastActiveTs : fallback.lastActiveTs,
    };
  } catch {
    return fallback;
  }
}

function savePlayer(p: PlayerLS) {
  localStorage.setItem(LS_PLAYER, JSON.stringify(p));
}

function loadEntries(): TrainingEntry[] {
  try {
    const raw = localStorage.getItem(LS_ENTRIES);
    if (!raw) return [];
    const arr = JSON.parse(raw) as TrainingEntry[];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function saveEntries(entries: TrainingEntry[]) {
  localStorage.setItem(LS_ENTRIES, JSON.stringify(entries));
}

/**
 * XP-Berechnung:
 * - minutes * intensity Faktor
 * - clamp damit nicht eskaliert
 */
function calcXP(minutes: number, intensity: number) {
  const base = minutes * (0.9 + intensity * 0.35);
  return clamp(Math.round(base), 5, 180);
}

/**
 * Skill-Progress:
 * - kleiner Wert steigt schneller, hoher langsamer
 * - sehr kleine Deltas (weil Skills langfristig sein sollen)
 *
 * Formula:
 *   delta = xp * sportWeight * growthFactor(value)
 * where growthFactor(value) ~ (1 - value/120) in [~0.2..~0.95]
 */
function growthFactor(skillValue: number) {
  // bei 30 -> ~0.75, bei 70 -> ~0.42, bei 90 -> ~0.25
  return clamp(1 - skillValue / 120, 0.18, 0.95);
}

function applyTrainingToPlayer(player: PlayerLS, sport: string, xp: number, intensity: number) {
  const p: PlayerLS = structuredClone(player);

  // Sport -> Skill-Wechselwirkung
  const weights: Record<SkillKey, number> = { ausdauer: 0, power: 0, konstanz: 0, mobility: 0, teamplay: 0 };

  switch (sport) {
    case "Running":
      weights.ausdauer = 0.55;
      weights.konstanz = 0.25;
      weights.mobility = 0.20;
      break;
    case "Fitness":
      weights.power = 0.45;
      weights.konstanz = 0.25;
      weights.ausdauer = 0.20;
      weights.mobility = 0.10;
      break;
    case "Fußball":
      weights.teamplay = 0.35;
      weights.ausdauer = 0.30;
      weights.mobility = 0.20;
      weights.konstanz = 0.15;
      break;
    case "Basketball":
      weights.mobility = 0.30;
      weights.teamplay = 0.25;
      weights.ausdauer = 0.25;
      weights.konstanz = 0.20;
      break;
    case "Kampfsport":
      weights.power = 0.30;
      weights.mobility = 0.30;
      weights.konstanz = 0.25;
      weights.ausdauer = 0.15;
      break;
    case "Yoga":
      weights.mobility = 0.55;
      weights.konstanz = 0.25;
      weights.ausdauer = 0.20;
      break;
    case "Dehnen":
      weights.mobility = 0.70;
      weights.konstanz = 0.30;
      break;
    case "Schwimmen":
      weights.ausdauer = 0.50;
      weights.mobility = 0.25;
      weights.power = 0.15;
      weights.konstanz = 0.10;
      break;
    case "Liegestützen":
      weights.power = 0.60;
      weights.konstanz = 0.25;
      weights.mobility = 0.15;
      break;
    default:
      weights.ausdauer = 0.30;
      weights.konstanz = 0.30;
      weights.mobility = 0.20;
      weights.power = 0.20;
      break;
  }

  // Skill-Delta klein halten:
  // xp 100 -> im Schnitt +0..+2 je Skill (abhängig von value)
  (Object.keys(p.skills) as SkillKey[]).forEach((k) => {
    const w = weights[k];
    if (!w) return;
    const factor = growthFactor(p.skills[k]);
    const intensityFactor = 0.85 + intensity * 0.08; // 1..5 => 0.93..1.25
    const delta = (xp * w * factor * intensityFactor) / 55; // Tuning
    p.skills[k] = clamp(Math.round(p.skills[k] + delta), 1, 99);
  });

  // XP-Bar (feel-good)
  const xpMax = p.xpBar.xpMax || 99;
  let newXP = (p.xpBar.xp || 0) + Math.round(xp / 8); // viel schneller als Skills
  while (newXP >= xpMax) newXP -= xpMax; // “Loop”
  p.xpBar = { xp: clamp(newXP, 0, xpMax), xpMax };

  p.lastActiveTs = Date.now();
  return p;
}

/** -----------------------------
 * UI Components
 * ---------------------------- */
function AppTopbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/app" className="text-lg font-bold tracking-tight text-white hover:text-white/80">
          Playable Fitness
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/app" className="text-xs text-white/60 hover:text-white transition">
            Dashboard
          </Link>
          <Link href="/app/matchday" className="text-xs text-white/60 hover:text-white transition">
            Matchday
          </Link>
          <a
            href="/#early-access"
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/85 hover:bg-white/10 transition font-medium text-xs px-4 h-10"
          >
            Early Access
          </a>
        </div>
      </div>
    </header>
  );
}

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-[32px] border border-white/10 bg-white/5", className)}>
      {children}
    </div>
  );
}

function StepPill({ active, label }: { active: boolean; label: string }) {
  return (
    <div
      className={cn(
        "rounded-full border px-3 py-1 text-xs",
        active ? "border-white/25 bg-white/10 text-white" : "border-white/10 bg-black/20 text-white/50"
      )}
    >
      {label}
    </div>
  );
}

function SportChip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 h-11 text-sm font-medium transition",
        selected
          ? "border-white/30 bg-white text-black"
          : "border-white/15 bg-black/30 text-white/80 hover:bg-white/10 hover:text-white"
      )}
    >
      {label}
    </button>
  );
}

function Range({ value, setValue, min, max, step }: any) {
  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => setValue(Number(e.target.value))}
      className="w-full accent-white"
    />
  );
}

/** -----------------------------
 * Page
 * ---------------------------- */
export default function TrainingPage() {
  const [player, setPlayer] = useState<PlayerLS | null>(null);

  // Flow state
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const sports = useMemo(
    () => ["Running", "Fußball", "Fitness", "Kampfsport", "Yoga", "Dehnen", "Basketball", "Schwimmen", "Liegestützen"],
    []
  );

  const [sport, setSport] = useState<string>("Running");
  const [minutes, setMinutes] = useState<number>(30);
  const [intensity, setIntensity] = useState<number>(3);
  const [mood, setMood] = useState<string>("Stolz");
  const [notes, setNotes] = useState<string>("");

  // AutoReps (Option A UI)
  const [repMode, setRepMode] = useState<boolean>(false);
  const [reps, setReps] = useState<number>(0);
  const [setCount, setSetCount] = useState<number>(1);

  useEffect(() => {
    const p = loadPlayer();
    savePlayer(p);
    setPlayer(p);
  }, []);

  useEffect(() => {
    setRepMode(sport === "Liegestützen");
    if (sport !== "Liegestützen") {
      setReps(0);
      setSetCount(1);
    }
  }, [sport]);

  const xp = useMemo(() => {
    // Für Liegestützen: Minuten sind ok, aber wir geben Bonus nach Reps/Set
    const base = calcXP(minutes, intensity);
    if (!repMode) return base;
    const repBonus = clamp(Math.round(reps / 8) + (setCount - 1) * 3, 0, 40);
    return clamp(base + repBonus, 5, 220);
  }, [minutes, intensity, repMode, reps, setCount]);

  function goNext() {
    setStep((s) => (s === 1 ? 2 : s === 2 ? 3 : 3));
  }
  function goBack() {
    setStep((s) => (s === 3 ? 2 : s === 2 ? 1 : 1));
  }

  function save() {
    if (!player) return;

    const entry: TrainingEntry = {
      id: crypto.randomUUID(),
      ts: Date.now(),
      sport,
      minutes,
      intensity,
      mood,
      xp,
      notes: notes.trim() ? notes.trim() : undefined,
    };

    const entries = loadEntries();
    const nextEntries = [entry, ...entries].slice(0, 50);
    saveEntries(nextEntries);

    const updated = applyTrainingToPlayer(player, sport, xp, intensity);
    savePlayer(updated);
    setPlayer(updated);

    // back to dashboard
    window.location.href = "/app";
  }

  if (!player) return null;

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <AppTopbar />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Training</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Eintragen. Spüren. Weitergehen.
            </h1>
            <p className="text-white/60 mt-3 max-w-2xl leading-relaxed">
              Kein Plan, kein Druck — nur Bewegung, die Wirkung bekommt.
            </p>
          </div>

          <Link
            href="/app"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition font-medium text-sm px-5 h-11"
          >
            ← Dashboard
          </Link>
        </div>

        {/* Steps */}
        <div className="mt-8 flex items-center gap-2">
          <StepPill active={step === 1} label="01 Sport" />
          <StepPill active={step === 2} label="02 Details" />
          <StepPill active={step === 3} label="03 Check" />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-12">
          {/* Main */}
          <Card className="md:col-span-8 p-6 md:p-8">
            {step === 1 && (
              <div>
                <h2 className="text-xl font-semibold">Wähle deine Bewegung</h2>
                <p className="mt-2 text-sm text-white/60">Was du tust, bestimmt den Fokus deiner Skills.</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {sports.map((s) => (
                    <SportChip key={s} label={s} selected={sport === s} onClick={() => setSport(s)} />
                  ))}
                </div>

                <div className="mt-10 flex justify-end">
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition font-semibold text-sm px-6 h-11"
                  >
                    Weiter →
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-xl font-semibold">Details</h2>
                <p className="mt-2 text-sm text-white/60">Kurz. Klar. Ohne Overthinking.</p>

                <div className="mt-6 grid gap-6">
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">Dauer</p>
                      <p className="text-sm text-white/70 tabular-nums">{minutes} min</p>
                    </div>
                    <div className="mt-4">
                      <Range value={minutes} setValue={setMinutes} min={5} max={120} step={5} />
                      <div className="mt-2 flex justify-between text-xs text-white/50">
                        <span>5</span>
                        <span>120</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">Intensität</p>
                      <p className="text-sm text-white/70 tabular-nums">{intensity}/5</p>
                    </div>
                    <div className="mt-4">
                      <Range value={intensity} setValue={setIntensity} min={1} max={5} step={1} />
                      <div className="mt-2 flex justify-between text-xs text-white/50">
                        <span>Easy</span>
                        <span>Hard</span>
                      </div>
                    </div>
                  </div>

                  {repMode && (
                    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                      <p className="text-sm font-semibold">AutoReps Mode (MVP)</p>
                      <p className="mt-2 text-xs text-white/60">
                        Erstmal ohne Kamera: Sets & Reps tracken schnell, sauber, teilbar.
                      </p>

                      <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                          <p className="text-xs text-white/60">Reps</p>
                          <p className="mt-1 text-3xl font-bold tabular-nums">{reps}</p>
                          <div className="mt-3 flex gap-2">
                            <button
                              type="button"
                              onClick={() => setReps((r) => Math.max(0, r - 1))}
                              className="h-10 w-10 rounded-2xl border border-white/15 bg-black/30 hover:bg-white/10 transition"
                            >
                              −
                            </button>
                            <button
                              type="button"
                              onClick={() => setReps((r) => r + 1)}
                              className="h-10 flex-1 rounded-2xl bg-white text-black hover:bg-white/90 transition font-semibold"
                            >
                              +1
                            </button>
                          </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                          <p className="text-xs text-white/60">Sets</p>
                          <p className="mt-1 text-3xl font-bold tabular-nums">{setCount}</p>
                          <div className="mt-3 flex gap-2">
                            <button
                              type="button"
                              onClick={() => setSetCount((s) => Math.max(1, s - 1))}
                              className="h-10 w-10 rounded-2xl border border-white/15 bg-black/30 hover:bg-white/10 transition"
                            >
                              −
                            </button>
                            <button
                              type="button"
                              onClick={() => setSetCount((s) => s + 1)}
                              className="h-10 flex-1 rounded-2xl bg-white text-black hover:bg-white/90 transition font-semibold"
                            >
                              +1
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 text-xs text-white/50">
                        Später (Pro): Kamera + Pose Estimation für echtes Auto-Counting.
                      </p>
                    </div>
                  )}

                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-sm font-semibold">Mood</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {["Stolz", "Leicht", "Fokussiert", "Energie", "Erledigt"].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setMood(m)}
                          className={cn(
                            "rounded-full border px-4 h-10 text-sm transition",
                            mood === m
                              ? "border-white/30 bg-white text-black"
                              : "border-white/15 bg-black/30 text-white/80 hover:bg-white/10 hover:text-white"
                          )}
                        >
                          {m}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4">
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Notiz (optional) – z.B. neue Bestzeit, guter Tag, etc."
                        className="w-full min-h-[90px] rounded-3xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white/90 placeholder:text-white/30 outline-none focus:border-white/25"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition font-medium text-sm px-5 h-11"
                  >
                    ← Zurück
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition font-semibold text-sm px-6 h-11"
                  >
                    Weiter →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-xl font-semibold">Check</h2>
                <p className="mt-2 text-sm text-white/60">So wird dein Training gewertet.</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-xs text-white/55">Sport</p>
                    <p className="mt-1 text-lg font-semibold">{sport}</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-xs text-white/55">Dauer / Intensität</p>
                    <p className="mt-1 text-lg font-semibold tabular-nums">
                      {minutes} min · {intensity}/5
                    </p>
                  </div>
                  {repMode && (
                    <div className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:col-span-2">
                      <p className="text-xs text-white/55">AutoReps</p>
                      <p className="mt-1 text-lg font-semibold tabular-nums">
                        {setCount} Sets · {reps} Reps
                      </p>
                    </div>
                  )}
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs text-white/55">XP</p>
                    <p className="mt-1 text-3xl font-bold tabular-nums">{xp}</p>
                    <p className="mt-2 text-xs text-white/50">XP-Bar fühlt sich schnell an. Skills wachsen langsam.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-xs text-white/55">Mood</p>
                    <p className="mt-1 text-lg font-semibold">{mood}</p>
                  </div>
                </div>

                {notes.trim() && (
                  <div className="mt-4 rounded-3xl border border-white/10 bg-black/30 p-5">
                    <p className="text-xs text-white/55">Notiz</p>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">{notes.trim()}</p>
                  </div>
                )}

                <div className="mt-10 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition font-medium text-sm px-5 h-11"
                  >
                    ← Zurück
                  </button>
                  <button
                    type="button"
                    onClick={save}
                    className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition font-semibold text-sm px-6 h-11"
                  >
                    Speichern & weiter →
                  </button>
                </div>
              </div>
            )}
          </Card>

          {/* Side summary */}
          <Card className="md:col-span-4 p-6">
            <p className="text-sm font-semibold">Dein Eintrag</p>
            <p className="mt-1 text-xs text-white/60">Live Preview</p>

            <div className="mt-5 space-y-3">
              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs text-white/55">Sport</p>
                <p className="mt-1 text-sm font-semibold">{sport}</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs text-white/55">Dauer</p>
                <p className="mt-1 text-sm font-semibold tabular-nums">{minutes} min</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs text-white/55">Intensität</p>
                <p className="mt-1 text-sm font-semibold tabular-nums">{intensity}/5</p>
              </div>

              {repMode && (
                <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                  <p className="text-xs text-white/55">AutoReps</p>
                  <p className="mt-1 text-sm font-semibold tabular-nums">
                    {setCount} Sets · {reps} Reps
                  </p>
                </div>
              )}

              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs text-white/55">XP</p>
                <p className="mt-1 text-2xl font-bold tabular-nums">{xp}</p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-widest text-white/50">Prinzip</p>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                Kleine Werte steigen schneller, hohe langsamer. So bleibt Progress motivierend und echt.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <div className="h-16" />
    </main>
  );
}
