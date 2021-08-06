import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import "./SectionThree.css";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import { CardPhoto } from "../common/cardpage/CardPhoto";
// import { ChangeIcons } from "./ChangeIcons";

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];


export const SectionThree = () => {
  return (
    <>
      <ParallaxLayer
        offset={3.4}
        speed={-0.1}
        style={{
          backgroundImage: "url(cartelx.gif)",
          backgroundPosition: "center 0%",
          backgroundSize: "contain",
        }}
      >
        <div className="card-proyects-container">
          <GlitchSquiggly
            style={{ margin: "60px 20px", padding: 0 }}
          >
            <h1
              className="titleMirror proyectsTitle"
              style={{ margin: 0, padding: 0 }}
            >
              Proyects & Demos
            </h1>
          </GlitchSquiggly>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3.4}
        speed={0.2}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
        }}
      >
        <CardPhoto />
      </ParallaxLayer>
    </>
  );
};
