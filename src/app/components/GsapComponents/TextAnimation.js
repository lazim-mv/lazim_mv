"use client";
import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "@studio-freight/react-lenis";
import styles from "./gsap.module.css";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ hText, pTExt, textAllign }) => {
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
    }

    const ctx1 = gsap.context(() => {
      const textElements = document.querySelectorAll(`.${styles.text}`);
      textElements.forEach((textElement) => {
        ScrollTrigger.create({
          trigger: textElement,
          start: "top 95%",
          // end: "bottom 40%",
          end: "bottom 60%",
          markers: false,
          scrub: true,
          animation: gsap.to(textElement, {
            backgroundSize: "100%",
            ease: "none",
            delay: 1.5,
          }),
        });
      });
    });

    return () => {
      if (lenis) {
        lenis.off("scroll", ScrollTrigger.update);
      }
      ctx1.revert();
    };
  }, [lenis]);

  return (
    <div>
      <h6 className={styles.expHeadingText} style={{ textAlign: textAllign }}>
        <span className={styles.text}>{hText}</span>
      </h6>
      <p
        className={`reveal-type ${styles.expDecText}`}
        data-bg-color="rgba(255, 255, 255, 0.6)"
        data-fg-color="#fff"
      >
        {pTExt}
      </p>
    </div>
  );
};

export default TextAnimation;
