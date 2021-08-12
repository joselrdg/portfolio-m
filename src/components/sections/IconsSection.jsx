import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
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
  // "https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif",
  "https://i.gifer.com/7Gt8.gif",
  "https://i.gifer.com/7tD0.gif",
  "https://i.gifer.com/81O8.gif",
];

// "https://i.gifer.com/GlIU.gif",
// "https://i.gifer.com/4HV2.gif",
// "https://i.gifer.com/h4I.gif",
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



  function IconsSection ({ section, numGif }) {


  const inconsRand = () => {
    const items = icons.map((e, i) => {
      const r = randomInt(50, 120);
      const opacity = randomInt(5, 11);
      const margin = randomInt(10, 90);
      const gif = randomInt(0, urlGif.length);
      const color = randomInt(0, 10)
      const styleImage = {
            fontSize: `${r}px`,
            opacity: opacity / 10,
            display: "block",
            width: `${r}px`,
            padding: "20px",
            marginLeft: `${margin}%`,
            backgroundImage: `url(${urlGif[gif]})`,
            // backgroundImage: `url(${numGif})`,
          }
          const styleColor = 
            {
              fontSize: `${r}px`,
              opacity: opacity / 10,
              display: "block",
              width: `${r}px`,
              padding: "20px",
              marginLeft: `${margin}%`,            
          }
      return (
        <i
          key={i}
          className={`fab fa-${e} icons_sectionthree`}
          style={
            color < 6 ? styleImage : styleColor
          }
        />
      );
    });
    return items;
  };

  return (
    <>
      {section.map((item, i) => (
        <ParallaxLayer key={i} offset={item.offset} speed={item.speed}>
            {inconsRand()}
        </ParallaxLayer>
      ))}
    </>
  );
};

export default IconsSection;
