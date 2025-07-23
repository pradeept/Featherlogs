import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/nabar/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Dynamically generating title and description for every page
export const metadata: Metadata = {
  title: {
    default: "Featherlogs",
    template: "%s | Featherlogs",
  },
  description: "A Full Stack Blog Web Application.",
  authors: [{ name: "Pradeep Tarakar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='container' >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
