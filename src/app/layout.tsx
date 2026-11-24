import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

export const metadata: Metadata = {
  title: "Abhishek B | Mobile App Developer & Flutter Specialist",
  description: "Senior Flutter Mobile Application Developer specializing in cross-platform iOS & Android engineering, Firebase architecture, IoT integrations, and responsive digital experiences.",
  keywords: ["Abhishek B", "Flutter Developer", "Mobile App Developer", "React", "Firebase", "IoT Developer", "iOS", "Android", "Cross-Platform", "India Developer"],
  authors: [{ name: "Abhishek B" }],
  creator: "Abhishek B",
};

export const viewport: Viewport = {
  themeColor: "#0c0d0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#0c0d0e] text-zinc-100 selection:bg-[#3ecf8e] selection:text-black relative min-h-screen">
        {/* Static Background Grid */}
        <div className="fixed inset-0 bg-grid-cyber pointer-events-none opacity-80 -z-30" />

        {/* Interactive Mouse-Following Background Lighting */}
        <InteractiveBackground />

        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
