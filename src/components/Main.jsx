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
import { SectionOne } from "./sections/SectionOne";
import { SectionTwo } from "./sections/SectionTwo";
import { SectionThree } from "./sections/SectionThree";
import { Contact } from "./sections/Contact";
import { IconsSection } from "./sections/IconsSection";

// const d = document.getElementById("game");

// Fonts: lasenter  clipneon  moon


export const Main = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const widthDis = useRef(width)
  const parallax = useRef();

  console.log(width)

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
          speed={widthDis.current < 750 ? 0.01 : 0.5}
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
          offset={widthDis.current < 750 ? 0.001 : 0.5}
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
        
      <IconsSection
        section={[
          { offset: 3.4, speed: 0.5 },
          { offset: 3.75, speed: 1 },
        ]}
        numGif='random'
      />
       
        <SectionTwo />

        <SectionThree />

        <Contact />
      </Parallax>
    </div>
  );
};
