import React, { useEffect, useRef, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ojo1 from "../../assets/ojos/1/1.png";
import ojo2 from "../../assets/ojos/1/2.png";
import ojo3 from "../../assets/ojos/1/3.png";
import ojo4 from "../../assets/ojos/1/4.png";


const arrEyes = [
  ojo1,
  ojo2,
  ojo3,
  ojo4,
];

export const Eyes = ({
  offset = 2,
  opacity = 0.5,
  speed = 0.5,
  width = 3,
  marginLeft = "10%",
}) => {
  const refEyes = useRef(0)
  const [stateSeconds, setStateSeconds] = useState({
    seconds: 0,
  });
  const [stateAnimation, setStateAnimation] = useState({
    animation: 0,
  });

  useEffect(() => {
     const interval = setInterval(() => {
      refEyes.current = refEyes.current + 1;
      if (stateSeconds.seconds < 4) {
        setStateSeconds({ seconds: stateSeconds.seconds++ });
      } else if (refEyes.current > 30 ) {
        setStateSeconds({ seconds: 0});
        setStateAnimation({ animation: 0 });
        refEyes.current = 0;
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
