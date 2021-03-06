import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./CardPhoto.css";
import { PROJECTS } from "../../sections/CONSTANTS.js";
import githubmark from "../../assets/githubmark/GitHubLight32px.png";
import playmark from "../../assets/githubmark/play.png";


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
          // background: "-webkit-linear-gradient(45deg,#53a6f9 ,#fe3e6b )",
          // background: 'linear-gradient(120deg, #ff003c, #0575E6, #ff003c)',
          backgroundImage: `url(${PROJECTS[i].image})`,
          backgroundSize: "cover",
        }}
      >
        <div
          href=""
          className="card"
          style={{
            margin: "40px 10px",
            backgroundImage: `url(${PROJECTS[i].image})`,
            backgroundSize: "cover",
          }}
        >
          <div className="_flex _jc_center _ai_center container_card_image">
            <img src={PROJECTS[i].image} className="card__image" alt="" />
          </div>
          <div
            className="card__overlay"
            style={{ margin: "0px", textAlign: "center" }}
          >
            <div
              className="card__header"
              style={{ margin: "0px", textAlign: "center" }}
            >
              <svg
                className="card__arc"
                xmlns="http://www.w3.org/2000/svg"
                style={{ margin: "0px", padding: "0px" }}
              >
                <path />
              </svg>
              {/* <img
                className="card__thumb"
                src="https://i.imgur.com/7D7I6dI.png"
                alt=""
              /> */}
              <div className="card__header-text">
                <h3
                  className="animated-box in card__title "
                  style={{  color: "white" }}
                >
                  {PROJECTS[i].title}
                </h3>
                {/* <span className="card__status">1 hour ago</span> */}
              </div>
            </div>
            <p className="card__description">{PROJECTS[i].subtitle}</p>
            <div className="iconcard">
              <a href={PROJECTS[i].github} rel="noreferrer" target="_blank">
                <img
                  className="titleMirror mark shake"
                  src={githubmark}
                  alt="githubmark"
                />
              </a>
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
          </div>
        </div>
      </animated.div>
    </animated.div>
  ));
};
