"use client"
import React from "react";
import styles from "./container5.module.css";
import { BtnComponent, SectionName, SectionTitle } from "../ButtonComponent";
import { container5Data } from "@/app/Content/content";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";

const Container5 = () => {
  const cardData = container5Data.cardData;
  const { windowSize, isSmallScreen } = useWindowSize();

  return (
    <div className={styles.container}>
      <SectionName sectionText={container5Data.sectionName} />
      <div className={styles.tittle}>
        <SectionTitle sectionText={container5Data.sectionTitle} />
        {!isSmallScreen && <BtnComponent
          buttonText={container5Data.btnText}
          borderColor="rgba(255, 255, 255, 0.6)"
          bg="transparent"
          color="#fff"
          arrow={true}
        />}
      </div>
      <div className={styles.cards}>
        {cardData.map((data, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.container5Img}>
              <Image
                unoptimized
                src={data.img}
                width={100}
                height={0}
                alt="ImageClients"
              />
            </div>
            <div className={styles.cardHeadingAndButton}>
              <h6>{data.cardHeading}</h6>
              <BtnComponent
                buttonText={data.btnText}
                borderColor="rgba(255, 255, 255, 0.6)"
                bg="#12171c"
                color="#fff"
                // width={isSmallScreen ? "29.333333333333332vw" : "8.862433862433862vw"}
                height="2.976190476190476vw"
                arrow={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container5;
