import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Pier Chávez | Desarrollador de Software",
  description: "Portfolio profesional de Pier Chávez - Desarrollador de software con experiencia en aplicaciones web y videojuegos",
  keywords: ["desarrollador", "software", "frontend", "react", "javascript"],
  authors: [{ name: "Pier Chávez"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased`}
      >
        <div className="fixed inset-0 -z-10 h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#204ff8_100%)]"></div>
        {children}
      </body>
    </html>
  );
}
