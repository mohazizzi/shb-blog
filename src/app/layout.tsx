import "./global.scss";
import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "SHB Architecture",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
