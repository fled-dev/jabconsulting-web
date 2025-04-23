"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  // Update scrolled state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Initial check
    handleScroll();

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      role="navigation"
      aria-label="Main Navigation"
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 w-full h-16 flex items-center transition-all duration-300",
        "px-6 sm:px-8 lg:px-10",
        scrolled
          ? "bg-white/80 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          className="font-medium tracking-widest text-sm text-emerald-800 dark:text-emerald-400 hover:opacity-80 transition duration-200"
        >
          JAB CONSULTING
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link
            href="/ueber-mich"
            className={clsx(
              "font-medium text-gray-900 dark:text-white/90",
              "hover:text-emerald-700 dark:hover:text-emerald-400 transition duration-200",
              "relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0",
              "after:bg-emerald-700 dark:after:bg-emerald-400 after:transition-all after:duration-300",
              "hover:after:w-full",
            )}
          >
            Über mich
          </Link>
          <Link
            href="/kontakt"
            className={clsx(
              "font-medium text-gray-900 dark:text-white/90",
              "hover:text-emerald-700 dark:hover:text-emerald-400 transition duration-200",
              "relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0",
              "after:bg-emerald-700 dark:after:bg-emerald-400 after:transition-all after:duration-300",
              "hover:after:w-full",
            )}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
