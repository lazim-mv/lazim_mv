"use client";
import React, { useEffect, useRef } from "react";
import { gsap, TimelineMax, Elastic, Power1 } from "gsap";
import styles from "./work.module.css";
import { SectionName } from "../ButtonComponent";
import { ScrollTrigger } from "gsap/all";
import TextAnimation from "../GsapComponents/TextAnimation";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const myElementRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let textAnim;

    const doText = () => {
      // Ensure previous animation is reset
      textAnim && textAnim.progress(1);

      // Initialize SplitType on .textAnim element
      const splitText = new SplitType(".textAnim", {
        types: "lines",
        linesClass: styles.lineChild, // Use styles.lineChild from CSS module
      });

      // GSAP animation
      textAnim = gsap.fromTo(
        ".lineChild",
        { yPercent: 200 },
        {
          yPercent: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.5,
          onComplete() {
            splitText.revert(); // Revert SplitType changes
          },
        }
      );
    };

    // Initial animation
    doText();

    // Re-run animation on window resize
    window.addEventListener("resize", doText);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", doText);
    };
  }, []);

  return (
    <div className={`${styles.workPhilosophy} mt-52 text-center`}>
      <SectionName sectionText="WORK PHILOSOPHY" textAllign="center" />

      <TextAnimation
        hText="Elevating usability is my goal, designing experiences that span
            generations"
        textAllign="center"
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <div className={styles.workDescContainer}>
          <h5 className="expDecText text-2xl mt-4">
            Consciously looking for those moments, internalizing them and
            learning from them gets me excited in a way that I just need to do
            this for the rest of my life.
          </h5>
        </div> */}
        <div ref={myElementRef}>
          <h2 className={`textAnim ${styles.textAnim}`}>
            I tried to write something useful here but nothing comes to my mind!
            I also hate the lorem ipsum and not going to use that. If you have
            something which you want me to add, please keep it for yourself as
            it's my Pen! My Pen = My rules
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Work;
