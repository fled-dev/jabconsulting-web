"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Intro() {
  return (
    <section
      aria-label="Intro"
      className="relative py-20 bg-white dark:bg-gray-900"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/30 dark:to-gray-900 -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image Column - Mobile: Top, Desktop: Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 lg:col-span-6 order-1 md:order-1"
          >
            <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden shadow-md rounded-lg">
              <Image
                src="/images/sander-weeteling-iGDg_f_mlWo-unsplash.jpg"
                alt="Nachhaltige Zukunft Visualisierung"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="transition-transform duration-500 hover:scale-105"
                priority={false}
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </motion.div>

          {/* Content Column - Mobile: Bottom, Desktop: Right */}
          <div className="md:col-span-7 lg:col-span-6 order-2 md:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-2xl md:text-3xl font-medium text-gray-900 dark:text-white/95 leading-tight mb-6"
            >
              Meine Expertise für Ihre nachhaltige Zukunft
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-gray-600 dark:text-gray-400 font-sans leading-relaxed mb-8"
            >
              Meine Beratungsangebote sind darauf ausgerichtet, Ihr Unternehmen
              auf dem Weg zur Klimaneutralität und resilienten Wertschöpfung zu
              begleiten. Mit einem besonderen Schwerpunkt im
              ESG-Regulierungsrahmen der EU unterstütze ich Sie bei der
              Einhaltung strategischer Anforderungen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href="/ueber-mich"
                className={clsx(
                  "inline-flex items-center group",
                  "text-primary font-medium",
                  "transition-all duration-300 ease-out",
                  "hover:translate-x-1",
                )}
              >
                <span>Mehr erfahren</span>

                {/* Arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
