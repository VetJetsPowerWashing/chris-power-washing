import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Script from 'next/script'
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
      <Script id="gm" async src="https://www.googletagmanager.com/gtag/js?id=AW-10945209180"/>
      <Script id="gtag">{`  
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-10945209180');
  `}</Script>
      <body className={`${anton.className} flex flex-col min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
        <Script id="ga-tel">{`
          window.addEventListener('click', function(e) {
            if(e.target.closest('[href*="tel:"]')){
            gtag('event', 'conversion', {'send_to': 'AW-10945209180/ARgjCPb82cgZENzGiuMo'});
          }
        });
  `}</Script>
      </body>
    </html>
  );
}
