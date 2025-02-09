"use client";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJava,
  faJs,
  faCss3,
  faBootstrap,
  faReact,
  faAngular,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import styles from "./skills.module.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { SectionName } from "../ButtonComponent";
import RevealAffect from "../GsapComponents/RevealAffect";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsElement = skillsRef.current;

    const trigger = ScrollTrigger.create({
      trigger: skillsElement,
      start: "top 80%",
      end: "bottom 10%",
      onEnter: () => {
        skillsElement.classList.add(styles.inView);
      },
      onLeave: () => {
        skillsElement.classList.remove(styles.inView);
      },
      onEnterBack: () => {
        skillsElement.classList.add(styles.inView);
      },
      onLeaveBack: () => {
        skillsElement.classList.remove(styles.inView);
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);


  return (
    <>
      <RevealAffect>
        <div className={styles.skillsMainContainer} >
          <div id="skills" style={{ marginTop: "-3.3068783068783065vw", position: "absolute" }}></div>
          <SectionName sectionText="Skills And Tools" textAllign="center" />
          <div className={styles.skillsContainer} >
            <div className={styles.skillCircle} ref={skillsRef}>
              <div className={styles.flexCol}>
                <p className={styles.skillsText}>
                  These are some of the technologies I have used to create
                  stunning websites and solutions. From structuring content with
                  HTML5 and styling with CSS3, to bringing interactivity with
                  JavaScript and Tailwind. I build powerful and responsive user
                  interfaces using React, and robust back-end solutions with
                  Node.js .
                </p>
                <p className={styles.mobileSkillsText}>TAP HERE</p>
              </div>
              <ul className={styles.skillsIcon}>
                <li>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className={`${styles.shadow} ${styles.fab} ${styles.faHtml5}`}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faJava}
                    className={`${styles.shadow} ${styles.fab} ${styles.faJava}`}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faJs}
                    className={`${styles.shadow} ${styles.fab} ${styles.faJs}`}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCss3}
                    className={`${styles.shadow} ${styles.fab} ${styles.faCss3}`}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    className={`${styles.shadow} ${styles.fab} ${styles.faBootstrap}`}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className={`${styles.shadow} ${styles.fab} ${styles.faDatabase}`}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faReact}
                    className={`${styles.shadow} ${styles.fab} ${styles.faReact}`}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faAngular}
                    className={`${styles.shadow} ${styles.fab} ${styles.faAngular}`}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className={`${styles.shadow} ${styles.fab} ${styles.faNodeJs}`}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faPython}
                    className={`${styles.shadow} ${styles.fab} ${styles.faPython}`}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealAffect>
    </>
  );
}

export default Skills;
