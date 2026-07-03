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
            <Link
              href="/"
              className="block px-5 py-4 text-sm font-semibold text-[#00D1B2]"
            >
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

function RoleSelection() {
  return (
    <section className="border-t border-black/10 bg-[#f7f7f2]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
            Choose your role
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
            Where do you belong?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/players"
            className="group rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/40">
              Player
            </p>
            <h3 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight text-black md:text-6xl">
              Build your player.
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/65">
              Entwickle deinen Spieler durch echte Bewegung. Deine Aktivität
              wird sichtbar als Card, Skills, Team und Status.
            </p>
            <div className="mt-8 inline-flex rounded-xl bg-[#00D1B2] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black">
              Explore Player →
            </div>
          </Link>

          <Link
            href="/partners"
            className="group rounded-[2rem] border border-black/10 bg-black p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              Partner
            </p>
            <h3 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
              Create movement.
            </h3>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Inspiriere Menschen zu echter Bewegung, werde Teil ihrer Identität
              und mache positiven Impact messbar.
            </p>
            <div className="mt-8 inline-flex rounded-xl bg-[#00D1B2] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-black">
              Explore Partner →
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ManifestSection() {
  return (
    <section className="border-t border-black/10 bg-[#f7f7f2] px-6 py-20 md:py-32">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-sm md:p-16">
        <h2 className="text-5xl font-semibold leading-[0.98] tracking-tight text-black md:text-8xl">
          Create movement.
          <br />
          Build identity.
          <br />
          Measure impact.
        </h2>
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

            <h1 className="text-6xl font-semibold leading-[0.92] tracking-tight text-black md:text-8xl xl:text-[7rem]">
              You are
              <br />
              the player.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-black/75 md:text-2xl">
              Real movement shapes your identity.
            </p>
          </div>

          <HeroCards />
        </div>
      </section>

      <RoleSelection />
      <ManifestSection />
    </main>
  );
}
