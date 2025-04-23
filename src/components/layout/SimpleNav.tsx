"use client";

import Link from "next/link";

export default function SimpleNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-gray-900 dark:text-white font-medium">
          JAB CONSULTING
        </Link>

        <div className="flex items-center space-x-8">
          <Link href="/ueber-mich" className="text-gray-800 dark:text-gray-200">
            Über mich
          </Link>

          <Link href="/kontakt" className="text-gray-800 dark:text-gray-200">
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
