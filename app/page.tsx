import Link from "next/link";

const playerCardPool = [
  "/cards/PlayerCard01.png",
  "/cards/PlayerCard02.png",
  "/cards/PlayerCard03.png",
  "/cards/PlayerCard04.png",
  "/cards/PlayerCard05.png",
  "/cards/PlayerCard06.png",
  "/cards/PlayerCard07.png",
  "/cards/PlayerCard08.png",
  "/cards/PlayerCard09.png",
  "/cards/PlayerCard10.png",
];

function getHeroCards() {
  return [...playerCardPool].sort(() => Math.random() - 0.5).slice(0, 4);
}

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
          <Link href="/" className={`${activeClass} transition hover:text-black`}>
            Home
          </Link>
          <Link href="/players" className="transition hover:text-black">
            Player
          </Link>
          <Link href="/partners" className="transition hover:text-black">
            Partner
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer rounded-xl border border-black/10 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-black">
            Menu
          </summary>

          <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl shadow-black/10">
            <Link href="/" className="block px-5 py-4 text-sm font-semibold text-[#00D1B2]">
              Home
            </Link>
            <Link href="/players" className="block border-t border-black/10 px-5 py-4 text-sm font-semibold">
              Player
            </Link>
            <Link href="/partners" className="block border-t border-black/10 px-5 py-4 text-sm font-semibold">
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
  const cards = getHeroCards();

  const positions = [
    "left-0 top-20 z-10 w-[52%] -rotate-7 opacity-95",
    "left-[15%] top-10 z-20 w-[54%] -rotate-3 opacity-95",
    "right-[14%] top-12 z-30 w-[54%] rotate-3 opacity-95",
    "right-0 top-5 z-40 w-[56%] rotate-7 opacity-100",
  ];

  return (
    <div className="relative mx-auto hidden h-[560px] w-full max-w-[680px] md:block">
      {cards.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="IY Player Card"
          className={`absolute rounded-[2rem] shadow-2xl shadow-black/20 transition duration-500 hover:z-50 hover:-translate-y-4 hover:scale-105 ${positions[index]}`}
        />
      ))}
    </div>
  );
}

function ValueStrip() {
  const items = [
    ["Move", "Echte Aktivität wird zur Grundlage deiner Identität."],
    ["Play", "Teams, Matchdays und Seasons machen Bewegung zum Spiel."],
    ["Progress", "Dein Spieler, deine Card und dein Status entwickeln sich mit dir."],
  ];

  return (
    <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-6">
      <div className="grid overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl shadow-black/5 md:grid-cols-3">
        {items.map(([title, text]) => (
          <div
            key={title}
            className="border-black/10 p-7 md:border-r last:md:border-r-0"
          >
            <h3 className="text-3xl font-semibold text-black">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IdentityPanel() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
        <Eyebrow>Real Movement</Eyebrow>
        <h3 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight text-black md:text-5xl">
          Bewegung wird sichtbar.
        </h3>
        <p className="mt-6 text-lg leading-relaxed text-black/65">
          Jeder Schritt, jedes Training und jede Entscheidung formt deinen
          Spieler — und macht deine Entwicklung sichtbar.
        </p>
      </div>

      <div className="mx-auto w-full max-w-[430px]">
        <img
          src="/cards/PlayerCard01.png"
          alt="IY Player Card"
          className="w-full rounded-[2rem] shadow-2xl shadow-black/20"
        />
      </div>
    </div>
  );
}

function ProgressionPanel() {
  const stages = [
    ["Rookie", "", "/cards/Card_Rookie.png"],
    ["Starter", "", "/cards/Card_Starter.png"],
    ["Elite", "", "/cards/Card_Elite.png"],
    ["Pro", "", "/cards/Card_Pro.png"],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stages.map(([level, ovr, image]) => (
        <div
          key={level}
          className="group rounded-3xl border border-black/10 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
        >
          <div className="overflow-hidden rounded-[1.8rem] bg-[#ecece5]">
            <img
              src={image}
              alt={`${level} Player Card`}
              className="w-full transition duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-2 pb-3 pt-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
                {level}
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-black">
                {ovr}
              </h3>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

function PartnershipsPanel() {
  const items = [
    [
      "Bewusst wählen",
      "Spieler entscheiden, welche Partner zu ihrer Identität und Einstellung passen.",
    ],
    [
      "Mit Stolz tragen",
      "Kooperationen werden Teil des Looks, der Card und der persönlichen Geschichte.",
    ],
    [
      "Mehr als Logos",
      "Partner bringen Challenges, Produkte, Events, Communities und Erlebnisse ein.",
    ],
    [
      "Teil des Systems",
      "Partner gestalten das Ökosystem mit — nicht nur Kampagnen.",
    ],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
        >
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
        </div>
      ))}
    </div>
  );
}

function MatchdaySection() {
  const table = [
    ["1", "LA United", "24", "16", "5", "3", "+28", "53"],
    ["2", "Munich City", "24", "15", "4", "5", "+21", "49"],
    ["3", "Berlin Ballers", "24", "13", "5", "6", "+15", "44"],
    ["4", "Urban Runners", "24", "12", "4", "8", "+9", "40"],
  ];

  return (
    <section className="border-t border-black/10 bg-[#f7f7f2]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Competition</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
            Every player matters.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#203f3a_0%,#07110f_46%,#020403_100%)] p-6 text-white shadow-2xl shadow-black/25 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur md:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D1B2]">
                  Matchday 07
                </p>
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                  Every 3 days
                </span>
              </div>

              <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    Home
                  </p>
                  <h3 className="mt-2 text-4xl font-semibold leading-none md:text-5xl">
                    LA
                    <br />
                    United
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#00D1B2]">
                    Team OVR 82
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                    Final
                  </p>
                  <div className="mt-3 rounded-3xl bg-black/55 px-6 py-5">
                    <p className="text-6xl font-semibold leading-none">
                      2<span className="text-white/25">:</span>1
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    Away
                  </p>
                  <h3 className="mt-2 text-4xl font-semibold leading-none md:text-5xl">
                    Berlin
                    <br />
                    Ballers
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    Team OVR 79
                  </p>
                </div>
              </div>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65">
                Deine Aktivität entscheidet nicht nur über deinen Fortschritt —
                sondern auch über den Erfolg deines Teams.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-[#00D1B2]/25 bg-[#00D1B2]/10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D1B2]">
                  Player of the Match
                </p>

                <div className="mt-5 grid grid-cols-[0.45fr_1fr] items-center gap-5">
                  <img
                    src="/cards/Card_Elite.png"
                    alt="Player of the Match"
                    className="w-full rounded-2xl shadow-xl shadow-black/25"
                  />

                  <div>
                    <h4 className="text-3xl font-semibold leading-none">
                      Max
                    </h4>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/45">
                      +18 Team Impact
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      Höchste Aktivität seit dem letzten Matchday.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  League Table
                </p>

                <div className="mt-5 grid grid-cols-[28px_1fr_34px_28px_28px_28px_42px_34px] gap-2 px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                  <span>#</span>
                  <span>Club</span>
                  <span>Sp</span>
                  <span>S</span>
                  <span>U</span>
                  <span>N</span>
                  <span>TD</span>
                  <span>Pkt</span>
                </div>

                <div className="mt-3 space-y-3">
                  {table.map(([rank, team, sp, s, u, n, td, pts]) => (
                    <div
                      key={team}
                      className="grid grid-cols-[28px_1fr_34px_28px_28px_28px_42px_34px] items-center gap-2 rounded-2xl bg-black/25 px-4 py-3 text-sm"
                    >
                      <span className="text-white/35">#{rank}</span>
                      <span className="font-semibold">{team}</span>
                      <span className="text-white/45">{sp}</span>
                      <span className="text-white/45">{s}</span>
                      <span className="text-white/45">{u}</span>
                      <span className="text-white/45">{n}</span>
                      <span className="text-[#00D1B2]">{td}</span>
                      <span className="font-semibold">{pts}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MovementImpactSection() {
  const metrics = [
    ["18.482", "Players representing a partner"],
    ["421.800 km", "Movement generated"],
    ["58.320", "Completed workouts"],
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
            IY misst nicht nur Aufmerksamkeit. IY zeigt, welche echte Bewegung,
            Community und positiven Geschichten durch Kooperationen entstehen.
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
              Preview
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

function EcosystemSection() {
  const items = [
    ["Players", "Identität durch Bewegung."],
    ["Partners", "Kooperationen mit Bedeutung."],
    ["Teams", "Gemeinschaft und Wettbewerb."],
    ["Matchdays", "Alle drei Tage zählt Aktivität."],
    ["Creators", "Programme, Challenges und Communities."],
    ["Movement Impact", "Positive Aktivierung messbar machen."],
  ];

  return (
    <Section
      eyebrow="Ecosystem"
      title="One ecosystem. Endless possibilities."
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

function CTASection() {
  return (
    <section className="bg-[#f7f7f2] px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl rounded-3xl border border-black/10 bg-black p-8 text-center text-white md:p-14">
        <Eyebrow>Start</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
          Train today.
          <br />
          Change your player.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
          Real movement shapes your identity.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/players"
            className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black"
          >
            Create Player →
          </Link>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white"
          >
            Become a Partner →
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
      src="/header/header_16:9_03.png"
      alt="IY Movement"
      className="h-full w-full object-cover opacity-95"
      style={{ objectPosition: "center 35%" }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f2]/95 via-[#f7f7f2]/72 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f7f2] to-transparent" />
  </div>

  <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
    <div className="max-w-3xl">
      <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
        Improve Yourself
      </p>

      <h1 className="text-6xl font-semibold leading-[0.92] tracking-tight text-black md:text-8xl xl:text-[7rem]]">
        You are
        <br />
        the player.
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-black/75 md:text-2xl">
        Real movement shapes your identity.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/players"
          className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:scale-[1.02]"
        >
          Create Player →
        </Link>

        <Link
          href="/partners"
          className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black/30"
        >
          Become a Partner →
        </Link>
      </div>
    </div>

          <HeroCardShowcase />
        </div>
      </section>

      <ValueStrip />

      <Section eyebrow="Identity" title="Real movement shapes identity.">
        <IdentityPanel />
      </Section>

      <Section eyebrow="Progression" title="Every workout changes your player.">
        <ProgressionPanel />
      </Section>

      <Section
        eyebrow="Partnerships"
        title="Partners become part of your identity."
      >
        <PartnershipsPanel />
      </Section>

      <MatchdaySection />

      <MovementImpactSection />

      <EcosystemSection />

      <CTASection />
    </main>
  );
}
