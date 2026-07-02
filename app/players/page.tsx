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
          <Link href="/" className="transition hover:text-black">
            Home
          </Link>
          <Link
            href="/players"
            className={`${activeClass} transition hover:text-black`}
          >
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
            <Link href="/" className="block px-5 py-4 text-sm font-semibold">
              Home
            </Link>

            <Link
              href="/players"
              className="block border-t border-black/10 px-5 py-4 text-sm font-semibold text-[#00D1B2]"
            >
              Player
            </Link>

            <Link
              href="/partners"
              className="block border-t border-black/10 px-5 py-4 text-sm font-semibold"
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

function HeroCards() {
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

function ProgressionCards() {
  const stages = [
    ["Rookie", "/cards/Card_Rookie.png", "Der Anfang jeder Reise."],
    ["Starter", "/cards/Card_Starter.png", "Deine Basis ist gelegt."],
    ["Elite", "/cards/Card_Elite.png", "Du gehörst zu den Besten."],
    ["Pro", "/cards/Card_Pro.png", "Du spielst auf höchstem Niveau."],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stages.map(([level, image, text]) => (
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
          <div className="px-2 pb-3 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
              {level}
            </p>
            <h3 className="mt-1 text-2xl font-semibold text-black">{text}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

function SkillSystem() {
  const skills = [
    ["PAC", "Pace", "Schnelligkeit, Tempo und Explosivität."],
    ["END", "Endurance", "Ausdauer und Belastbarkeit."],
    ["STR", "Strength", "Kraft, Stabilität und Körperlichkeit."],
    ["TEC", "Technique", "Koordination, Ballgefühl und sportliche Technik."],
    ["MBL", "Mobility", "Beweglichkeit, Agilität und Kontrolle."],
    ["DIS", "Discipline", "Konstanz, Aktivität und Trainingsrhythmus."],
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {skills.map(([short, title, text]) => (
        <div
          key={short}
          className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D1B2]">
            {short}
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-black">{title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-black/65">{text}</p>
        </div>
      ))}
    </div>
  );
}

function PartnerCards() {
  const items = [
    [
      "Freischalten",
      "Durch Aktivität, Status und Fortschritt werden neue Partner, Challenges und Möglichkeiten erreichbar.",
    ],
    [
      "Auswählen",
      "Du entscheidest, welche Partner zu deiner Identität, deinem Sport und deiner Einstellung passen.",
    ],
    [
      "Repräsentieren",
      "Partner werden Teil deiner Card, deines Looks, deines Teams und deiner Geschichte.",
    ],
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm"
        >
          <h3 className="text-3xl font-semibold text-black">{title}</h3>
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
          <p className="mt-6 text-lg leading-relaxed text-black/65">
            Deine Aktivität zählt nicht nur für dich. Sie beeinflusst dein Team,
            Matchdays, Tabellen und Seasons.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,#203f3a_0%,#07110f_46%,#020403_100%)] p-4 text-white shadow-2xl shadow-black/25 sm:p-6 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:p-6 md:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#00D1B2]">
                  Matchday 07
                </p>

                <span className="w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60 sm:text-xs">
                  Every 3 days
                </span>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    Home
                  </p>
                  <h3 className="mt-2 text-4xl font-semibold leading-none sm:text-3xl md:text-5xl">
                    LA
                    <br />
                    United
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#00D1B2]">
                    Team OVR 82
                  </p>
                </div>

                <div className="w-fit rounded-3xl bg-black/55 px-6 py-5 text-center sm:mx-auto">
                  <p className="text-5xl font-semibold leading-none sm:text-4xl md:text-6xl">
                    2<span className="text-white/25">:</span>1
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    Away
                  </p>
                  <h3 className="mt-2 text-4xl font-semibold leading-none sm:text-3xl md:text-5xl">
                    Berlin
                    <br />
                    Ballers
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    Team OVR 79
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-[#00D1B2]/25 bg-[#00D1B2]/10 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D1B2]">
                  Player of the Match
                </p>

                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-[120px_1fr] sm:items-center">
                  <img
                    src="/cards/Card_Elite.png"
                    alt="Player of the Match"
                    className="w-32 rounded-2xl shadow-xl shadow-black/25 sm:w-full"
                  />

                  <div>
                    <h4 className="text-3xl font-semibold leading-none">Max</h4>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/45">
                      +18 Team Impact
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      Höchste Aktivität seit dem letzten Matchday.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  League Table
                </p>

                <div className="mt-5 min-w-[560px]">
                  <div className="grid grid-cols-[28px_1fr_34px_28px_28px_28px_42px_34px] gap-2 px-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
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
      </div>
    </section>
  );
}

function RecognitionGrid() {
  const items = [
    [
      "Special Cards",
      "Starke Leistungen können besondere Cards, Matchday Cards oder Season Cards freischalten.",
    ],
    [
      "Status",
      "Dein Fortschritt wird sichtbar — in deiner Card, deinem Team und deiner Liga.",
    ],
    [
      "Challenges",
      "Neue Aufgaben, Programme und Events entstehen durch Sportler, Creator und Partner.",
    ],
    [
      "Opportunities",
      "Mit steigender Aktivität können neue Ligen, Partner und Chancen entstehen.",
    ],
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {items.map(([title, text]) => (
        <div
          key={title}
          className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm"
        >
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
      <div className="mx-auto max-w-7xl rounded-3xl border border-black/10 bg-black p-8 text-center text-white md:p-14">
        <Eyebrow>Player</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-3xl text-5xl font-semibold leading-[1] tracking-tight md:text-7xl">
          Train today.
          <br />
          Change your player.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
          Jede Bewegung verändert deinen Spieler, deine Skills und deine
          Identität.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#00D1B2] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black"
          >
            Create Player →
          </Link>
          <Link
            href="/partners"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white"
          >
            Explore Partner →
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
            src="/header/header_05.png"
            alt="IY Player"
            className="h-full w-full object-cover opacity-95"
            style={{ objectPosition: "center 38%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f7f2]/95 via-[#f7f7f2]/72 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f7f2] to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
              Player
            </p>

            <h1 className="text-6xl font-semibold leading-[0.92] tracking-tight text-black md:text-8xl xl:text-[7rem]">
              Build your
              <br />
              player.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-black/75 md:text-2xl">
              Jede Bewegung verändert deinen Spieler, deine Skills und deine
              Identität.
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
                className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black transition hover:border-black/30"
              >
                Explore Partner →
              </Link>
            </div>
          </div>

          <HeroCards />
        </div>
      </section>

      <Section
        eyebrow="Identity"
        title="Real movement shapes identity."
        text="Deine echte Aktivität wird sichtbar: als Card, als Spielerprofil, als Status und als Teil deiner Geschichte."
      />

      <Section
        eyebrow="Progression"
        title="Every workout changes your player."
        text="Dein Spieler entwickelt sich durch echte Aktivität — von den ersten Schritten bis zum höchsten Level."
      >
        <ProgressionCards />
      </Section>

      <Section
        eyebrow="Skills"
        title="Your OVR is built from your real skills."
        text="OVR ist der einfache Durchschnitt deiner Skill-Werte. Jeder Sport entwickelt andere Stärken."
      >
        <SkillSystem />
      </Section>

      <Section
        eyebrow="Partnerships"
        title="Partners become part of your identity."
        text="Du schaltest Partner frei, wählst bewusst und repräsentierst, was zu dir passt."
      >
        <PartnerCards />
      </Section>

      <MatchdaySection />

      <Section
        eyebrow="Recognition"
        title="Your progress earns recognition."
        text="Fortschritt bleibt nicht unsichtbar. Aktivität schafft Status, Chancen und besondere Momente."
      >
        <RecognitionGrid />
      </Section>

      <CTASection />
    </main>
  );
}
