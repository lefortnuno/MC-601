import type { Metadata } from "next";
import { Geist, Geist_Mono, Tektur } from "next/font/google";

import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import { Analytics } from "@vercel/analytics/react";

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
  weight: ["400", "900"], // Tu peux ajuster selon ton besoin
});

export const metadata: Metadata = {
  title: "MC | Masoandro Capital",
  description: "Tony Braven de Masoandro Capital, originaire du 601 Bro, collabore avec Trofel pour donner vie à MC par le code !",

  icons: {
    icon: "/logo/favicon_io/favicon.ico",
    shortcut: "/logo/favicon_io/android-chrome-512x512.png",
    apple: "/logo/favicon_io/apple-touch-icon.png",
  },

  robots: "index, follow",
  alternates: {
    canonical: "https://masoandrocapital.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tektur.variable} antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
