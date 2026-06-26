import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Source_Sans_3, Montserrat, Alex_Brush, Dancing_Script } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["600", "700"],
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
  weight: "400",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hero-ibd.vercel.app"),
  title: "Heart to Heart",
  description:
    "Heart to Heart is a youth-led 501(c)(3) nonprofit dedicated to promoting earlier diagnosis and improving outcomes for individuals living with chronic illnesses through awareness, education, and support.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Heart to Heart NPO",
    title: "Heart to Heart",
    description:
      "Heart to Heart is a youth-led 501(c)(3) nonprofit dedicated to promoting earlier diagnosis and improving outcomes for individuals living with chronic illnesses through awareness, education, and support.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Heart to Heart NPO logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heart to Heart",
    description:
      "Heart to Heart is a youth-led 501(c)(3) nonprofit dedicated to promoting earlier diagnosis and improving outcomes for individuals living with chronic illnesses through awareness, education, and support.",
    images: ["/images/og-cover.jpg"],
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
        className={`${plusJakarta.variable} ${sourceSans.variable} ${montserrat.variable} ${alexBrush.variable} ${dancingScript.variable} antialiased font-[family-name:var(--font-body)] text-[var(--color-plum)]`}
      >
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
