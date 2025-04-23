"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Presentation,
  Scales,
  Strategy,
  GraduationCap,
} from "@phosphor-icons/react";

type QualityCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const QualityCard = ({ title, description, icon, delay }: QualityCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className="bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700/50 flex flex-col h-full group"
  >
    <div className="text-emerald-600 dark:text-emerald-400 mb-4 opacity-85 group-hover:opacity-100 transition-opacity">
      {icon}
    </div>
    <h3 className="font-serif text-xl font-medium text-gray-900 dark:text-white/95 mb-3">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export default function Qualities() {
  return (
    <section
      aria-label="Meine Qualitäten"
      className="relative py-24 bg-gray-50 dark:bg-gray-850"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/80 -z-10" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
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
            Meine Qualitäten
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Fachwissen und Erfahrung im Dienste Ihres Unternehmens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <QualityCard
            title="Keynote Speaking"
            description="Inspirierende und fundierte Vorträge zu nachhaltigen Energielösungen und regulatorischen Rahmenbedingungen auf nationaler und internationaler Ebene."
            icon={<Presentation size={32} weight="regular" />}
            delay={0.1}
          />

          <QualityCard
            title="Rechtliche Expertise"
            description="Fundierte Kenntnisse im Energierecht und ESG-Regulierungsrahmen der EU mit praktischer Erfahrung in der Umsetzung komplexer rechtlicher Anforderungen."
            icon={<Scales size={32} weight="regular" />}
            delay={0.2}
          />

          <QualityCard
            title="Strategische Beratung"
            description="Entwicklung maßgeschneiderter Strategien für Energieunternehmen mit Fokus auf Nachhaltigkeit, Klimaneutralität und regulatorische Compliance."
            icon={<Strategy size={32} weight="regular" />}
            delay={0.3}
          />

          <QualityCard
            title="Akademische Fundierung"
            description="Als Honorarprofessor verbinde ich wissenschaftliche Erkenntnisse mit praktischer Anwendung und kann komplexe Zusammenhänge verständlich vermitteln."
            icon={<GraduationCap size={32} weight="regular" />}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
