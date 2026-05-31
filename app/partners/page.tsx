import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f7f2]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo/IY Logo.png" alt="IY Logo" className="h-10 w-10 rounded-xl object-cover" />
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/55">
            Improve Yourself
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-black/65 md:flex">
          <Link href="/">Home</Link>
          <Link href="/players">Players</Link>
          <Link href="/partners" className="text-black underline decoration-[#00D1B2] decoration-2 underline-offset-8">
            Partners
          </Link>
        </nav>

        <Link href="/players" className="rounded-xl bg-[#00D1B2] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black">
          Create Player
        </Link>
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

function ValueStrip() {
  const items = [
    ["Identity", "Brands become part of player cards, jerseys, teams and visible progress."],
    ["Movement", "Every partnership is connected to real activity, not passive attention."],
    ["Community", "Athletes and creators activate people through programs, teams and challenges."],
    ["Season Zero", "Early partners help shape the first real-world sports simulation."],
  ];

  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-6">
      <div className="grid overflow-hidden rounded-3xl border border-black/10 bg-white/90 shadow-xl shadow-black/5 backdrop-blur-xl md:grid-cols-4">
        {items.map(([title, text]) => (
          <div key={title} className="border-black/10 p-7 md:border-r last:md:border-r-0">
            <h3 className="text-2xl font-semibold text-black">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportedBySection() {
  return (
    <Section
      eyebrow="Supported by"
      title="Athletes who turn movement into identity."
      text="IY grows with real athletes, coaches and creators who bring credibility, community and programs into the system."
    >
      <div className="grid gap-6 overflow-hidden rounded-3xl border border-black/10 bg-white md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[420px] bg-black">
          <img
            src="/partners/alexander-busse.jpg"
            alt="Alexander Busse"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
          />
        </div>

        <div className="p-8 md:p-10">
          <Eyebrow>Founding Athlete Partner</Eyebrow>
          <h3 className="mt-4 text-4xl font-semibold leading-tight text-black md:text-5xl">
            Alexander Busse
          </h3>
          <p className="mt-3 text-lg font-medium text-black/70">
            3-time Kickboxing World Champion
          </p>

          <p className="mt-6 text-black/65 leading-relaxed">
            Alexander Busse started martial arts at a young age and built his career through discipline,
            confidence and consistency. After titles across multiple disciplines, he became a 3-time world
            champion, multiple German champion, European champion and coach.
          </p>

          <p className="mt-4 text-black/65 leading-relaxed">
            With Team BUSSE, he now helps people experience the positive impact of martial arts through
            training, competition and community.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Athlete", "Coach", "Community"].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f7f7f2] p-4">
                <p className="text-sm font-semibold text-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function PartnerTypes() {
  const groups = [
    {
      title: "Brands",
      text: "Become visible through jerseys, sponsors, leagues, rewards, events and products players are proud to represent.",
    },
    {
      title: "Athletes",
      text: "Bring your sport into the system through programs, challenges, teams and community activation.",
    },
    {
      title: "Creators",
      text: "Build active communities around training, lifestyle, nutrition, motivation and real-world challenges.",
    },
    {
      title: "Investors",
      text: "Join a new category between sport, gaming, identity and real-world movement.",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {groups.map((item) => (
        <div key={item.title} className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <h3 className="text-3xl font-semibold text-black">{item.title}</h3>
          <p className="mt-5 text-sm leading-relaxed text-black/65">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function BrandOpportunities() {
  const items = [
    ["Jersey Sponsors", "Become part of team identity and player pride."],
    ["Outfitters", "Equip teams with digital and later physical gear."],
    ["Brand Leagues", "Create branded leagues, seasons and community challenges."],
    ["Co-Branded Products", "Connect food, beverage, fashion and lifestyle products to real activity."],
    ["Live Events", "Meet players, teams, creators and communities in real life."],
    ["Community Insights", "See how your community moves, trains and identifies with your brand."],
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

function CreatorSystem() {
  const items = [
    ["Programs", "Athletes and creators can launch training, nutrition and lifestyle programs."],
    ["Challenges", "Communities can compete in creator-led challenges and team battles."],
    ["Revenue Share", "Partners who activate real communities can participate in the value they create."],
    ["Brand Matches", "Creators, athletes and brands can build authentic collaborations inside IY."],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map(([title, text]) => (
        <div key={title} className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <h3 className="text-3xl font-semibold text-black">{title}</h3>
          <p className="mt-4 text-black/65 leading-relaxed">{text}</p>
        </div>
      ))}
    </div>
  );
}

function InvestorSection() {
  return (
    <section className="border-t border-black/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1fr_0.9fr] md:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            For Investors
          </p>
          <h2 className="mt-5 text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
            A new layer between sport, gaming and real life.
          </h2>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-lg leading-relaxed text-white/65">
            IY turns real movement into player identity, team competition, matchdays,
            creator programs, brand partnerships and real-world events.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/65">
            The app is not built to keep people scrolling. It is built to move them.
          </p>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  const items = [
    ["Skill Verification", "Real-life challenges can test skills, movement and fairness."],
    ["Community Events", "Teams, players, creators and brands meet beyond the app."],
    ["Training Sessions", "Athletes and coaches can host live workouts and programs."],
    ["Sport, Music, Culture", "Events create moments people remember and share."],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-4">
      {items.map(([title, text]) => (
        <div key={title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
        </div>
      ))}
    </div>
  );
}

function FoundingPartnerSection() {
  return (
    <section className="bg-[#f7f7f2] px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-black/10 bg-black p-8 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            Founding Partners
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-none tracking-tight md:text-5xl">
            Shape the first season.
          </h2>
          <p className="mt-6 text-white/65">
            Early partners help define how brands, athletes, creators and communities live inside IY.
          </p>
          <Link
            href="mailto:hello@playable-fitness.com"
            className="mt-8 inline-flex rounded-xl bg-[#00D1B2] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black"
          >
            Become a Founding Partner →
          </Link>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <Eyebrow>Early Partner Advantage</Eyebrow>
          <h3 className="mt-4 text-4xl font-semibold leading-none tracking-tight text-black md:text-5xl">
            Not a campaign. A position in the system.
          </h3>
          <p className="mt-6 max-w-xl text-black/65">
            Founding partners can secure early category relevance, long-term visibility and deeper integration
            into moments of motivation, pride and identity.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-[#f7f7f2] px-6 pb-16 md:pb-24">
      <div className="mx-auto rounded-3xl border border-black/10 bg-white p-8 text-center shadow-sm md:max-w-7xl md:p-14">
        <Eyebrow>Season Zero</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
          Build the future of real-world sport.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/65">
          For brands, athletes, creators, investors and partners who want to become part of real movement,
          identity and positive competition.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="mailto:hello@playable-fitness.com"
            className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black"
          >
            Contact us →
          </Link>
          <Link
            href="/players"
            className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black"
          >
            Explore Players →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-black">
      <Navbar />

      <section className="relative overflow-hidden bg-[#f7f7f2]">
        <div className="absolute inset-0">
          <img
            src="/vision/vision_05.jpg"
            alt="Partners"
            className="h-full w-full object-cover opacity-95"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f2]/92 via-[#f7f7f2]/65 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f7f2] to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
              Partner Ecosystem
            </p>

            <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight text-black md:text-8xl xl:text-[7rem]">
              Brands become
              <br />
              part of identity.
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-black/75">
              Brands, athletes and creators become part of progression, motivation and the moments people are proud to share.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="mailto:hello@playable-fitness.com"
                className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
              >
                Become a Founding Partner →
              </Link>

              <Link
                href="/players"
                className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black/30 hover:bg-white"
              >
                Explore Players →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ValueStrip />

      <SupportedBySection />

      <Section
        eyebrow="Partner Ecosystem"
        title="One system. Different roles."
        text="Brands, athletes, creators, teams and investors can all become part of the same real-world sports identity system."
      >
        <PartnerTypes />
      </Section>

      <Section
        eyebrow="For Brands"
        title="From sponsorship to identity."
        text="Partners do not just appear next to the game. They become part of what players earn, wear, represent and share."
      >
        <BrandOpportunities />
      </Section>

      <Section
        eyebrow="For Athletes & Creators"
        title="Communities move communities."
        text="Athletes and creators can bring their own programs, teams and challenges into IY — and activate people through real movement."
      >
        <CreatorSystem />
      </Section>

      <InvestorSection />

      <Section
        eyebrow="Real-World Events"
        title="From digital leagues to real communities."
        text="Live challenges, creator battles, training sessions and events connect the digital sports system with real life."
      >
        <EventsSection />
      </Section>

      <FoundingPartnerSection />

      <CTASection />
    </main>
  );
}
