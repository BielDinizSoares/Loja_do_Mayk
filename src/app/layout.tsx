// Desenvolvido por [Danilo Da Silva Batista] - https://github.com/kovarike
// Este código foi criado/alterado por mim.

import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "../../node_modules/sonner/dist/index";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";







const roboto = Roboto({
  variable: "--font-Roboto",
  subsets: ["latin"],
  weight: "400"
})

const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  
  title: {
    default: "MaykeShop ",
    template: "%s | MaykeShop",
  },
  
 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      
      <body
        className={`${roboto.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col bg-[url('/back3.png')] bg-cover bg-center h-screen w-full bg-no-repeat bg-fixed`}
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm pointer-events-none z-0"></div>
        <Header />

        {children}
  
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}



