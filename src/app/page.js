import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import MobileHero from "./components/MobileHero/MobileHero";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import TextAnimation from "./components/Tests/Test";

export default function Home() {
  return (
    <main>
      <Header />
      <MobileHeader />
      <Hero />
      <MobileHero />
      <Experience />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
