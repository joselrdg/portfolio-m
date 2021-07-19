import React from 'react'
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { PROJECTS } from '../../sectionone/PROJECTS';
import "./CardPhoto.css";

const processXY = (x, y, target) => {
    const bounds = target.getBoundingClientRect()
  
    return { x: (x - bounds.left) / bounds.width, y: (y - bounds.top) / bounds.height }
  }
  
  const composeTransform = (x, y, s = 1) => {
    return `perspective(600px) rotateY(${y}deg) rotateX(${-x}deg) scale(${s})`
  }

export const CardPhoto = ({ maxAngle = 10, zoom = false }) => {
    const [spring, set] = useSpring(
        () => ({
          // 0, 0.5 и 1 is a percentage value
          // of a cursor position on element axis
          // percentage is used because they're element
          // width/height abstract
          x: 0.5,
          y: 0.5,
          s: 1,
        }),
        { config: { mass: 5, tension: 350, friction: 40 } },
      )
    
      const bind = useGesture(
        {
          onMove: (result) => {
            const { values, event } = result
    
            const [x, y] = values
    
            console.log(x, y)
    
            const coords = processXY(x, y, event.target)
    
            set(coords)
          },
          onHover: ({ hovering }) => {
            if (!hovering) {
              set({ x: 0.5, y: 0.5, s: 1 })
              return
            }
    
            if (zoom) {
              set({ s: 1.1 })
            }
          },
        },
        { eventOptions: { passive: false } },
      )
    
      return (
        <animated.div
          className="card"
          {...bind()}
          style={{
            transform: interpolate(
              [
                spring.y.interpolate([0, 0.5, 1], [-maxAngle, 0, maxAngle]),
                spring.x.interpolate([0, 0.5, 1], [-maxAngle, 0, maxAngle]),
                spring.s.interpolate((s) => s),
              ],
              composeTransform,
            ),
          }}
        >
             {PROJECTS.map((item, i) => {
              return (
                <div className="card-proyects-item" key={i}>
                  <CardPhoto/>
                  <div className="card-proyects-img-container">
                    <img
                      className="card-proyects-img"
                    //   onMouseEnter={() => onMouseEnter(true)}
                    //   onMouseLeave={() => onMouseLeave(false)}
                      src={item.image}
                      alt="head"
                      style={{ width: "100px" }}
                    />
                  </div>

                  <div>
                    <GlitchSquiggly onHover={true}>
                      <h2
                        className="titleMirror"
                        style={{ marginBottom: 0, padding: 0 }}
                      >
                        {item.title}
                      </h2>
                    </GlitchSquiggly>

                    <GlitchClip onHover={true}>
                      <p className="titleMirror" style={{ margin: 0, padding: 0 }}>{item.subtitle}</p>
                    </GlitchClip>
                  </div>
                  <div className="card-proyects-a">
                    <a href={item.github} rel="noreferrer" target="_blank">
                      <img
                        className="titleMirror mark shake"
                        // src={githubmark}
                        alt="githubmark"
                      />
                    </a>
                    {/* <a href={item.demo} rel="noreferrer" target="_blank">
                      <p className="titleMirror mark">DEMO</p>
                    </a> */}
                    {item.title === "GO TO HELL WITH...CANVAS!!!" ? (
                      <a href={item.demo} rel="noreferrer" target="_blank">
                        <img
                          className="titleMirror mark shake"
                        //   src={playmark}
                          alt="githubmark"
                        />
                      </a>
                    ) : (
                      <a href={item.demo} rel="noreferrer" target="_blank">
                        <img
                          className="titleMirror mark shake"
                        //   src={playmark}
                          alt="githubmark"
                        />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
        </animated.div>
      )
};
