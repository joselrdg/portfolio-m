import React, { useState } from "react";
import "./SectionTwo.css";
import { ParallaxLayer } from "@react-spring/parallax";
import { useTrail, a } from "@react-spring/web";
import { EyesInterval } from "../common/Eyes/EyesInterval";
import { Head } from "../common/head/Head";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import { ContactForm } from "../common/contactform/ContactForm";


const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export const SectionTwo = () => {
  const [open, set] = useState(true);
  return (
    <>
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

        <div className="contain-section-two">
          <Trail open={open}>
            <div className="title titleMirror gradient-border">
              <GlitchSquiggly>
                <h1 className="title-text-stwo">LOOKING FOR A</h1>
              </GlitchSquiggly>
              <GlitchSquiggly>
                <h1 className="title-text-stwo">WEB DEVELOPER?</h1>
              </GlitchSquiggly>
              <GlitchClip>
                <h3 className="bkg-text-stwo">
                  Hey, I'm José Luis Rodríguez ; )
                </h3>
                <h3 className="bkg-text-stwo">
                  I'm a web developer and programmer living in Madrid, España.
                </h3>
                <h3 className="bkg-text-stwo">
                  Do you need HTML, CSS, jQuery, React, Angular, performance,
                  animation, responsive... or just need help with UX & UI on
                  your Web or App?
                </h3>
              </GlitchClip>

              <GlitchSquiggly
                onHover={true}
                style={{
                  textAlign: "center",
                  marginTop: "120px",
                }}
              >
                <a onClick={() => set((open) => !open)} className="fill">
                  Let's talk.
                </a>
              </GlitchSquiggly>
            </div>
          </Trail>
          <Trail open={!open}>
            <ContactForm set={() => set((open) => !open)} />
          </Trail>
        </div>
      </ParallaxLayer>
    </>
  );
};
