import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import "./SectionThree.css";
import { PROJECTS } from "./PROJECTS";
import { CardPage } from "../common/cardpage/CardPage";
import githubmark from "../assets/githubmark/GitHubLight32px.png";
import demomark from "../assets/githubmark/demo.jpg";
import playmark from "../assets/githubmark/play.png";
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
        speed={0.1}
        style={{
          display: "flex",
          flexDirection: "row",
          // alignItems: "center",
          justifyContent: "center",
          color: "red",
          backgroundColor: "#000000",
        }}
      >
        <div className="card-proyects-container">
          <div>
            <GlitchSquiggly onHover={true}>
              <h1
                className="titleMirror proyectsTitle"
                style={{ margin: 0, padding: 0 }}
              >
                Proyects
              </h1>
            </GlitchSquiggly>
            <GlitchSquiggly onHover={true}>
              <h1
                className="titleMirror proyectsTitle "
                style={{ margin: 0, padding: 0 }}
              >
                &
              </h1>
            </GlitchSquiggly>
            <GlitchSquiggly onHover={true}>
              <h1
                className="titleMirror proyectsTitle "
                style={{ margin: 0, padding: 0 }}
              >
                Demos
              </h1>
            </GlitchSquiggly>
          </div>
        </div>
            <CardPhoto />
      </ParallaxLayer>
    </>
  );
};
