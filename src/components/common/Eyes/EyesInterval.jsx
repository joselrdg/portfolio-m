import React, { useEffect, useRef, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Eyes } from "./Eyes";

function getRndDec(min, max) {
  const num = Math.random() * (max - min);
  return num + min;
}

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

export const EyesInterval = ({ numero = 60 }) => {
  const refContador = useRef(0);
  const [contador, setContador] = useState({ contador: 0 });
  const [stateComponents, setStateComponent] = useState({
    component: [[<Eyes />]],
  });

  let arrComponents = [<Eyes />];

  useEffect(() => {
    const interval = setInterval(() => {
      if (refContador.current < numero) {
        refContador.current = refContador.current + 1;
        setStateComponent({
          component: [...stateComponents.component, component()],
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [stateComponents]);

  const component = () => {
    return <Eyes 
    offset={getRndDec(1.95, 2.2)}
     opacity={getRndDec(0.1, 1)}
     speed={getRndDec(0.1, 0.8)}
     width={randomInt(1, 6)} 
     marginLeft={`${randomInt(1, 99)}%`}
     />;
  };
  return (
    <>
      {stateComponents.component.map((component) => (
        <div>{component}</div>
      ))}
    </>
  );
};
