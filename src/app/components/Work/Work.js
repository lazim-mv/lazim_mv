"use client";
import React, { useEffect } from "react";
import { gsap, TimelineMax, Elastic, Power1 } from "gsap";
import styles from "./work.module.css";
import { SectionName } from "../ButtonComponent";
import { ScrollTrigger } from "gsap/all";
import TextAnimation from "../GsapComponents/TextAnimation";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
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
        <div className={styles.workDescContainer}>
          <h5 className="expDecText text-2xl mt-4">
            Consciously looking for those moments, internalizing them and
            learning from them gets me excited in a way that I just need to do
            this for the rest of my life.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Work;
