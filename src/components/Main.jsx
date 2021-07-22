import "./Main.css";
import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useSpring, animated as a, interpolate } from "react-spring";

import { TextNeon } from "./common/textneon/TextNeon";
import azotea from "./assets/imgcity/azoteac.png";
import estructure from "./assets/imgcity/estructura.png";
import basecity from "./assets/imgcity/base.png";
import basecityd from "./assets/imgcity/based.png";
import centrcity from "./assets/imgcity/centrcity.png";
import city from "./assets/imgcity/medicity.png";
import foncity from "./assets/imgcity/fondcity.jpg";
import fondbase from "./assets/imgcity/fondbase.png";
import fondbaseb from "./assets/imgcity/fondbaseb.png";
import fondbased from "./assets/imgcity/fondbased.png";
import fondbasebd from "./assets/imgcity/fondbasebd.png";
import pacm from "./assets/imgcity/pacm.png";
import pc1 from "./assets/imgcity/pc1.png";
import { SectionOne } from "./sectionone/SectionOne";
import { SectionTwo } from "./sectionone/SectionTwo";
import { SectionThree } from "./sectionone/SectionThree";
import { Contact } from "./sectionone/Contact";
// import { Eyes } from "./common/Eyes/Eyes";

const d = document.getElementById("game");

// Fonts: lasenter  clipneon  moon

export const Main = () => {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }));
  const parallax = useRef();

  useEffect(() => {
    d.style.display = d.style.display == "none" ? "block" : "none";
  }, []);

  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    []
  );
  const onScroll = useCallback((e) => set({ st: e.target.scrollTop / 30 }), []);

  const hidecanvas = () => {
    d.style.display = d.style.display == "none" ? "block" : "none";
    console.log("hidecanvas");
  };
  console.log(st);
  console.log(xy);
  return (
    <div
      style={{ width: "100%", height: "100%", background: "#253237" }}
      onMouseMove={onMove}
      onScroll={onScroll}
    >
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#000000" }}
        />
        <ParallaxLayer
          offset={0}
          speed={-0.8}
          factor={1}
          style={{
            backgroundImage: "url(fondcity.jpg)",
            backgroundPosition: "center 0%",
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={0}
          speed={-0.6}
          style={{ pointerEvents: "none" }}
        >
          <SectionOne />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1 - 0.04}
          speed={0.6}
          factor={1}
          style={{ pointerEvents: "none" }}
        >
          <img src={fondbaseb} style={{ width: "100%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1 - 0.001}
          speed={0.01}
          factor={1}
          style={{ pointerEvents: "none" }}
        >
          <img src={fondbasebd} style={{ width: "100%" }} />
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
          <img src={basecityd} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.7}
          speed={-0.1}
          factor={3}
          onClick={() => parallax.current.scrollTo(2)}
        >
          <img src={basecity} style={{ position: "center" }} />
        </ParallaxLayer>


        <ParallaxLayer
          offset={1.8}
          speed={-0.2}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            backgroundColor: "#000000",
          }}
       />
        <SectionTwo />
        <SectionThree />
        <Contact />
      </Parallax>
    </div>
  );
};
