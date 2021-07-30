import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import "./SectionThree.css";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import { CardPhoto } from "../common/cardpage/CardPhoto";
import { ChangeIcons } from "./ChangeIcons";

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const urlGif = [
  "random",
  "https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif",
  "https://i.gifer.com/GlIU.gif",
  // "https://i.gifer.com/4HV2.gif",
  "https://i.gifer.com/7Gt8.gif",
  "https://i.gifer.com/7tD0.gif",
  "https://i.gifer.com/81O8.gif",
  "https://i.gifer.com/h4I.gif",
  'https://i.gifer.com/QNWp.gif'
];

export const SectionThree = () => {
  const [state, setstate] = useState(0);

  const changeColor = () => {
    setstate(state < urlGif.length - 1 ? state + 1 : 0);
    console.log(state);
  };

  return (
    <>
      <ChangeIcons numGif={urlGif[state]} />

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
            onHover={true}
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
          // alignItems: "center",
          justifyContent: "end",
          // backgroundColor: "black",
        }}
      >
        <CardPhoto />
        <button
          onClick={changeColor}
          className="fill"
          style={{
            margin: "100px",
            height: "40px",
            backgroundImage: `url(${
              urlGif[state] === "random" ? urlGif[5] : urlGif[state]
            })`,
          }}
        >
          Click Me!
        </button>
      </ParallaxLayer>
    </>
  );
};
