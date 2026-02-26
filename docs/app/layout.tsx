import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quranfi Dua API - Free Islamic Duas API",
  description: "A free, open-source REST API providing authentic Islamic duas with Arabic text, English translations, and transliterations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-950 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
