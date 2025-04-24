import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | JAB Consulting GmbH",
  description:
    "Informationen zum Datenschutz bei JAB Consulting GmbH gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 pt-24 pb-16 md:pt-28 md:py-24">
      <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white/95 mb-10">
        Datenschutzerklärung
      </h1>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          1. Name und Kontaktdaten des Verantwortlichen
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Verantwortlich für die Datenverarbeitung im Sinne der
          Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          JAB Consulting GmbH
          <br />
          Roßstraße 92
          <br />
          40476 Düsseldorf
          <br />
          Telefon: +49 211-159232-0
          <br />
          E-Mail: sven-joachim.otto@jab.consulting
          <br />
          Vertretungsberechtigter Geschäftsführer: Prof. Dr. Sven-Joachim Otto
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          2. Hosting
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Unsere Website wird bei Hostinger International Ltd., 61 Lordou
          Vironos st., 6023 Larnaca, Zypern, gehostet. Bei jedem Zugriff auf
          unsere Website werden durch den Hostinganbieter automatisch
          Informationen erfasst, sogenannte Server-Logfiles. Diese beinhalten z.
          B.:
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
          <li>IP-Adresse des anfragenden Geräts</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Angeforderte Datei</li>
          <li>Verwendeter Browser und Betriebssystem</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Die Verarbeitung erfolgt zur Gewährleistung der Funktionsfähigkeit,
          Sicherheit und Optimierung des Webservers (Art. 6 Abs. 1 lit. f
          DSGVO). Die Server befinden sich laut Anbieter innerhalb der EU.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          3. Cloudflare (Content Delivery Network)
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Wir verwenden zur Absicherung und Optimierung der Ladezeiten unserer
          Website Dienste der Cloudflare Inc., 101 Townsend St, San Francisco,
          CA 94107, USA. Dabei fungiert Cloudflare als Reverse Proxy und
          verarbeitet dabei regelmäßig folgende Daten:
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
          <li>IP-Adresse des Besuchers,</li>
          <li>Browsertyp und -version,</li>
          <li>Informationen zum Betriebssystem,</li>
          <li>Referrer-URL,</li>
          <li>sowie Zeitstempel des Zugriffs.</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Diese Daten werden aus Gründen der IT-Sicherheit und
          Performanceoptimierung verarbeitet. Cloudflare betreibt Server
          weltweit, u. a. in der EU. Eine Übertragung personenbezogener Daten in
          die USA kann nicht ausgeschlossen werden.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Cloudflare verpflichtet sich zur Einhaltung des EU-Datenschutzniveaus
          über EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          sicherem und effizientem Betrieb der Website).
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Unsere Website verwendet sicherheitsrelevante Cookies von Cloudflare
          (z. B. __cf_bm), um die Integrität und Verfügbarkeit der Website zu
          gewährleisten. Diese Cookies sind technisch erforderlich und dienen
          ausschließlich dem Schutz der Website vor Missbrauch und Angriffen.
          Eine Einwilligung des Nutzers ist hierfür gemäß § 25 Abs. 2 TTDSG
          nicht erforderlich.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          4. Datenverarbeitung bei Kontaktaufnahme
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Wenn Sie uns per E-Mail, Telefon, Fax oder Post kontaktieren,
          verarbeiten wir die von Ihnen freiwillig mitgeteilten
          personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Telefonnummer,
          Inhalt der Nachricht), um Ihre Anfrage zu bearbeiten.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (zur Durchführung
          vorvertraglicher Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO
          (berechtigtes Interesse an der Bearbeitung von Anfragen).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          5. Cookies und Tracking
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Diese Website verwendet ausschließlich technisch notwendige Cookies
          von Cloudflare zum Schutz vor Missbrauch und Angriffen. Darüber hinaus
          werden keine weiteren Cookies gesetzt und es findet kein Tracking
          statt. Es werden auch keine Analyse-Tools wie Google Analytics oder
          ähnliche Dienste verwendet.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          6. Keine eingebetteten Inhalte oder Social Plugins
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Auf dieser Website werden keine eingebetteten Drittinhalte (wie
          YouTube, Google Maps, Google Fonts etc.) verwendet. Es bestehen keine
          eingebetteten Social Plugins. Es existiert lediglich ein Link zu
          unserem LinkedIn-Profil. Beim Anklicken dieses Links gelten die
          Datenschutzbestimmungen von LinkedIn.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white/90 mb-3">
          7. Ihre Rechte als betroffene Person
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Sie haben gemäß DSGVO folgende Rechte:
        </p>
        <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
          <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>
            Löschung (Art. 17 DSGVO), sofern keine gesetzlichen
            Aufbewahrungspflichten bestehen
          </li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
          zu beschweren (Art. 77 DSGVO).
        </p>
      </section>
    </div>
  );
}
