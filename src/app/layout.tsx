import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Tektur,
  Poppins,
  Montserrat,
} from "next/font/google";

import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const metadata: Metadata = {
  title: "Masoandro Capital  - Agence audiovisuelle à Madagascar",
  description:
    "Masoandro Capital &ndash; &Eacute;clairer vos r&ecirc;ves en images. Cr&eacute;ateurs d&rsquo;&eacute;motions et b&acirc;tisseurs d&rsquo;images, chez Masoandro Capital, chaque projet est une aventure. Clips, courts-m&eacute;trages, interviews, documentaires : nous transformons vos id&eacute;es en &oelig;uvres visuelles fortes et inspirantes. Qui suis-je ? Je suis Tony Braven, r&eacute;alisateur n&eacute; sous le soleil de Tul&eacute;ar, Madagascar. Port&eacute; par mes racines et ma passion du cin&eacute;ma, je crois au pouvoir des images pour changer les regards et raconter des histoires vraies, vibrantes, authentiques. Avec Masoandro Capital, mon objectif est simple : donner vie &agrave; vos r&ecirc;ves, une image &agrave; la fois. Pr&ecirc;t &agrave; cr&eacute;er quelque chose d&rsquo;unique ensemble ? Venez chez nous Agence audiovisuelle à Madagascar.",
  icons: {
    icon: "/logo/favicon_io/favicon.ico",
    shortcut: "/logo/favicon_io/android-chrome-512x512.png",
    apple: "/logo/favicon_io/apple-touch-icon.png",
  },
  keywords: [
    "Audiovisuel",
    "Audiovisuelle",
    "Montages video",
    "MOntages clip",
    "Nuno Lefort",
    "Trofel",
  ],
  robots: "index, follow",
  alternates: { canonical: "https://masoandrocapital.com/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${geistSans.variable} ${geistMono.variable} ${tektur.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
