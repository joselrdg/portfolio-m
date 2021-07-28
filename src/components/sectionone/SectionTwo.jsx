import React from "react";
import "./SectionTwo.css";
import { ParallaxLayer } from "@react-spring/parallax";
import { EyesInterval } from "../common/Eyes/EyesInterval";
import { Head } from "../common/head/Head";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";

export const SectionTwo = () => {
  return (
    <>
      {/* <SectionOneH /> */}

      <EyesInterval />

      <ParallaxLayer
        offset={2}
        speed={1}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Head className="headsect" />

        {/* <div className="contain-section-two"> */}
          <div className="title titleMirror gradient-border">
            <GlitchSquiggly onHover={true}>
              <h1 className="bkg-text-stwo" style={{ margin: 0, padding: 0 }}>
                LOOKING FOR A
              </h1>
            </GlitchSquiggly>
            <GlitchSquiggly onHover={true}>
              <h1 className="bkg-text-stwo" style={{ margin: 0, padding: 0 }}>
                WEB DEVELOPER?
              </h1>
            </GlitchSquiggly>
            <GlitchClip onHover={true}>
              <h3 className="bkg-text-stwo">
                Hey, I'm José Luis Rodríguez ; )
              </h3>
              <h3 className="bkg-text-stwo">
                I'm a web developer and programmer living in Madrid, España.
              </h3>
              <h3 className="bkg-text-stwo">
                Do you need HTML, CSS, jQuery, React, Angular, performance,
                animation, responsive... or just need help with UX & UI on your
                Web or App?
              </h3>
            </GlitchClip>
            <GlitchSquiggly onHover={true} className="marg">
              <a href="https://github.com/" className="fill">
                Let's talk.
              </a>
            </GlitchSquiggly>
          </div>
        {/* </div> */}
      </ParallaxLayer>
    </>
  );
};
