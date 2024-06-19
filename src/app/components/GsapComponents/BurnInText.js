// BurnInText.js
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import styles from "./gsap.module.css";

const BurnInText = ({ text1, text2, className }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const burnIn = () => {
      const text = new SplitType(textRef.current, { types: "chars" });
      const chars = shuffle(text.chars);

      let tl = gsap.timeline();
      tl.to(
        chars,
        {
          duration: 1.5,
          stagger: 0.02,
          autoAlpha: 1,
          y: 0,
          textShadow: "0px 0px 0px rgb(255, 255, 255)",
          color: "#fff",
        },
        "frame1"
      );
    };

    // Shuffle function
    const shuffle = (array) => {
      let currentIndex = array.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    };

    burnIn();
  }, []);

  return (
    <section>
      <h1
        className={` ${className}`}
        style={{ color: "transparent" }}
        ref={textRef}
      >
        {text1}
        <br />
        {text2 ? text2 : ""}
      </h1>
    </section>
  );
};

export default BurnInText;
