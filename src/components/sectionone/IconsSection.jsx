import { ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";
import "./IconsSection.css";

const icons = [
  "html5",
  "npm",
  "react",
  "angular",
  "sass",
  "yarn",
  "node-js",
  "js-square",
];

const urlGif = [
  "https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif",
  "https://i.gifer.com/GlIU.gif",
  "https://i.gifer.com/4HV2.gif",
  "https://i.gifer.com/7Gt8.gif",
  "https://i.gifer.com/7tD0.gif",
  "https://i.gifer.com/h4I.gif",
  "https://i.gifer.com/81O8.gif",
];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



export const IconsSection = ({ section, numGif }) => {

  const inconsRand = () => {
    const items = icons.map((e, i) => {
      const r = randomInt(50, 120);
      const opacity = randomInt(6, 11);
      const margin = randomInt(10, 90);
      const gif = randomInt(0, urlGif.length);
      return (
        <i
          key={i}
          className={`fab fa-${e} icons_sectionthree`}
          style={{
            fontSize: `${r}px`,
            opacity: `0.${opacity}`,
            display: "block",
            width: `${r}px`,
            padding: "20px",
            marginLeft: `${margin}%`,
            backgroundImage: numGif === 'random' ? `url(${urlGif[gif]})` : `url(${numGif})`,
            // backgroundImage: `url(${numGif})`,
          }}
        />
      );
    });
    return items;
  };

  return (
    <>
      {section.map((item) => (
        <ParallaxLayer offset={item.offset} speed={item.speed}>
            {inconsRand()}
        </ParallaxLayer>
      ))}
    </>
  );
};
