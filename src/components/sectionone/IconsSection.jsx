import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import "./IconsSection.css";

const icons = ["html5", "npm", "react", "angular", "sass", "yarn", "node-js", "js-square"];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const IconsSection = ({section}) => {
  const inconsRand = () => {
    const items = icons.map((e, i) => {
      const r = randomInt(30, 150);
      const opacity = randomInt(1, 10);
      const margin = randomInt(10, 90);
      return (
        <i
          key={i}
          className={`fab fa-${e} icons_sectionthree`}
          style={{
            fontSize: `${r}px`,
            opacity: `0.${opacity}`,
            display: "block",
            width: `${r}px`,
            marginLeft: `${margin}%`,
          }}
        />
      );
    });
    return items;
  };
  
  return (
    <>
      {/* <ParallaxLayer offset={3.3} speed={-0.3} style={{ pointerEvents: 'none', opacity: 0.7 }}>
          <i className="fas fa-code icons_sectionthree" style={{ fontSize: '80px', display: 'block', width: '100px', marginLeft: '70%'}} ></i>
        </ParallaxLayer> */}

      <ParallaxLayer offset={section} speed={0.8}>
        {inconsRand()}
      </ParallaxLayer>

      <ParallaxLayer offset={section + .75} speed={0.5}>
        {inconsRand()}
      </ParallaxLayer>

      {/* <ParallaxLayer offset={3} speed={0.2}>
        {inconsRand()}
      </ParallaxLayer> */}

      {/* <ParallaxLayer offset={3.6} speed={-0.1}>
        {inconsRand()}
      </ParallaxLayer> */}

      {/* <ParallaxLayer offset={section + .8} speed={0.4}>
        {inconsRand()}
      </ParallaxLayer> */}
    </>
  );
};
