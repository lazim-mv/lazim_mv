"use client";
import React from "react";
import styles from "./container4.module.css";
import Spline from "@splinetool/react-spline";

import {
  BtnComponent,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";
import { useWindowSize } from "@/app/utils/windowSize";

const Container4 = () => {
  const { windowSize, isSmallScreen } = useWindowSize();

  return (
    <div className={styles.container}>
      <div className={styles.widthAdjust}>
        <div className={styles.splineObject}>
          <Spline scene="https://prod.spline.design/eaoXum74o6-cbhF4/scene.splinecode" />
        </div>
      </div>
      <div className={styles.content}>
        <SectionTitle
          sectionText="artificial intelligence technologies"
          padding="0 0 1.3227513227513228vw 0"
        />
        <SectionDescription
          sectionText="At the heart of innovation, Nexwave leverages Artificial Intelligence's power to redefine digital solution landscapes. Our AI-driven technologies optimize processes, enhance user experiences, and pioneer new interaction paradigms, empowering your digital products to be more intuitive, efficient, and engaging."
          padding="1.984126984126984vw"
          width="35.550925925925924vw"
        />
        <BtnComponent
          buttonText="Know More"
          borderColor="rgba(255, 255, 255, 0.6)"
          bg="transparent"
          color="#fff"
          width={isSmallScreen ? "34vw" : "14vw"}
        />
      </div>
    </div>
  );
};

export default Container4;
