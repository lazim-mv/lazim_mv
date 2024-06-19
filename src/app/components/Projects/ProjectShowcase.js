"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./projectshowcase.module.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowcase = ({ projects }) => {
  const sectionsRef = useRef([]);
  const footerRef = useRef(null);
  const lastCardRef = useRef(null);
  const heroH1Ref = useRef(null);

  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    const sections = sectionsRef.current;
    const footer = footerRef.current;
    const lastCard = lastCardRef.current;
    const heroH1 = heroH1Ref.current;

    sections.forEach((section, index) => {
      let iframes = section.querySelector(`.${styles.iframContainer}`);

      let nextSection = sections[index + 1] || lastCard;
      let endScalePoint = `top+=${
        nextSection.offsetTop - section.offsetTop
      } top`;

      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end:
            index === sections.length
              ? `+=${lastCard.offsetHeight / 2}`
              : footer.offsetTop - window.innerHeight,
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      });

      gsap.fromTo(
        iframes,
        { scale: 1 },
        {
          scale: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: endScalePoint,
            scrub: 1,
          },
        }
      );

      // Uncomment the following block to animate opacity as well
      gsap.fromTo(
        iframes,
        { opacity: 1 },
        {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: endScalePoint,
            scrub: 1,
          },
        }
      );
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "+=400vh",
      scrub: 1,
      onUpdate: (self) => {
        let opacityProgress = self.progress;
        heroH1.style.opacity = 1 - opacityProgress;
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.hero} ${styles.pinned}`}>
        <h1 ref={heroH1Ref}>
          ZenSculpted <br />
          Playground
        </h1>
      </div>

      {projects.map((project, index) => (
        <section
          key={index}
          className={`${styles.card} ${styles.pinned}`}
          ref={(el) => (sectionsRef.current[index] = el)}
        >
          <div className={styles.iframContainer}>
            <iframe
              src={project.link}
              width="1000"
              height="500"
              title={project.title}
              className={styles.iframe}
            ></iframe>
          </div>
        </section>
      ))}

      <section className={`${styles.card} ${styles.scroll}`} ref={lastCardRef}>
        <div className={styles.iframContainer}>
          <iframe
            src={projects[projects.length - 1].link}
            width="1000"
            height="500"
            title={projects[projects.length - 1].title}
          ></iframe>
        </div>
      </section>

      <section className={styles.footer} ref={footerRef}>
        <h1>Footer</h1>
      </section>
    </div>
  );
};

export default ProjectShowcase;
