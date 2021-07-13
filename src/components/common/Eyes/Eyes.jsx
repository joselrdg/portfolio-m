import React, { useEffect, useRef, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ojo1 from "../../assets/ojos/1/1.png";
import ojo2 from "../../assets/ojos/1/2.png";
import ojo3 from "../../assets/ojos/1/3.png";
import ojo4 from "../../assets/ojos/1/4.png";
import ojo5 from "../../assets/ojos/5.png";
import ojo6 from "../../assets/ojos/6.png";
import ojo7 from "../../assets/ojos/7.png";
import ojo8 from "../../assets/ojos/8.png";
import ojo9 from "../../assets/ojos/9.png";
import ojo10 from "../../assets/ojos/10.png";
import ojo11 from "../../assets/ojos/11.png";
import ojo12 from "../../assets/ojos/12.png";
import ojo13 from "../../assets/ojos/13.png";
import Timer from "../Timer";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const ojos = 4;

const arrEyes = [
  ojo1,
  ojo2,
  ojo3,
  ojo4,
  // ojo5,
  // ojo6,
  // ojo7,
  // ojo8,
  // ojo9,
  // ojo10,
  // ojo11,
  // ojo12,
  // ojo13,
  // null,
];

export const Eyes = ({offset = 1.6, opacity= 1, width = 4}) => {
  const [state, setState] = useState({
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.seconds < 4) {
        setState({ seconds: state.seconds++ });
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ParallaxLayer offset={offset} speed={0.5} style={{ opacity: opacity }}>
        <img
          src={arrEyes[state.seconds]}
          style={{ display: "block", width: `${width}vw`, marginLeft: "70%" }}
        />
        {/* <img
          src={state.seconds <= 4 ? arrEyes[state.seconds] : arrEyes[3]}
          style={{ display: "block", marginTop: "20%", marginLeft: "40%" }}
        /> */}
      </ParallaxLayer>
    </>
  );
};
