import React, { useState } from "react";
import styles from "./work1.module.css";
import { SectionName } from "../ButtonComponent";
import Image from "next/image";

const Work1 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const workData = [
    {
      keyWord: "Innovation",
      phrase:
        "I constantly seek out new and better ways to solve problems and improve our processes, ensuring that innovation is at the heart of everything I do",
      img: "/work/innovation1.jpg",
    },
    {
      keyWord: "Collaboration",
      phrase:
        "I believe that the best results come from working together, leveraging diverse skills and perspectives to achieve common goals.",
      img: "/work/collaboration.jpg",
    },
    {
      keyWord: "Integrity",
      phrase:
        "My actions are guided by a strong sense of ethics and honesty, building trust with clients and partners through transparency and accountability.",
      img: "/work/integrity.jpg",
    },
    {
      keyWord: "Excellence",
      phrase:
        "I am committed to delivering the highest quality in all my endeavors, striving for excellence in every detail and exceeding expectations.",
      img: "/work/excellence.jpg",
    },
    {
      keyWord: "Adaptability",
      phrase:
        "In a rapidly changing world, I stay agile and flexible, ready to pivot and embrace new challenges and opportunities with a proactive mindset.",
      img: "/work/Adaptability.jpg",
    },
    {
      keyWord: "Resilience",
      phrase:
        "I face challenges head-on with determination and perseverance, bouncing back stronger from setbacks and continuously moving forward.",
      img: "/work/resilience.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <SectionName sectionText="WORK PHILOSOPHY" textAllign="center" />
      <div className={styles.cards}>
        {workData.map((data, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={` ${styles.card} ${
              hoveredIndex !== null && hoveredIndex !== index
                ? styles.notHovered
                : ""
            }`}
          >
            <div className={styles.keywordWrapper}>
              <div
                className={`${styles.imgContainer} ${
                  styles[`imgContainer${index + 1}`]
                }`}
              >
                <Image
                  src={data.img}
                  unoptimized
                  width={100}
                  height={0}
                  alt="ImageClients"
                />
              </div>
              <div className={styles.zIndexCheck}>
                <h5 className={styles.keywords}>{data.keyWord}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work1;

// 
