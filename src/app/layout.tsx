import type { Metadata } from "next";
import { Syne, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const display = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adanaopen.com"),
  title: "Adana Open | WTA 125 — Yakında",
  description:
    "Adana Open WTA 125 yakında hizmetinizde. 26 Eylül – 4 Ekim 2026, ATDSK · adanaopen.com",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Adana Open | WTA 125 — Coming Soon",
    description:
      "World-class WTA 125 tennis comes to Adana. Official site launching soon at adanaopen.com",
    url: "https://adanaopen.com",
    siteName: "Adana Open",
    images: ["/hero-venue.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${serif.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
