import React, { useEffect, useRef, useState } from "react";
import "./SectionTwo.css";
import { ParallaxLayer } from "@react-spring/parallax";
import { EyesInterval } from "../common/Eyes/EyesInterval";
import { MirrorText } from "../common/MirrorText/MirrorText";
import { Head } from "../common/head/Head";

export const SectionTwo = () => {
  return (
    <>
      <EyesInterval />

      <ParallaxLayer
        offset={2}
        speed={0.1}
        style={
          {
            // display: "flex",
            // flexDirection: "row",
            // alignItems: "center",
            // justifyContent: "center",
          }
        }
      >
        <div className="contain-section-two">
          {/* <div className="title">
            <MirrorText text="LOOKING FOR" size={4} />
            <MirrorText text="WEB DEVELOPER? " size={4} />
          </div>
          <div style={{maxWidth: "30%"}}>
            <MirrorText text="Hey, I'm José Luis Rodríguez ; )" size={2} />
            <MirrorText
              text="I'm a web developer and programmer living in Madrid, España."
              size={2}
            />
            <MirrorText text="Inovation is my passion." size={2} />
            <a>Let's talk.</a>
          </div> */}

          <Head />

          <div className="title titleMirror">
            <h1>LOOKING FOR A</h1>
            <h1>WEB DEVELOPER?</h1>
            <h3>Hey, I'm José Luis Rodríguez ; )</h3>
            <h3>I'm a web developer and programmer</h3>
            <h3>Living in Madrid, España.</h3>
            <h3>Inovation is my passion.</h3>
            <a>Let's talk.</a>
          </div>
        </div>
      </ParallaxLayer>
    </>
  );
};
