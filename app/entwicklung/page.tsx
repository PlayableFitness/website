"use client";

import Link from "next/link";
import { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/* UI Helpers                                                                 */
/* -------------------------------------------------------------------------- */

const SectionWrapper = ({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => (
  <section id={id} className={`border-t border-white/10 ${className}`}>
    <div className="mx-auto max-w-6xl px-6 py-20">{children}</div>
  </section>
);

const SectionHeader = ({
  label,
  title,
  subtitle,
  centered = false,
}: {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => (
  <div className={`mb-12 ${centered ? "text-center mx-auto max-w-3xl" : ""}`}>
    <p className="text-sm uppercase tracking-widest text-white/50 mb-4">
      {label}
    </p>
    <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
        {subtitle}
      </p>
    )}
  </div>
);

const Button = ({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}) => {
  const base =
    "inline-flex items-center justify-center rounded-full transition font-medium text-sm px-6 py-3";
  const styles = {
    primary: "bg-white text-black hover:bg-gray-100",
    secondary:
      "border border-white/15 bg-white/5 text-white/85 hover:bg-white/10 backdrop-blur-sm",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
};

const ImageCard = ({
  src,
  alt,
  className = "",
  position = "center 50%",
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
}) => (
  <div
    className={`relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 ${className}`}
  >
    <div className="min-h-[320px]" />
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover opacity-80"
      style={{ objectPosition: position }}
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
  </div>
);


/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function EntwicklungPage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-white/20">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/entwicklung/entwicklung_hero.png"
            alt="Entwicklung – Hero"
            className="h-full w-full object-cover opacity-55"
            style={{ objectPosition: "center 45%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-5">
            Entwicklung
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl">
            Entwicklung, die bleibt —
            <span className="text-white/70"> ohne Druck.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Playable Fitness macht Fortschritt sichtbar – nicht als Urteil,
            sondern als Feedback. Du baust Momentum auf. Nichts geht verloren.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/#early-access" variant="primary">
              Early Access sichern
            </Button>
            <Button href="/spieler" variant="secondary">
              Zur Spieler-Story →
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { k: "Akkumulativ", v: "nichts geht verloren" },
              { k: "Ohne Druck", v: "kein Reset, kein Shame" },
              { k: "Kontext", v: "Ligen als Räume" },
              { k: "Rhythmus", v: "Matchdays als Anlässe" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="text-white font-semibold">{x.k}</div>
                <div className="text-white/55 text-sm">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: MEANING */}
      <SectionWrapper id="meaning">
        <SectionHeader
          label="Prinzip"
          title="Entwicklung ist kein Ziel. Sie ist ein Weg."
          subtitle="Nicht höher, schneller, stärker — sondern weiter, stabiler, verbundener."
        />

        <div className="grid gap-6 md:grid-cols-12 items-stretch">
          <div className="md:col-span-7">
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-10 h-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Fortschritt, der sich aufbaut.
              </h3>
              <p className="text-white/70 leading-relaxed max-w-2xl">
                Bei Playable Fitness entsteht Entwicklung durch Teilnahme,
                Kontinuität und Erfahrung.
                <br />
                <br />
                Jede Bewegung zählt – und bleibt. Es gibt kein Zurück auf Null.
                Pausen sind Teil des Spiels. Rückkehr ist immer möglich.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    t: "Akkumulativ",
                    d: "Dein Fortschritt wächst über Zeit — unabhängig von perfekten Wochen.",
                  },
                  {
                    t: "Ohne Vergleich",
                    d: "Kein Ranking-Druck. Keine Tabelle, die dich klein macht.",
                  },
                  {
                    t: "Motivierend",
                    d: "Feedback statt Urteil. Momentum statt Schuldgefühl.",
                  },
                  {
                    t: "Lebensnah",
                    d: "Alltag zählt. Sport zählt. Du passt das Spiel an dein Leben an.",
                  },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="rounded-3xl border border-white/10 bg-black/30 p-5"
                  >
                    <div className="font-semibold mb-2">{c.t}</div>
                    <div className="text-white/65 text-sm leading-relaxed">
                      {c.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <ImageCard
              src="/entwicklung/entwicklung_hero.png"
              alt="Entwicklung fühlt sich gut an"
              className="h-full"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION: XP */}
      <SectionWrapper id="xp" className="bg-gradient-to-b from-black to-white/5">
        <SectionHeader
          label="XP"
          title="XP ohne Druck."
          subtitle="XP ist Feedback – kein Urteil. Es zeigt, dass etwas passiert ist."
        />

        <div className="grid gap-6 md:grid-cols-12 items-stretch">
          <div className="md:col-span-5">
            <ImageCard
              src="/entwicklung/entwicklung_xp.png"
              alt="XP als Feedback"
              className="h-full"
            />
          </div>

          <div className="md:col-span-7">
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-10 h-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Sichtbar, spürbar, motivierend.
              </h3>
              <p className="text-white/70 leading-relaxed">
                XP bei Playable Fitness ist kein Score, der dich bewertet.
                <br />
                <br />
                XP macht sichtbar: Du hast dich bewegt. Dein Einsatz hatte
                Wirkung. Du baust Rhythmus auf – nicht Perfektion.
              </p>

              <div className="mt-8 border border-white/10 bg-black/30 rounded-3xl p-6">
                <p className="text-white/80 leading-relaxed">
                  Wichtig: Inaktivität wird nicht bestraft.
                  <br />
                  <span className="text-white/60">
                    Pausen sind normal. Comeback ist Teil des Systems.
                  </span>
                </p>
              </div>

              <div className="mt-8 flex gap-3 flex-wrap">
                {["Alltag zählt", "Sport zählt", "Keine Strafe", "Comeback-Logik"].map(
                  (x) => (
                    <span
                      key={x}
                      className="text-xs text-white/70 border border-white/10 bg-black/30 px-3 py-1 rounded-full"
                    >
                      {x}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION: LIGEN */}
      <SectionWrapper id="ligen">
        <SectionHeader
          label="Ligen"
          title="Ligen sind Räume. Keine Leitern."
          subtitle="Du wechselst Kontexte, nicht deinen Wert."
        />

        <div className="grid gap-6 md:grid-cols-12 items-stretch">
          <div className="md:col-span-7">
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-10 h-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Dein Leben verändert sich — dein Spiel passt sich an.
              </h3>
              <p className="text-white/70 leading-relaxed">
                Ligen geben Struktur, Stil und Rhythmus.
                <br />
                <br />
                Du steigst nicht auf, weil du besser bist als andere.
                <br />
                Du wechselst, weil du weiter bist – oder weil du etwas anderes
                brauchst.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { t: "Keine Abstiege", d: "Du verlierst nichts, nur weil du mal weniger machst." },
                  { t: "Freie Wechsel", d: "Kontext statt Karriereleiter." },
                  { t: "Unterschiedliche Stile", d: "Running, Fitness, Combat, Yoga — alles kann ein Raum sein." },
                  { t: "Gemeinschaft", d: "Du bewegst dich durch die Spielwelt – nicht allein." },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="rounded-3xl border border-white/10 bg-black/30 p-5"
                  >
                    <div className="font-semibold mb-2">{c.t}</div>
                    <div className="text-white/65 text-sm leading-relaxed">
                      {c.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <ImageCard
              src="/entwicklung/entwicklung_liga.png"
              alt="Ligen als Räume"
              className="h-full"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION: RHYTHM / MATCHDAY */}
      <SectionWrapper id="matchday" className="bg-gradient-to-b from-black to-white/5">
        <SectionHeader
          label="Rhythmus"
          title="Matchdays geben Bedeutung."
          subtitle="Nicht als Pflicht. Sondern als Anlass, den man teilen will."
        />

        <div className="grid gap-6 md:grid-cols-12 items-stretch">
          <div className="md:col-span-5">
            <ImageCard
              src="/entwicklung/entwicklung_xp.png"
              alt="Matchday"
              className="h-full"
            />
          </div>

          <div className="md:col-span-7">
            <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-10 h-full">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Rhythmus statt Zwang.
              </h3>
              <p className="text-white/70 leading-relaxed">
                Matchdays bündeln Aktivität zu einem Moment:{" "}
                <span className="text-white/85">Heute passiert etwas.</span>
                <br />
                <br />
                Dein Einsatz wird Wirkung — für dich und fürs Team.
                Du spielst nicht gegen andere. Du spielst mit ihnen.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6">
                <p className="text-white/75 leading-relaxed">
                  Entwicklung braucht Anlässe.
                  <br />
                  <span className="text-white/55">
                    Nicht jeden Tag mehr — sondern regelmäßig überhaupt.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper id="cta" className="bg-gradient-to-b from-black to-white/5">
        <div className="rounded-[40px] border border-white/15 bg-white/5 p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/8 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Du entwickelst dich — ohne zu kämpfen.
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Trag dich ein — wir melden uns, sobald die erste Version bereit ist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/#early-access" variant="primary">
                Early Access
              </Button>
              <Button href="/spieler" variant="secondary">
                Zur Spieler-Story →
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
