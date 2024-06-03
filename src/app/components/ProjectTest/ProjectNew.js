import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@react-hook/window-size";
import styles from "./projectnew.module.css";

gsap.registerPlugin(ScrollTrigger);

const ProjectNew = () => {
  const cardsRef = useRef([]);
  const [windowWidth, windowHeight] = useWindowSize();
  const projectData = [
    {
      img: "/Container6/1.png",
      title: "NEXWAVE",
      desc: "NEXWAVE IS A comprehensive WEBSITE THAT OFFERS services, including digital strategy, development, marketing, and designing",
      link: "https://nexwave-may.vercel.app/",
      showLink: true,
    },
    {
      img: "/Container6/1.png",
      title: "BEACON",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "",
      showLink: false,
    },
    {
      img: "/Container6/1.png",
      title: "BEACON UAE",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "",
      showLink: false,
    },
    {
      img: "/Container6/1.png",
      title: "NEXWAVE",
      desc: "NEXWAVE IS A comprehensive WEBSITE THAT OFFERS services, including digital strategy, development, marketing, and designing",
      link: "",
      showLink: false,
    },
    {
      img: "/Container6/1.png",
      title: "BEACON",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "",
      showLink: false,
    },
    {
      img: "/Container6/1.png",
      title: "BEACON UAE",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "",
      showLink: false,
    },
  ];

  // useEffect(() => {
  //   const elements = cardsRef.current;

  //   elements.forEach((card, index) => {
  //     const direction = index % 2 === 0 ? -1 : 1; // Determine the direction based on index

  //     const timeline = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: card,
  //         scrub: true,
  //         start: "top bottom",
  //         end: "bottom top",
  //         onUpdate: (e) => {
  //           const progress = Math.min(Math.max(e.progress, 0), 1);
  //           const offset = direction * (100 * progress);
  //           gsap.set(card, { x: `${offset}%` });
  //         },
  //       },
  //     });

  //     return () => {
  //       timeline.kill();
  //     };
  //   });
  // }, [windowWidth, windowHeight]);

  return (
    <div id="project" className={styles.container}>
      <h5 className="workPhilosophyHeading text-center mb-14">PROJECT</h5>
      <p className="projectDesc mb-16">
        Our expertly crafted website seamlessly combines stunning web design and
        intuitive user experience, ensuring optimal responsiveness across all
        devices. Experience the perfect blend of aesthetic appeal and
        user-friendly functionality.
      </p>
      <main className={styles.cards}>
        {projectData.map((project, index) => (
          <section key={index} className={styles.card}>
            <div
              className={styles.imgContainer}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <Image
                src={project.img}
                alt={project.title}
                className={styles.image}
                priority
                unoptimized
                width={100}
                height={100}
              />
            </div>
            <div className={styles.text}>
              <h3 className="cardTitle">{project.title}</h3>
              <p className={`${styles.desc} cardDesc`}>{project.desc}</p>
              {project.showLink && (
                <div className="buttonContainer">
                  <a
                    href={project.link}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </a>
                </div>
              )}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default ProjectNew;
