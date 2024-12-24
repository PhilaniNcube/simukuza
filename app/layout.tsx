import type { Metadata } from "next";
import {Kanit} from "next/font/google";
import "./globals.css";
import { URL } from "url";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://simukuza.co.zw"),
  title: "Simukuza Automotive",
  description:
    "Find your perfect vehicle at Simukuza Automotive in Harare. We offer a wide selection of quality new and used cars with excellent customer service.",
  keywords:
    "car sales, automotive, vehicles, cars, used cars, new cars, Harare, Zimbabwe, car dealership, car finance, vehicle sales",
  creator: "Simukuza Automotive",
  authors: [
    {
      name: "Simukuza Automotive",
      url: "https://www.simukuza.co.zw",
    },
  ],
  openGraph: {
    title: "Simukuza Automotive | Your Trusted Car Dealer in Harare",
    description:
      "Find your perfect vehicle at Simukuza Automotive in Harare. We offer a wide selection of quality new and used cars with excellent customer service.",
    url: "https://www.simukuza.co.zw",
    siteName: "Simukuza Automotive",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Simukuza Automotive Logo",
      },
      {
        url: "/images/social-share.png",
        width: 1200,
        height: 630,
        alt: "Simukuza Automotive Social Share Image",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-ZW": "/en-zw",
      "fr-ZW": "/fr-zw", // If you have multiple languages
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
