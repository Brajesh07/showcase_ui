import { Quicksand } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import { DesktopApp } from "@/components/os/DesktopApp";
import "./globals.css";

const display = Quicksand({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata = {
  title: "Brajesh Tanwar | Full-stack JavaScript developer",
  description:
    "Portfolio of Brajesh Tanwar — full-stack JavaScript developer building web apps, mobile apps, and AI-powered tools.",
};

const GTM_ID = "G-PKWPEL7M09";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className={`${display.variable} antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <DesktopApp>{children}</DesktopApp>
      </body>
    </html>
  );
}
