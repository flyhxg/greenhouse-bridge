import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "West Garden Supply",
  description:
    "West Garden Supply delivers greenhouse infrastructure, smart irrigation, and agritech lifecycle services across North America.",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "West Garden Supply",
    description:
      "Premium greenhouse infrastructure and cultivation supply chain partner for resilient growers.",
    url: "https://www.westgardensupply.com",
    siteName: "West Garden Supply",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "West Garden Supply",
    description:
      "Premium greenhouse infrastructure and cultivation supply chain partner for resilient growers."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className} data-lang="en">
        {children}
      </body>
    </html>
  );
}

