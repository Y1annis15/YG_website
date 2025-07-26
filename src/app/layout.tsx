import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yiannis Grigoriou - Software Engineer | Embedded Systems & UAV Specialist",
  description: "Software Engineer specializing in Embedded Software Development, UAV Systems, and Machine Learning. Currently working at KIOS Research and Innovation Center of Excellence in Cyprus.",
  keywords: [
    "Yiannis Grigoriou",
    "Software Engineer",
    "Embedded Systems",
    "UAV Systems",
    "NVIDIA Jetson",
    "Machine Learning",
    "Drone Technology",
    "KIOS Research",
    "Cyprus",
    "Computer Engineering",
    "University of Cyprus",
    "Georgia Institute of Technology"
  ],
  authors: [{ name: "Yiannis Grigoriou" }],
  creator: "Yiannis Grigoriou",
  publisher: "Yiannis Grigoriou",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yiannisgrigoriou.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Yiannis Grigoriou - Software Engineer | Embedded Systems & UAV Specialist",
    description: "Software Engineer specializing in Embedded Software Development, UAV Systems, and Machine Learning. Currently working at KIOS Research and Innovation Center of Excellence in Cyprus.",
    url: 'https://yiannisgrigoriou.vercel.app',
    siteName: 'Yiannis Grigoriou Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yiannis Grigoriou - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Yiannis Grigoriou - Software Engineer | Embedded Systems & UAV Specialist",
    description: "Software Engineer specializing in Embedded Software Development, UAV Systems, and Machine Learning.",
    images: ['/og-image.jpg'],
  },
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
  verification: {
    google: '472ff9af5956d3fc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/YG_Favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yiannis Grigoriou",
              "jobTitle": "Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "KIOS Research and Innovation Center of Excellence"
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Cyprus",
                  "degree": "BSc in Computer Engineering"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "Georgia Institute of Technology",
                  "degree": "MSc in Computer Science"
                }
              ],
              "knowsAbout": [
                "Embedded Software Development",
                "UAV Systems",
                "Machine Learning",
                "NVIDIA Jetson",
                "C++",
                "Python",
                "DJI OSDK"
              ],
              "email": "yiannisgrigoriou15@gmail.com",
              "url": "https://yiannisgrigoriou.vercel.app",
              "sameAs": [
                "https://linkedin.com/in/yiannis-grigoriou"
              ],
              "homeLocation": "Nicosia, Cyprus"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
