import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abhishek B | Mobile App Developer & Flutter Specialist",
  description: "Senior Flutter Mobile Application Developer specializing in cross-platform iOS & Android engineering, Firebase architecture, IoT integrations, and responsive digital experiences.",
  keywords: ["Abhishek B", "Flutter Developer", "Mobile App Developer", "React", "Firebase", "IoT Developer", "iOS", "Android", "Cross-Platform", "India Developer"],
  authors: [{ name: "Abhishek B" }],
  creator: "Abhishek B",
  openGraph: {
    title: "Abhishek B | Mobile App Developer & Flutter Specialist",
    description: "Building production-grade, 60fps cross-platform mobile experiences with Flutter, Firebase, and IoT integrations.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
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
      <body className="antialiased bg-[#030712] text-slate-100 selection:bg-sky-500 selection:text-black relative min-h-screen">
        {/* Ambient background glow layers */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-60 -z-30" />
        <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-20 transform -translate-y-1/2" />
        <div className="fixed bottom-1/4 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-20" />
        <div className="fixed top-2/3 left-10 w-[450px] h-[450px] bg-cyan-600/8 rounded-full blur-[150px] pointer-events-none -z-20" />

        <Navbar />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
