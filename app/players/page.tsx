import Link from "next/link";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Playable Movement
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/partners"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition hover:bg-white/10"
          >
            Für Partner
          </Link>
          <a
            href="#early-access"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-100"
          >
            Early Access
          </a>
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

export default function PlayersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/vision/vision_05.jpg"
            alt="Für Spieler"
            className="h-full w-full object-cover opacity-60 brightness-95"
            style={{ objectPosition: "center 22%" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_38%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/88" />
        </div>

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-20">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.34em] text-white/55">
              Für Spieler
            </p>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl xl:text-[6.5rem]">
              Werde dein
              <br />
              eigener Spieler.
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/82 md:text-2xl">
              Reale Bewegung entwickelt die Skills deines Spielers. Daraus entstehen
              mehr Rating, mehr Teamwirkung und ein klarer Aufstieg im System.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#career"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-gray-100"
              >
                Spielerkarriere ansehen
              </a>
              <a
                href="#early-access"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base text-white/90 transition hover:bg-white/10"
              >
                Early Access sichern
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SPIELERLOGIK */}
      <Section
        eyebrow="Spielerlogik"
        title="Dein Spieler wächst durch echte Bewegung."
        text="Playable Movement macht aus Aktivität ein Entwicklungssystem. Bewegung entwickelt die Werte, Fähigkeiten und das Rating deines Spielers."
        center
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FlowCard
            step="01"
            title="Bewegung als Input"
            text="Schritte, Workouts und Aktivität fließen in das System ein und erzeugen Fortschritt."
          />
          <FlowCard
            step="02"
            title="Skills und Attribute"
            text="Deine Bewegung entwickelt Werte wie Ausdauer, Stärke, Konstanz und weitere spielrelevante Fähigkeiten."
          />
          <FlowCard
            step="03"
            title="Rating und Wirkung"
            text="Dein Spieler wird stärker, relevanter und wertvoller für dein Team und das gesamte System."
          />
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] px-8 py-8 text-center">
          <p className="text-sm uppercase tracking-[0.24em] text-white/35">
            Das Entscheidende
          </p>
          <p className="mt-3 text-xl font-medium text-white/90 md:text-2xl">
            Die Veränderung deiner Spielerwerte siehst du.
            <br />
            Die Veränderung deines Körpers spürst du.
          </p>
        </div>
      </Section>

      {/* KARRIERE */}
      <Section
        id="career"
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
              text: "Du erreichst neues Level, bekommst erste Sponsorenoptionen und stärkere Repräsentation.",
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

      {/* TEAMWIRKUNG */}
      <Section
        eyebrow="Teamwirkung"
        title="Dein Spieler bleibt nicht isoliert. Er wirkt in dein Team hinein."
        text="Die Entwicklung deiner Skills ist nicht nur persönlicher Fortschritt. Sie fließt auch in den gemeinsamen Teamwert ein und macht deinen Einsatz für andere relevant."
      >
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <ImageCard
              image="/vision/vision_02.jpg"
              eyebrow="Team Value"
              title="Dein Fortschritt stärkt den gemeinsamen Teamwert."
              text="Je stärker dein Spieler wird, desto größer wird auch dein Beitrag im Team. Genau dadurch fühlt sich Bewegung nicht mehr isoliert an."
              tall
              pos="object-center"
            />
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <InfoCard
              title="Mehr Relevanz"
              text="Bewegung bekommt mehr Bedeutung, wenn sie nicht nur dir selbst, sondern auch deinem Team hilft."
            />
            <InfoCard
              title="Mehr Zugehörigkeit"
              text="Teams schaffen Verbindung, Verbindlichkeit und das Gefühl, gemeinsam an etwas zu arbeiten."
            />
          </div>
        </div>
      </Section>

      {/* WETTBEWERB */}
      <Section
        eyebrow="Vom Team zum Wettbewerb"
        title="Aus Spielern entstehen Teams. Aus Teams entstehen Spieltage, Tabellen und Ligen."
        text="Die Stärke einzelner Spieler fließt in den Teamwert. Teams treten an Spieltagen in Simulationen gegeneinander an. Die Ergebnisse wirken in die Tabelle hinein und entscheiden über Aufstieg und Abstieg."
        center
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ImageCard
            image="/logik/team.png"
            eyebrow="Team"
            title="Gemeinsame Stärke"
            text="Spielerwerte verdichten sich zu Teamwerten."
            pos="object-center"
          />
          <ImageCard
            image="/logik/spieltag.png"
            eyebrow="Spieltag"
            title="Simulation und Ergebnis"
            text="Teams treten gegeneinander an und erzeugen Resultate."
            pos="object-center"
          />
          <ImageCard
            image="/logik/liga.png"
            eyebrow="Liga"
            title="Tabelle, Aufstieg, Abstieg"
            text="Ergebnisse entscheiden über Position, Entwicklung und Relevanz."
            pos="object-center"
          />
        </div>
      </Section>

      {/* WARUM ES SICH ANDERS ANFÜHLT */}
      <Section
        eyebrow="Warum es sich anders anfühlt"
        title="Hier geht es nicht nur um Fitness."
        text="Playable Movement verbindet Fortschritt, Zugehörigkeit und Wettbewerb in einem System."
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

      {/* CTA */}
      <section id="early-access" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">
            Early Access
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Beweg dich nicht nur.
            <br />
            Entwickle deinen Spieler.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Sei früh dabei und erlebe, wie reale Bewegung zu Skills, Teamwirkung,
            Spieltagen, Ligaaufstieg und sichtbarem Status wird.
          </p>

          <form className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Deine E-Mail"
              className="flex-1 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-white outline-none placeholder:text-white/30"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-7 py-4 font-medium text-black transition hover:bg-gray-100"
            >
              Early Access sichern
            </button>
          </form>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/" className="text-sm text-white/55 transition hover:text-white">
              Zur Startseite
            </Link>
            <Link
              href="/partners"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Partnerseite ansehen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}