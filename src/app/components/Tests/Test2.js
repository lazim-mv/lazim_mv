import React, { useState, useEffect } from "react";
import styles from "./test2.module.css";
import Image from "next/image";
import { SectionName } from "../ButtonComponent";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsToEye,
  faClose,
  faForward,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Test2 = () => {
  const projectData = [
    {
      img: "/project/1.png",
      title: "NEXWAVE",
      desc: "NEXWAVE IS A comprehensive WEBSITE THAT OFFERS services, including digital strategy, development, marketing, and designing",
      link: "https://www.nexwavedigital.com/",
      showLink: true,
      category: "office",
    },
    {
      img: "/project/2.png",
      title: "Pullysons",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "https://pullys.vercel.app/",
      showLink: true,
      category: "office",
    },
    {
      img: "/project/5.png",
      title: "Riyas Hakkim",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "https://www.riyashakkim.com/",
      showLink: true,
      category: "office",
    },
    {
      img: "/project/4.png",
      title: "Loopify",
      desc: "NEXWAVE IS A comprehensive WEBSITE THAT OFFERS services, including digital strategy, development, marketing, and designing",
      link: "https://www.loopifysubs.com/",
      showLink: true,
      category: "office",
    },
    {
      img: "/project/3.png",
      title: "ERP Dashboard",
      desc: "An ERP system for a steel manufacturing company designed to optimize operations and workflows. Built using Next.js, Ant Design, Axios, and integrated backend systems with webhooks and APIs, it features a robust BOM module for material and assembly management. Middleware ensured secure authentication and role-based access, while real-time updates enhanced communication. The solution reduced downtime, improved resource management, and delivered a scalable, industry-specific platform with a modern, responsive interface.",
      link: "https:erp.procube.cx",
      showLink: true,
      category: "office",
    },
    {
      img: "/project/6.png",
      title: "Bright Line",
      desc: "Beacon is a Management Consultants THAT OFFERS services including Business Incorporation, Financial & Accounting, Services Audit & Taxation",
      link: "https://bright-line.vercel.app/",
      showLink: true,
      category: "office",
    },
    {
      img: "/project/7.png",
      title: "Ecommerse",
      desc: "",
      link: "https://ecommerce-client-self.vercel.app/",
      showLink: true,
      category: "learning",
    },
    {
      img: "/appImages/kithr.png",
      title: "Office Kit HR",
      desc: "",
      showLink: false,
      category: "office",
      background: "#ed1f41",
    },
    {
      img: "/appImages/Demostore/demostore.png",
      title: "Ecommerce App",
      desc: "",
      showLink: false,
      category: "learning",
      background: "#ffa230",
    },
    {
      img: "/appImages/Quran/Quran.png",
      title: "Quran Translation App",
      desc: "",
      showLink: false,
      category: "learning",
      background: "#199c69",
    },
    {
      img: "/appImages/studentApp/studentApp.png",
      title: "Student App",
      desc: "",
      showLink: false,
      category: "learning",
      background: "#8f113b",
    },
  ];

  const [link, setLink] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("office");

  useEffect(() => {
    if (link) {
      gsap.fromTo(
        `.${styles.iframeView}`,
        { y: "100%" },
        { y: "33%", duration: 1, ease: "power3.out" }
      );
    }
  }, [link]);

  useEffect(() => {
    gsap.from(`.${styles.card}`, {
      opacity: 0,
      y: 90,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.cards}`,
        start: "top 60%",
        once: true,
      },
    });

    gsap.to(`.${styles.card}`, {
      opacity: 1,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: `.${styles.cards}`,
        start: "top 60%",
        once: true,
      },
    });
  }, [selectedCategory]);

  function handleIframeView(data) {
    setLink(data);
  }

  function handleClose() {
    setLink("");
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredProjects = projectData.filter(
    (project) => project.category === selectedCategory
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.forScroll} id="project"></div>
        <SectionName sectionText="Recent Projects" textAllign="center" />
        <p className={`${styles.projectDesc} gs_reveal`}>
          Our expertly crafted website seamlessly combines stunning web design
          and intuitive user experience, ensuring optimal responsiveness across
          all devices. Experience the perfect blend of aesthetic appeal and
          user-friendly functionality.
        </p>
        <div className={`${styles.categoryButtonContainer} `}>
          <div
            className={`${styles.categoryProjecct} ${selectedCategory === "learning" ? styles.selectedCategory : ""
              }`}
            onClick={() => handleCategoryChange("learning")}
          >
            Personal Projects
          </div>
          <div
            className={`${styles.categoryProjecct} ${selectedCategory === "office" ? styles.selectedCategory : ""
              }`}
            onClick={() => handleCategoryChange("office")}
          >
            Professional Projects
          </div>
        </div>
        <div className={styles.cards}>
          {filteredProjects.map((data, index) => (
            <div
              className={styles.card}
              key={index}
              onClick={(e) => handleIframeView(data.link)}
            >
              <div className={styles.imgContainer}>
                {data.showLink ? (
                  <iframe src={data.link} frameBorder="0"></iframe>
                ) : (
                  <div className={styles.realImgContainer}>
                    <Image
                      src={data.img}
                      alt="image"
                      width={383}
                      height={343}
                      style={{
                        background: data.background && data.background,
                      }}
                    />
                  </div>
                )}
                {data.showLink && (
                  <div className={styles.previewButton}>
                    <h5>Preview</h5>
                  </div>
                )}
              </div>
              <div className={styles.content}>
                <h5>{data.title}</h5>
              </div>
            </div>
          ))}
        </div>
        {link && (
          <div className={styles.iframeView}>
            <div className={styles.iframeViewWrap}>
              <div className={styles.iframeContent}>
                <h1>Beacon Dubai</h1>
              </div>
              <div className={styles.iconContainer} onClick={handleClose}>
                <FontAwesomeIcon
                  icon={faClose}
                  className={`${styles.icon} ${styles.flipSlow}`}
                />
              </div>
              <a href={link} target="_blank">
                <div
                  className={`${styles.iconContainer} ${styles.redirectLink}`}
                  onClick={handleClose}
                >
                  <FontAwesomeIcon
                    icon={faArrowsToEye}
                    className={`${styles.icon} ${styles.flipSlow}`}
                  />
                </div>
              </a>
              <iframe
                src={link}
                frameBorder="0"
                className={styles.iframe}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Test2;
