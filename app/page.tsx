import Link from "next/link";

const accent = "#00D1B2";

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
          <Link href="/players" className="transition hover:text-black">
            Players
          </Link>
          <Link href="/partners" className="transition hover:text-black">
            Partners
          </Link>
        </nav>

        <Link
          href="/players"
          className="rounded-xl bg-[#00D1B2] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-[1.02]"
        >
          Start Progressing
        </Link>
      </div>
    </header>
  );
}

function PlayerCardStack() {
  const cards = [
    {
      src: "/cards/card_julia.png",
      className: "z-30 rotate-0 scale-100",
    },
    {
      src: "/cards/card_jaydon.png",
      className:
        "z-20 -translate-x-16 translate-y-8 -rotate-6 scale-95 opacity-95",
    },
    {
      src: "/cards/card_david.png",
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

function SystemStrip() {
  const stats = [
    [
      "REAL MOVEMENT",
      "Visible Progress",
      "Runs, workouts, recovery and consistency become visible development.",
    ],
    [
      "GAME DYNAMICS",
      "Instant Feedback",
      "Your player evolves immediately through visible skills, ratings and progress.",
    ],
    [
      "PLAYER EVOLUTION",
      "Build Yourself",
      "Short-term motivation drives long-term physical and personal development.",
    ],
    [
      "SEASON ZERO",
      "Now Forming",
      "Become part of the first generation shaping a new world of movement and progression.",
    ],
  ];

  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-6">
      <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-white/90 shadow-xl shadow-black/5 backdrop-blur-xl md:grid-cols-4">
        {stats.map(([label, value, sub]) => (
          <div
            key={label}
            className="border-black/10 p-6 md:border-r last:md:border-r-0"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-black/55">
              {label}
            </p>
            <p className="mt-2 text-3xl font-black uppercase tracking-tight text-black">
              {value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-black/55">{sub}</p>
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-black/45">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-black md:text-6xl">
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

function PlayerStatusSection() {
  const stages = [
    {
      stage: "Level 01",
      title: "Rookie",
      rating: "42 OVR",
      text: "Every player starts somewhere. Movement and consistency develop your progress step by step.",
      image: "/players/stufe1.jpg",
    },
    {
      stage: "Level 02",
      title: "Starter",
      rating: "58 OVR",
      text: "Your stats rise, your progress becomes visible and your player identity starts to evolve.",
      image: "/players/stufe2.jpg",
    },
    {
      stage: "Level 03",
      title: "Elite",
      rating: "74 OVR",
      text: "New unlocks, higher status and visible development reflect your long-term progress.",
      image: "/players/stufe3.jpg",
    },
    {
      stage: "Level 04",
      title: "Pro",
      rating: "91 OVR",
      text: "Top players unlock special styles, new opportunities and higher visibility.",
      image: "/players/stufe4.jpg",
    },
  ];

  return (
    <Section
      eyebrow="Player Status"
      title="Your player evolves."
      text="Visible stats, new skills and rising status make progress feel immediate — while real movement develops you long-term."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-[#ecece5]">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-[center_30%] transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-xl bg-[#00D1B2] px-3 py-2 text-xs font-black uppercase text-black">
                {item.rating}
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/55">
                  {item.stage}
                </p>
                <h3 className="mt-2 text-3xl font-black uppercase text-white">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm leading-relaxed text-black/65">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">
            Jerseys & Brands
          </p>
          <h3 className="mt-3 text-2xl font-black uppercase text-black">
            Your style
          </h3>
          <p className="mt-4 text-black/65">
            As you progress, you unlock new jerseys, sports brands and
            individual styles for your player.
          </p>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">
            Identity & Status
          </p>
          <h3 className="mt-3 text-2xl font-black uppercase text-black">
            What you stand for
          </h3>
          <p className="mt-4 text-black/65">
            Your progress becomes visible through status, styles, brands and the
            identity your player carries into the world.
          </p>
        </div>
      </div>
    </Section>
  );
}

function MatchdaySection() {
  return (
    <Section
      eyebrow="Teams & Leagues"
      title="Real game dynamics."
      text="Promotion, rivalries and matchdays turn real movement into a living sports world."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <img
            src="/logik/team.jpg"
            alt="Team"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45">
              Matchday 07
            </p>
            <h3 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-black md:text-5xl">
              Move United
              <br />
              vs Berlin Athletics
            </h3>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-black p-5 text-white">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">
                  Team Power
                </p>
                <p className="mt-2 text-5xl font-black text-[#00D1B2]">
                  78
                </p>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/80 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-black/45">
                  Weekly Form
                </p>
                <p className="mt-2 text-5xl font-black text-black">+12%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45">
            League Table
          </p>
          <div className="mt-6 space-y-3">
            {[
              ["1", "North Squad", "82"],
              ["2", "Move United", "78"],
              ["3", "Berlin Athletics", "74"],
              ["4", "Urban Runners", "69"],
            ].map(([rank, team, rating]) => (
              <div
                key={team}
                className="flex items-center justify-between rounded-2xl border border-black/10 bg-[#f7f7f2] px-4 py-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-black text-black/45">
                    #{rank}
                  </span>
                  <span className="font-black uppercase text-black">
                    {team}
                  </span>
                </div>
                <span className="rounded-xl bg-[#00D1B2] px-3 py-2 text-xs font-black text-black">
                  {rating}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <section className="bg-[#f7f7f2] px-6 pb-16 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-black/55">
            Season Zero
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight md:text-5xl">
            Your progress starts now.
          </h2>
          <p className="mt-6 max-w-md text-black/65">
            Join the first people connecting real movement, visible progress and
            true game motivation.
          </p>
          <Link
            href="/players"
            className="mt-8 inline-flex rounded-xl bg-[#00D1B2] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-black"
          >
            Start your progression →
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <img
            src="/vision/vision_05.jpg"
            alt="Season Zero"
            className="absolute inset-0 h-full w-full object-cover object-[center_25%] opacity-35"
          />
          <div className="relative max-w-md">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/55">
              Season Zero
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight md:text-5xl">
              The first generation is forming.
            </h2>
            <p className="mt-6 text-black/70">
              Athletes, creators, teams, gyms and brands are shaping the first
              real-world progression platform.
            </p>
            <Link
              href="/partners"
              className="mt-8 inline-flex rounded-xl bg-black px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-white"
            >
              Build with us →
            </Link>
          </div>
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
            className="h-full w-full object-cover opacity-95"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f2]/88 via-[#f7f7f2]/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f7f2] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-black/65">
              The first real-world progression platform
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.88] tracking-tight text-black md:text-8xl xl:text-[7.4rem]">
              Move.
              <br />
              Play.
              <br />
              <span className="text-[#00D1B2] drop-shadow-sm">
                Progress.
              </span>
            </h1>

            <p className="mt-8 max-w-md text-xl leading-relaxed text-black/75">
              Instant visible progress.
              <br />
              Real-world development.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/players"
                className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
              >
                Start your progression →
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center rounded-xl px-4 py-4 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:bg-white"
              >
                Build with us →
              </Link>
            </div>
          </div>

          <div className="hidden justify-end md:flex">
            <PlayerCardStack />
          </div>
        </div>
      </section>

      <SystemStrip />

      <PlayerStatusSection />

      <MatchdaySection />

      <Section
        eyebrow="Healthy development"
        title="Long-term progress."
        text="Visible motivation creates short-term excitement. Real movement builds long-term health, fitness and habits."
      />

      <CTASection />
    </main>
  );
}
