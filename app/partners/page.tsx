import Link from "next/link";

function Navbar() {
  const activeClass =
    "text-black underline decoration-[#00D1B2] decoration-2 underline-offset-8";

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
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

        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.12em] text-black/65 md:flex">
          <Link href="/" className="transition hover:text-black">
            Home
          </Link>
          <Link href="/players" className="transition hover:text-black">
            Player
          </Link>
          <Link
            href="/partners"
            className={`${activeClass} transition hover:text-black`}
          >
            Partner
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer rounded-xl border border-black/10 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black">
            Menu
          </summary>

          <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/10">
            <Link href="/" className="block px-5 py-4 text-sm font-semibold">
              Home
            </Link>
            <Link
              href="/players"
              className="block border-t border-black/10 px-5 py-4 text-sm font-semibold"
            >
              Player
            </Link>
            <Link
              href="/partners"
              className="block border-t border-black/10 px-5 py-4 text-sm font-semibold text-[#00D1B2]"
            >
              Partner
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/55 mb-6">
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
      "Identity",
      "Partner werden Teil einer Identität, die Spieler bewusst wählen und stolz repräsentieren.",
    ],
    [
      "Movement",
      "Kooperationen inspirieren echte Aktivität — durch Challenges, Programme, Produkte und Events.",
    ],
    [
      "Impact",
      "Movement Impact macht sichtbar, welche positive Bewegung ein Partner auslöst.",
    ],
    [
      "Storytelling",
      "Aus Bewegung entstehen starke Geschichten für Marke, Community und Öffentlichkeit.",
    ],
  ];

  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-6">
      <div className="grid overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl shadow-black/5 md:grid-cols-4">
        {items.map(([title, text]) => (
          <div
            key={title}
            className="border-black/10 p-7 md:border-r last:md:border-r-0"
          >
            <h3 className="text-2xl font-semibold text-black">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IdentitySection() {
  const items = [
    [
      "Bewusst gewählt",
      "Spieler entscheiden selbst, welche Partner zu ihrer Identität, ihrem Sport und ihrer Einstellung passen.",
    ],
    [
      "Stolz repräsentiert",
      "Partner werden sichtbar auf Cards, Trikots, Teams, Challenges und persönlichen Erfolgen.",
    ],
    [
      "Mehr als Werbung",
      "Eine Kooperation ist kein Logo. Sie wird Teil von Motivation, Zugehörigkeit und Haltung.",
    ],
    [
      "Passende Zielgruppen",
      "Partner richten Kooperationen an Sportarten, Communities und Spielertypen aus, für die sie echten Wert schaffen.",
    ],
  ];

  return (
    <Section
      eyebrow="Identity"
      title="Players choose who represents them."
      text="Nicht jede Marke passt zu jedem Spieler. Genau deshalb werden Partner nicht einfach platziert, sondern bewusst gewählt."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-black">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-black/65">
              {text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function MovementImpactSection() {
  const metrics = [
    ["18.482", "Players representing you"],
    ["421.800 km", "Movement generated"],
    ["58.320", "Completed workouts"],
    ["8,4 Mio", "Kcal burned"],
    ["214", "Active communities"],
    ["3.210", "Player Cards shared"],
  ];

  return (
    <section className="border-t border-black/10 bg-[#f7f7f2]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <Eyebrow>Movement Impact</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
            Create movement.
            <br />
            Build identity.
            <br />
            Measure impact.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black/65">
            Movement Impact zeigt, wie viele Menschen ein Partner bewegt,
            welche Aktivitäten er inspiriert und welchen positiven Beitrag er
            für Community, Gesundheit und Motivation leistet.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-black/65">
            Statt nur Reichweite zu messen, macht IY echte Bewegung, Aktivierung
            und positive Geschichten sichtbar.
          </p>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-2xl shadow-black/10 md:p-8">
          <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                Movement Impact Report
              </p>
              <h3 className="mt-2 text-3xl font-semibold text-black">
                Your Impact
              </h3>
            </div>
            <span className="rounded-xl bg-[#00D1B2] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-black">
              This Month
            </span>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-[#f7f7f2] p-5">
                <p className="text-3xl font-semibold leading-none text-black">
                  {value}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-black/40">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 rounded-2xl bg-black p-5 text-sm leading-relaxed text-white/70">
            This month your partnership inspired thousands of people to move,
            compete and represent your identity.
          </p>
        </div>
      </div>
    </section>
  );
}

function StorytellingSection() {
  const posts = [
    ["Diese Woche", "84.321 km", "durch unsere Community bewegt."],
    ["12.000 Spieler", "haben unsere Challenge", "erfolgreich abgeschlossen."],
    ["8,4 Mio kcal", "durch echte Aktivität", "gemeinsam verbrannt."],
  ];

  return (
    <Section
      eyebrow="Storytelling"
      title="Every number tells a story."
      text="Partner erhalten nicht nur Daten. Sie erhalten positive Geschichten über Bewegung, Motivation und echten gesellschaftlichen Beitrag."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map(([top, main, bottom]) => (
          <div
            key={main}
            className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
              {top}
            </p>
            <h3 className="mt-6 text-4xl font-semibold leading-none tracking-tight text-black">
              {main}
              <br />
              <span className="text-[#00D1B2]">{bottom}</span>
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-black/60">
              Geschichten für Social Media, PR, Employer Branding, Reports und
              Community-Kommunikation.
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ShapeGameSection() {
  const items = [
    ["Challenges", "Partner schaffen neue Bewegungsanlässe und motivierende Aufgaben."],
    ["Products", "Kooperationsprodukte wie Kleidung, Food, Drinks oder Equipment."],
    ["Events", "Live Challenges, Community Events und besondere reale Momente."],
    ["Creator Programs", "Programme mit Athleten, Creatorn, Coaches und Communities."],
    ["Special Cards", "Limitierte Cards für besondere Leistungen, Events oder Aktionen."],
    ["Teams & Leagues", "Partner können Teams, Ligen, Seasons oder Challenges mitgestalten."],
  ];

  return (
    <Section
      eyebrow="Ecosystem"
      title="Partners shape the game."
      text="Partner bringen Content, Produkte, Communities und neue Möglichkeiten ins Ökosystem — nicht nur Logos."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-black">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-black/65">
              {text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function PartnerRolesSection() {
  const roles = [
    [
      "Brands",
      "Marken schaffen Challenges, Produkte, Experiences und messbaren Movement Impact.",
    ],
    [
      "Athletes",
      "Athleten bringen Sportarten, Programme, Glaubwürdigkeit und Communities ein.",
    ],
    [
      "Creators",
      "Creator aktivieren Menschen durch Lifestyle, Training, Storytelling und Challenges.",
    ],
    [
      "Investors",
      "Investoren begleiten eine neue Kategorie zwischen Sport, Gaming, Identität und positivem Impact.",
    ],
  ];

  return (
    <Section
      eyebrow="Partner Roles"
      title="One ecosystem. Different roles."
      text="Alle Partner gestalten dasselbe System — aus unterschiedlichen Perspektiven und mit eigenem Movement Impact Report."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {roles.map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
          >
            <h3 className="text-3xl font-semibold text-black">{title}</h3>
            <p className="mt-5 text-sm leading-relaxed text-black/65">
              {text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function SupportedBySection() {
  const partners = [
    {
      name: "Alexander Busse",
      role: "3-time Kickboxing World Champion",
      image: "/partners/alexander-busse.jpg",
      text: "Alexander Busse bringt Kampfsport, Disziplin und Community in IY. Als Weltmeister und Coach steht er für echte Entwicklung durch Bewegung.",
      tags: ["Athlete", "Coach", "Community"],
      active: true,
    },
    {
      name: "Coming Soon",
      role: "Brand Partner",
      image: null,
      text: "Neue Partner bringen Produkte, Challenges und Experiences ins Ökosystem.",
      tags: ["Products", "Challenges", "Impact"],
      active: false,
    },
    {
      name: "Coming Soon",
      role: "Creator Partner",
      image: null,
      text: "Creator aktivieren Communities durch Programme, Lifestyle und echte Bewegung.",
      tags: ["Creator", "Programs", "Community"],
      active: false,
    },
  ];

  return (
    <Section
      eyebrow="Supported by"
      title="Partners who move people."
      text="IY wächst mit Partnern, die echte Bewegung, Identität und Community schaffen."
    >
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {partners.map((partner) => (
          <div
            key={partner.name + partner.role}
            className="min-w-[82%] snap-start overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm md:min-w-[520px]"
          >
            <div className="relative h-[340px] bg-black">
              {partner.image ? (
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <p className="text-3xl font-semibold text-white/35">
                    Coming Soon
                  </p>
                </div>
              )}
            </div>

            <div className="p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                {partner.active ? "Founding Partner" : "Next Partners"}
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight text-black">
                {partner.name}
              </h3>
              <p className="mt-2 text-base font-medium text-black/65">
                {partner.role}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-black/65">
                {partner.text}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {partner.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl bg-[#f7f7f2] px-3 py-2 text-xs font-semibold text-black/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FoundingPartnerSection() {
  return (
    <section className="bg-[#f7f7f2] px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-black/10 bg-black p-8 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            Founding Partner
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-none tracking-tight md:text-5xl">
            Shape the first season.
          </h2>
          <p className="mt-6 text-white/65">
            Founding Partner helfen, die erste Generation von Kooperationen,
            Challenges, Produkten und Movement Impact Reports zu gestalten.
          </p>
          <Link
            href="mailto:hello@playable-fitness.com"
            className="mt-8 inline-flex rounded-xl bg-[#00D1B2] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black"
          >
            Become a Partner →
          </Link>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-8 md:p-10">
          <Eyebrow>Season Zero</Eyebrow>
          <h3 className="mt-4 text-4xl font-semibold leading-none tracking-tight text-black md:text-5xl">
            Not a campaign.
            <br />
            A position in the system.
          </h3>
          <p className="mt-6 max-w-xl text-black/65">
            Früh dabei zu sein bedeutet, die Rolle von Partnern im IY-Ökosystem
            aktiv mitzugestalten — sichtbar, messbar und langfristig.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-[#f7f7f2] px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-black/10 bg-white p-8 text-center shadow-sm md:p-14">
        <Eyebrow>Partner</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
          Become part of a player's identity.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/65">
          Für Partner, die nicht nur gesehen werden wollen — sondern Menschen
          bewegen, Identität schaffen und positiven Impact messbar machen.
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
            Explore Player →
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
            src="/header/header_16:9_04.png"
            alt="Partner Movement Impact"
            className="h-full w-full object-cover opacity-95"
            style={{ objectPosition: "center 48%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f2]/94 via-[#f7f7f2]/68 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f7f2] to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
              Partner
            </p>

            <h1 className="text-6xl font-semibold leading-[0.95] tracking-tight text-black md:text-8xl xl:text-[7rem]">
              Become part
              <br />
              of a player's identity.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-black/75 md:text-2xl">
              Partner inspirieren Menschen zu echter Bewegung und werden Teil
              einer Identität, die Spieler bewusst wählen und stolz
              repräsentieren.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="mailto:hello@playable-fitness.com"
                className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
              >
                Become a Partner →
              </Link>

              <Link
                href="/players"
                className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black/30"
              >
                Explore Player →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ValueStrip />
      <IdentitySection />
      <MovementImpactSection />
      <StorytellingSection />
      <ShapeGameSection />
      <PartnerRolesSection />
      <SupportedBySection />
      <FoundingPartnerSection />
      <CTASection />
    </main>
  );
}
