import React, { useEffect, useRef, useState } from "react";
import { Eyes } from "./Eyes";

function getRndDec(min, max) {
  const num = Math.random() * (max - min);
  return num + min;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let key = 0;

const component = () => {
  let arr = [];
  const numR = randomInt(4, 12);
  for (let index = 0; index < numR; index++) {
    const width = randomInt(1, 6);
    arr.push(
      <Eyes
      key={key}
      offset={getRndDec(2, 2.6)}
      opacity={getRndDec(width > 3 ? 0.5 : 0.1, width > 3 ? 1 : 0.5)}
      speed={getRndDec(0.1, 0.8)}
      width={width}
      marginLeft={`${randomInt(1, 92)}%`}
      />
      );
      key++
  }
  return arr;
};

export const EyesInterval = ({ numero = 1 }) => {
  const refContador = useRef(0);
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
        if (refContador.current <= numero) {
          refContador.current = refContador.current + 1;
        } else {
          refContador.current = 0;
          setStateComponent({
            component: [component()],
          });
        }
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [stateComponents, numero]);
  return (
    <>
      {stateComponents.component.map((component) => {
        return <div key={component[0].key}>{component}</div>;
      })}
    </>
  );
};
