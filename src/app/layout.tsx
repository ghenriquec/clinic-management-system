import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/components/Sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinica Vale Viver",
  description: "Protótipo de interface administrativa para clínicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
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
