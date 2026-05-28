import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./sidebar/Sidebar";
import SiteHeader from "./components/header/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Professional dashboard layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white antialiased">
        <div className="flex">
          {/* Sidebar */}
          <aside className="fixed left-0 top-0 h-screen w-60 border-r border-gray-200 bg-white overflow-y-auto">
            <Sidebar />
          </aside>

          {/* Main Section */}
          <div className="flex-1 ml-60">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
              <SiteHeader />
            </header>

            {/* Page Content */}
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
