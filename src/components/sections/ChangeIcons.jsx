import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { IconsSection } from "./IconsSection";

export const ChangeIcons = ({numGif}) => {

  
  return (
    <>
       
      <IconsSection section={[{ offset: 2.75, speed: 0.7 }]} numGif={numGif}/>
      <IconsSection
        section={[
          { offset: 3, speed: 0.5 },
          { offset: 3.75, speed: 1 },
        ]}
        numGif={numGif}
      />
    </>
  );
};
