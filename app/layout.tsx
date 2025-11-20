import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wavelength Global Studio | Social Software Studio",
  applicationName: "Wavelength Global Studio",
  description:
    "Remote-first product studio delivering social-grade software—mobile, web, and bespoke digital experiences—fully online.",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Wavelength Global Studio",
    description:
      "Remote-first studio crafting social platforms, messaging, and interactive digital products—delivered entirely online.",
    url: "https://www.wgs.studio",
    siteName: "Wavelength Global Studio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Wavelength Global Studio",
    description:
      "Remote-first studio crafting social platforms, messaging, and interactive digital products—delivered entirely online."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body data-lang="en">
        {children}
      </body>
    </html>
  );
}

