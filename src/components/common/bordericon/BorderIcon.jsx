import React from "react";
import "./BorderIcon.css";

export const BorderIcon = ({icon, link}) => {
  return (
    <div className="animated-box in social-icons">
      <a href={link}  target="_blank"  rel="noreferrer"><h1>{icon}</h1></a>
    </div>
  );
};
