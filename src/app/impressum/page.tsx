import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | JAB Consulting GmbH",
  description:
    "Rechtliche Informationen und Kontaktdaten der JAB Consulting GmbH.",
};

export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-24 pb-16 md:pt-28 md:py-24">
      <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white/95 mb-10">
        Impressum
      </h1>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          Angaben gemäß § 5 TMG
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          JAB Consulting GmbH
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Roßstraße 92
          <br />
          40476 Düsseldorf
          <br />
          (Energiesozietät GmbH Rechtsanwälte Steuerberater)
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          Vertretungsberechtigter Geschäftsführer
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Prof. Dr. Sven-Joachim Otto
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          Kontakt
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-1">
          Telefon: +49 211-159232-0
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-1">
          Fax: 0211-17956838
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          E-Mail:{" "}
          <a
            href="mailto:sven-joachim.otto@jab.consulting"
            className="text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            sven-joachim.otto@jab.consulting
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          Handelsregister
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Handelsregister: Amtsgericht Neuss HRB 22418
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          Umsatzsteuer-ID
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          beantragt
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          Haftungshinweis
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen.
        </p>
      </section>
    </div>
  );
}
