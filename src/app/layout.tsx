import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyble: Leading Threat Intelligence Platforms, Products, And Services",
  description: "Discover Cyble's AI-powered extended threat intelligence services, solutions, and products to safeguard your organization against cyber threats.",
  icons: {
    icon: 'https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2021/11/cropped-Cyble-Black-Logo-1-2127859258-1637602085949.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        {children}
        <Analytics/>
      </ClientBody>
    </html>
  );
}
