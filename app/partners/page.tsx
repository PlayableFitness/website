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
            href="/players"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/90 transition hover:bg-white/10"
          >
            Für Spieler
          </Link>
          <a
            href="#kontakt"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-gray-100"
          >
            Kontakt
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

function ModelCard({
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

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/vision/vision_02.jpg"
            alt="Für Partner"
            className="h-full w-full object-cover opacity-60 brightness-95"
            style={{ objectPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_38%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/88" />
        </div>

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 py-20">
          <div className="max-w-5xl">
            <p className="mb-6 text-sm uppercase tracking-[0.34em] text-white/55">
              Für Partner
            </p>

            <h1 className="text-4xl font-semibold leading-[0.98] tracking-tight md:text-7xl xl:text-[6.5rem]">
              Werde Teil von
              <br />
              Bewegungskultur.
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/82 md:text-2xl">
              Playable Movement schafft keine klassische Werbefläche. Es schafft
              eine Plattform, in der Marken, Ausrüster, Krankenkassen,
              Präventionspartner und Creator Teil von Status, Motivation,
              Teamdynamik und positiven Erlebnissen werden können.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#modell"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-gray-100"
              >
                Partnermodell ansehen
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base text-white/90 transition hover:bg-white/10"
              >
                Gespräch starten
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DER UNTERSCHIED */}
      <Section
        eyebrow="Der Unterschied"
        title="Die stärkste Markenfläche ist nicht Werbung. Sie ist Identität."
        text="Menschen ignorieren, was sie unterbricht. Was sie dagegen erinnern, teilen und mit Stolz zeigen, ist Teil ihrer Entwicklung, ihres Teams und ihrer Bewegungskultur."
        center
      >
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Nicht Banner"
            text="Marken erscheinen nicht neben dem Erlebnis, sondern im Erlebnis."
          />
          <InfoCard
            title="Nicht nur Sichtbarkeit"
            text="Marken sind mit Aktivität, Fortschritt, Stolz und Repräsentation verbunden."
          />
          <InfoCard
            title="Nicht nur Kampagne"
            text="Partnerschaft wird Teil eines langfristigen Systems statt eines kurzen Werbemoments."
          />
        </div>
      </Section>

      {/* PARTNERTYPEN */}
      <Section
        eyebrow="Welche Partner hier besonders gut passen"
        title="Eine Plattform, die mehrere Partnerwelten glaubwürdig zusammenführen kann."
        text="Playable Movement verbindet Bewegung, Identität, Community und Motivation. Genau deshalb ist die Plattform für unterschiedliche Partnertypen relevant."
      >
        <div className="grid gap-6 md:grid-cols-4">
          <ImageCard
            image="/vision/vision_02.jpg"
            eyebrow="Sport & Lifestyle"
            title="Ausrüster und Lifestyle-Marken"
            text="Von Community-Brands bis Premium-Ausrüstern: Marken können Teil von Repräsentation und Status werden."
            pos="object-center"
          />
          <ImageCard
            image="/header/header_16:9_03.png"
            eyebrow="Health & Performance"
            title="Health-, Performance- und Prävention"
            text="Wearables, Fitnessanbieter, Supplements, Krankenkassen und Präventionspartner können direkt an Bewegung andocken."
            pos="object-[center_45%]"
          />
          <ImageCard
            image="/vision/vision_05.jpg"
            eyebrow="Institutional"
            title="Städte, Schulen und Organisationen"
            text="Das System kann auch für Community Health, Bewegungsprogramme und soziale Aktivierung relevant werden."
            pos="object-[center_20%]"
          />
          <ImageCard
            image="/vision/vision_07.jpg"
            eyebrow="Creator"
            title="Creator und Community-Leader"
            text="Trainer, Vorbilder und Hosts können Communities bewegen und Marken glaubwürdig ins System einbinden."
            pos="object-center"
          />
        </div>
      </Section>

      {/* POSITIVE BRAND MOMENTS */}
      <Section
        eyebrow="Positive Brand Moments"
        title="Marken werden dort sichtbar, wo Fortschritt stolz macht."
        text="Nicht im Unterbrechen. Nicht im Wegklicken. Sondern in Momenten von Aktivität, Anerkennung, Erfolg und Teilen."
        center
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          <InfoCard
            title="Nach einem starken Training"
            text="Marken erscheinen im Moment eines positiven persönlichen Erfolgs."
          />
          <InfoCard
            title="Beim Teilen einer Player Card"
            text="Fortschritt wird öffentlich sichtbar und mit Stolz geteilt."
          />
          <InfoCard
            title="Als Player of the Day"
            text="Anerkennung erzeugt Aufmerksamkeit und eine starke positive Assoziation."
          />
          <InfoCard
            title="Bei Team-Erfolgen"
            text="Sieg, Aufstieg oder starke Spieltage schaffen emotionale Markenkontexte."
          />
          <InfoCard
            title="Bei Challenges und Rewards"
            text="Marken können Teil motivierender Belohnungs- und Highlight-Momente werden."
          />
        </div>
      </Section>

      {/* MATCHING */}
      <Section
        eyebrow="Matching statt Zufall"
        title="Markenintegration wird präzise statt beliebig."
        text="Spieler können passende Ausrüster und Sponsoren freischalten und auswählen. Marken können ihre Zielgruppen definieren — ähnlich wie auf digitalen Plattformen, aber innerhalb eines positiven Movement-Systems."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Spieler wählen mit"
            text="Ausrüster und Sponsoren sollen nicht nur zugewiesen, sondern passend auswählbar sein."
          />
          <InfoCard
            title="Marken definieren Zielgruppen"
            text="Zum Beispiel nach Alter, Geschlecht, Wohnort, Sportvorlieben, Aktivitätslevel, Ernährung oder Community-Typ."
          />
          <InfoCard
            title="Matching statt beliebiger Platzierung"
            text="So entsteht eine relevantere Verbindung zwischen Marke, Spieler, Team und Community."
          />
        </div>
      </Section>

      {/* SPIELERSTATUS / AUSRÜSTER / SPONSOREN */}
      <Section
        eyebrow="Spielerstatus, Ausrüster und Sponsoren"
        title="Marken erscheinen im System entlang der Entwicklung eines Spielers."
        text="Ein zentraler Teil des Konzepts ist, dass Partnerschaft nicht zufällig wirkt, sondern an sichtbare Entwicklung gekoppelt wird."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              stage: "Stufe 1",
              title: "Start",
              text: "Noch ohne Ausrüster und Sponsor. Der Fokus liegt auf Einstieg und erster Entwicklung.",
              image: "/players/stufe1.jpg",
              pos: "object-[center_32%]",
            },
            {
              stage: "Stufe 2",
              title: "Erster Ausrüster",
              text: "Community-nahe oder spezialisierte Marken können früh Teil der Spielerreise werden.",
              image: "/players/stufe2.jpg",
              pos: "object-[center_32%]",
            },
            {
              stage: "Stufe 3",
              title: "Erste Sponsoren",
              text: "Mit wachsendem Status entstehen regionale oder thematisch passende Sponsoring-Möglichkeiten.",
              image: "/players/stufe3.jpg",
              pos: "object-[center_32%]",
            },
            {
              stage: "Stufe 4",
              title: "Top Level",
              text: "Große Ausrüster und starke Sponsoren markieren den höchsten sichtbaren Status im System.",
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

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-white/35">
            Wichtige Einordnung
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/80 md:text-xl">
            Es geht dabei nicht um bessere oder schlechtere Marken, sondern um
            unterschiedliche Rollen, Zielgruppen und Phasen innerhalb der
            Spielerentwicklung.
          </p>
        </div>
      </Section>

      {/* PARTNERMODELL */}
      <Section
        id="modell"
        eyebrow="Partnermodell"
        title="Eine Sponsoring-Logik, inspiriert vom realen Sport."
        text="Playable Movement kann Partnerschaften auf mehreren Ebenen integrieren — von der Plattform über Ligen und Challenges bis zur Team- und Spielerebene."
        center
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ModelCard
            step="01"
            title="League Title Partner"
            text="Präsenz und Kontext rund um Ligen, Seasons und zentrale Wettbewerbsformate."
          />
          <ModelCard
            step="02"
            title="Official Platform Partner"
            text="Langfristige Sichtbarkeit mit starker Verbindung zur gesamten Plattform."
          />
          <ModelCard
            step="03"
            title="Challenge Sponsor"
            text="Aktivierungsformate rund um Bewegung, Schrittziele, Teammissionen und Events."
          />
          <ModelCard
            step="04"
            title="Team / Player Partner"
            text="Partnerschaften auf Team- oder Spielerstatus-Ebene mit klarer Repräsentation."
          />
        </div>
      </Section>

      {/* NEUE PARTNER-KOMBINATIONEN */}
      <Section
        eyebrow="Neue Partner-Kombinationen"
        title="Die Plattform schafft neue Formen von Zusammenarbeit."
        text="Playable Movement erzeugt nicht nur einzelne Sponsoring-Flächen, sondern neue Kombinationen zwischen Marken, Communities, Creatorn und Bewegungsformaten."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          <InfoCard
            title="Sportmarke + Creator"
            text="Ausrüstung, Training und Community können in einem Format zusammenkommen."
          />
          <InfoCard
            title="Krankenkasse + Challenge"
            text="Prävention kann in motivierende Formate statt reine Information übersetzt werden."
          />
          <InfoCard
            title="Wearable + Teamformat"
            text="Technologie wird direkt mit Teamdynamik und Fortschritt verbunden."
          />
          <InfoCard
            title="Ernährungsmarke + Reward"
            text="Belohnung und Leistung können sinnvoll miteinander verknüpft werden."
          />
          <InfoCard
            title="Regionale Marke + Community-Team"
            text="Lokale Partner können sich glaubwürdig mit echten Communities verbinden."
          />
        </div>
      </Section>

      {/* CREATOR */}
      <Section
        eyebrow="Creator als Trainer, Vorbilder und Community-Leader"
        title="Creator können Bewegung anleiten, verkörpern und verstärken."
        text="Creators sind nicht nur Reichweitengeber. Sie können im System echte Rollen übernehmen und dadurch Motivation, Community und Partnerschaften glaubwürdig verbinden."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Trainer und Trainingspartner"
            text="Creators können Workouts, Routinen und Challenges anleiten oder begleiten."
          />
          <InfoCard
            title="Hosts und Team Captains"
            text="Sie können Teams führen, Spieltage begleiten und Community-Dynamik verstärken."
          />
          <InfoCard
            title="Vorbilder und Ambassadors"
            text="Sie geben Bewegung, Marken und Fortschritt ein glaubwürdiges Gesicht."
          />
        </div>
      </Section>

      {/* STRATEGISCH SPANNEND */}
      <Section
        eyebrow="Warum das strategisch spannend ist"
        title="Was Menschen stärker motiviert, macht Partnerschaften relevanter."
        text="Je stärker Identität, Fortschritt und Teamkultur Menschen hineinziehen, desto stärker können Marken, Präventionspartner und Creator Teil dieser Welt werden."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Mehr Bindung"
            text="Identität, Progression, Teams und Ligen schaffen stärkere langfristige Mechaniken."
          />
          <InfoCard
            title="Mehr Integrationsmöglichkeiten"
            text="Ausrüster, Sponsoren, Creator und Präventionspartner bekommen echte Rollen im System."
          />
          <InfoCard
            title="Mehr Plattformpotenzial"
            text="Fitness, Gaming und Community wachsen hier zu einer neuen Plattformlogik zusammen."
          />
        </div>
      </Section>

      {/* GROSSES BILD */}
      <Section
        eyebrow="Das große Bild"
        title="Aus Partnerschaft kann hier mehr werden als Reichweite."
        text="Wenn Bewegung nicht nur gesund ist, sondern Identität stiftet, Teamkultur formt, Stolz erzeugt und geteilt wird, entsteht eine neue Qualität von Markenpräsenz."
        center
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ImageCard
            image="/vision/vision_02.jpg"
            eyebrow="Belonging"
            title="Community"
            text="Marken können Teil von Zugehörigkeit und Teamkultur werden."
            pos="object-center"
          />
          <ImageCard
            image="/players/stufe4.jpg"
            eyebrow="Status"
            title="Repräsentation"
            text="Ausrüster und Sponsoren werden sichtbar, weil sie an Entwicklung gekoppelt sind."
            pos="object-[center_32%]"
          />
          <ImageCard
            image="/header/header_16:9_03.png"
            eyebrow="Scale"
            title="Movement"
            text="Aus lokaler Aktivierung kann kulturelle und globale Relevanz entstehen."
            pos="object-[center_45%]"
          />
        </div>
      </Section>

      {/* KONTAKT */}
      <section id="kontakt" className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">
            Kontakt
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Lass uns Partnerschaften für Bewegung neu denken.
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            Ob Marke, Sponsor, Krankenkasse, Präventionspartner oder Creator:
            Wer früh versteht, wie Bewegung, Identität, Status und Community
            zusammenwirken, kann Teil von etwas deutlich Größerem werden.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@playable-fitness.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-base font-medium text-black transition hover:bg-gray-100"
            >
              hello@playable-fitness.com
            </a>
            <Link
              href="/players"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base text-white/90 transition hover:bg-white/10"
            >
              Spielerseite ansehen
            </Link>
          </div>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/" className="text-sm text-white/55 transition hover:text-white">
              Zur Startseite
            </Link>
            <Link
              href="/players"
              className="text-sm text-white/55 transition hover:text-white"
            >
              Für Spieler
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
