'use client'
import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const aspekta = localFont({
  src: "./fonts/AspektaVF.woff2",
  variable: "--font-aspekta",
  weight: "100 900", 
});
// export const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aspekta.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
