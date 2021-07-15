import { ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useState } from "react";
import "./SectionThree.css";

export const SectionThree = ({parallax}) => {
    console.log(parallax)
    const [state, setstate] = useState(parallax)

    useEffect(() => {
      console.log(parallax)
    }, [parallax])
  return (
    <>
      <ParallaxLayer
        offset={3}
        speed={0.1}
        style={
          {
            // display: "flex",
            // flexDirection: "row",
            // alignItems: "center",
            // justifyContent: "center",
            color: "red"
          }
        }
      >
        <h1>Work</h1>
      </ParallaxLayer>
    </>
  );
};
