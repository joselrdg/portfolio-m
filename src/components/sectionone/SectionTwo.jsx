import React, { useEffect, useRef, useState } from "react";
import "./SectionTwo.css";
import { SmokeText } from "../common/SmokeText/SmokeText";
import { ParallaxLayer } from "@react-spring/parallax";
import { EyesInterval } from "../common/Eyes/EyesInterval";

export const SectionTwo = () => {


  return (
    <>
      <EyesInterval />


      <ParallaxLayer
        offset={1.6}
        speed={0.1}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        >
        <div className="contain-section-two">
          <div className="title">
            <h1>LOOKING FOR A</h1>
            <h1>
              WEB DEVELOPER?
            </h1>
          </div>
          <div className="subtitle">
            <h3>Hey, I'm José Luis Rodríguez ; )</h3>
            <h3>
              and I'm a web developer and programmer living in Madrid, España.
            </h3>
            <h3>Inovation is my passion.</h3>
            <a>Let's talk.</a>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};
