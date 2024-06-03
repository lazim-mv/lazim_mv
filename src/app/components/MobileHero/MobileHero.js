"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./mobilehero.module.css";

const MobileHero = () => {
  const topH1Ref = useRef(null);
  const bottomH1Ref = useRef(null);

  return (
    <div className={styles.container} id="home">
      <h1 className={styles.heading} ref={topH1Ref}>
        SOFTWARE DEVELOPER
      </h1>
      <p className={styles.description}>
        Discover a world of captivating design, curated with passion and
        precision.
      </p>
      <h1 className={styles.name} ref={bottomH1Ref}>
        LAZIM LATHEEF
      </h1>
    </div>
  );
};

export default MobileHero;
