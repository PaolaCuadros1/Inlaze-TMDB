import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import BootstrapClient from "@/components/BootstrapClient/BootstrapClient"
import Nav from "@/components/Layout/Nav/Nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QUICKBET",
  description: "Quickbet Movies",
  authors: [ { name: 'Lizeth Paola Cuadros Olarte <paola.cuadroso@gmail.com>', url: '' } ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>
        <Nav />

        {children}

        <BootstrapClient />
      </body>
    </html>
  );
}
