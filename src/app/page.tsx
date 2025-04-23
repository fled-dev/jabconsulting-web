import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Qualities from "@/components/sections/Qualities";
import Contact from "@/components/sections/Contact";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <About />
      <Services />
      <Qualities />
      <Contact />
      <FAQ />
    </main>
  );
}
