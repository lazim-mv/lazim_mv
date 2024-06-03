"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useWindowSize } from "@react-hook/window-size";
import { gsap } from "gsap";

import styles from "./exp.module.css";
import { SectionName } from "../ButtonComponent";
import RevealAffect from "../GsapComponents/RevealAffect";
import TextAnimation from "../GsapComponents/TextAnimation";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [width, height] = useWindowSize();

  return (
    <>
      <div id="experience" className={styles.expContainer}>
        <div className={styles.expTextContainer}>
          {/* <h5 className={styles.workPhilosophyHeading}>EXPERIENCE</h5> */}
          <SectionName sectionText="EXPERIENCE" />
          {/* <h1 className={styles.expHeadingText}>
              COMPANIES WHERE I HAVE WORKED
            </h1> */}
          {/* <div className={styles.row}>
            <div className={styles.col}>
              <TextAnimation text="COMPANIES" />
              <TextAnimation text="WHERE" />
              <TextAnimation text="I" />
              <TextAnimation text="HAVE" />
            </div>

            <TextAnimation text="WORKED" />
          </div> */}
          <TextAnimation hText="COMPANIES WHERE I HAVE WORKED" />
          <TextAnimation
            pTExt="I have over 3 years of combined experience as a software developer
            and a freelance developer."
          />
          {/* <p className={styles.expDecText}>
            I have over 3 years of combined experience as a software developer
            and a freelance developer.
          </p> */}
        </div>
        <div className={styles.logoContainer}>
          <div>
            <Image
              src="/experience/nexwave1.png"
              width={383}
              height={55}
              alt="nexwave"
              priority
              unoptimized
              className={styles.nexwave}
            />
          </div>
          <div>
            <Image
              className={styles.m2hLogo}
              src="/experience/m2h.png"
              width={383}
              height={130}
              alt="m2h"
              priority
              unoptimized
            />
          </div>
          <div>
            <Image
              src="/experience/ProCube.png"
              width={383}
              height={130}
              alt="Procube"
              priority
              unoptimized
              className={styles.procube}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
