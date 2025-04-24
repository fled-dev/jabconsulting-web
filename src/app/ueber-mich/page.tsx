import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Über Prof. Dr. Sven-Joachim Otto | JAB Consulting GmbH",
  description:
    "Erfahren Sie mehr über Prof. Dr. Sven-Joachim Otto - Experte für ESG-Transformation, nachhaltige Infrastruktur und strategische Beratung. Lernen Sie seinen beruflichen Werdegang und seine Expertise kennen.",
  keywords: [
    "Prof. Dr. Sven-Joachim Otto",
    "ESG-Experte",
    "Strategieberatung",
    "Nachhaltigkeitsberatung",
    "Infrastrukturberatung",
    "Nachhaltigkeit",
    "Public Policy",
    "Beiratsmitglied",
    "Aufsichtsrat",
    "Ruhr-Universität Bochum",
  ],
};

export default function UeberMichPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-gray-50 dark:bg-gray-850 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/80 -z-10" />

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] -z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-center">
            {/* Image */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
              <div className="relative h-[400px] w-[320px] sm:h-[450px] sm:w-[360px] rounded-xl overflow-hidden">
                <Image
                  src="/images/sven-joachim-otto-2.jpeg"
                  alt="Prof. Dr. Sven-Joachim Otto"
                  fill
                  sizes="(max-width: 640px) 320px, 360px"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 shadow-inner pointer-events-none border border-black/5 dark:border-white/10 rounded-xl"></div>
              </div>
            </div>

            {/* Text content */}
            <div className="w-full lg:w-3/5">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 dark:text-white/95 leading-tight mb-6">
                Über Prof. Dr. Sven-Joachim Otto
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Als Gründer der JAB Consulting GmbH bringe ich über 20 Jahre
                Erfahrung in der strategischen Beratung zu Nachhaltigkeit,
                Infrastrukturentwicklung und Kapitalmarkttransformation ein.
                Meine Expertise verbindet akademisches Wissen mit praktischer
                Erfahrung in Politik, Wirtschaft und öffentlichem Sektor.
              </p>

              <Link
                href="mailto:sven-joachim.otto@jab.consulting"
                className={clsx(
                  "inline-flex items-center py-3 px-6 rounded-lg font-medium text-white",
                  "bg-primary hover:bg-primary",
                  "transform transition duration-200 ease-in-out",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900",
                )}
              >
                Kontakt aufnehmen
                <ArrowRight weight="bold" className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white/95 mb-4">
              Beruflicher Werdegang
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Meine berufliche Laufbahn ist geprägt von der Verbindung zwischen
              akademischer Expertise und praktischer Erfahrung in
              Schlüsselpositionen der Wirtschaft und des öffentlichen Sektors.
              Als promovierter Jurist mit Habilitation und Professur an der
              Ruhr-Universität Bochum verbinde ich theoretisches Wissen mit
              praxisnahen Lösungsansätzen.
            </p>

            <p>
              Nach meinem Studium der Rechtswissenschaften und der Promotion im
              Bereich des Energiewirtschaftsrechts war ich zunächst in
              verschiedenen politischen Funktionen tätig, bevor ich als Partner
              bei einer führenden internationalen Beratungsgesellschaft die
              Bereiche Public Services und Government Advisory leitete. Diese
              vielfältige Erfahrung erlaubt mir heute, komplexe
              Transformationsprozesse ganzheitlich zu begleiten.
            </p>

            <p>
              Als Honorarprofessor lehre ich an der Ruhr-Universität Bochum zu
              den Themen Energierecht und Nachhaltigkeit. Durch meine
              regelmäßigen Vorträge und Publikationen bleibe ich stets am Puls
              aktueller Entwicklungen und kann diese Erkenntnisse direkt in
              meine Beratungstätigkeit einfließen lassen.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Milestones */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-850">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white/95 mb-4">
              Professionelle Meilensteine
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Academic */}
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white/95 mb-4">
                Akademische Tätigkeit
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Honorarprofessor an der Ruhr-Universität Bochum für
                    Energierecht und Nachhaltigkeit
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Regelmäßige Publikationen zu aktuellen Themen der
                    Nachhaltigkeitstransformation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Promotionen und Habilitation im Bereich des
                    Energiewirtschaftsrechts
                  </span>
                </li>
              </ul>
            </div>

            {/* Consulting & Advisory */}
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white/95 mb-4">
                Beratung & Führungsrollen
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Partner bei einer führenden internationalen
                    Strategieberatung
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Beirats- und Aufsichtsratsmitglied in verschiedenen
                    Unternehmen
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Strategische Beratung für Ministerien und Behörden
                  </span>
                </li>
              </ul>
            </div>

            {/* Public Speaking */}
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white/95 mb-4">
                Vorträge & Konferenzen
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Keynote Speaker zu ESG-Regulierung und Nachhaltigkeit
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Regelmäßige Teilnahme an Expertenpanels zu Transformation
                    und Nachhaltigkeit
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Moderation von Fachveranstaltungen zu Infrastruktur und
                    Kapitaltransformation
                  </span>
                </li>
              </ul>
            </div>

            {/* Policy Work */}
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white/95 mb-4">
                Politik & Öffentlicher Sektor
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Beratung von politischen Entscheidungsträgern zu
                    Nachhaltigkeitsthemen
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Mitwirkung bei der Entwicklung von Sustainable Finance
                    Strategien
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="ml-3">
                    Entwicklung von Public-Private-Partnership Modellen für
                    Infrastrukturprojekte
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white/95 mb-4">
              Fachliche Expertise
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Mein Beratungsansatz verbindet fundierte Fachkenntnisse mit
              strategischem Denken und praktischer Umsetzungskompetenz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ESG & Nachhaltigkeit */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white/90 mb-3">
                ESG & Nachhaltigkeit
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fundierte Kenntnisse der ESG-Regulatorik und Beratung zur
                strategischen Integration von Nachhaltigkeitskriterien in
                Geschäftsmodelle und Entscheidungsprozesse.
              </p>
            </div>

            {/* Infrastruktur & Kapital */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white/90 mb-3">
                Infrastruktur & Kapital
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Entwicklung nachhaltiger Infrastrukturprojekte und
                Kapitalbeschaffungsstrategien mit Fokus auf langfristige
                Wertschöpfung und ökologische Verträglichkeit.
              </p>
            </div>

            {/* Marktanalyse & Strategie */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white/90 mb-3">
                Marktanalyse & Strategie
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Detaillierte Marktanalysen und Entwicklung maßgeschneiderter
                Strategien zur Positionierung im dynamischen Umfeld der
                Nachhaltigkeitstransformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-white mb-6">
            Sie möchten mehr über meine Beratungsleistungen erfahren?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Ich freue mich auf ein persönliches Gespräch, um Ihre spezifischen
            Anforderungen und Ziele zu besprechen.
          </p>
          <Link
            href="mailto:sven-joachim.otto@jab.consulting"
            className={clsx(
              "inline-flex items-center py-3 px-8 rounded-lg font-medium",
              "bg-white text-primary",
              "transform transition duration-200 ease-in-out",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary",
            )}
          >
            Kontakt aufnehmen
            <ArrowRight weight="bold" className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
