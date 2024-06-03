"use client";
import React, { useEffect } from "react";
import styles from "./container1.module.css";
import Image from "next/image";
import { container1Data } from "@/app/Content/content";
import { BtnComponent, SectionDescription } from "../ButtonComponent";
import { useWindowSize } from "@/app/utils/windowSize";
import { setupScrollReveal } from "@/app/utils/revealAnimation";

const Container1 = () => {
  const { windowSize, isSmallScreen } = useWindowSize();

  return (
    <div className={`${styles.container} `}>
      <Image
        unoptimized
        src={isSmallScreen ? container1Data.mImg: container1Data.img}
        width={100}
        height={0}
        alt="ImageClients"
        className={styles.aboutImg}
      />
        {/* <SectionDescription
          sectionText={container1Data.description1}
          width="66.13756613756614vw"
          margin="6.613756613756613vw 0 0 0"
        />

        <br />
        <SectionDescription
          sectionText={container1Data.description2}
          width="66.13756613756614vw"
        /> */}
      <div className={styles.descContainer}>
        <p>
          <span className={styles.span1}>{container1Data.description1}</span>
        </p>
        <br />
        <p>
          <span className={styles.span2}>{container1Data.description2}</span>
        </p>
      </div>
      <a href="pages/About">
        <BtnComponent
          buttonText={container1Data.btnText}
          borderColor="rgba(255, 255, 255, 0.6)"
          bg="transparent"
          color="#fff"
          margin={
            isSmallScreen
              ? "5.333333333333334vw 0 0 0"
              : "1.984126984126984vw 0 0 0"
          }
        />
      </a>
    </div>
  );
};

export default Container1;
