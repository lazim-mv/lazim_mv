"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./mobileHeader.module.css";
import { BtnComponent } from "../ButtonComponent";
import { useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";

function MobileHeader() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const menuList = [
    { text: "Home", href: "/" },
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#project" },
  ];

  const lenis = useLenis(({ scroll }) => {
    setIsMenuOpen(false);
  });

  const svgRef = useRef(null);

  useEffect(() => {
    const svgElement = svgRef.current;
    const menuToggle = gsap.timeline({ paused: true, reversed: true });

    menuToggle
      .set({}, { className: "-=closemenu" })
      .set({}, { className: "+=openmenu" })
      .to(
        ".top",
        { duration: 0.2, y: "-9px", transformOrigin: "50% 50%" },
        "burg"
      )
      .to(
        ".bot",
        { duration: 0.2, y: "9px", transformOrigin: "50% 50%" },
        "burg"
      )
      .to(
        ".mid",
        { duration: 0.2, scale: 0.1, transformOrigin: "50% 50%" },
        "burg"
      )
      .add("rotate")
      .to(".top", { duration: 0.2, y: "5" }, "rotate")
      .to(".bot", { duration: 0.2, y: "-5" }, "rotate")
      .to(
        ".top",
        { duration: 0.2, rotationZ: 45, transformOrigin: "50% 50%" },
        "rotate"
      )
      .to(
        ".bot",
        { duration: 0.2, rotationZ: -45, transformOrigin: "50% 50%" },
        "rotate"
      );

    const handleClick = () => {
      menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
    };

    svgElement.addEventListener("click", handleClick);

    return () => {
      svgElement.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      className={styles.mHeader}
      style={{
        backgroundColor: "#000",
        height: "21.333333333333336vw",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <div
        className={`mHeaderContainer ${styles.mHeaderContainer}`}
        style={{
          width: "100%",
          margin: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <a href="/">
          <div>
            <div
              className={styles.logo}
              style={{ zIndex: "9999999999", position: "relative" }}
            >
              <Image width={595} height={107} src="/hLogo.svg" alt="hlogo" />
            </div>
          </div>
        </a>

        <div
          className={styles.hamAni}
          onClick={toggleMenu}
          style={{ zIndex: "9999999999" }}
        >
          <svg
            ref={svgRef}
            id="burger"
            width="30"
            class="openmenu"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
          >
            <path class="top" d="M0 9h30v2H0z" fill="white" />
            <line
              class="mid"
              x1="0"
              y1="15"
              x2="30"
              y2="15"
              stroke="white"
              stroke-width="2"
              vector-effect="non-scaling-stroke"
            />
            <path class="bot" d="M0 19h30v2H0z" fill="white" />
          </svg>
        </div>

        <div
          className={`hMenu ${styles.hMenu}`}
          style={{
            height: isMenuOpen ? "100vh" : 0,
            opacity: isMenuOpen ? "1" : 0,
            transform: isMenuOpen ? "translateY(0)" : "translateY(-4.8vw)",
            transition:
              "transform 800ms ease 0s, height 800ms ease 0s, opacity 800ms ease 0s",
          }}
        >
          {menuList.map((item, index) => (
            <a
              key={index}
              className={`linksWrapper linksText ${
                pathname !== undefined &&
                pathname !== null &&
                pathname !== "" &&
                pathname === item.href
                  ? "active"
                  : ""
              } ${styles.linksWrapper} ${styles.linksText}`}
              href={item.href}
              style={{
                transform: isMenuOpen ? "translateY(0)" : "translateY(-100vw)",
              }}
              onClick={() => lenis.scrollTo(`${item.href}`, { lerp: 0.05 })}
            >
              {item.text}
            </a>
          ))}

          <a href="/" style={{ display: isMenuOpen ? "block" : "none" }}>
            <BtnComponent
              buttonText="Get in Touch"
              header={true}
              bg="#A0153E"
              arrow={true}
              color="#ffffff"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
