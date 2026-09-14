import type { Metadata } from "next";
import { Tenor_Sans, Cormorant_Garamond, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const fontSans = Tenor_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontArabic = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kazan Um Ahmed | كازان أم أحمد — Premium Home-Cooked Bukhari Rice & Lamb",
  description:
    "Authentic home-cooked Bukhari rice and specialty lamb catering for intimate family gatherings and small events. Freshly prepared in small batches with free delivery in Saudi Arabia.",
  keywords: [
    "Bukhari rice",
    "catering",
    "lamb",
    "home kitchen",
    "Saudi Arabia",
    "family gatherings",
    "Kazan Um Ahmed",
    "كازان أم أحمد",
    "أرز بخاري",
    "تمويل مناسبات",
  ],
  openGraph: {
    title: "Kazan Um Ahmed | كازان أم أحمد",
    description:
      "Premium home-cooked Bukhari rice & specialty lamb catering. Book via WhatsApp.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazan Um Ahmed | كازان أم أحمد",
    description:
      "Premium home-cooked Bukhari rice & specialty lamb catering. Book via WhatsApp.",
  },
  robots: "index, follow",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FoodEstablishment",
      "@id": "https://kazanumahmed.com/#foodestablishment",
      name: "Kazan Um Ahmed | كازان أم أحمد",
      description:
        "Premium home-kitchen catering specializing in authentic Bukhari rice and specialty lamb.",
      url: "https://kazanumahmed.com",
      telephone: "+966502466713",
      email: "kazanumahmed@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "SA",
        addressRegion: "Makkah Region",
        addressLocality: "Kazan Um Ahmed Home Kitchen",
      },
      servesCuisine: ["Saudi", "Arabic", "Bukhari Rice", "Lamb"],
      priceRange: "$$$",
      paymentAccepted: "Cash, Bank Transfer",
      currenciesAccepted: "SAR",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "10:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "12:00",
          closes: "23:00",
        },
      ],
    },
    {
      "@type": "CateringService",
      "@id": "https://kazanumahmed.com/#cateringservice",
      name: "Kazan Um Ahmed Catering",
      provider: {
        "@id": "https://kazanumahmed.com/#foodestablishment",
      },
      areaServed: {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Bukhari Rice & Lamb Packages",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Suakni Spring / Labani Lamb Package",
              description: "Feeds up to 30 people. Includes free delivery and signature sides.",
            },
            price: "1800",
            priceCurrency: "SAR",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "2x Suakni Spring / Labani Lamb Package",
              description: "Feeds up to 60 people. Includes free delivery and signature sides.",
            },
            price: "3500",
            priceCurrency: "SAR",
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontArabic.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
