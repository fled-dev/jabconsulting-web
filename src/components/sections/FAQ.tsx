"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import clsx from "clsx";

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  index: number;
};

const FAQItem = ({
  question,
  answer,
  isOpen,
  toggleOpen,
  index,
}: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: 0.1 * index,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="border-b border-gray-200 dark:border-gray-700/50"
    >
      <button
        onClick={toggleOpen}
        className={clsx(
          "flex justify-between items-center w-full py-5 text-left transition-colors",
          "hover:text-primary",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        )}
      >
        <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white/90">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-primary flex-shrink-0 ml-4"
        >
          <CaretDown size={22} weight="bold" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-8">
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // FAQ data
  const faqItems = [
    {
      question: "Welche Dienstleistungen bietet die JAB Consulting an?",
      answer:
        "JAB Consulting bietet maßgeschneiderte Beratung zur klimaneutralen Transformation, Unterstützung bei Infrastrukturinvestitionen, ESG-konforme Investitionsstrategien, Public Policy Beratung und Fach- sowie Führungskräftevermittlung an.",
    },
    {
      question:
        "Wie unterstützt JAB Consulting Unternehmen auf dem Weg zur Klimaneutralität?",
      answer:
        "JAB Consulting entwickelt individuelle Strategien zur Reduktion von CO2-Emissionen, optimiert Geschäftsmodelle und begleitet Unternehmen bei der Implementierung nachhaltiger Prozesse.",
    },
    {
      question: "Was bedeutet ESG-konforme Investitionsstrategie?",
      answer:
        "Eine ESG-konforme Investitionsstrategie berücksichtigt Umwelt-, Sozial- und Governance-Kriterien bei Investitionsentscheidungen, um nachhaltige und verantwortungsvolle Investitionen zu fördern.",
    },
    {
      question: "Wie kann ich Kontakt zu JAB Consulting aufnehmen?",
      answer:
        "Sie können uns per E-Mail unter sven-joachim.otto@jab.consulting oder telefonisch unter +49 211-159232-0 erreichen. Das Büro befindet sich in der Roßstraße 92, 40476 Düsseldorf, Deutschland.",
    },
  ];

  // Toggle function for opening/closing FAQ items
  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-label="Häufig gestellte Fragen"
      className="relative py-24 bg-gray-50 dark:bg-gray-850"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/80 -z-10" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
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
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Antworten auf die wichtigsten Fragen zu meinen Beratungsleistungen
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
              index={index}
            />
          ))}
        </div>

        {/* Additional help text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Haben Sie weitere Fragen?{" "}
            <a
              href="mailto:sven-joachim.otto@jab.consulting"
              className="text-primary hover:underline font-medium"
            >
              Kontaktieren Sie mich
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
