"use client";
import React, { useEffect, useRef } from "react";
import styles from "./gsap.module.css";
import { gsap } from "gsap";
import SplitType from "split-type";

const TextRevealUp = ({ heroText, heroDesc }) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Ensure the textRef is populated before proceeding
    if (!textRef.current) return;

    // Split the text into characters using SplitType
    const myText = new SplitType(textRef.current, { types: "chars" });

    // Add the CSS module class to each character
    myText.chars.forEach((char) => {
      char.classList.add(styles.char);
    });

    // GSAP animation to reveal characters
    const tl = gsap.timeline();
    tl.to(`.${styles.char}`, {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: heroDesc ?.00000001 : 0.1,
    });

    // Return cleanup function
    return () => {
      tl.kill();
      myText.revert();
    };
  }, [heroText]);

  return (
    <div className={styles.container} id="home">
      <h1 id="my-text" ref={textRef} className={styles.animatedH1}>
        {heroText}
      </h1>
      {heroDesc && (
        <h1 className={`${styles.animatedH1} ${styles.heroDesc}`}>
          {heroDesc}
        </h1>
      )}
    </div>
  );
};

export default TextRevealUp;
