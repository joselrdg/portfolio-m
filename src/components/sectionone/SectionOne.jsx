import "./SectionOne.css";
import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { TextNeon } from "../common/textneon/TextNeon";
import azotea from "../assets/imgcity/azoteac.png";
// import estructure from "../assets/imgcity/estructura.png";
import estructure from "../assets/imgcity/foncity.jpg";

// Fonts: lasenter  clipneon  moon

export const SectionOne = () => {
  return (
      <div className="sectionOne __flex __fd-col-r __ai-center __jc-center">
        {/* <TextNeon text={`< JL R />`} font="moon" size={4} />*/}
        {/* <img src={azotea} alt="azotea" className="imgazotea" />  */}
        <div className="cartel __flex __fd-col __ai-center __jc-center">
          <TextNeon
            className="textneon"
            // animation
            text="Front-End"
            font="clipneon"
            size={10}
          />
          <TextNeon
            className="textneon"
            text="Developer"
            font="lasenter"
            size={8}
          />
        </div>
        {/* <img src={estructure} alt="estructura" className="estructure" /> */}
      </div>
  );
};

// {/* <div>
//   <div className="sectionOne __flex __fd-col-r __ai-center __jc-center">
//     {/* <TextNeon text={`< JL R />`} font="moon" size={4} /> */}
//     {/* <img src={azotea} alt="azotea" className="imgazotea" /> */}
//     <div className="cartel __flex __fd-col __ai-center __jc-center">
//       <TextNeon
//         className="textneon"
//         text="Front-End!!!"
//         font="clipneon"
//         size={10}
//       />
//       <TextNeon
//         className="textneon"
//         text="Developer"
//         font="lasenter"
//         size={8}
//       />
//     </div>
//   </div>
//   <img src={estructure} alt="estructura" className="estructure" />
// </div>; */}
