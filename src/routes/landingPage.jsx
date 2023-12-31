import React from "react";
import { render } from "react-dom";
import { Parallax } from "react-parallax";
import Navbar from "../Components/Navbar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};
const image1 =
  "./src/assets/charger_bg.jpg";
const image2 =
  "./src/assets/cute_girl_ev_charging.jpg";
const image3 =
  "./src/assets/home_charging.jpg";
const image4 =
  "./src/assets/parking_ev_charging.jpg";

const LandingPage = () => {
  return(
    <>
      <div style={styles}>
        <Parallax bgImage={image1} strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>HTML inside the parallax</div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={image3} blur={{ min: -1, max: 3 }}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>Dynamic Blur</div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax bgImage={image2} strength={-100}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>Reverse direction</div>
          </div>
        </Parallax>
        <h1>| | |</h1>
        <Parallax
          bgImage={image4}
          strength={200}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(255, 125, 0, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500
                }}
              />
            </div>
          )}
        >
          <div style={{ height: 500 }}>
            <div style={insideStyles}>renderProp</div>
          </div>
        </Parallax>
        <div style={{ height: 500 }} />
        <h2>{"\u2728"}</h2>
      </div>
    </>
  );
};

export default LandingPage;

