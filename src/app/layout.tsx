import type { Metadata } from "next";
import { Inter, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ssconstructionerode.in"),
  title: {
    default: "SS Construction | Best Civil Engineers & Construction in Erode",
    template: "%s | SS Construction",
  },
  description:
    "SS Construction is Erode's premier civil engineering and construction company. We specialize in residential building, commercial construction, and structural design with 4+ years of expertise.",
  keywords: [
    "SS Construction",
    "civil engineers in Erode",
    "best civil contractors Erode",
    "construction company Erode",
    "building contractors Erode",
    "residential construction Erode",
    "commercial construction Tamil Nadu",
    "structural design Erode",
    "civil engineering services Erode",
    "best construction company Erode",
    "Kollampalayam civil engineers",
    "Sankar construction Erode",
  ],
  authors: [{ name: "SS Construction", url: "https://www.ssconstructionerode.in" }],
  creator: "SS Construction",
  publisher: "SS Construction",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ssconstructionerode.in",
    siteName: "SS Construction",
    title: "SS Construction | Best Civil Engineers & Construction in Erode",
    description:
      "Trusted civil engineering and construction company in Erode. Specializing in residential, commercial buildings, and expert structural work.",
    images: [
      {
        url: "https://www.ssconstructionerode.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SS Construction - Building Excellence in Erode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SS Construction | Best Civil Engineers & Construction in Erode",
    description:
      "Trusted civil engineering and construction company in Erode with 4+ years of structural expertise.",
    images: ["https://www.ssconstructionerode.in/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.jpg",
    apple: "/favicon.jpg",
    shortcut: "/favicon.jpg",
  },
  category: "construction",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "SS Construction",
    "image": "https://www.ssconstructionerode.in/logo.png",
    "@id": "https://www.ssconstructionerode.in",
    "url": "https://www.ssconstructionerode.in",
    "telephone": "+919876543210",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Construction Avenue",
      "addressLocality": "Erode",
      "addressRegion": "Tamil Nadu",
      "postalCode": "638001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.3410,
      "longitude": 77.7172
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${geistMono.variable} antialiased font-sans flex flex-col min-h-screen`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TooltipProvider>
          {children}
          <Toaster position="top-right" richColors />
        </TooltipProvider>
      </body>
    </html>
  );
}
