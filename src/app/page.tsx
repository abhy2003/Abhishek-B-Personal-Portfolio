import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-24 pb-24">
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Contact />
    </div>
  );
}
