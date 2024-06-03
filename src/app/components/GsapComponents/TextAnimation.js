"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import styles from "./gsap.module.css";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ hText, pTExt }) => {
  useEffect(() => {
    // Ensure the code only runs on the client
    if (typeof window !== "undefined") {
      const splitTypes = document.querySelectorAll(".reveal-type");

      splitTypes.forEach((char) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        // Debug logs
        console.log("Element:", char);
        console.log("Background color:", bg);
        console.log("Foreground color:", fg);

        const text = new SplitType(char, { types: "chars" });

        console.log("Split text chars:", text.chars);

        gsap.fromTo(
          text.chars,
          {
            color: bg,
          },
          {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
              trigger: char,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
              markers: false,
              toggleActions: "play play reverse reverse",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div>
      <h6
        className={`reveal-type ${styles.expHeadingText}`}
        data-bg-color="rgba(255, 255, 255, 0.2)"
        data-fg-color="#fff"
      >
        {hText}
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
