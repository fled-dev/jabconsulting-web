"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Buildings,
  ChartBar,
  Handshake,
  GlobeHemisphereWest,
  LightbulbFilament,
} from "@phosphor-icons/react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
};

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className="bg-white dark:bg-gray-800/50 rounded-lg p-6 shadow-[0_4px_10px_-3px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 border border-gray-100/80 dark:border-gray-700/30 flex flex-col h-full group hover:translate-y-[-2px]"
  >
    <div className="text-primary mb-4 opacity-85 group-hover:opacity-100 transition-opacity">
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

export default function Services() {
  const services = [
    {
      title: "Transformation zur Klimaneutralität",
      description:
        "Strategische Beratung und Umsetzungskonzepte für Unternehmen auf dem Weg zur Klimaneutralität mit praktikablen und wirtschaftlich tragfähigen Lösungen.",
      icon: <Leaf size={32} weight="duotone" />,
      delay: 0.1,
    },
    {
      title: "Energierecht & -politik",
      description:
        "Professionelle Beratung zu aktuellen Entwicklungen im Energierecht und der Energiepolitik mit Fokus auf regulatorische Rahmenbedingungen und Compliance.",
      icon: <LightbulbFilament size={32} weight="duotone" />,
      delay: 0.2,
    },
    {
      title: "Öffentliche Finanzen",
      description:
        "Umfassende Expertise in der Gestaltung und Optimierung öffentlicher Finanzen für kommunale und staatliche Institutionen mit Blick auf Nachhaltigkeit und Effizienz.",
      icon: <ChartBar size={32} weight="duotone" />,
      delay: 0.3,
    },
    {
      title: "Kommunale Beratung",
      description:
        "Maßgeschneiderte Beratungsleistungen für Kommunen zu Themen wie Verwaltungsmodernisierung, Stadtentwicklung und interkommunale Zusammenarbeit.",
      icon: <Buildings size={32} weight="duotone" />,
      delay: 0.4,
    },
    {
      title: "Public Affairs",
      description:
        "Strategische Interessenvertretung und Kommunikation zwischen Unternehmen, Politik und Verwaltung für eine erfolgreiche Positionierung Ihrer Anliegen.",
      icon: <Handshake size={32} weight="duotone" />,
      delay: 0.5,
    },
    {
      title: "Internationale Kooperationen",
      description:
        "Aufbau und Pflege grenzüberschreitender Partnerschaften mit Fokus auf nachhaltige Entwicklung und gemeinsame wirtschaftliche Interessen im europäischen Kontext.",
      icon: <GlobeHemisphereWest size={32} weight="duotone" />,
      delay: 0.6,
    },
  ];

  return (
    <section
      id="services"
      aria-label="Meine Beratungsleistungen"
      className="relative py-24 bg-gray-50 dark:bg-gray-900"
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
            Meine Beratungsleistungen
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Kompetente Unterstützung in den Bereichen Energie, Klima und
            öffentlicher Sektor
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
