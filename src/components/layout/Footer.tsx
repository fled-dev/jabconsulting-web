import Link from "next/link";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="font-medium tracking-wider text-sm text-emerald-800 dark:text-emerald-400 mb-4">
              JAB CONSULTING
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Nachhaltige Strategieberatung für ESG, Infrastruktur & Kapital
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white/90 mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition duration-200"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition duration-200"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white/90 mb-4">
              Kontakt
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/sven-joachim-otto/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition duration-200"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="mailto:sven-joachim.otto@jab.consulting"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition duration-200"
                aria-label="E-Mail"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </a>

              <a
                href="tel:+492111592320"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition duration-200"
                aria-label="Telefon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-neutral-800">
          <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
            &copy; {currentYear} JAB Consulting GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
