import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

export const Contact = () => {
  return (
    <ParallaxLayer
      offset={4}
      speed={0.1}
      style={{
        // display: "flex",
        // flexDirection: "row",
        // // alignItems: "center",
        // justifyContent: "center",
        color: "red",
        backgroundColor: "#000000",
      }}
    >
      Contact
    </ParallaxLayer>
  );
};
