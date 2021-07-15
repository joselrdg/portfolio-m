import React, { useEffect, useRef, useState } from "react";
import "./Head.css";
import head0 from "../../assets/head/1.png";
import head1 from "../../assets/head/23.png";
import head2 from "../../assets/head/24.png";
import head3 from "../../assets/head/25.png";
import head4 from "../../assets/head/26.png";
import head5 from "../../assets/head/27.png";
import head6 from "../../assets/head/28.png";
import head7 from "../../assets/head/29.png";
import head8 from "../../assets/head/30.png";
import head9 from "../../assets/head/31.png";
import head10 from "../../assets/head/32.png";
import head11 from "../../assets/head/33.png";
import head12 from "../../assets/head/34.png";
import head13 from "../../assets/head/35.png";
import head14 from "../../assets/head/36.png";
import head15 from "../../assets/head/37.png";
import head16 from "../../assets/head/38.png";
import head17 from "../../assets/head/39.png";
import head18 from "../../assets/head/40.png";
import head19 from "../../assets/head/41.png";
import head20 from "../../assets/head/42.png";
import head21 from "../../assets/head/43.png";

const imgsHead = [
  head1,
  head2,
  head3,
  head4,
  head5,
  head6,
  head7,
  head8,
  head9,
  head10,
  head11,
  head12,
  head13,
  head14,
  head15,
  head16,
  head17,
  head18,
  head19,
  head20,
  head21,
  head0,
];

export const Head = () => {
  const refEyes = useRef(0);
  const refAnimation = useRef(false);
  const [stateSeconds, setStateSeconds] = useState({
    seconds: 0,
  });
  const [stateAnimation, setStateAnimation] = useState({
    animation: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      refEyes.current = refEyes.current + 1;
      if (stateAnimation.animation === 0) {
        if (stateSeconds.seconds < 0) {
          setStateSeconds({ seconds: 0 });
        }
        if (refEyes.current < 6) {
          setStateSeconds({ seconds: stateSeconds.seconds++ });
        } else if (refEyes.current > 7 && refEyes.current < 13) {
          setStateSeconds({ seconds: stateSeconds.seconds-- });
        } else if (refEyes.current > 38) {
          refEyes.current = 0;
          setStateSeconds({ seconds: 0 });
        }
      } else if (stateAnimation.animation === 1) {
        if (refEyes.current !== stateSeconds.seconds) {
          setStateSeconds({ seconds: refEyes.current });
        } else {
          if (refEyes.current <= 21) {
            setStateSeconds({ seconds: stateSeconds.seconds++ });
          } else if (stateSeconds.seconds === 22) {
            refEyes.current = 22;
            clearInterval(interval);
            // setStateSeconds({ seconds: 0 });
            // setStateAnimation({ animation: 2 });
          }
        }
      } else if (stateAnimation.animation === 2) {
        if (refEyes.current <= 23 && stateSeconds.seconds >= 0) {
          setStateSeconds({ seconds: stateSeconds.seconds-- });
        } else if (stateSeconds.seconds < 2) {
          refAnimation.current = 1;
          refEyes.current = 0;
          setStateAnimation({ animation: 0 });
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, [stateAnimation]);

  const onMouseEnter = () => {
    if (stateAnimation.animation === 0) {
      refAnimation.current = 0;
      refEyes.current = 0;
      setStateAnimation({ animation: 1 });
    }
  };

  const onMouseLeave = () => {
    if (stateAnimation.animation === 1) {
      refAnimation.current = 0;
      refEyes.current = 0;
      setStateAnimation({ animation: 2 });
    }
  };

  return (
    <img
      onMouseEnter={() => onMouseEnter(true)}
      onMouseLeave={() => onMouseLeave(false)}
      src={imgsHead[stateSeconds.seconds]}
      alt="head"
      style={{width: 'auto'}}
    />
  );
};
