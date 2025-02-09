"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./container6.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container6Data } from "@/app/Content/content";
import Image from "next/image";
import { isIOS } from "@/app/utils/iosCheck";

const Container6 = () => {
  const cardData = container6Data.cardData;
  const [ios, setIos] = useState(isIOS());

  const cardRefs = useRef([]);
  useEffect(() => {
    cardRefs.current.forEach((ref) => {
      if (ref && ios) {
        ref.classList.add("iosDeviceClass");
      } else if (ref && !ios) {
        ref.classList.add("android");
      }
    });
  }, [cardData.length, isIOS]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <SectionName sectionText={container6Data.sectionName} />
        <SectionTitle
          sectionText={container6Data.sectionTitle}
          padding="1.984126984126984vw 0 0 0 "
        />
      </div>
      <div className={styles.right}>
        <div className={styles.cards}>
          {cardData.map((data, index) => (
            <div
              className={`${styles.card} `}
              ref={(ref) => (cardRefs.current[index] = ref)}
              key={index}
            >
              <SectionTitle
                sectionText={data.number}
                padding="0 0 var(--margin30) 0"
              />
              <div className={styles.imageContainer} key={index}>
                <Image
                  unoptimized
                  src={data.img}
                  width={100}
                  height={0}
                  alt="ImageClients"
                  className={styles.image}
                  // style={{
                  //   transform: `scale(${scales[index]})`,
                  //   transition: "all .8s ease",
                  // }}
                />
              </div>
              <CardHeading
                sectionText={data.cardHeading}
                padding="0 0 0.6613756613756614vw 0"
              />
              <SectionDescription sectionText={data.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container6;

