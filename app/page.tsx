import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f2]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo/IY logo.png"
            alt="IY Logo"
            className="h-10 w-10 rounded-xl object-cover"
          />

          <div className="leading-none">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-black/55">
              Improve Yourself
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.12em] text-black/70 md:flex">
          <Link
            href="/"
            className="text-black underline decoration-[#00D1B2] decoration-2 underline-offset-8"
          >
            Home
          </Link>

          <Link href="/players">Players</Link>

          <Link href="/partners">Partners</Link>
        </nav>

        <Link
          href="/players"
          className="rounded-xl bg-[#00D1B2] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-[1.02]"
        >
          Create Your Athlete
        </Link>
      </div>
    </header>
  );
}

function HeroCards() {
  return (
    <div className="relative hidden h-[720px] items-center justify-center md:flex">
      <img
        src="/cards/card_julia.png"
        alt="Player Card Julia"
        className="absolute left-0 top-20 z-30 w-[340px] rotate-[-4deg] rounded-[2rem] shadow-2xl shadow-black/30"
      />

      <img
        src="/cards/card_felix.png"
        alt="Player Card Felix"
        className="absolute left-[180px] top-8 z-20 w-[320px] rotate-[6deg] rounded-[2rem] opacity-95 shadow-xl shadow-black/20"
      />

      <img
        src="/cards/card_david.png"
        alt="Player Card David"
        className="absolute left-[320px] top-28 z-10 w-[300px] rotate-[10deg] rounded-[2rem] opacity-85 shadow-xl shadow-black/20"
      />
    </div>
  );
}

function ValueStrip() {
  const items = [
    [
      "Real Movement",
      "Visible Progress",
      "Runs, workouts, recovery and consistency become visible development.",
    ],
    [
      "Game Dynamics",
      "Instant Feedback",
      "Your player evolves immediately through visible skills, ratings and progress.",
    ],
    [
      "Player Evolution",
      "Build Yourself",
      "Short-term motivation drives long-term physical and personal development.",
    ],
    [
      "Season Zero",
      "Now Forming",
      "Become part of the first generation shaping a new world of movement and progression.",
    ],
  ];

  return (
    <div className="relative z-10 mx-auto -mt-12 max-w-7xl px-6">
      <div className="grid overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-2xl shadow-black/5 backdrop-blur-xl md:grid-cols-4">
        {items.map(([eyebrow, title, text]) => (
          <div
            key={title}
            className="border-black/10 p-8 md:border-r last:md:border-r-0"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45">
              {eyebrow}
            </p>

            <h3 className="mt-5 text-3xl font-black uppercase leading-none tracking-tight text-black">
              {title}
            </h3>

            <p className="mt-5 text-base leading-relaxed text-black/60">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
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
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-black/45">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.92] tracking-tight text-black md:text-7xl">
            {title}
          </h2>

          {text && (
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-black/65">
              {text}
            </p>
          )}
        </div>

        {children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  );
}

function PlayerStatus() {
  const items = [
    [
      "Rookie",
      "42 OVR",
      "Every athlete starts somewhere. Movement and consistency shape progression.",
    ],
    [
      "Starter",
      "58 OVR",
      "Visible stats, skills and development create motivation and identity.",
    ],
    [
      "Elite",
      "74 OVR",
      "Higher status, stronger progression and new opportunities become available.",
    ],
    [
      "Pro",
      "91 OVR",
      "Top players unlock visibility, recognition and advanced progression.",
    ],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map(([level, ovr, text]) => (
        <div
          key={level}
          className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">
            {ovr}
          </p>

          <h3 className="mt-4 text-4xl font-black uppercase tracking-tight text-black">
            {level}
          </h3>

          <p className="mt-5 text-base leading-relaxed text-black/60">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}

function EcosystemGrid() {
  const items = [
    [
      "Visible Identity",
      "Your player reflects your development, your status and the brands you stand behind.",
    ],
    [
      "Real Teams",
      "Your progress contributes to team performance, matchdays and league dynamics.",
    ],
    [
      "Instant Motivation",
      "Visible progress creates immediate excitement while supporting long-term development.",
    ],
    [
      "Healthy Progression",
      "Movement, recovery and consistency matter more than endless screen time.",
    ],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-black/10 bg-white p-8 md:p-10"
        >
          <h3 className="text-4xl font-black uppercase leading-none tracking-tight text-black">
            {title}
          </h3>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/65">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}

function CTASection() {
  return (
    <section className="bg-[#f7f7f2] px-6 pb-16 md:pb-24">
      <div className="mx-auto rounded-3xl border border-black/10 bg-black p-8 text-white md:max-w-7xl md:p-12">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
          Season Zero
        </p>

        <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.6fr] md:items-end">
          <div>
            <h2 className="text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              The movement is just beginning.
            </h2>

            <p className="mt-6 max-w-2xl text-white/65">
              Build your player, shape your identity and become part of a new
              world of visible real-world progression.
            </p>
          </div>

          <Link
            href="/players"
            className="inline-flex justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-black"
          >
            Start Progressing →
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
            src="/vision/vision_05.jpg"
            alt="Movement"
            className="h-full w-full object-cover opacity-95"
            style={{ objectPosition: "center 20%" }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f2]/92 via-[#f7f7f2]/65 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f7f2] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-black/65">
              The first real-world progression platform
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.88] tracking-tight text-black md:text-8xl xl:text-[7rem]">
              Move.
              <br />
              Play.
              <br />
              <span className="text-[#00D1B2] drop-shadow-sm">
                Progress.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-black/75">
              The dynamics of games for real-world development.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/players"
                className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
              >
                Create Your Athlete →
              </Link>

              <Link
                href="/partners"
                className="inline-flex items-center justify-center rounded-xl px-4 py-4 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:bg-white"
              >
                Partner With Us →
              </Link>
            </div>
          </div>

          <HeroCards />
        </div>
      </section>

      <ValueStrip />

      <Section
        eyebrow="Player Status"
        title="From rookie to pro."
        text="Visible progression, instant feedback and long-term development create motivation beyond traditional fitness."
      >
        <PlayerStatus />
      </Section>

      <Section
        eyebrow="The Ecosystem"
        title="Movement becomes identity."
        text="Player development, teams, brands and progression create a new world built around real movement."
      >
        <EcosystemGrid />
      </Section>

      <CTASection />
    </main>
  );
}
