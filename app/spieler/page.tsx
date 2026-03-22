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
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div
    className={`relative rounded-[32px] overflow-hidden border border-white/10 bg-white/5 ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover opacity-80"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
  </div>
);

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function SpielerPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Platzhalter: später durch dein Key-Visual ersetzen */}
          <img
            src="/spieler/spieler_hero.png"
            alt="Dein Spieler – Hero"
            className="h-full w-full object-cover opacity-55"
            style={{ objectPosition: "center 45%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-5">
            Dein Spieler
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-3xl">
            Fortschritt, den du siehst —
            <span className="text-white/70"> und fühlst.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Dein Avatar ist nicht Deko. Er ist dein Spiegel: Routine, Energie,
            Momentum. Jede echte Bewegung macht dich sichtbar stärker — ohne
            Druck, ohne Vergleich.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/#early-access" variant="primary">
              Early Access sichern
            </Button>
            <Button href="/#app" variant="secondary">
              App Screens ansehen →
            </Button>
          </div>

          {/* Micro proof row */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { k: "XP", v: "aus Alltag + Sport" },
              { k: "Skills", v: "statt nur Zahlen" },
              { k: "Comeback", v: "ohne Bestrafung" },
              { k: "Identity", v: "Avatar = du" },
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

      {/* STORY: REAL -> AVATAR */}
      <SectionWrapper id="transformation">
        <SectionHeader
          label="Transformation"
          title="Du startest real. Du wirst spielbar."
          subtitle="Playable Fitness verbindet echte Bewegung mit einer sichtbaren Entwicklung: deine Identität im Spiel wächst mit dir."
        />

        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative rounded-[40px] border border-white/10 bg-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/8 via-transparent to-transparent" />
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  Deine Bewegung wird sichtbar.
                </h3>
                <p className="text-white/70 leading-relaxed max-w-2xl">
                  Jeder Schritt, jedes Training, jede Session zählt — nicht als
                  Druck, sondern als Feedback. Du siehst:{" "}
                  <span className="text-white/85">Es passiert etwas.</span>
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      t: "Energie",
                      d: "Dein Zustand reagiert auf echte Aktivität — nicht auf perfekte Pläne.",
                    },
                    {
                      t: "Ausstrahlung",
                      d: "Sichtbare Veränderung statt statischer Stats.",
                    },
                    {
                      t: "Level",
                      d: "Rhythmus schlägt Disziplin. Du baust Momentum auf.",
                    },
                    {
                      t: "Stolz",
                      d: "Kleine Siege, die sich nach dir anfühlen.",
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
          </div>

          {/* Visual pair */}
          <div className="md:col-span-5 grid gap-6">
            <ImageCard
              src="/spieler/spieler_hero.png"
              alt="Echte Bewegung – real"
              className="h-[320px]"
            />
            <ImageCard
              src="/spieler/spieler_real.png"
              alt="Avatar Entwicklung – spielbar"
              className="h-[320px]"
            />
            <div className="text-white/50 text-sm leading-relaxed">
              Tipp: Diese beiden Bilder sollten später exakt die Story zeigen:
              <span className="text-white/75">
                {" "}
                realer Mensch → Avatar im Handy
              </span>
              .
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* KEY MECHANICS */}
      <SectionWrapper id="mechanics" className="bg-gradient-to-b from-black to-white/5">
        <SectionHeader
          label="Mechanik"
          title="Fortschritt ohne Fitness-Druck."
          subtitle="Keine Strafe, wenn du aussetzt. Keine Rankings, die dich klein machen. Nur ein System, das dich zurückholt."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "XP aus echter Aktivität",
              d: "Alltag + Sport = Progress. Du sammelst XP durch Bewegung, nicht durch Perfektion.",
            },
            {
              t: "Comeback statt Schuld",
              d: "Wenn du pausierst, startet kein Reset. Das System baut dich wieder auf — motivierend, nicht strafend.",
            },
            {
              t: "Skills & Status",
              d: "Dein Avatar zeigt Entwicklung. Und du spürst sie: stabiler Rhythmus, mehr Selbstwirksamkeit.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{f.t}</h3>
              <p className="text-white/70 leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* EMOTION / SHARE */}
      <SectionWrapper id="emotion">
        <div className="grid gap-8 md:grid-cols-12 items-stretch">
          <div className="md:col-span-5">
            <SectionHeader
              label="Emotion"
              title="Du teilst keine Zahlen. Du teilst Momente."
              subtitle="Matchdays, Aufstiege, Meilensteine: Dinge, die man fühlt und gerne postet."
            />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <p className="text-white/80 leading-relaxed">
                Unser Ziel ist eine neue Art von Fitness-Content:
                <span className="text-white"> nicht toxisch</span>, nicht
                perfektionistisch — sondern menschlich, motivierend, echt.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                {["Stolz", "Zugehörigkeit", "Routine", "Progress"].map((x) => (
                  <span
                    key={x}
                    className="text-xs text-white/70 border border-white/10 bg-black/30 px-3 py-1 rounded-full"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-white/5 h-[520px]">
              <img
                src="/spieler/spieler_real.png"
                alt="Share Moment"
                className="absolute inset-0 h-full w-full object-cover opacity-85"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10 max-w-xl">
                <p className="text-white/60 text-sm uppercase tracking-widest">
                  Beispiel
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mt-2">
                  „Level Up — weil ich’s durchgezogen hab.“
                </h3>
                <p className="text-white/70 mt-4 leading-relaxed">
                  Nicht, weil du besser bist. Sondern weil du dran geblieben
                  bist.
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
              Mach dich spielbar.
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Trag dich ein — wir melden uns, sobald die erste Version bereit
              ist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/#early-access" variant="primary">
                Early Access
              </Button>
              <Button href="/entwicklung" variant="secondary">
                Spielerentwicklung ansehen →
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
