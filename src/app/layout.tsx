import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/Sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinica Vale Viver",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="app-container" style={{ display: 'flex' }}>
          <Sidebar /> 
          <div className="content-container" style={{ flexGrow: 1 }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
