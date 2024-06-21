import type { Metadata } from "next";
import { Public_Sans, Ibarra_Real_Nova } from "next/font/google";
import "./globals.css";

import Navigation from "../components/UI/navigation/Navigation";
import Footer from "../components/layout/Footer";
import ThemeProviders from "./theme-provider";
import Wrapper from "@/components/layout/Wrapper";

const fontIbarra = Ibarra_Real_Nova({
    subsets: ["latin"],
    weight: ["700", "400"],
    display: "block",
    variable: "--font-ibarra",
});

const fontSans = Public_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    display: "block",
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Portfolio | Miłosz Łoniewski",
    description:
        "Hey, I'm Milosz, a web enthusiast and computer science student. I'm involved in creating interesting websites with a focus on user experience. Feel free to contact me.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="hidden" lang="en" suppressHydrationWarning>
            <body
                className={`${fontIbarra.variable} ${fontSans.variable} flex min-h-[100dvh] flex-col font-publicSans`}
            >
                <ThemeProviders>
                    <main className="grow overflow-x-clip">
                        <Navigation />
                        {children}
                    </main>
                    <Footer />
                </ThemeProviders>
            </body>
        </html>
    );
}
