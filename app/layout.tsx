"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "./sidebar/Sidebar";
import SiteHeader from "./components/header/SiteHeader";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [active, setActive] = useState("Documentation");

  const handleActivePage = (value: string) => {
    setActive(value);
  };

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white antialiased`}>
        <div className="flex">
          <div className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 bg-white overflow-y-auto">
            <Sidebar active={active} handleActivePage={handleActivePage} />
          </div>

          <div className="flex-1 ml-64">
            <SiteHeader active={active} />
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
