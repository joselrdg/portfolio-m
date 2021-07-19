import React, { useState } from "react";
import "./CardPage.css";
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

export const CardPage = () => {
    const [isDisabled, setDisabled] = useState(false);
 
    const handleToggleGlitch = () => {
      setDisabled(!isDisabled);
    };
  return (
      <GlitchClip onHover={true}>
        <h1>Glitch</h1>
      </GlitchClip>
    )
};
