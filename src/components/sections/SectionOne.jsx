import "./SectionOne.css";
import React, { useEffect, useRef } from "react";

import { TextNeon } from "../common/textneon/TextNeon";
import useOnScreen from "../hooks/useOnScreen";

// Fonts: lasenter  clipneon  moon

export const SectionOne = ({scrollRef}) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, "-100px");

  useEffect(() => {
  console.log(onScreen)
  }, [onScreen])

  return (
      <div className="sectionOne _flex _fd_col_r _ai_center _jc_center"  ref={ref} style={{  opacity: onScreen ? 0.1 : 1 }}>
        {/* <TextNeon text={`< JL R />`} font="moon" size={4} />*/}
        {/* <img src={azotea} alt="azotea" className="imgazotea" />  */}
        <div className="cartel _flex _fd_col _ai_center _jc_center">
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
