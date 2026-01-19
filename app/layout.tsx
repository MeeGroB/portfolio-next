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
        {children}
      </body>
    </html>
  );
}
