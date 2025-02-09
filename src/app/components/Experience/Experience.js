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

  const [activeIndex, setActiveIndex] = useState(null);
  const images = [
    {
      src: "/experience/nexwave1.png",
      width: 383,
      height: 55,
      alt: "nexwave",
      className: styles.nexwave,
    },
    {
      src: "/experience/m2h.png",
      width: 383,
      height: 130,
      alt: "m2h",
      className: styles.m2hLogo,
    },
    {
      src: "/experience/ProCube.png",
      width: 383,
      height: 130,
      alt: "Procube",
      className: styles.procube,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * images.length);
        } while (newIndex === prevIndex);
        return newIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className={styles.expContainer}>
        <div className={styles.expTextContainer} id="experience">
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
            pTExt="I have over 3 years of combined   experience as a software developer
            and a freelance developer."
          />
          {/* <p className={styles.expDecText}>
            I have over 3 years of combined experience as a software developer
            and a freelance developer.
          </p> */}
        </div>
        <div className={styles.logoContainer}>
          {images.map((image, index) => (
            <div key={index}>
              <Image
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
                priority
                unoptimized
                className={`${image.className} ${index === activeIndex ? styles.animateImage : ""
                  }`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Experience;
