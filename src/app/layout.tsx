import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "VetJetsPowerWashing",
  description: "Power washing services in the greater Northern Jersey area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="AW-10945209180" />
      <body className={`${anton.className} flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
