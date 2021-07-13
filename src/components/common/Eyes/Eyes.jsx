import React, { useEffect, useRef, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ojo1 from "../../assets/ojos/1/1.png";
import ojo2 from "../../assets/ojos/1/2.png";
import ojo3 from "../../assets/ojos/1/3.png";
import ojo4 from "../../assets/ojos/1/4.png";

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
];

export const Eyes = ({
  offset = 2.2,
  opacity = 1,
  speed = 0.5,
  width = 1,
  marginLeft = "70%",
}) => {
  const ref = useRef(0)
  const [stateSeconds, setStateSeconds] = useState({
    seconds: 0,
  });
  const [stateAnimation, setStateAnimation] = useState({
    animation: 0,
  });

  useEffect(() => {
     const interval = setInterval(() => {
      ref.current = ref.current + 1;
      if (stateSeconds.seconds < 4) {
        setStateSeconds({ seconds: stateSeconds.seconds++ });
      } else if (ref.current > 30 ) {
        setStateSeconds({ seconds: 0});
        setStateAnimation({ animation: 0 });
        ref.current = 0;
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [stateAnimation]);

  return (
    <>
      <ParallaxLayer offset={offset} speed={speed} style={{ opacity: opacity }}>
        <img
          src={arrEyes[stateSeconds.seconds]}
          style={{
            display: "block",
            width: `${width}vw`,
            marginLeft: marginLeft,
          }}
        />
      </ParallaxLayer>
    </>
  );
};
