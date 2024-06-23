"use client";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import BurnInText from "./components/GsapComponents/BurnInText";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import MobileHero from "./components/MobileHero/MobileHero";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import AnimatedSections from "./components/Tests/Test";
import TextAnimation from "./components/Tests/Test";
import Test2 from "./components/Tests/Test2";
import Work from "./components/Work/Work";
import Work1 from "./components/Work/Work1";

export default function Home() {
  return (
    <main>
      <div className="videoBg">
        <video
          className="videoBackground pt-3"
          autoPlay
          loop
          muted
          loading="lazy"
        >
          <source src="/2.mp4" type="video/mp4" autoPlay />
          Your browser does not support the video tag.
        </video>
        <Header />
        <MobileHeader />
        <Hero />
      </div>
      <MobileHero />
      <Experience />

      <Skills />
      <Work1 />
      <Test2 />

      <Contact />
      <Footer />
      {/* <BurnInText /> */}
    </main>
  );
}
