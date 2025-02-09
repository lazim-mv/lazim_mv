"use client";
import Image from "next/image";
import styles from "./hero.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useWindowSize } from "@react-hook/window-size";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Hero = ({ speed = 1 }) => {
  const videoRef = useRef();
  const triggerRef = useRef();
  const [width, height] = useWindowSize();
  useEffect(() => {
    const videoElement = videoRef.current;
    const triggerElement = triggerRef.current;

    gsap.fromTo(
      videoElement,
      { opacity: 1 },
      {
        // opacity: 0,
        scrollTrigger: {
          trigger: triggerElement,
          start: "bottom 100%",
          end: "100% 0%",
          // markers: true,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(videoElement, { opacity: 1 - progress });
          },
          onLeave: () => {
            gsap.set(videoElement, { display: "none" });
          },
          onEnterBack: () => {
            gsap.set(videoElement, { display: "block" });
          },
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [width, height]);
  return (
    <>
      <div className={styles.mainContainer} id="hero">
        <section className={styles.section}>
          <div className={styles.section__content}>
            <h1 className={styles.h1}>
              <span className="noto h1Span">I&lsquo;m</span>
              <span className={styles.profileName}>Mohammed Lazim Latheef</span>
            </h1>
          </div>
        </section>
        <section className={styles.section} >
          <div className={styles.section__content}>
            <h2 className={`${styles.h2} ${styles.profileName} `}>
              A Software Developer
            </h2>
            <p className={styles.p} >
              Transforming ideas into stunning, functional digital solutions.
              With over 3 years of experience in web and mobile application
              development, I specialize in creating user-centric designs and
              robust applications that drive business success. Let’s build
              something amazing together!
            </p>
            <div id="about" style={{marginTop:"9vw"}}></div>
          </div>
          <div className="some" ref={triggerRef} ></div>
        </section>
      </div>
    </>
  );
};

export default Hero;
