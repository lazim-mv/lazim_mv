"use client";
import React from "react";
import styles from "./mobilehero.module.css";
import TextRevealUp from "../GsapComponents/TextRevealUp";

const MobileHero = () => {
  return (
    <div className={styles.container} id="home">
      <TextRevealUp heroText="Software" />
      <TextRevealUp heroText="Developer" />
      <TextRevealUp heroDesc="Discover a world of captivating design, curated with passion and precision" />

      <TextRevealUp heroText="Lazim" />
      <TextRevealUp heroText="Latheef" />
    </div>
  );
};

export default MobileHero;
