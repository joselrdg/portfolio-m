import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import "./SectionThree.css";
import { PROJECTS } from "./PROJECTS";
import githubmark from "../assets/githubmark/GitHubLight32px.png";
import demomark from "../assets/githubmark/demo.jpg";
import cartelgif from "../assets/cartelx.gif";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import { CardPhoto } from "../common/cardpage/CardPhoto";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

export const SectionThree = ({ parallax }) => {
  // const [state, setstate] = useState(parallax);

  const pageItem = () => {
    console.log("pageItem");
  };

  useEffect(() => {}, []);

  const onMouseEnter = () => {
    console.log("onMouseEnter");
  };
  const onMouseLeave = () => {
    console.log("onMouseLeave");
  };
  return (
    <>
      <ParallaxLayer
        offset={3}
        speed={0.2}
        style={{
          display: "flex",
          flexDirection: "row",
          // alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
          backgroundImage: "url(cartelx.gif)",
          backgroundPosition: "center 0%",
          backgroundSize: "contain",
          paddingBottom: "100px",
        }}
      >
        {/* <img
          className="headimg"
          onMouseEnter={() => onMouseEnter(true)}
          onMouseLeave={() => onMouseLeave(false)}
          src={"url(fondcity.jpg)"}
          alt="head"
        /> */}

        <div className="card-proyects-container">
          <GlitchSquiggly onHover={true} style={{ margin: 0, padding: 0 }}>
            <h1
              className="titleMirror proyectsTitle"
              style={{ margin: 0, padding: 0 }}
            >
              Proyects & Demos
            </h1>
          </GlitchSquiggly>
          {/* <GlitchSquiggly onHover={true}>
              <h1
                className="titleMirror proyectsTitle "
                style={{ margin: 0, padding: 0 }}
              >
                
              </h1>
            </GlitchSquiggly>
            <GlitchSquiggly onHover={true}>
              <h1
                className="titleMirror proyectsTitle "
                style={{ margin: 0, padding: 0 }}
              >
                
              </h1>
            </GlitchSquiggly> */}
        </div>
        <CardPhoto />
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.9}
        speed={2}
        factor={1}
        style={{
          backgroundImage: "url(bal.gif)",
          backgroundPosition: "center 0%",
          backgroundSize: "contain",
        }}
      />
    </>
  );
};
