"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      aria-label="Über mich"
      className="relative py-24 bg-white dark:bg-gray-900"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/30 -z-10" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white/95 leading-tight mb-5">
            Expertise mit Persönlichkeit
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Erfahren Sie mehr über meinen fachlichen Hintergrund und meine
            Vision für nachhaltige Energielösungen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10 items-center">
          {/* Image Column with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 lg:col-span-5 relative"
          >
            <div className="relative h-[380px] sm:h-[500px] w-full overflow-hidden rounded-lg">
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 h-24 w-24 border-l-4 border-t-4 border-primary rounded-tl-lg opacity-70 z-10" />

              {/* Main image */}
              <div className="relative h-full w-full shadow-lg">
                <Image
                  src="/images/sven-joachim-otto-2.jpeg"
                  alt="Prof. Dr. Sven-Joachim Otto"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="transition-transform duration-500 hover:scale-[1.02]"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-r-4 border-b-4 border-primary rounded-br-lg opacity-70" />

              {/* Badge */}
              <div className="absolute top-5 right-5 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full shadow-md backdrop-blur-sm">
                <p className="text-sm font-medium text-primary">
                  Honorarprofessor
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="md:col-span-7 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 dark:text-white/95 leading-tight">
                Prof. Dr. Sven-Joachim Otto
              </h2>
              <div className="mt-2 flex items-center">
                <div className="h-1 w-12 bg-primary mr-3"></div>
                <span className="text-primary font-medium">
                  Energiewirtschaft & Recht
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="prose prose-lg dark:prose-invert max-w-none mb-8"
            >
              <p className="lead text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light mb-6">
                Als geschäftsführender Gesellschafter der Energiesozietät
                Düsseldorf widme ich meine Expertise den aktuellen
                Transformationen in Mobilität, Immobilien und Industrie.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Akademischer Hintergrund
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Nach meinem Studium der Betriebswirtschaftslehre und
                    Rechtswissenschaften an der Universität Mannheim begann
                    meine berufliche Laufbahn als wissenschaftlicher Mitarbeiter
                    und später als Rechtsanwalt.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Berufserfahrung
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Meine Reise führte mich durch verschiedene Positionen,
                    darunter Richter am Sozialgericht Heilbronn und Partner bei
                    PricewaterhouseCoopers sowie Ernst & Young.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                Seit 2015 bin ich Lehrbeauftragter für Energiewirtschaft und
                -recht an der Ruhr-Universität Bochum und engagiere mich für die
                Förderung des Instituts für Berg- und Energierecht. Meine Arbeit
                konzentriert sich auf die Digitalisierung als Enabler für
                ressourceneffiziente, nachhaltige und wettbewerbsfähige
                Geschäftsmodelle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10"
            >
              <Link
                href="/ueber-mich"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                Mehr über mich erfahren
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
