"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./header.module.css";
import {
  BtnComponent,
  CardHeading,
  SectionDescription,
  SectionTitle,
} from "../ButtonComponent";
import { useLenis } from "@studio-freight/react-lenis";

function Header() {
  const pathname = usePathname();

  const menuList = [
    { text: "Home", href: "/" },
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#project" },
  ];

  const handleDownloadResume = () => {
    // setIconRotating(true);
    const resumeFilePath = "/LazimLatheef.pdf";
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.download = "MohammedLazimLatheef.pdf";
    link.click();
  };


  const lenis = useLenis(({ scroll }) => {});

  return (
    <>
      <div className={`${styles.hContainer} ${styles.bgWhite}`}>
        <a href="/">
          <div className={styles.logoContainer}>
            <Image width={595} height={107} src="/hLogo.svg" alt="hlogo" />
            {/* <h3 className={`${styles.logo} noto`}>Lazim Latheef</h3> */}
          </div>
        </a>
        <div className={styles.hMenuContainer}>
          <div className={styles.hMenu}>
            <ul className={styles.hUlList}>
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className={`${styles.huListTransitionWrapper} `}
                >
                  <a
                    href={item.href}
                    className={`${
                      pathname !== undefined &&
                      pathname !== null &&
                      pathname !== "" &&
                      pathname === item.href
                        ? styles.activee
                        : ""
                    }`}
                    onClick={() =>
                      lenis.scrollTo(`${item.href}`, { lerp: 0.05 })
                    }
                  >
                    <div>{item.text}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a onClick={handleDownloadResume}>
          <BtnComponent
            buttonText="Resume"
            borderColor="rgba(255, 255, 255, 0.6)"
            bg="transparent"
            color="#fff"
            arrow="none"
          />
        </a>
      </div>
    </>
  );
}

export default Header;
