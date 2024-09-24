import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/commons/Header";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '/src/app/utils/fontAwesome';
import Footer from "./components/commons/Footer";
import WhatsBtn from "./components/commons/WhatsBtn";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Okamoto Beauty",
  description: "Beleza nunca foi tão fácil. Agende um horário comigo e se encante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsBtn />
      </body>
      
    </html>
  );
}
