import type { Viewport, Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmsans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dmsans',
});

export const viewport: Viewport = {
  themeColor: "#0E192D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Lumina Aviation Holdings",
  description: "Strategic aviation asset management and regulatory-mapped aerospace education.",
  metadataBase: new URL("https://luminaaviation.com.au"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#0E192D",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Lumina Aviation Holdings Pty Ltd",
    description: "Elevating standards in aerospace through strategic oversight and CASA-mapped education.",
    url: "https://luminaaviation.com.au",
    siteName: "Lumina Aviation Holdings",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Aviation Holdings Pty Ltd",
    description: "Strategic Aviation Asset Management & Innovation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmsans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
