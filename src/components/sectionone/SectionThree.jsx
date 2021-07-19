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

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

export const SectionThree = ({ parallax }) => {
  const [state, setstate] = useState(parallax);

  const [isDisabled, setDisabled] = useState(true);

  const handleToggleGlitch = () => {
    setDisabled(!isDisabled);
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
          // display: "flex",
          // flexDirection: "row",
          // // alignItems: "center",
          // justifyContent: "center",
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
          <div className="card-proyects-items">
            {PROJECTS.map((item, i) => {
              return (
                <div className="card-proyects-item" key={i}>
                  <div className="card-proyects-img-container">
                    <img
                      className="card-proyects-img"
                      onMouseEnter={() => onMouseEnter(true)}
                      onMouseLeave={() => onMouseLeave(false)}
                      src={item.image}
                      alt="head"
                      style={{ width: "100px" }}
                    />
                  </div>

                  <div>
                    <GlitchSquiggly onHover={true}>
                      <h2
                        className="titleMirror"
                        style={{ marginBottom: 0, padding: 0 }}
                      >
                        {item.title}
                      </h2>
                    </GlitchSquiggly>

                    <GlitchClip onHover={true}>
                      <p className="titleMirror" style={{ margin: 0, padding: 0 }}>{item.subtitle}</p>
                    </GlitchClip>
                  </div>
                  <div className="card-proyects-a">
                    <a href={item.github} rel="noreferrer" target="_blank">
                      <img
                        className="titleMirror mark shake"
                        src={githubmark}
                        alt="githubmark"
                      />
                    </a>
                    {/* <a href={item.demo} rel="noreferrer" target="_blank">
                      <p className="titleMirror mark">DEMO</p>
                    </a> */}
                    {item.title === "GO TO HELL WITH...CANVAS!!!" ? (
                      <a href={item.demo} rel="noreferrer" target="_blank">
                        <img
                          className="titleMirror mark shake"
                          src={playmark}
                          alt="githubmark"
                        />
                      </a>
                    ) : (
                      <a href={item.demo} rel="noreferrer" target="_blank">
                        <img
                          className="titleMirror mark shake"
                          src={playmark}
                          alt="githubmark"
                        />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};
