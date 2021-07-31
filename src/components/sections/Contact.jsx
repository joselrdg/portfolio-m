import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { BorderIcon } from "../common/bordericon/BorderIcon";

const icons = [
  {
    icon: <i className="fab fa-github"></i>,
    link: "https://github.com/joselrdg",
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
    link: "https://www.linkedin.com/in/joseluis-rodriguez-gonzalez/",
  },
  {
    icon: <i class="fas fa-code-branch"></i>,
    link: "https://stackshare.io/joselrdg/my-stack",
  },
  {
    icon: <i className="fas fa-at"></i>,
    link: "mailto:josesietepicos@gmail.com",
  },
];
export const Contact = () => {
  return (
    <>
 
    <ParallaxLayer
      offset={4}
      speed={1}
      style={{
        display: "flex",
        // flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: 'url(bs.gif)',
        backgroundPosition: "center 0%",
        backgroundSize: "cover",
      }}
    >
      <div  style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "200px"
      }}>
      {icons.map((icon, i) => (
        <BorderIcon key={i} icon={icon.icon} link={icon.link}/>
      ))}

      </div>
    </ParallaxLayer>
    </>
  );
};
