"use client";
import React, { useEffect, useState } from "react";
import styles from "./loadinganimation.module.css";
import { CardHeading } from "../ButtonComponent";
import Image from "next/image";
import gsap from "gsap";

const LoadingAnimation = ({ children }) => {
  const [count, setCount] = useState(0);
  const totalTime = 2500;
  const startTime = Date.now();

  useEffect(() => {
    const animateCount = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < totalTime) {
        const progress = elapsedTime / totalTime;
        const newCount = Math.round(progress * 100);
        setCount(newCount);

        requestAnimationFrame(animateCount);
      } else {
        setCount(100);
      }
    };

    animateCount();

    return () => cancelAnimationFrame(animateCount);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".loadinganimation_white__Xk2Zb", {
      x: 0,
      width: "100vw",
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        
        gsap.to(".loadinganimation_logoContainer__D2L9v img", {
            filter: "brightness(0)",
            duration: 0,
            ease: "power2.inOut",
            delay: 0.6,
        });
        gsap.to(".loadinganimation_nav__AXHYk h3", {
            color: "#000",
            duration: 0,
            ease: "power2.inOut",
            delay: 1.5,
        });
      },
      onComplete: () => {
        gsap.to(".loadinganimation_nav__AXHYk", {
          y: "-100%",
          duration: .6,
          ease: "power2.inOut",
        });
        gsap.to(".loadinganimation_white__Xk2Zb", {
          y: "-100%",
          duration: .6,
          ease: "power2.inOut",
        });
        gsap.to(".loadinganimation_count__IogK3", {
          y: "550%",
          duration: .6,
          ease: "power2.inOut",
        });
        gsap.to(".loadinganimation_container__qQ6yo", {
          opacity: 0,
          duration: 0.3,
          delay:0.4,
          ease: "power2.inOut",
        });
        gsap.to(".loadinganimation_child__1qOTU", {
          opacity: 1,
          duration: 0.3,
          delay:0.4,
          ease: "power2.inOut",
        });
        gsap.to(".loadinganimation_container__qQ6yo", {
          display: "none",
          duration: 0,
          delay:3.2,
          ease: "power2.inOut",
        });
      },
    });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.white}></div>
        <div className={styles.nav}>
          <div className={styles.logoContainer}>
            <Image
              src="/hLogo.svg"
              width={180}
              height={60}
              alt="ImageHeader"
              quality={100}
              priority={true}
              unoptimized
            />
          </div>
          <CardHeading sectionText="design agency curating experiences" />
        </div>
        <h1 className={styles.count}>{count}</h1>
      </div>
      <div className={styles.child}>{children}</div>
    </>
  );
};

export default LoadingAnimation;
