"use client";

import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";

const TextStagger = ({ children }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mySplitTExt = new SplitType(".split", { type: "chars" });
    let chars = mySplitTExt.chars;

    gsap.from(chars, {
      yPercent: 130,
      stagger: 0.02,
      ease: "back.out",
      duration: .5,
      scrollTrigger: {
        trigger: ".gsapTextStagger",
        start: "center 80%",
        // markers: true,
      },
    });
  });
  return (
    <div className="gsapTextStagger">
      <div className="split">{children}</div>
    </div>
  );
};

export default TextStagger;
