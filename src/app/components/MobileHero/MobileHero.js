"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./mobilehero.module.css";
import BurnInText from "../GsapComponents/BurnInText";

const MobileHero = () => {
  const topH1Ref = useRef(null);
  const bottomH1Ref = useRef(null);

  return (
    <div className={styles.container} id="home">
      {/* <h1 className={styles.heading} ref={topH1Ref}>
        SOFTWARE DEVELOPER
      </h1> */}
      <BurnInText text1="SOFTWARE" text2="DEVELOPER" className={styles.heading} />
      <p className={styles.description}>
        Discover a world of captivating design, curated with passion and
        precision.
      </p>
      <BurnInText
        text1="Discover a world of captivating design, curated with passion and precision"
        // text2=""
        className={styles.description}
      />
      {/* <h1 className={styles.name} ref={bottomH1Ref}>
        LAZIM LATHEEF
      </h1> */}
      <BurnInText text1="LAZIM" text2="LATHEEF" className={styles.name} />
    </div>
  );
};

export default MobileHero;
