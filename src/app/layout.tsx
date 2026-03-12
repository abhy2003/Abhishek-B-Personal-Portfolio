import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abhishek B | Flutter Developer",
  description: "Portfolio of Abhishek B, a passionate Flutter Mobile Application Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans bg-[#0a0e17] text-white selection:bg-[#42A5F5] selection:text-white relative`}
      >
        {/* Dynamic mesh gradients for background inspiration */}
        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-[#42A5F5]/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 -z-10 pointer-events-none translate-x-[-20%] translate-y-[-20%]" />
        <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-[#0D47A1]/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 -z-10 pointer-events-none translate-x-[20%] translate-y-[20%]" />

        <Navbar />
        <main className="min-h-screen relative z-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
