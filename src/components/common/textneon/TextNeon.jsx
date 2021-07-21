import "./TextNeon.css";
import React from "react";

// Fonts: lasenter  clipneon  moon
export const TextNeon = ({ animation, text, font, size }) => {
  const animationfont = `animation-${font}`
  return (
    <div className="">
      <div style={{ fontSize: `${size}vw` }} className={`neon ${font} ${animation && animationfont}`}>
        {text}
      </div>
    </div>
  );
};
