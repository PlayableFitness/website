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
          <Link href="/players">Players</Link>
          <Link
            href="/partners"
            className="text-black underline decoration-[#00D1B2] decoration-2 underline-offset-8"
          >
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

function ValueStrip() {
  const items = [
    [
      "Real Alignment",
      "Players choose brands that match their values, goals and identity.",
    ],
    [
      "Visible Progress",
      "Brands appear through development, status, challenges and rewards.",
    ],
    [
      "Proud Moments",
      "Visibility happens around progress, achievement, rivalry and shared success.",
    ],
    [
      "Season Zero",
      "Early partners help shape how brands live inside the system.",
    ],
  ];

  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-6">
      <div className="grid overflow-hidden rounded-2xl border border-black/10 bg-white/90 shadow-xl shadow-black/5 backdrop-blur-xl md:grid-cols-4">
        {items.map(([title, text]) => (
          <div
            key={title}
            className="border-black/10 p-6 md:border-r last:md:border-r-0"
          >
            <p className="text-2xl font-black uppercase leading-none tracking-tight text-black">
              {title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-black/55">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MomentGrid() {
  const items = [
    [
      "Progression",
      "Brands become visible through levels, status and long-term development.",
    ],
    [
      "Identity",
      "Players represent brands that reflect who they are and what they stand for.",
    ],
    [
      "Matchdays",
      "Visibility appears in moments of tension, rivalry, progress and pride.",
    ],
    [
      "Teams",
      "Shared goals and competition create social reinforcement around brands.",
    ],
    [
      "Challenges",
      "Brand challenges create participation, movement and recurring engagement.",
    ],
    [
      "Rewards",
      "Unlocks and benefits become part of motivation instead of interruption.",
    ],
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">
            {title}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
        </div>
      ))}
    </div>
  );
}

function MatchingSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-3xl border border-black/10 bg-black p-8 text-white md:p-10">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
          For Players
        </p>
        <h3 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight md:text-5xl">
          Choose what you stand behind.
        </h3>
        <p className="mt-6 text-white/65">
          Players choose the brands, styles and partners that feel aligned with
          their identity, values and progression.
        </p>
      </div>

      <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45">
          For Brands
        </p>
        <h3 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-black md:text-5xl">
          Reach people already living your values.
        </h3>
        <p className="mt-6 text-black/65">
          Partners can connect with specific communities, activity types,
          lifestyles and player profiles — not just broad audiences.
        </p>
      </div>
    </div>
  );
}

function EcosystemSection() {
  const groups = [
    {
      title: "Brands",
      text: "Sportswear, fashion, food & beverage, nutrition, wellness, lifestyle and recovery.",
    },
    {
      title: "Movement",
      text: "Gyms, studios, events, running groups, training programs and local communities.",
    },
    {
      title: "Experts",
      text: "Athletes, coaches, creators, ambassadors and people who inspire real progress.",
    },
    {
      title: "Health",
      text: "Prevention, insurance, wearables, mobility, recovery and long-term healthy routines.",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {groups.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
        >
          <h3 className="text-3xl font-black uppercase leading-none tracking-tight text-black">
            {item.title}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-black/65">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function MomentSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45">
          Positive Visibility
        </p>
        <h3 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-black md:text-5xl">
          Brands become part of moments players are proud to share.
        </h3>
        <p className="mt-6 text-black/65">
          When players unlock progress, win matchdays, reach new status or
          represent their team, partners are connected to positive, authentic
          moments — not interrupted attention.
        </p>
      </div>

      <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45">
          Why it matters
        </p>

        <div className="mt-6 space-y-3">
          {[
            ["Repeated", "Presence appears through ongoing progression."],
            ["Emotional", "Brands are linked to pride, progress and achievement."],
            ["Voluntary", "Players choose what they represent."],
            ["Social", "Success moments are shared with teams and communities."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-black/10 bg-[#f7f7f2] p-4"
            >
              <p className="text-sm font-black uppercase text-black">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-black/55">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FoundingPartnerSection() {
  return (
    <section className="bg-[#f7f7f2] px-6 pb-16 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-black/10 bg-black p-8 text-white md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-white/45">
            Founding Partner
          </p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight md:text-5xl">
            Shape how brands live inside the system.
          </h2>
          <p className="mt-6 text-white/65">
            Early partners help define categories, integrations, rewards,
            challenges and the role of brands inside player progression.
          </p>
          <Link
            href="mailto:hello@playable-fitness.com"
            className="mt-8 inline-flex rounded-xl bg-[#00D1B2] px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-black"
          >
            Become a Founding Partner →
          </Link>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-black/45">
            Early Mover Advantage
          </p>
          <h3 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-black md:text-5xl">
            Not a campaign. A position in the ecosystem.
          </h3>
          <p className="mt-6 max-w-xl text-black/65">
            Founding partners can secure early category relevance, long-term
            visibility and deeper integration into moments of motivation,
            identity and development.
          </p>
        </div>
      </div>
    </section>
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
              Build the future of movement, identity and progression.
            </h2>

            <p className="mt-6 max-w-2xl text-white/65">
              For brands, athletes, creators, gyms, programs and partners who
              want to become part of real progress and long-term engagement.
            </p>
          </div>

          <Link
            href="mailto:hello@playable-fitness.com"
            className="inline-flex justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-black"
          >
            Contact us →
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
            <p className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-black/65">
              Partner Ecosystem
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.88] tracking-tight text-black md:text-8xl xl:text-[7rem]">
              Where brands
              <br />
              <span className="text-[#00D1B2] drop-shadow-sm">
                become identity.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-black/75">
              Brands become part of progression, identity and the moments
              players are proud to share.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="mailto:hello@playable-fitness.com"
                className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
              >
                Become a Founding Partner →
              </Link>

              <Link
                href="/players"
                className="inline-flex items-center justify-center rounded-xl px-4 py-4 text-xs font-black uppercase tracking-[0.14em] text-black transition hover:bg-white"
              >
                Explore Players →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ValueStrip />

      <Section
        eyebrow="The Difference"
        title="Part of the moment."
        text="Progression, challenges, rewards, teams and matchdays create repeated moments where brands are experienced through motivation — not distraction."
      >
        <MomentGrid />
      </Section>

      <Section
        eyebrow="Brand Matching"
        title="Players choose the brands they believe in."
        text="The strongest partnerships are built on alignment. Players represent brands that fit their values, style, goals and identity."
      >
        <MatchingSection />
      </Section>

      <Section
        eyebrow="Partner Ecosystem"
        title="Real categories. Real connection."
        text="The system can connect movement, identity and progression with brands, athletes, programs, creators and real-world partners across many categories."
      >
        <EcosystemSection />
      </Section>

      <Section
        eyebrow="Shared Success"
        title="Proud moments create stronger visibility."
        text="Success, progression and team moments create authentic visibility around the brands players choose to represent."
      >
        <MomentSection />
      </Section>

      <FoundingPartnerSection />

      <Section
        eyebrow="Healthy Motivation"
        title="Designed for long-term real-world development."
        text="Movement, consistency and recovery drive long-term real-world development — not endless screen time or pay-to-win systems."
      />

      <CTASection />
    </main>
  );
}
