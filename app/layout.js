import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Bitlinks - Your trusted URL shortener",
  description: "Bitlinks helps you shorten your URLs easily.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"),
  openGraph: {
    title: "Bitlinks - Your trusted URL shortener",
    description: "Shorten, manage, and share your links easily.",
    url: process.env.NEXT_PUBLIC_HOST,
    siteName: "Bitlinks",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bitlinks Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitlinks - Your trusted URL shortener",
    description: "Shorten, manage, and share your links easily.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50 text-gray-900`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
