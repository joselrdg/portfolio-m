import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import "./SectionThree.css";
import { PROJECTS } from "./PROJECTS";


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];


export const SectionThree = ({ parallax }) => {
  const [state, setstate] = useState(parallax);

  useEffect(() => {
  }, []);


  const onMouseEnter = () => {
    console.log('onMouseEnter');
  } 
  const onMouseLeave = () => {
    console.log('onMouseLeave');
  }
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
            {PROJECTS.map((item, i) => {
              return (
                <div key={i}>
                  <img
                    onMouseEnter={() => onMouseEnter(true)}
                    onMouseLeave={() => onMouseLeave(false)}
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
