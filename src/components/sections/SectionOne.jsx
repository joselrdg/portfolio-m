import "./SectionOne.css";
import React, { useRef } from "react";

import { TextNeon } from "../common/textneon/TextNeon";
// import useOnScreen from "../hooks/useOnScreen";

// Fonts: lasenter  clipneon  moon

function SectionOne () {
  const ref = useRef();
  // const onScreen = useOnScreen(ref, "-100px");

  return (
      <div className="sectionOne _flex _fd_col_r _ai_center _jc_center"  ref={ref} >
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

export default SectionOne;

