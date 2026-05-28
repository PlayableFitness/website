import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f2]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo/IY Logo.png"
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
          <Link href="/">Home</Link>
          <Link
            href="/players"
            className="text-black underline decoration-[#00D1B2] decoration-2 underline-offset-8"
          >
            Players
          </Link>
          <Link href="/partners">Partners</Link>
        </nav>

        <Link
          href="/partners"
          className="rounded-xl bg-[#00D1B2] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] text-black transition hover:scale-[1.02]"
        >
          Partners
        </Link>
      </div>
    </header>
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

function HeroCardShowcase() {
  return (
    <div className="grid gap-5">
      <div className="relative mx-auto w-full max-w-[360px]">
        <img
          src="/cards/card_Julia.png"
          alt="IY Player Card Julia"
          className="w-full rounded-[2rem] shadow-2xl shadow-black/25"
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {[
          "/cards/card_David.png",
          "/cards/card_Felix.png",
          "/cards/card_Jaydon.png",
          "/cards/card_Lena.png",
        ].map((src) => (
          <img
            key={src}
            src={src}
            alt="IY Player Card"
            className="aspect-[3/4] w-full rounded-2xl object-cover object-top shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}

function EarlyAccessForm() {
  return (
    <form className="mt-8 max-w-xl rounded-3xl border border-black/10 bg-white/80 p-4 shadow-xl shadow-black/5 backdrop-blur-xl">
      <p className="px-2 text-xs font-black uppercase tracking-[0.18em] text-black/45">
        Season Zero Early Access
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
        <input
          type="email"
          placeholder="Your email"
          className="rounded-xl border border-black/10 bg-[#f7f7f2] px-4 py-4 text-sm font-semibold text-black outline-none placeholder:text-black/35 focus:border-[#00D1B2]"
        />
        <button
          type="submit"
          className="rounded-xl bg-[#00D1B2] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
        >
          Become a Founding Player
        </button>
      </div>
    </form>
  );
}

function ProgressionMap() {
  const items = [
    ["Running", "PACE • STAMINA • ENDURANCE"],
    ["Strength", "POWER • SKILL • INTENSITY"],
    ["Consistency", "STATUS • PROGRESSION • IMPACT"],
    ["Recovery", "RECOVERY • BALANCE • LONGEVITY"],
    ["Team Activity", "TEAM POWER • MATCHDAY ENERGY"],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-5">
      {items.map(([real, game]) => (
        <div
          key={real}
          className="rounded-3xl border border-black/10 bg-white p-6 text-center shadow-sm"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-black/45">
            Real Life
          </p>
          <p className="mt-3 text-xl font-black uppercase text-black">{real}</p>
          <div className="mx-auto my-5 h-8 w-8 rounded-full bg-[#00D1B2]" />
          <p className="text-xs font-black uppercase tracking-[0.18em] text-black/45">
            Player System
          </p>
          <p className="mt-3 text-sm font-black uppercase text-black">{game}</p>
        </div>
      ))}
    </div>
  );
}

function CareerPath() {
  const stages = [
    [
      "42 OVR",
      "Rookie",
      "/cards/card_David.png",
      "Every player starts somewhere. Movement and consistency develop your progress step by step.",
    ],
    [
      "58 OVR",
      "Starter",
      "/cards/card_Felix.png",
      "Your stats rise, your progress becomes visible and your player identity starts to evolve.",
    ],
    [
      "84 OVR",
      "Elite",
      "/cards/card_Julia.png",
      "New unlocks, higher status and visible development reflect your long-term progress.",
    ],
    [
      "91 OVR",
      "Pro",
      "/cards/card_Jaydon.png",
      "Top players unlock special styles, new opportunities and higher visibility.",
    ],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stages.map(([rating, title, image, text]) => (
        <div
          key={title}
          className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-[#ecece5]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
            />
            <div className="absolute left-4 top-4 rounded-xl bg-[#00D1B2] px-3 py-2 text-xs font-black uppercase text-black">
              {rating}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-black uppercase text-black">
              {title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-black/65">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureCard({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
      <div className="aspect-[4/3] overflow-hidden bg-[#ecece5]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-black uppercase leading-none tracking-tight text-black">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
      </div>
    </div>
  );
}

function MatchdayPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10">
        <img
          src="/logik/team.jpg"
          alt="Club Matchday"
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
              <p className="mt-2 text-5xl font-black text-[#00D1B2]">78</p>
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
                <span className="font-black uppercase text-black">{team}</span>
              </div>
              <span className="rounded-xl bg-[#00D1B2] px-3 py-2 text-xs font-black text-black">
                {rating}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="bg-[#f7f7f2] px-6 pb-16 md:pb-24">
      <div className="mx-auto rounded-3xl border border-black/10 bg-black p-8 text-white md:max-w-7xl md:p-12">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
          Your story starts with movement
        </p>
        <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.6fr] md:items-end">
          <div>
            <h2 className="text-4xl font-black uppercase leading-none tracking-tight md:text-6xl">
              Start your progression.
            </h2>
            <p className="mt-6 max-w-2xl text-white/65">
              Build your player, develop your identity, rise through matchdays
              and turn real activity into visible progress.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-black"
          >
            Back to Home →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-black">
      <Navbar />

      <section className="relative overflow-hidden bg-[#f7f7f2]">
        <div className="absolute inset-0">
          <img
            src="/vision/vision_05.jpg"
            alt="Players"
            className="h-full w-full object-cover opacity-95"
            style={{ objectPosition: "center 25%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f2]/92 via-[#f7f7f2]/65 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f7f2] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-black/65">
              Player Experience
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.88] tracking-tight text-black md:text-8xl xl:text-[7rem]">
              Evolve your
              <br />
              <span className="text-[#00D1B2] drop-shadow-sm">player.</span>
            </h1>

            <p className="mt-8 max-w-lg text-xl leading-relaxed text-black/75">
              Real movement develops your player through visible stats, skills
              and progress. Matchdays, teams and rankings make development feel
              motivating, social and alive.
            </p>

            <EarlyAccessForm />
          </div>

          <div className="hidden md:block">
            <HeroCardShowcase />
          </div>
        </div>
      </section>

      <Section
        eyebrow="Player System"
        title="Real movement becomes visible progress."
        text="Every activity can shape your player. Progress is earned through movement, consistency and recovery — not screen time or pay-to-win mechanics."
      >
        <ProgressionMap />
      </Section>

      <Section
        eyebrow="Career Path"
        title="From rookie to pro."
        text="Your player evolves through visible progress, rising status, new unlocks and long-term real-world development."
      >
        <CareerPath />
      </Section>

      <Section
        eyebrow="Core Systems"
        title="More than individual progress."
        text="Your player is the beginning. Game dynamics turn movement into identity, matchdays, rankings and shared competition."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Player Cards"
            text="Your identity becomes visible through ratings, skills, status and style."
            image="/cards/card_Lena.png"
          />
          <FeatureCard
            title="Teams"
            text="Your activity contributes to performance, rivalry and shared motivation."
            image="/logik/team.jpg"
          />
          <FeatureCard
            title="Matchdays"
            text="Recurring matchups create tension, anticipation and reasons to move."
            image="/logik/spieltag.jpg"
          />
          <FeatureCard
            title="Leagues"
            text="Promotion, relegation and tables turn consistency into drama."
            image="/logik/liga.jpg"
          />
        </div>
      </Section>

      <Section
        eyebrow="Team Impact"
        title="Movement becomes competition."
        text="Your progress affects teams, rivalries and league position — bringing the dynamics of games into real life."
      >
        <MatchdayPanel />
      </Section>

      <Section
        eyebrow="Healthy Development"
        title="Long-term progress."
        text="Visible motivation creates short-term excitement. Real movement builds long-term health, fitness and habits."
      />

      <CTASection />
    </main>
  );
}
