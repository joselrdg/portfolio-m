import "./TextNeon.css";
import React from "react";


// Fonts: lasenter  clipneon  moon
export const TextNeon = ({ text, font, size }) => {
  return (
    <div className="neon">
      <div className={font} style={{fontSize: `${size}vw`}}>{text}</div>
    </div>
  );
};
