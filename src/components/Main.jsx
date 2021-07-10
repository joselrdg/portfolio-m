import "./Main.css";
import React, { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { TextNeon } from "./common/textneon/TextNeon";
import azotea from "./assets/imgcity/azoteac.png";
import estructure from "./assets/imgcity/estructura.png";
import basecity from "./assets/imgcity/base.png";
import centrcity from "./assets/imgcity/centrcity.png";
import city from "./assets/imgcity/medicity.png";
import foncity from "./assets/imgcity/fondcity.jpg";
import fondbase from "./assets/imgcity/fondbase.png";
import fondbaseb from "./assets/imgcity/fondbaseb.png";
import fondbased from "./assets/imgcity/fondbased.png";
import fondbasebd from "./assets/imgcity/fondbasebd.png";
import { SectionOne } from "./sectionone/SectionOne";

const d = document.getElementById("game");

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

// Fonts: lasenter  clipneon  moon

export const Main = () => {
  useEffect(() => {
    d.style.display = d.style.display == "none" ? "block" : "none";
  }, []);
  const parallax = useRef();
  const hidecanvas = () => {
    d.style.display = d.style.display == "none" ? "block" : "none";
    console.log("hidecanvas");
  };
  return (
    <div style={{ width: "100%", height: "100%", background: "#253237" }}>
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        {/* <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} /> */}

        {/* <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
        }}
      /> */}

        <ParallaxLayer
          offset={0}
          speed={-0.8}
          factor={1}
          style={{ backgroundImage: "url(fondcity.jpg)", backgroundPosition: 'center 0%', backgroundSize: "cover" }}
        >
          {/* <img src={foncity} style={{ height: "100%" }} /> */}
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.6}
          style={{ pointerEvents: "none" }}
        >
          <SectionOne />
          {/* <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} /> */}
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={0.9}
          speed={0.6}
          factor={3}
          style={{ pointerEvents: "none" }}
        >
          <img src={fondbase} style={{ width: "100%" }} />
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={1 - 0.01}
          speed={0.6}
          factor={1}
          style={{ pointerEvents: "none" }}
        >
          <img src={fondbaseb} style={{ width: "100%" }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1 - 0.02}
          speed={0.2}
          factor={1}
          style={{ pointerEvents: "none" }}
        >
          <img src={fondbasebd} style={{ width: "100%" }} />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={1.408}
          speed={-0.2}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#00061e",
          }}
        >*/}
          {/* <img src={centrcity} /> */}
          {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
        {/* </ParallaxLayer>  */}
       
        <ParallaxLayer
          offset={0.5}
          speed={-0.1}
          factor={3}

          onClick={() => parallax.current.scrollTo(2)}
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
          // style={{ backgroundImage: "url(base.png)", backgroundSize: "cover" }}
        >
          <img src={basecity}  style={{ position: 'center' }}/>
          {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
        </ParallaxLayer>
     
      </Parallax>
    </div>
  );
};

{
  /* <button onClick={hidecanvas}>HideCanvas</button> */
}
