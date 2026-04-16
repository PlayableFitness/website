export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold mb-10">Impressum</h1>

        <div className="space-y-6 text-white/80 text-sm leading-relaxed">
          <p>Angaben gemäß § 5 DDG</p>

          <p>
            Matthias Bruckhoff<br />
            Zeppelinstr. 57<br />
            45470 Mülheim<br />
            Deutschland
          </p>

          <p>
            Kontakt<br />
            E-Mail: hello@playable-fitness.com
          </p>

          <p>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV<br />
            Matthias Bruckhoff<br />
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
