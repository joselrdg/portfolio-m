import React, { useEffect, useRef, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Eyes } from "./Eyes";

function getRndDec(min, max) {
  const num = Math.random() * (max - min);
  return num + min;
}

export const EyesInterval = ({ numero = 4 }) => {
  const refContador = useRef(0);
  const [contador, setContador] = useState({ contador: 0 });
  const [stateComponents, setStateComponent] = useState({
    component: [[<Eyes />]],
  });

  let arrComponents = [<Eyes />];

  useEffect(() => {
    const interval = setInterval(() => {
      // if (contador.contador < numero) {
      //   setContador({ contador: contador.contador++ });
      //   console.log("This will run every second!", contador.contador);
      // } else if (contador.contador < numero + 4) {
      //   setContador({ contador: contador.contador++ });
      //   setStateComponent({component: [...stateComponents.component, component()]})
      //   console.log("Thisd!", stateComponents);
      // } else {
      //   clearInterval(interval);

      // }
      console.log(refContador.current);
      if (refContador.current < numero) {
        refContador.current = refContador.current + 1;
        setStateComponent({
          component: [...stateComponents.component, component()],
        });
        console.log(stateComponents);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [stateComponents]);

  const component = () => {
    console.log(getRndDec(1.6, 1.9));
    return <Eyes offset={getRndDec(1.6, 1.9)} opacity={1} width={4} />;
  };
  return (
    <>
      {stateComponents.component.map((component) => (
        <div>{component}</div>
      ))}
    </>
  );
};
