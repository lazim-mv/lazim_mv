"use client";
import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useLenis } from "@studio-freight/react-lenis";

const Footer = () => {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <div className={styles.footerContainer}>
      <div className={styles.links}>
        <a href="#home" onClick={() => lenis.scrollTo(`#home`, { lerp: 0.05 })}>Home</a>
        <a
          href="#experience"
          onClick={() => lenis.scrollTo(`#experience`, { lerp: 0.05 })}
        >
          Experience
        </a>
        <a
          href="#skills"
          onClick={() => lenis.scrollTo(`#skills`, { lerp: 0.05 })}
        >
          Skills
        </a>
        <a
          href="#project"
          onClick={() => lenis.scrollTo(`#project`, { lerp: 0.05 })}
        >
          Projects
        </a>
      </div>
      <div className={styles.socials}>
        <FontAwesomeIcon
          icon={faWhatsapp}
          className={`${styles.icon} ${styles.flipSlow}`}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className={`${styles.icon} ${styles.flipFast}`}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className={`${styles.icon} ${styles.flipSlow}`}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          className={`${styles.icon} ${styles.flipFast}`}
        />
      </div>
    </div>
  );
};

export default Footer;
