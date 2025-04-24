"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

export default function Hero() {
  const { scrollY } = useScroll();
  const imageParallax = useTransform(scrollY, [0, 300], [0, 60]);

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[82vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial Gradient */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_50%_30%,var(--primary-color-light)/5%,transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_30%,var(--primary-color-light)/3%,transparent_60%)] -z-10" />

      {/* Animated Accent Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute right-[5%] top-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute left-[10%] bottom-1/4 w-72 h-72 rounded-full bg-primary/20 blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full relative flex flex-col justify-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 relative z-10">
          {/* Content Area */}
          <div className="md:col-span-7 lg:col-span-6 flex flex-col justify-center md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white/95 leading-tight">
                <span className="block mb-2 text-primary uppercase tracking-widest text-sm font-sans font-medium">
                  JAB Consulting
                </span>
                Nachhaltige Lösungen
                <span className="block mt-1">
                  für Infrastruktur und Kapital
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-gray-600 dark:text-gray-400 font-sans leading-relaxed max-w-lg text-lg"
            >
              Willkommen bei JAB Consulting. Ich unterstütze Sie bei der
              Transformation Ihres Geschäftsmodells hin zu mehr Nachhaltigkeit.
              Ich vereine wissenschaftlich fundierte ESG-Expertise mit
              langjähriger Beratungserfahrung und einem breiten Netzwerk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#contact"
                className={clsx(
                  "inline-flex items-center justify-center px-8 py-3",
                  "bg-primary text-white font-medium text-base tracking-wide",
                  "border border-primary",
                  "transition duration-300 ease-out",
                  "hover:bg-primary",
                  "focus:outline-none focus:ring-1 focus:ring-primary",
                  "relative overflow-hidden group",
                  "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
                  "before:translate-x-[-100%] before:opacity-0 hover:before:translate-x-[100%] hover:before:opacity-100",
                  "before:transition-all before:duration-700 before:ease-out",
                )}
              >
                <span className="relative z-10">Kontakt aufnehmen</span>
              </Link>

              <Link
                href="/ueber-mich"
                className={clsx(
                  "inline-flex items-center justify-center px-8 py-3",
                  "bg-transparent text-primary font-medium text-base tracking-wide",
                  "border border-primary/30",
                  "transition duration-300 ease-out",
                  "hover:border-primary/70",
                  "focus:outline-none focus:ring-1 focus:ring-primary",
                  "backdrop-blur-[2px]",
                )}
              >
                <span>Über mich</span>
              </Link>
            </motion.div>

            {/* Partner badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12 md:mt-16"
            >
              <Link
                href="https://energiesozietaet.de"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/images/energiesozietaet.svg"
                  alt="Energiesozietät GmbH Rechtsanwälte Steuerberater"
                  width={120}
                  height={35}
                  className="opacity-70 dark:opacity-60 hover:opacity-100 dark:hover:opacity-90 transition-opacity"
                />
              </Link>
            </motion.div>
          </div>

          {/* Image Area - Positioned at bottom */}
          <div className="md:col-span-5 lg:col-span-6 md:absolute md:-bottom-12 lg:-bottom-20 md:right-0 w-full md:w-1/2 lg:w-6/12">
            <motion.div
              style={{ y: imageParallax }}
              className="relative h-[55vh] md:h-[65vh] w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative h-full w-full"
              >
                <Image
                  src="/images/sven-joachim-otto-1.png"
                  alt="JAB Consulting Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-contain object-center md:object-center lg:object-center"
                  priority
                />

                {/* Subtle gradient overlay at the bottom to blend with background */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300/70 dark:via-gray-700/50 to-transparent" />
    </section>
  );
}
