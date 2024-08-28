import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Script from 'next/script'
import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Vet Jets Power Washing",
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
      <Script id="gtag-manager">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WJW8KTBS');`}
      </Script>
      <body className={`${anton.className} flex flex-col min-h-screen`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJW8KTBS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
