import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { BorderIcon } from "../common/bordericon/BorderIcon";

const icons = [
  {
    icon: <i class="fab fa-linkedin-in"></i>,
    link: "https://www.linkedin.com/in/joseluis-rodriguez-gonzalez/",
  },
  {
    icon: <i class="fab fa-github"></i>,
    link: "https://github.com/joselrdg",
  },
  {
    icon: <i class="fas fa-at"></i>,
    link: "mailto:josesietepicos@gmail.com",
  },
];
export const Contact = () => {
  return (
    <>
 
    <ParallaxLayer
      offset={4}
      speed={0.1}
      style={{
        display: "flex",
        // flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        color: "red",
        backgroundColor: "#000000",
      }}
    >
      {icons.map((icon) => (
        <BorderIcon icon={icon.icon} link={icon.link} />
      ))}
    </ParallaxLayer>
    </>
  );
};
