

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SideNavbar from "./Components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chakr Frontend Intern Assignment",
  description: "Submitted by Ketan Sisodiya",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.className} flex items-start justify-between'}>
        <SideNavbar />
        <main className="w-[100vw] h-[100vh] flex justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
