"use client";

import React, { useState } from "react";

import Image from "next/image";
import styles from "./container8.module.css";
import {
  CardHeading,
  SectionDescription,
  SectionName,
  SectionTitle,
} from "../ButtonComponent";
import { container8Data } from "@/app/Content/content";

const Container8 = () => {
  const cardData = container8Data.faqData;
  const initialVisibleState = Array(cardData.length).fill(false);
  initialVisibleState[0] = true;
  const [answerVisible, setAnswerVisible] = useState(initialVisibleState);

  const handleClick = (index) => {
    setAnswerVisible((prevVisible) => {
      const newVisible = Array(cardData.length).fill(false);
      newVisible[index] = !prevVisible[index];
      return newVisible;
    });
  };

  return (
    <div className={styles.container7}>
      <div className={styles.faqContainer}>
        <div className={styles.title}>
          <SectionTitle sectionText="Common Questions" />
        </div>

        <div className={styles.secondCol}>
          {cardData.map((data, index) => (
            <div
              className={styles.faqDataCard}
              onClick={() => handleClick(index)}
              key={index}
            >
              <div className={styles.questionAnswerContainer}>
                <div className={styles.questionContainer}>
                  <CardHeading sectionText={data.question} weight="500" />
                  <div
                    className={styles.plusIcon}
                    onClick={() => handleClick(index)}
                    style={{
                      transform: answerVisible[index]
                        ? "rotate(0deg)"
                        : "rotate(45deg)",
                      transition: "transform .5s ease",
                    }}
                  >
                    <Image
                      src="/ContactPage/4.svg"
                      width={16}
                      height={16}
                      alt="ImageFaq"
                      className={styles.openCloseIcon}
                    />
                  </div>
                </div>
                <div
                  className={`${styles.answerContainer} ${
                    answerVisible[index] ? styles.visible : ""
                  }`}
                >
                  <SectionDescription
                    sectionText={data.answer}
                    color="#58595B"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container8;
