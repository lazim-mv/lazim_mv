"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useWindowSize } from "@react-hook/window-size"; 

const ServiceImageAffect = ({
  children,
  speed = 1,
  id = "reveal",
  className,
  height,
  width,
  translateValue
}) => {
  const trigger = useRef();
  const target = useRef();

  gsap.registerPlugin(ScrollTrigger);

  const [windowWidth, windowHeight] = useWindowSize();

  useEffect(() => {
    const startY = 100;
    const endY = 50;
    const yRange = startY - endY + speed;

    const timeline = gsap.timeline({
      scrollTrigger: {
        id: id,
        trigger: trigger.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => {
          const newY = endY + e.progress * yRange;
          gsap.set(target.current, { y: newY });
        },
      },
    });

    return () => {
      timeline?.kill();
    };
  }, [id, speed, windowHeight]);

  return (
    <div ref={trigger} className={className}>
      <div
        ref={target}
        style={{ transform: "translateY(100%)", height: height, width: width }}
      >
        {children}
      </div>
    </div>
  );
};

export default ServiceImageAffect;
