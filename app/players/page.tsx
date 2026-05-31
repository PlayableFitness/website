import Link from "next/link";

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
          
          <Link href="/" className="transition hover:text-black">
            Home
          </Link>

          <Link
            href="/players"
            className={`${activeClass} transition hover:text-black`}
          >
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
              className="block px-5 py-4 text-sm font-semibold text-black transition hover:bg-black/[0.03]"
            >
              Home
            </Link>

            <Link
              href="/players"
              className="block border-t border-black/10 px-5 py-4 text-sm font-semibold text-[#00D1B2] transition hover:bg-black/[0.03]"
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
          {text && <p className="mt-6 text-lg leading-relaxed text-black/65">{text}</p>}
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

function SkillSystem() {
  const skills = [
    ["Pace", "Speed, running and explosive movement.", "Tempo"],
    ["Power", "High intensity, explosive output and athletic impact.", "Power"],
    ["Endurance", "Longer efforts, cardio base and sustained activity.", "Ausdauer"],
    ["Strength", "Strength training, resistance work and physical force.", "Kraft"],
    ["Recovery", "Balance, regeneration, yoga, sleep and nutrition habits.", "Recovery"],
    ["Discipline", "Consistency, rhythm and showing up again.", "Konstanz"],
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {skills.map(([title, text, label], index) => (
        <div key={title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold text-black">{title}</h3>
            <span className="rounded-xl bg-[#00D1B2] px-3 py-2 text-xs font-semibold text-black">
              {label}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-black/10">
            <div
              className="h-full rounded-full bg-[#00D1B2]"
              style={{ width: `${58 + index * 6}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgressionRules() {
  const rules = [
    ["Start fast", "Lower values grow faster, so beginners feel progress immediately."],
    ["Stay active", "Higher values need consistency and regular activity to remain strong."],
    ["Come back", "After breaks or injuries, players can regain their level faster again."],
    ["Stay fair", "No Pay2Win. Your player grows through real movement."],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-4">
      {rules.map(([title, text]) => (
        <div key={title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
        </div>
      ))}
    </div>
  );
}

function CareerPath() {
  const stages = [
    ["42 OVR", "Rookie", "/cards/card_David.png", "Start your journey. Small activities already create visible progress."],
    ["58 OVR", "Starter", "/cards/card_Felix.png", "Build rhythm, improve your skills and help your team."],
    ["84 OVR", "Elite", "/cards/card_Julia.png", "Earn status, better cards and stronger visibility in the league."],
    ["91 OVR", "Pro", "/cards/card_Jaydon.png", "Unlock rare sponsors, special cards and premium recognition."],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stages.map(([rating, title, image, text]) => (
        <div
          key={title}
          className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-[#ecece5]">
            <img src={image} alt={title} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
            <div className="absolute left-4 top-4 rounded-xl bg-[#00D1B2] px-3 py-2 text-xs font-semibold text-black">
              {rating}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-black">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MatchdayPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 md:p-10">
        <img src="/logik/team.jpg" alt="Club Matchday" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative">
          <Eyebrow>Matchday 07</Eyebrow>
          <h3 className="mt-4 text-4xl font-semibold leading-none tracking-tight text-black md:text-5xl">
            LA United
            <br />
            vs
            <br />
            Berlin Ballers
          </h3>

          <p className="mt-6 max-w-md text-black/65">
            Your recent activity, form and skills can change the result.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-black p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                Team Power
              </p>
              <p className="mt-2 text-5xl font-semibold text-[#00D1B2]">78</p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                Last 3 Days
              </p>
              <p className="mt-2 text-5xl font-semibold text-black">+12%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
        <Eyebrow>Your Impact</Eyebrow>
        <div className="mt-6 space-y-4">
          {[
            ["Skill values", "Your OVR and individual skills shape the team strength."],
            ["Current form", "Recent activity since the last matchday influences performance."],
            ["Team energy", "Every player can push the team before the next simulation."],
            ["Shareable moments", "Wins, MVPs and special cards are built to be shared."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-[#f7f7f2] p-5">
              <h4 className="font-semibold text-black">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-black/60">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RewardsGrid() {
  const items = [
    ["Player Cards", "Your card becomes your visible identity — digital, shareable and later physical."],
    ["Special Cards", "Earn Player of the Matchday, Player of the Season and rare event cards."],
    ["Jerseys", "Unlock teamwear and outfitters that represent your status."],
    ["Sponsors", "Carry brands you identify with and are proud to show."],
    ["Creator Programs", "Join workouts, challenges and programs from athletes and creators."],
    ["Events", "Meet teams, creators and brands in real-life challenges and community events."],
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map(([title, text]) => (
        <div key={title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
        </div>
      ))}
    </div>
  );
}

function CTASection() {
  return (
    <section className="bg-[#f7f7f2] px-6 pb-16 md:pb-24">
      <div className="mx-auto rounded-3xl border border-black/10 bg-black p-8 text-white md:max-w-7xl md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
          Your next matchday starts now
        </p>

        <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.6fr] md:items-end">
          <div>
            <h2 className="text-4xl font-semibold leading-none tracking-tight md:text-6xl">
              Train today.
              <br />
              Change your player.
            </h2>
            <p className="mt-6 max-w-2xl text-white/65">
              Build skills, earn status and help your team win through real movement.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black"
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
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
              Player Experience
            </p>

            <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight text-black md:text-8xl xl:text-[7rem]">
              Every workout
              <br />
              changes your player.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-black/75">
              Train in real life, improve your skills and help your team win the next matchday.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
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
          </div>

          <div className="hidden md:block">
            <HeroCardShowcase />
          </div>
        </div>
      </section>

      <Section
        eyebrow="Skill System"
        title="Your activity becomes your skills."
        text="Every sport shapes your player differently. Running improves pace and endurance. Strength training builds power and strength. Recovery habits support balance and long-term performance."
      >
        <SkillSystem />
      </Section>

      <Section
        eyebrow="Overall Rating"
        title="OVR shows your current level. Skills show who you are."
        text="The overall rating gives a quick view of your player. Individual skills reveal your strengths, focus and playstyle."
      >
        <ProgressionRules />
      </Section>

      <Section
        eyebrow="Player Identity"
        title="From rookie to pro."
        text="Beginners see fast progress. Higher levels require consistency. Your player grows with you — and can lose form when activity drops."
      >
        <CareerPath />
      </Section>

      <Section
        eyebrow="Matchday Motivation"
        title="Every player matters."
        text="Every three days, your team gets a new chance. Your latest activity can influence the next result."
      >
        <MatchdayPanel />
      </Section>

      <Section
        eyebrow="Status & Rewards"
        title="Earn your identity."
        text="Cards, jerseys, sponsors and events make your progress visible — online, offline and in real life."
      >
        <RewardsGrid />
      </Section>

      <section className="border-t border-black/10 bg-[#f7f7f2]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
              <Eyebrow>Play2Win</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
                No shortcuts. No Pay2Win.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black/65">
                Success is earned through movement, consistency and real activity.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
              <Eyebrow>Real Life</Eyebrow>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
                The app is not the goal.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-black/65">
                IY is built to motivate real movement, real confidence and real development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
