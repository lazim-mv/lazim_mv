"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./project.module.css";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionName,
} from "../ButtonComponent";
import { useWindowSize } from "@/app/utils/windowSize";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const cardsRef = useRef([]);

  const [windowSize, setWindowSize] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize(window.innerWidth);
    }
  }, [windowSize]);

  console.log(windowSize, "windwo");

  const projectData = [
    {
      img: "/project/1.png",
      title: "NEXWAVE",
      desc: "NEXWAVE IS A comprehensive WEBSITE THAT OFFERS services, including digital strategy, development, marketing, and designing",
      link: "https://www.nexwavedigital.com/",
      showLink: true,
    },
    {
      img: "/project/2.png",
      title: "BEACON Dubai",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "https://uae.bmcglobal.co/pages/WhyDubai/",
      showLink: true,
    },
    {
      img: "/project/3.png",
      title: "BEACON Saudi",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "https://ksa.bmcglobal.co/pages/WhySaudi/",
      showLink: true,
    },
    {
      img: "/project/4.png",
      title: "Loopify",
      desc: "NEXWAVE IS A comprehensive WEBSITE THAT OFFERS services, including digital strategy, development, marketing, and designing",
      link: "https://www.loopifysubs.com/",
      showLink: true,
    },
    {
      img: "/project/5.png",
      title: "Riyas Hakkim",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "https://www.riyashakkim.com/",
      showLink: true,
    },
    {
      img: "/project/6.png",
      title: "Bright Line",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "https://bright-line.vercel.app/",
      showLink: true,
    },
  ];

  const [clickedIndex, setClickedIndex] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({
    top: "50%",
    left: "50%",
  });

  const handleFullView = (index) => {
    setClickedIndex(index);
    console.log("Clicked");
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setClickedIndex(null);
    console.log("Closed");
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setPreviewPosition({ top: mouseY, left: mouseX });
  };

  const animateFrom = (elem, direction) => {
    direction = direction || 1;
    let x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -150;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.utils.toArray(".gs_reveal").forEach((elem) => {
  //     hide(elem); // assure that the element is hidden when scrolled into view

  //     ScrollTrigger.create({
  //       trigger: elem,
  //       // start: "top+=100 bottom",
  //       onEnter: () => animateFrom(elem),
  //       onEnterBack: () => animateFrom(elem, -1),
  //       onLeave: () => hide(elem), // assure that the element is hidden when scrolled into view
  //     });
  //   });
  // }, []);

  return (
    <>
      <div id="project" className={styles.container}>
        <SectionName sectionText="Project" textAllign="center" />
        <p className={`${styles.projectDesc} gs_reveal`}>
          Our expertly crafted website seamlessly combines stunning web design
          and intuitive user experience, ensuring optimal responsiveness across
          all devices. Experience the perfect blend of aesthetic appeal and
          user-friendly functionality.
        </p>
        <div className={styles.cards}>
          {projectData.map((project, index) => (
            <section
              key={index}
              className={`${styles.card} gs_reveal ${
                clickedIndex !== null && clickedIndex !== index
                  ? styles.hideCard
                  : ""
              } ${
                index % 2 === 0 ? "gs_reveal_fromLeft" : "gs_reveal_fromRight"
              }`}
              onMouseMove={handleMouseMove}
              onClick={() => handleFullView(index)}
            >
              <a
                className={styles.preview}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFullView(index);
                }}
                style={{
                  position: "absolute",
                  top: `${previewPosition.top - 100}px`,
                  left: `${previewPosition.left}px`,
                  pointerEvents: "none",
                }}
              >
                Preview
              </a>
              <div
                className={`${styles.imgContainer} ${
                  clickedIndex === index ? styles.desktopView : ""
                }`}
              >
                <a className={styles.close} onClick={handleClose}>
                  Close
                </a>

                <iframe src={project.link}></iframe>
              </div>
              <div className={styles.text}>
                <CardHeading sectionText={project.title} />
                <SectionDescription
                  sectionText={project.desc}
                  textAllign="center"
                />
                {project.showLink && (
                  <div className="buttonContainer">
                    <a
                      href={project.link}
                      className="button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BtnComponent
                        buttonText="See Website"
                        borderColor="rgba(255, 255, 255, 0.6)"
                        arrow="0"
                      />
                    </a>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
