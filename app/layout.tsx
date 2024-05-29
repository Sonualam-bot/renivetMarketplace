import type { Metadata } from "next";
import { Inter,Fraunces,Playfair_Display,Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/molecules/navbar";

const inter = Inter({ subsets: ["latin"] });
const fraunces = Fraunces({subsets:["latin"]})
const merriweather = Merriweather({subsets:["latin"],weight:['300','400','700']})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={merriweather.className}>
      {children}
      </body>
    </html>
  );
}
