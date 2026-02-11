import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pankajharwansh.com'),
  title: {
    default: "Pankaj J. Harwansh | Strategic Connector & Business Leader",
    template: "%s | Pankaj J. Harwansh"
  },
  description: "28+ years of experience in corporate relations, business development, and angel investments. Executive Director at BNI Navi Mumbai and Corporate Connections.",
  keywords: ["Pankaj Harwansh", "BNI Navi Mumbai", "Corporate Connections", "The Alternative Board", "Business Networking", "Strategic Connector", "Navi Mumbai Business"],
  authors: [{ name: "Pankaj J. Harwansh" }],
  creator: "Pankaj J. Harwansh",
  publisher: "Pankaj J. Harwansh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pankajharwansh.com",
    title: "Pankaj J. Harwansh | Strategic Connector & Business Leader",
    description: "Empowering business growth through strategic networking, peer advisory, and executive leadership development.",
    siteName: "Pankaj J. Harwansh",
    images: [
      {
        url: "/images/bbg1.png",
        width: 1200,
        height: 630,
        alt: "Pankaj J. Harwansh - Strategic Connector",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj J. Harwansh | Strategic Connector & Business Leader",
    description: "Empowering business growth through strategic networking, peer advisory, and executive leadership development.",
    images: ["/images/bbg1.png"],
  },
  alternates: {
    canonical: "https://www.pankajharwansh.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pankaj J. Harwansh",
    "jobTitle": "Executive Director",
    "description": "Dynamic business leader with 28+ years in corporate relations, business development, and angel investments.",
    "url": "https://www.pankajharwansh.com",
    "image": "https://www.pankajharwansh.com/images/bbg1.png",
    "sameAs": [
      "https://www.linkedin.com/in/pankaj-harwansh-2a07534/",
      "https://www.instagram.com/pankajharwansh/",
      "https://www.facebook.com/pankaj.harwansh"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "BNI Navi Mumbai"
      },
      {
        "@type": "Organization",
        "name": "Corporate Connections Global LLC"
      }
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Pankaj J. Harwansh",
    "url": "https://www.pankajharwansh.com",
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="afterInteractive"
        />
        <Script
          id="website-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${poppins.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
