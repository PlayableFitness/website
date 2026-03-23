import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Playable Movement
          <span className="ml-2 hidden text-sm font-normal text-white/40 md:inline">
            The Playable Fitness Platform
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/players"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-100"
          >
            Für Spieler
          </Link>
          <Link
            href="/partners"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition hover:bg-white/10"
          >
            Für Partner
          </Link>
        </div>
      </div>
    </header>
  );
}

function Section({
  id,
  eyebrow,
  title,
  text,
  children,
  center = false,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <section id={id} className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-white/45">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            {title}
          </h2>
          {text && (
            <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
              {text}
            </p>
          )}
        </div>
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-relaxed text-white/70">{text}</p>
    </div>
  );
}

function FlowCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <p className="text-sm uppercase tracking-[0.22em] text-white/40">{step}</p>
      <h3 className="mt-4 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 leading-relaxed text-white/70">{text}</p>
    </div>
  );
}

function ImageCard({
  image,
  eyebrow,
  title,
  text,
  tall = false,
  pos = "object-center",
}: {
  image: string;
  eyebrow: string;
  title: string;
  text: string;
  tall?: boolean;
  pos?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] ${
        tall ? "min-h-[460px]" : "min-h-[320px]"
      }`}
    >
      <img
        src={image}
        alt={title}
        className={`absolute inset-0 h-full w-full object-cover ${pos} opacity-75 transition duration-700 group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8">
        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-white/50">
          {eyebrow}
        </p>
        <h3 className="text-2xl font-semibold text-white md:text-3xl">{title}</h3>
        <p className="mt-4 max-w-xl leading-relaxed text-white/75">{text}</p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/header/header_16:9_03.png"
            alt="Playable Movement Hero"
            className="h-full w-full object-cover opacity-55 brightness-90"
            style={{ objectPosition: "center 35%" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_38%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/88" />
        </div>

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-20">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.34em] text-white/55">
              Eine neue Kategorie zwischen Bewegung, Gaming und Community
            </p>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl xl:text-[7rem]">
              Play to Move.
              <br />
              <span className="text-white/78">Move to Progress.</span>
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/82 md:text-2xl">
              Reale Bewegung entwickelt die Skills deines Spielers. Dein Fortschritt
              stärkt dein Team und entscheidet mit über euren Weg durch Spieltage,
              Tabellen und Ligen.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/players"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-gray-100"
              >
                Spielererlebnis entdecken
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base text-white/90 transition hover:bg-white/10"
              >
                Partnerschaften entdecken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT'S */}
      <Section
        id="mechanik"
        eyebrow="So funktioniert’s"
        title="Die Kernlogik von Playable Movement"
        text="Aus echter Bewegung entsteht ein System aus Skill Entwicklung, Teamwirkung, Spieltagsimulation und Ligen mit Aufstieg und Abstieg."
        center
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              image: "/logik/bewegung.jpg",
              title: "Bewegung",
              text: "Schritte, Workouts und Aktivität werden zum Input für das System.",
              pos: "object-[center_35%]",
            },
            {
              step: "02",
              image: "/logik/skills.jpg",
              title: "Skills",
              text: "Deine Bewegung entwickelt Werte, Attribute und Fähigkeiten.",
              pos: "object-center",
            },
            {
              step: "03",
              image: "/logik/spieler.jpg",
              title: "Spieler",
              text: "Dein Spieler wächst im Rating, im Status und in seiner Wirkung.",
              pos: "object-[center_20%]",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.06]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full object-cover ${item.pos} transition duration-700 group-hover:scale-105`}
                />
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-white/35">
                  {item.step}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-white/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="my-10 rounded-[2rem] border border-white/10 bg-white/[0.03] px-8 py-8 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-white/35">
            Wirkung im System
          </p>
          <p className="mt-3 text-xl font-medium text-white/90 md:text-2xl">
            Deine Skills stärken deinen Spieler. Dein Spieler stärkt dein Team.
            Dein Team entscheidet mit über Spieltage, Tabelle und Ligaentwicklung.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              step: "04",
              image: "/logik/team.jpg",
              title: "Team",
              text: "Dein Fortschritt fließt in den gemeinsamen Teamwert ein.",
              pos: "object-center",
            },
            {
              step: "05",
              image: "/logik/spieltag.jpg",
              title: "Spieltag",
              text: "Teams treten in Simulationen gegeneinander an und erzeugen Ergebnisse.",
              pos: "object-[center_45%]",
            },
            {
              step: "06",
              image: "/logik/liga.jpg",
              title: "Liga",
              text: "Ergebnisse entscheiden über Tabellenplatz, Aufstieg und Abstieg.",
              pos: "object-center",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.06]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full object-cover ${item.pos} transition duration-700 group-hover:scale-105`}
                />
              </div>
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-white/35">
                  {item.step}
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-white/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SPIELERKARRIERE */}
      <Section
        eyebrow="Spielerkarriere"
        title="Vom Amateur zum Pro"
        text="Mit steigenden Skills wächst auch dein Status im System. Aus ersten Schritten werden Ausrüster, Sponsoren und sichtbare Repräsentation."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              stage: "Stufe 1",
              title: "Amateur",
              text: "Du startest mit einfachen Grundlagen, ersten Werten und ohne Ausrüster oder Sponsor.",
              image: "/players/stufe1.jpg",
              pos: "object-[center_32%]",
            },
            {
              stage: "Stufe 2",
              title: "Erste Entwicklung",
              text: "Mit steigenden Skills schaltest du erste Ausrüster frei und wirst im System sichtbarer.",
              image: "/players/stufe2.jpg",
              pos: "object-[center_32%]",
            },
            {
              stage: "Stufe 3",
              title: "Anerkennung",
              text: "Du erreichst ein neues Level, bekommst erste Sponsorenoptionen und stärkere Repräsentation.",
              image: "/players/stufe3.jpg",
              pos: "object-[center_32%]",
            },
            {
              stage: "Stufe 4",
              title: "Pro",
              text: "Große Ausrüster und starke Werbepartner markieren den höchsten sichtbaren Status im System.",
              image: "/players/stufe4.jpg",
              pos: "object-[center_32%]",
            },
          ].map((item) => (
            <div
              key={item.stage}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.06]"
            >
              <div className="aspect-[9/16] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`h-full w-full object-cover ${item.pos} transition duration-700 group-hover:scale-105`}
                />
              </div>

              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.22em] text-white/40">
                  {item.stage}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <InfoCard
            title="Du schaltest neue Optionen frei"
            text="Mit deinem Fortschritt schaltest du neue Ausstatter und Werbepartner frei, die zu deinem Status im System passen."
          />
          <InfoCard
            title="Du darfst auswählen"
            text="Du entscheidest mit, welche Marken du repräsentieren willst, je nach Vorlieben, Stil und dem Level, das du erreicht hast."
          />
        </div>
      </Section>

      {/* WARUM DAS ANDERS IST */}
      <Section
        eyebrow="Warum das anders ist"
        title="Nicht noch eine Fitness App. Sondern ein Fortschrittssystem."
        text="Playable Movement verbindet sichtbare Entwicklung, Teamrelevanz und Wettbewerb in einer Weise, die klassische Fitnessprodukte selten leisten."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Du siehst Fortschritt"
            text="Deine Werte, Skills und dein Status entwickeln sich sichtbar weiter."
          />
          <InfoCard
            title="Du bist Teil von etwas Größerem"
            text="Dein Fortschritt hilft nicht nur dir, sondern auch deinem Team."
          />
          <InfoCard
            title="Du spielst auf etwas hin"
            text="Spieltage, Tabellen und Ligen schaffen echte Spannung und Richtung."
          />
        </div>
      </Section>

      {/* ZWEI PERSPEKTIVEN */}
      <Section
        eyebrow="Zwei Perspektiven"
        title="Für Spieler motivierend. Für Partner integrierbar."
        text="Die gleiche Logik, die Menschen stärker in Bewegung bringt, öffnet gleichzeitig neue Möglichkeiten für Ausrüster, Sponsoren, Creator und Präventionspartner."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/players"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.07]"
          >
            <img
              src="/vision/vision_05.jpg"
              alt="Für Spieler"
              className="absolute inset-0 h-full w-full object-cover object-[center_20%] opacity-35 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="relative p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                Für Spieler
              </p>
              <h3 className="mt-4 text-3xl font-semibold">Werde dein eigener Spieler.</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/75">
                Entdecke Skills, Teamwirkung, Spieltage, Ligen und deine Entwicklung vom Amateur zum Pro.
              </p>
              <p className="mt-10 text-white">Spielerseite ansehen →</p>
            </div>
          </Link>

          <Link
            href="/partners"
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.07]"
          >
            <img
              src="/vision/vision_02.jpg"
              alt="Für Partner"
              className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
            <div className="relative p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-white/45">
                Für Partner
              </p>
              <h3 className="mt-4 text-3xl font-semibold">
                Werde Teil von Bewegungskultur.
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/75">
                Erfahre, wie Ausrüster, Sponsoren, Creator und Präventionspartner Teil von Status, Motivation und positiven Momenten werden können.
              </p>
              <p className="mt-10 text-white">Partnerseite ansehen →</p>
            </div>
          </Link>
        </div>
      </Section>

      {/* VISION */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">Vision</p>
          <h2 className="mx-auto mt-5 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            Bewegung wird zum Spiel.
            <br />
            Und aus Fortschritt wird ein weltweites Movement.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Playable Movement verbindet Skill Aufbau, Teamdynamik, Spieltage, Ligen
            und sichtbare Entwicklung zu einer Plattform, die Millionen Menschen
            langfristig motivieren könnte.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/players"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-gray-100"
            >
              Ich will als Spieler mehr sehen
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base text-white/90 transition hover:bg-white/10"
            >
              Ich will als Partner mehr erfahren
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}