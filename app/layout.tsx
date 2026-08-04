import "@/src/styles/reset.css";
import "@/src/styles/variables.css";
import "@/src/styles/typography.css";
import "@/src/styles/patterns.css";
import "@/src/styles/globals.css";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";


import type { Metadata } from "next";
export const metadata: Metadata = {
  metadataBase: new URL("https://antiksurf.com"),

  title: {
    default: "Antik Surf Club | Surf Club in Asilah, Morocco",
    template: "%s | Antik Surf Club",
  },

  description:
    "Surf lessons, surf trips and unforgettable experiences in Asilah, Morocco.",

  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    siteName: "Antik Surf Club",
    locale: "en_US",
    title: "Antik Surf Club | Surf Club in Asilah, Morocco",
    description:
      "Surf lessons, surf trips and unforgettable experiences in Asilah, Morocco.",
    url: "https://antiksurf.com/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Antik Surf Club",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Antik Surf Club | Surf Club in Asilah, Morocco",
    description:
      "Surf lessons, surf trips and unforgettable experiences in Asilah, Morocco.",
    images: ["/og-image.jpg"],
  },
};


import localFont from "next/font/local";

const antikFont = localFont({
  src: "../src/assets/fonts/AntikFont.woff2",
  display: "swap",
  weight: "400",
  style: "normal",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}