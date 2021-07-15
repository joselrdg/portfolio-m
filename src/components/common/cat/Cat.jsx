import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

import cat1 from "../../assets/cat/1.png";
import cat2 from "../../assets/cat/2.png";
import cat3 from "../../assets/cat/3.png";
import cat4 from "../../assets/cat/4.png";

const arrCats = [cat1, cat2, cat3, cat4];

export const Cat = () => {
  return (
    <div className="CatContainer">
      <ParallaxLayer
        offset={1.99}
        speed={0.1}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", }}>
          <div style={{ backgroundColor: "black", width: '60vw'}}></div>
          <img
            src={arrCats[0]}
            alt="Cat"
            style={{
              display: "block",
              width: `20vw`,
              height:"20vw"
            }}
          />
          <div style={{ backgroundColor: "black", width: '60vw', height:"20vw"}}></div>
        </div>
      </ParallaxLayer>
    </div>
  );
};
