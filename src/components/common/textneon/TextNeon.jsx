import "./TextNeon.css";
import React from "react";

// Fonts: lasenter  clipneon  moon
export const TextNeon = ({ animation, text, font, size }) => {
  const animationfont = `animation-${font}`
  return (
    <div className="neon">
      <div style={{ fontSize: `${size}vw` }} className={`${font} ${animation && animationfont}`}>
        {text}
      </div>
    </div>
  );
};
