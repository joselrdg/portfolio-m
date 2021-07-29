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
        <SectionTwo />

        <ParallaxLayer
          offset={3.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <i
            className="fas fa-code icons_sectionthree"
            style={{
              fontSize: "80px",
              display: "block",
              width: "100px",
              marginLeft: "70%",
            }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1 }}>
          <i
            className="fab fa-html5 icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "55%",
            }}
          ></i>
          <i
            className="fab fa-html5 icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "15%",
            }}
          ></i>
          <i
            className="fab fa-npm icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "15%",
            }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={3.75} speed={0.5} style={{ opacity: 0.1 }}>
          <i
            className="fab fa-react icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "70%",
            }}
          ></i>
          <i
            className="fab fa-react icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "40%",
            }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
          <i
            className="fab fa-angular icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "10%",
            }}
          ></i>
          <i
            className="fab fa-angular icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "75%",
            }}
          ></i>
        </ParallaxLayer>

        <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <i
            className="fab fa-node-js icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "60%",
            }}
          />
          <i
            className="fab fa-node-js icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "30%",
            }}
          />
          <i
            className="fab fa-node-js icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "80%",
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.8} speed={0.4} style={{ opacity: 0.6 }}>
          <i
            className="fab fa-css3-alt icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "5%",
            }}
          />
          <i
            className="fab fa-css3-alt icons_sectionthree"
            style={{
              fontSize: "100px",
              display: "block",
              width: "100px",
              marginLeft: "75%",
            }}
          />
        </ParallaxLayer>

        <SectionThree />

        <Contact />
      </Parallax>
    </div>
  );
};
