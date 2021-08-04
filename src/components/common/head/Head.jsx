import React, { useEffect, useRef, useState } from "react";
import "./Head.css";
// import gif3 from "../../assets/head/tt.gif";
import gif1 from "../../assets/head/1.gif";
import gif2 from "../../assets/head/tf.gif";
import animation1 from "../../assets/head/23.png";
import animation2 from "../../assets/head/24.png";
import animation3 from "../../assets/head/25.png";
import animation4 from "../../assets/head/26.png";
import animation5 from "../../assets/head/27.png";
import animation6 from "../../assets/head/28.png";
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
  animation1,
  animation2,
  animation3,
  animation4,
  animation5,
  animation6,
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
  gif1,
  gif2,
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const Head = () => {
  const refRep = useRef(0);
  const refAnimation = useRef(1);
  const [stateSeconds, setStateSeconds] = useState({
    img: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (refAnimation.current === 0) {
        if (stateSeconds.img < 0) {
          setStateSeconds({ img: 0 });
        }
        if (refRep.current <= 9) {
          setStateSeconds({ img: stateSeconds.img++ });
        } else if (
          refRep.current > 9 &&
          refRep.current <= 19 &&
          stateSeconds.img >= 1
        ) {
          setStateSeconds({ img: stateSeconds.img-- });
        } else if (refRep.current > 60) {
          refRep.current = 0;
          setStateSeconds({ img: 0 });
        }
        refRep.current = refRep.current + 1;
      } else if (refAnimation.current === 1) {
        if (stateSeconds.img <= 20) {
          refRep.current = refRep.current + 1;
          setStateSeconds({ img: stateSeconds.img++ });
        } else {
          if (refRep.current !== 89) {
            refRep.current = 89;
            const random = getRandomInt(21, 23);
            setStateSeconds({ img: random });
          }
        }
        refAnimation.current = 1;
      } else if (refAnimation.current === 2) {
        if (stateSeconds.img >= 21) {
          setStateSeconds({ img: 20 });
        } else if (stateSeconds.img > 1) {
          setStateSeconds({ img: stateSeconds.img-- });
        } else {
          refAnimation.current = 0;
          setStateSeconds({ img: 0 });
        }
      }
    }, 60);
    return () => clearInterval(interval);
  }, [stateSeconds.img]);

  const onMouseEnter = () => {
    if (refAnimation.current === 0) {
      refRep.current = 99;
      refAnimation.current = 1;
    }
  };

  const onMouseLeave = (ok) => {
    if (refAnimation.current === 1) {
      // if (refRep.current < 140 || refRep.current > 145) {
        refRep.current = 0;
        refAnimation.current = 2;
      // }
    }
  };
  // const style = {
  //   width: "30%",
  // };
  return (
    <img
      className="headimg"
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      src={imgsHead[stateSeconds.img]}
      // style={style}
      alt="head"
    />
  );
};
