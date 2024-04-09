import type { Metadata } from "next";
import { Public_Sans, Ibarra_Real_Nova } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

const fontIbarra = Ibarra_Real_Nova({
  subsets: ["latin"],
  weight: ["700", "400"],
  display: "block",
  variable: "--font-ibarra",
});

const fontSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "block",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "My App",
  description: "My App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontIbarra.variable} ${fontSans.variable} font-publicSans min-h-[100dvh]`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
