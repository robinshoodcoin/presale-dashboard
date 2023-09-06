/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// components

import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robinshood",
  description: "Presale for Robinshood Coin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="absolute top-0 left-0 right-0 min-h-screen overflow-hidden bg-no-repeat bg-contain bg-home -z-10">
          <main className="bg-[#121619] opacity-80">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
