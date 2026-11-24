import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-12 sm:gap-y-16 pb-16">
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <CtaBanner />
      <Contact />
    </div>
  );
}
