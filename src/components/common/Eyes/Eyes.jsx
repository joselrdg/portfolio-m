import React, { useEffect, useRef, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ojo1 from "../../assets/ojos/1/1.png";
import ojo2 from "../../assets/ojos/1/2.png";
import ojo3 from "../../assets/ojos/1/3.png";
import ojo4 from "../../assets/ojos/1/4.png";
import ojo5 from "../../assets/ojos/1/5.png";

const arrEyes = [ojo1, ojo2, ojo3, ojo4, ojo5];

export const Eyes = ({
  numero = 0,
  offset = 2,
  opacity = 0.5,
  speed = 0.5,
  width = 3,
  marginLeft = "10%",
}) => {
  const refRep = useRef(0);
  const refEyes = useRef(0);
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
      } else if (refEyes.current > 20) {
        if (refRep.current <= numero) {
          refEyes.current = 0;
          refRep.current = refRep.current + 1;
          setStateSeconds({ seconds: 0 });
          setStateAnimation({ animation: 0 });
          clearInterval(interval);
        } else {
          if (refRep.current === numero + 1) {
            refRep.current = numero + 2;
            setStateSeconds({ seconds: 3 });
          } else {
            if (refRep.current === numero + 2) {
              refRep.current = numero + 3
              setStateSeconds({ seconds: 3 });
            } else if (refRep.current === numero + 3) {
              refRep.current = numero + 4
              setStateSeconds({ seconds: 2 });
            } else if (refRep.current === numero + 4) {
              refRep.current = numero + 5
              setStateSeconds({ seconds: 1 });
            } else if (refRep.current === numero + 5) {
              refRep.current = numero + 6;
              setStateSeconds({ seconds: 0 });
            } else if (refRep.current === numero + 6) {
              refRep.current = refRep.current + 7;
              setStateSeconds({ seconds: 4 });
            }  else {
              clearInterval(interval);
            }
          }
        }
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
          alt="eye"
        />
      </ParallaxLayer>
    </>
  );
};
