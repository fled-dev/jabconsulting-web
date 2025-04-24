import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "JAB Consulting – Nachhaltige Strategieberatung für ESG, Infrastruktur & Kapital",
  description:
    "Prof. Dr. Sven-Joachim Otto berät Unternehmen und Institutionen in den Bereichen ESG, Infrastruktur, Public Policy und Kapitaltransformation. Keynotes, Beiratstätigkeit und strategische Expertise für eine nachhaltige Zukunft.",
  keywords: [
    "JAB Consulting",
    "Sven-Joachim Otto",
    "ESG Beratung",
    "Infrastrukturstrategie",
    "Kapitalflüsse",
    "Nachhaltigkeit",
    "Public Policy",
    "Energierecht",
    "Aufsichtsrat",
    "Transformationsbegleitung",
  ],
  authors: [
    {
      name: "Prof. Dr. Sven-Joachim Otto",
      url: "https://www.linkedin.com/in/sven-joachim-otto/",
    },
  ],
  creator: "Prof. Dr. Sven-Joachim Otto",
  publisher: "Prof. Dr. Sven-Joachim Otto",
  openGraph: {
    title:
      "JAB Consulting – Nachhaltige Strategieberatung für ESG, Infrastruktur & Kapital",
    description:
      "Prof. Dr. Sven-Joachim Otto berät Unternehmen und Institutionen in den Bereichen ESG, Infrastruktur, Public Policy und Kapitaltransformation. Keynotes, Beiratstätigkeit und strategische Expertise für eine nachhaltige Zukunft.",
    url: "https://jab.consulting",
    siteName: "JAB Consulting GmbH",
    images: [
      {
        url: "https://jab.consulting/images/jab-banner.png",
        width: 1200,
        height: 630,
        alt: "JAB Consulting – Nachhaltige Strategieberatung für ESG, Infrastruktur & Kapital",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Start", href: "/" },
    { label: "Über mich", href: "/ueber-mich" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ];

  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <NavBar items={navItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
