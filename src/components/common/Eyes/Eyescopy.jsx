import React, { useRef, useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ojo1 from "../../assets/ojos/1/1.png";
import ojo2 from "../../assets/ojos/1/2.png";
import ojo3 from "../../assets/ojos/1/3.png";
import ojo4 from "../../assets/ojos/1/4.png";
import ojo5 from "../../assets/ojos/5.png";
import ojo6 from "../../assets/ojos/6.png";
import ojo7 from "../../assets/ojos/7.png";
import ojo8 from "../../assets/ojos/8.png";
import ojo9 from "../../assets/ojos/9.png";
import ojo10 from "../../assets/ojos/10.png";
import ojo11 from "../../assets/ojos/11.png";
import ojo12 from "../../assets/ojos/12.png";
import ojo13 from "../../assets/ojos/13.png";
import Timer from "../Timer";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const ojos = 4;

const arrEyes = [
  ojo1,
  ojo2,
  ojo3,
  ojo4,
  // ojo5,
  // ojo6,
  // ojo7,
  // ojo8,
  // ojo9,
  // ojo10,
  // ojo11,
  // ojo12,
  // ojo13,
  // null,
];

class Eyes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: 0,
      seconds: -1,
      eyes: [],
    };
  }

  tick() {
    if (this.state.seconds <= 4) {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        seconds: 0,
        animation: prevState.animation <= ojos ? prevState.animation + 1 : 0,
      }));
    }
  }

  createEye() {
    if (this.seconds === 4) {
      this.setState((prevState) => ({
        ...prevState,
        eyes: [
          ...prevState,
          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 1 }}>
            <img
              src={
                this.state.animation === 0
                  ? arrEyes[this.state.seconds]
                  : arrEyes[3]
              }
              style={{ display: "block", marginLeft: "70%" }}
            />
            <img
              src={
                this.state.seconds < 4
                  ? arrEyes[this.state.seconds]
                  : arrEyes[3]
              }
              style={{ display: "block", marginTop: "20%", marginLeft: "40%" }}
            />
          </ParallaxLayer>,
        ],
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
      this.createEye();
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        {/* <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 1 }}>
          <img
            src={this.state.animation === 0 ? arrEyes[this.state.seconds]: arrEyes[3]}
            style={{ display: "block", marginLeft: "70%" }}
          />
          <img
            src={this.state.seconds < 4 ? arrEyes[this.state.seconds]: arrEyes[3]}
            style={{ display: "block", marginTop: "20%",  marginLeft: "40%" }}
          />
        </ParallaxLayer> */}

        {this.state.eyes[0]}

        {/* <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer> */}
      </>
    );
  }
}

export default Eyes;
