import "./Main.css";
import React, {
  // useCallback,
  useRef,
} from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import { useSpring, animated as a, interpolate } from "react-spring";

import basecity from "./assets/imgcity/base.png";
import basecityd from "./assets/imgcity/based.png";
import fondbaseb from "./assets/imgcity/fondbaseb.png";
import fondbasebd from "./assets/imgcity/fondbasebd.png";
import { SectionOne } from "./sectionone/SectionOne";
import { SectionTwo } from "./sectionone/SectionTwo";
import { SectionThree } from "./sectionone/SectionThree";
import { Contact } from "./sectionone/Contact";
import { IconsSection } from "./sectionone/IconsSection";
import { ChangeIcons } from "./sectionone/ChangeIcons";

// const d = document.getElementById("game");

// Fonts: lasenter  clipneon  moon

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export const Main = () => {
  const parallax = useRef();

  // const hidecanvas = () => {
  //   d.style.display = d.style.display == "none" ? "block" : "none";
  // };
  return (
    <div
      style={{ width: "100%", height: "100%", background: "#253237" }}
      // onMouseMove={onMove}
    >
      <Parallax ref={parallax} pages={5} className="my-class-name">
        <ParallaxLayer
          offset={3}
          speed={1}
          // style={{ backgroundColor: "black" }}
        />
        <ParallaxLayer
          offset={0}
          speed={-0.6}
          factor={1}
          style={{
            backgroundImage: "url(fondcity.jpg)",
            backgroundPosition: "center 0%",
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer offset={0} speed={-0.8}>
          <SectionOne />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0}
          style={{ backgroundColor: "black" }}
        />

        <ParallaxLayer
          offset={1 - 0.04}
          speed={0.1}
          factor={1}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={fondbaseb}
            style={{ width: "100%" }}
            alt="futuristic city"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1 - 0.001}
          speed={0.01}
          factor={1}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={fondbasebd}
            style={{ width: "100%" }}
            alt="futuristic city"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1 - 0.01}
          speed={0.3}
          factor={3}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            float: "right",
          }}
        >
          <img src={basecityd} alt="futuristic city" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.7}
          speed={-0.1}
          factor={3}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <img src={basecity} className="basecityI" alt="futuristic city" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.8}
          speed={-0.2}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            backgroundColor: "#000000",
          }}
        />

        <IconsSection section={[{ offset: 2.75, speed: 0.7 }]} numGif='random'/>
        
        <SectionTwo />
      <IconsSection
        section={[
          { offset: 3, speed: 0.5 },
          { offset: 3.75, speed: 1 },
        ]}
        numGif='random'
      />
       

        <SectionThree />

        <Contact />
      </Parallax>
    </div>
  );
};
