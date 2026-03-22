"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

/** -----------------------------
 * Types
 * ---------------------------- */
type SkillKey = "ausdauer" | "power" | "konstanz" | "mobility" | "teamplay";

type PlayerLS = {
  name: string;
  avatarImg: string;
  skills: Record<SkillKey, number>;
  xpBar: { xp: number; xpMax: number };
  lastActiveTs: number;
};

type TrainingEntry = {
  id: string;
  ts: number;
  sport: string;
  minutes: number;
  intensity: number;
  mood: string;
  xp: number;
};

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}
function cn(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(" ");
}

/** -----------------------------
 * LocalStorage helpers
 * ---------------------------- */
function getPlayer(): PlayerLS {
  const fallback: PlayerLS = {
    name: "Tada",
    avatarImg: "/avatars/avatar_02.png",
    skills: { ausdauer: 60, power: 55, konstanz: 58, mobility: 52, teamplay: 56 },
    xpBar: { xp: 30, xpMax: 99 },
    lastActiveTs: Date.now(),
  };

  try {
    const raw = localStorage.getItem("pf_player");
    if (!raw) return fallback;
    const p = JSON.parse(raw);
    return { ...fallback, ...p, skills: { ...fallback.skills, ...(p.skills || {}) } };
  } catch {
    return fallback;
  }
}

function getEntries(): TrainingEntry[] {
  try {
    const raw = localStorage.getItem("pf_training_entries");
    if (!raw) return [];
    const arr = JSON.parse(raw) as TrainingEntry[];
    return Array.isArray(arr) ? arr.sort((a, b) => (b.ts || 0) - (a.ts || 0)) : [];
  } catch {
    return [];
  }
}

/** -----------------------------
 * Progress / OVR
 * ---------------------------- */
// “OVR”: skill-weighted average (nicht FIFA, aber FIFA-Feeling)
function calcOVR(skills: Record<SkillKey, number>) {
  const w: Record<SkillKey, number> = {
    ausdauer: 0.25,
    power: 0.20,
    konstanz: 0.20,
    mobility: 0.15,
    teamplay: 0.20,
  };
  const sumW = Object.values(w).reduce((a, b) => a + b, 0);
  const v =
    (skills.ausdauer * w.ausdauer +
      skills.power * w.power +
      skills.konstanz * w.konstanz +
      skills.mobility * w.mobility +
      skills.teamplay * w.teamplay) /
    sumW;
  return clamp(Math.round(v), 1, 99);
}

// TeamScore für Matchday: basiert auf OVR + “Aktivität der letzten 3 Tage”
function calcRecentActivityBoost(entries: TrainingEntry[], windowDays = 3) {
  const now = Date.now();
  const windowMs = windowDays * 24 * 60 * 60 * 1000;
  const recent = entries.filter((e) => now - e.ts <= windowMs);
  const xpSum = recent.reduce((s, e) => s + (e.xp || 0), 0);

  // Boost klein halten, sonst wirkt’s unfair
  // 0.. ~10 Punkte
  return clamp(Math.round(xpSum / 120), 0, 10);
}

/** -----------------------------
 * Match schedule
 * ---------------------------- */
// alle 3 Tage ein Match – wir nehmen eine “epoch” und runden hoch
function getNextMatchTs(now: number) {
  const cycleMs = 3 * 24 * 60 * 60 * 1000;
  const epoch = new Date("2026-01-01T00:00:00.000Z").getTime();
  const since = now - epoch;
  const cycles = Math.floor(since / cycleMs);
  const next = epoch + (cycles + 1) * cycleMs;
  return next;
}

function fmtCountdown(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(s / (24 * 3600));
  const h = Math.floor((s % (24 * 3600)) / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

/** -----------------------------
 * UI
 * ---------------------------- */
function AppTopbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/app" className="text-lg font-bold tracking-tight text-white hover:text-white/80">
          Playable Fitness
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/app/training" className="text-xs text-white/60 hover:text-white transition">
            Training
          </Link>
          <Link href="/app/team" className="text-xs text-white/60 hover:text-white transition">
            Team
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

/** -----------------------------
 * Page
 * ---------------------------- */
export default function MatchdayPage() {
  const [now, setNow] = useState(Date.now());
  const [player, setPlayer] = useState<PlayerLS | null>(null);
  const [entries, setEntries] = useState<TrainingEntry[]>([]);

  useEffect(() => {
    setPlayer(getPlayer());
    setEntries(getEntries());

    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const nextMatchTs = useMemo(() => getNextMatchTs(now), [now]);
  const timeLeft = Math.max(0, nextMatchTs - now);

  const ovr = useMemo(() => (player ? calcOVR(player.skills) : 0), [player]);
  const activityBoost = useMemo(() => calcRecentActivityBoost(entries, 3), [entries]);

  // Fake Opponent (later from team db)
  const opponentOVR = useMemo(() => clamp(ovr + (Math.random() > 0.5 ? 1 : -1) * 3, 35, 90), [ovr]);
  const yourScore = useMemo(() => clamp(ovr + activityBoost + 10, 0, 99), [ovr, activityBoost]);
  const oppScore = useMemo(() => clamp(opponentOVR + 10, 0, 99), [opponentOVR]);

  const status = useMemo(() => {
    if (timeLeft > 0) return "Countdown";
    if (yourScore > oppScore) return "Win";
    if (yourScore < oppScore) return "Loss";
    return "Draw";
  }, [timeLeft, yourScore, oppScore]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20">
      <AppTopbar />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Matchday</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Alle 3 Tage zählt dein Einsatz.
            </h1>
            <p className="text-white/60 mt-3 max-w-2xl leading-relaxed">
              Du spielst nicht gegen andere — du spielst mit ihnen. Aktivität wird Wirkung.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/app"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition font-medium text-sm px-5 h-11"
            >
              ← Dashboard
            </Link>
            <Link
              href="/app/training"
              className="inline-flex items-center justify-center rounded-full bg-white text-black hover:bg-white/90 transition font-semibold text-sm px-6 h-11"
            >
              Training
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-12">
          {/* Left: Match card */}
          <Card className="md:col-span-7 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Nächster Matchday</p>
              <span
                className={cn(
                  "text-xs rounded-full px-3 py-1 border",
                  status === "Countdown"
                    ? "border-white/15 text-white/70 bg-black/30"
                    : status === "Win"
                    ? "border-white/20 text-white bg-white/10"
                    : "border-white/10 text-white/60 bg-black/30"
                )}
              >
                {status === "Countdown" ? "in " + fmtCountdown(timeLeft) : "Ergebnis"}
              </span>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-black/30 p-6">
              <div className="flex items-center justify-between gap-4">
                <TeamMini label="Dein Team" ovr={ovr} sub={`Boost (3 Tage): +${activityBoost}`} />
                <div className="text-white/40 font-semibold">vs</div>
                <TeamMini label="Opponent" ovr={opponentOVR} sub="ähnliches Level" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <ScoreBox label="Dein Score" value={yourScore} hint="OVR + Aktivität" />
                <ScoreBox label="Opponent Score" value={oppScore} hint="Mock" />
              </div>

              <div className="mt-6 text-xs text-white/50 leading-relaxed">
                Logik (aktuell Mock): OVR + Aktivität der letzten 3 Tage ergibt Score. Später kommen Team-Rollen,
                Synergien und Match-Modifikatoren dazu.
              </div>
            </div>
          </Card>

          {/* Right: What to do */}
          <Card className="md:col-span-5 p-6">
            <p className="text-sm font-semibold">Was zählt jetzt?</p>

            <div className="mt-5 space-y-3">
              <MiniAction
                title="Training eintragen"
                sub="Jede Aktivität gibt XP & Skill-Progress."
                href="/app/training"
              />
              <MiniAction title="Zum Team" sub="Dein Einsatz stärkt euch gemeinsam." href="/app/team" />
              <MiniAction title="Avatar checken" sub="Dein Spieler zeigt Entwicklung." href="/app/avatar" />
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-widest text-white/50">Dein Status</p>
              <p className="mt-2 text-lg font-semibold">
                {ovr >= 75 ? "On Fire" : ovr >= 60 ? "Steady" : "Comeback"}
              </p>
              <p className="mt-2 text-xs text-white/60">
                Keine Strafe. Aber ohne Bewegung schrumpft Performance langsam — wie im echten Leben.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <div className="h-16" />
    </main>
  );
}

function TeamMini({ label, ovr, sub }: { label: string; ovr: number; sub: string }) {
  return (
    <div className="flex-1">
      <p className="text-xs text-white/50">{label}</p>
      <p className="mt-1 text-3xl font-bold tabular-nums">{ovr}</p>
      <p className="mt-1 text-xs text-white/60">{sub}</p>
    </div>
  );
}

function ScoreBox({ label, value, hint }: { label: string; value: number; hint: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs text-white/55">{label}</p>
      <p className="mt-1 text-3xl font-bold tabular-nums">{value}</p>
      <p className="mt-1 text-xs text-white/50">{hint}</p>
    </div>
  );
}

function MiniAction({ title, sub, href }: { title: string; sub: string; href: string }) {
  return (
    <Link
      href={href}
      className="block rounded-3xl border border-white/10 bg-black/30 p-5 hover:bg-white/5 transition"
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs text-white/60 leading-relaxed">{sub}</p>
      <p className="mt-3 text-xs text-white/60">Öffnen →</p>
    </Link>
  );
}
