"use client";
import React, { useEffect, useState } from "react";
import styles from "./container7.module.css";
import { BtnComponent, SectionName, SectionTitle } from "../ButtonComponent";
import { container7Data } from "@/app/Content/content";
import Image from "next/image";
import { useWindowSize } from "@/app/utils/windowSize";
import fetchDataAndExport, { urlFor } from "@/app/api/blog";
import Link from "next/link";

const Container7 = ({ header, blogPage }) => {
  // const cardData = container7Data.cardData;
  const { windowSize, isSmallScreen } = useWindowSize();

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchDataAndExport();
        setBlogData(data);

        console.log("Fetched data in component:", data);
      } catch (error) {
        console.error("Error in component:", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <SectionName sectionText={container7Data.sectionName} />
      <div className={styles.tittle}>
        <SectionTitle
          sectionText={
            blogPage
              ? "Related Insights"
              : header
              ? ""
              : container7Data.sectionTitle
          }
        />
        {!isSmallScreen && !header && (
          <a href="pages/HeaderBlog">
            <BtnComponent
              buttonText={container7Data.btnText}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
            />
          </a>
        )}
      </div>
      <div
        className={styles.cards}
        style={{
          flexDirection:
            (isSmallScreen && header) || (isSmallScreen && blogPage)
              ? "column"
              : "row",
        }}
      >
        {blogData.map((data, index) => (
          <Link
            href={{
              pathname: "/pages/Blogs",
              search: `?search=${JSON.stringify(data)}`,
            }}
            target="_blank"
            onClick={() => console.log("Link clicked:")}
            key={index}
          >
            <div className={styles.card}>
              <div
                className={styles.imgContainer}
                style={{
                  width: (isSmallScreen && header) || (isSmallScreen && blogPage) ? "87.2vw" : "",
                  height: (isSmallScreen && header) || (isSmallScreen && blogPage) ? "73.33333333333333vw" : "",
                }}
              >
                <Image
                  unoptimized
                  src={urlFor(data.titleImage).url()}
                  width={100}
                  height={0}
                  alt="blogImage"
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.content}>
                <h6>{data.title}</h6>

                <p className={styles.readMore}>{container7Data.btnText1}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {isSmallScreen && !header && (
        <div className={styles.btnCenter}>
          <a href="pages/HeaderBlog">
            <BtnComponent
              buttonText={container7Data.btnText}
              borderColor="rgba(255, 255, 255, 0.6)"
              bg="transparent"
              color="#fff"
              arrow={true}
              margin="0 auto"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Container7;
