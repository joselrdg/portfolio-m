import React, { useEffect, useRef, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Eyes } from "./Eyes";

function getRndDec(min, max) {
  const num = Math.random() * (max - min);
  return num + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const component = () => {
  return (
    <Eyes
      // numero={n}
      offset={getRndDec(2, 2.6)}
      opacity={getRndDec(0.1, 1)}
      speed={getRndDec(0.1, 0.8)}
      width={randomInt(1, 6)}
      marginLeft={`${randomInt(1, 92)}%`}
    />
  );
};

export const EyesInterval = ({ numero = 4 }) => {
  const refContador = useRef(0);
  const [contador, setContador] = useState({ contador: 0 });
  const [stateComponents, setStateComponent] = useState({
    component: [component()],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (refContador.current < numero) {
        refContador.current = refContador.current + 1;
        setStateComponent({
          component: [...stateComponents.component, component()],
        });
      } else {
        if (refContador.current < numero + 1) {
          refContador.current = refContador.current + 1;
        } else {
          refContador.current = 0;
           setStateComponent({
          component: [component()]
        });
        }
      }
      console.log(stateComponents.component)

    }, 4000);
    return () => clearInterval(interval);
  }, [stateComponents, numero]);

  return (
    <>
      {stateComponents.component.map((component, i) => (
        <div key={i}>{component}</div>
      ))}
    </>
  );
};
