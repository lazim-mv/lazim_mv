"use client";
import React from "react";
import Spline from '@splinetool/react-spline';

const Test = () => {
//   useEffect(() => {
//     const canvas = document.getElementById("canvas3d");
//     const app = new Application(canvas);
//     app.load("https://prod.spline.design/1ze5pUyZVSudOJtN/scene.splinecode");
//   }, []);

  return (
    <div>
      <Spline scene="https://prod.spline.design/1ze5pUyZVSudOJtN/scene.splinecode" />
    </div>
  );
};

export default Test;
