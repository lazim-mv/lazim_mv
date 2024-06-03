"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useWindowSize } from "../utils/windowSize";

const BtnComponent = ({
  borderColor,
  bg,
  color,
  width,
  buttonText,
  margin,
  arrow,
  h5Margin,
  arrowColor,
  height,
  header,
  contact,
}) => {
  useEffect(() => {});
  const { windowSize, isSmallScreen } = useWindowSize();
  console.log(isSmallScreen,"btn")
  return (
    <div
      className={`btnContainer ${contact ? "new" : ""}`}
      style={{
        border: "0.06613756613756613vw solid " + borderColor,
        background: bg,
        color: color,
        // width: width ? width : "13.647486772486772vw",
        width: width,
        // height: height ? height : "3.6375661375661372vw",
        height: height,
        margin: margin,
        display: "inline-flex",
      }}
    >
      <h5
        style={{
          paddingTop: !isSmallScreen
            ? "0.992063492063492vw "
            : "2.666666666666667vw",

          paddingBottom: !isSmallScreen
            ? "0.992063492063492vw "
            : "2.666666666666667vw",

          paddingLeft: !isSmallScreen
            ? "2.6455026455026456vw "
            : "5.333333333333334vw",

          paddingRight: !isSmallScreen
            ? arrow
              ? "2.6455026455026456vw"
              : "0.6613756613756614vw"
            : arrow
            ? "5.333333333333334vw"
            : "2.666666666666667vw",
        }}
      >
        {buttonText}
      </h5>
      {!arrow ? (
        <Image
          className="arrow"
          src="/arrow.svg"
          alt="Asian Engineer"
          width={100}
          height={100}
          quality={100}
          priority={true}
          unoptimized
          style={{
            paddingRight: !isSmallScreen
              ? "2.666666666666667vw"
              : "5.333333333333334vw",
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const SectionName = ({ sectionText, width, textAllign }) => {
  const hyphen = String.fromCharCode(8212);
  return (
    <h4
      style={{
        paddingBottom: "1.5873015873015872vw",
        textAlign: textAllign,
        textTransform: "uppercase",
        width: width,
        borderBottom: "0.06613756613756613vw solid rgba(255, 255, 255, 0.6)",
      }}
    >
      {sectionText}
    </h4>
  );
};

const SectionTitle = ({
  sectionText,
  color,
  secondaryWordColor,
  weight,
  padding,
  width,
  textAllign,
  wordIndex,
  margin,
}) => {
  const words = (sectionText || "").split(" ");

  return (
    <h2
      style={{
        color: color,
        fontWeight: weight,
        padding: padding,
        width: width,
        textAlign: textAllign,
        margin: margin,
      }}
    >
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            color: Array.isArray(wordIndex)
              ? wordIndex.includes(index)
                ? secondaryWordColor
                : "inherit"
              : index === wordIndex
              ? secondaryWordColor
              : "inherit",
          }}
        >
          {word}{" "}
        </span>
      ))}
    </h2>
  );
};

const CardHeading = ({
  sectionText,
  color,
  weight,
  padding,
  width,
  textAllign,
  margin,
}) => {
  return (
    <h3
      style={{
        color: color,
        fontWeight: weight,
        padding: padding,
        width: width,
        textAlign: textAllign,
        margin: margin,
      }}
    >
      {sectionText}
    </h3>
  );
};

const SectionDescription = ({
  sectionText,
  color,
  weight,
  padding,
  width,
  textAllign,
  margin,
}) => {
  return (
    <p
      style={{
        color: color,
        fontWeight: weight,
        paddingBottom: padding,
        width: width,
        textAlign: textAllign,
        margin: margin,
      }}
    >
      {sectionText}
    </p>
  );
};

export {
  BtnComponent,
  SectionTitle,
  SectionName,
  SectionDescription,
  CardHeading,
};
