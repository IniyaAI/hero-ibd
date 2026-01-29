import type { Metadata } from "next";
import Script from "next/script";
import { Amatic_SC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
  display: "swap",
});

const comica = localFont({
  src: [
    {
      path: "./fonts/ComicaRg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ComicaRgIta.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-comica",
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "Heroes for IBD - Pediatric IBD Awareness",
  description: "Helping children thrive with IBD support, awareness, and community.",
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
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
        className={`${amatic.variable} ${comica.variable} antialiased font-comica`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FXNGDRSD9B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FXNGDRSD9B');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
