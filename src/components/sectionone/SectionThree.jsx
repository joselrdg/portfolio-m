import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import "./SectionThree.css";
import { PROJECTS } from "./PROJECTS";

export const SectionThree = ({ parallax }) => {
  const [state, setstate] = useState(parallax);

  useEffect(() => {
    console.log(PROJECTS);
  }, [parallax]);
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
          <h1 className="titleMirror proyectsTitle">Proyects</h1>
          <h1 className="titleMirror proyectsTitle">&</h1>
          <h1 className="titleMirror proyectsTitle">Demos</h1>
          </div>
          <div className="card-proyects-items">
            {PROJECTS.map((item) => {
              return (
                <div>
                  <img
                    // onMouseEnter={() => onMouseEnter(true)}
                    // onMouseLeave={() => onMouseLeave(false)}
                    src={item.image}
                    alt="head"
                    style={{ width: "100px" }}
                  />
                  <div className="card-proyects-title">
                    <h2 className="titleMirror">{item.titlte}</h2>
                    <p className="titleMirror">{item.subtitle}</p>
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
