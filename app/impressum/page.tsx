import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-white/60 transition hover:text-white"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="mb-10 text-3xl font-semibold">Impressum</h1>

        <div className="space-y-6 text-sm leading-relaxed text-white/80">
          <p>Angaben gemäß § 5 DDG</p>

          <p>
            Matthias Bruckhoff
            <br />
            Zeppelinstr. 57
            <br />
            45470 Mülheim
            <br />
            Deutschland
          </p>

          <p>
            Kontakt
            <br />
            E-Mail: hello@playable-fitness.com
          </p>

          <p>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            <br />
            Matthias Bruckhoff
            <br />
            Adresse wie oben
          </p>
        </div>

        <div className="mt-16 text-xs text-white/40">
          © 2026 Playable Fitness. All rights reserved.
        </div>
      </div>
    </main>
  );
}
