import { render } from "react-dom";
import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./CardPhoto.css";
import { PROJECTS } from "../../sectionone/PROJECTS.js";
import githubmark from "../../assets/githubmark/GitHubLight32px.png";
import demomark from "../../assets/githubmark/demo.jpg";
import playmark from "../../assets/githubmark/play.png";
import GlitchSquiggly from "react-glitch-effect/core/GlitchSquiggly";
import GlitchClip from "react-glitch-effect/core/GlitchClip";

const cards = [
  "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

export const CardPhoto = () => {
  console.log(PROJECTS);
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div className="containercard" key={i} style={{ x, y }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <animated.div
        className="animatedcard"
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans),
          backgroundImage: `url(${PROJECTS[i].image})`,
        }}
      >
        {PROJECTS[i].title}
            <div>
          <GlitchSquiggly onHover={true}>
            <h2 className="titleMirror" style={{ marginBottom: 0, padding: 0 }}>
              {PROJECTS[i].title}
            </h2>
          </GlitchSquiggly>

          <GlitchClip onHover={true}>
            <p className="titleMirror" style={{ margin: 0, padding: 0 }}>
              {PROJECTS[i].subtitle}
            </p>
          </GlitchClip>
        </div>
        <div className="card-proyects-a">
          <a href={PROJECTS[i].github} rel="noreferrer" target="_blank">
            <img
              className="titleMirror mark shake"
              src={githubmark}
              alt="githubmark"
            />
          </a>
          {/* <a href={item.demo} rel="noreferrer" target="_blank">
                      <p className="titleMirror mark">DEMO</p>
                    </a> */}
          {PROJECTS[i].title === "GO TO HELL WITH...CANVAS!!!" ? (
            <a href={PROJECTS[i].demo} rel="noreferrer" target="_blank">
              <img
                className="titleMirror mark shake"
                src={playmark}
                alt="githubmark"
              />
            </a>
          ) : (
            <a href={PROJECTS[i].demo} rel="noreferrer" target="_blank">
              <img
                className="titleMirror mark shake"
                src={playmark}
                alt="githubmark"
              />
            </a>
          )}
        </div>
      </animated.div>
    </animated.div>
  ));
};
