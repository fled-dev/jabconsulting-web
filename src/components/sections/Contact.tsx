"use client";

import React from "react";
import { motion } from "framer-motion";
import { EnvelopeSimple } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Kontaktieren Sie mich"
      className="relative py-24 bg-white dark:bg-gray-900"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800/80 -z-10" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 dark:text-white/95 leading-tight mb-5">
              Kontaktieren Sie mich
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Möchten Sie mehr erfahren oder eine Beratung anfragen? Ich freue
              mich auf Ihre Nachricht.
            </p>

            {/* Contact card */}
            <div className="bg-white dark:bg-gray-800/50 rounded-lg p-8 shadow-sm border border-gray-100 dark:border-gray-700/50 mb-8">
              <div className="flex flex-col items-center">
                {/* Email contact */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 border border-primary/30 bg-primary/10 text-primary rounded-full mb-3">
                    <EnvelopeSimple size={28} weight="duotone" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    E-Mail
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Schreiben Sie mir eine E-Mail für Anfragen oder
                    Terminvereinbarungen
                  </p>
                  <a
                    href="mailto:sven-joachim.otto@jab.consulting"
                    className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary text-white font-medium rounded-lg shadow-sm hover:shadow transform transition-all duration-300 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  >
                    <EnvelopeSimple size={20} weight="bold" className="mr-2" />
                    E-Mail schreiben
                  </a>
                </div>
              </div>
            </div>

            {/* Additional info */}
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Ich antworte in der Regel innerhalb von 24 Stunden und freue mich
              auf einen Austausch.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
