import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import TopNavbarr from "./components/top-navbarr";
import ExtraordinaryFooter from "./components/ExtraordinaryFooter";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// UPDATED METADATA
export const metadata: Metadata = {
  title: {
    default: "H2O Industries | Saving Our Oceans",
    template: "%s | H2O Industries"
  },
  description: "H2O Industries leads global industrial water innovation and sustainable transformation solutions.",
  icons: {
    icon: "/favicon.png", // Ensure favicon.png is in your /public folder
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <TopNavbarr />
        <Navbar />

        {children}
        <ExtraordinaryFooter />
        <Footer />
      </body>
    </html>
  );
}
