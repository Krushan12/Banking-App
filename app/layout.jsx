import {Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";
import  Sidebar  from "../components/Sidebar";

const inter = Inter({subsets: ["latin"], variable: "--font-inter"});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400', '700'], 
  variable: "--font-ibm-plex-serif"}); 

export const metadata = {
  title: "Celestial",
  description: "Celestial is a modern banking platform that helps you manage your finances with ease.",
  icons: {
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} flex`}

      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
