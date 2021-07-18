import React from 'react';
import ReactDOM from "react-dom";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import words from "./words";
const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [30, 45],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 4,
  rotations: 3,
  rotationAngles: [0, 45],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 2000
};

export default function Services() {
  return <>

  <div style={{backgroundColor:"#efffef",alignContent:"center"}}>
    <br/>
    <h1 style={{fontFamily:"sans-serif"}}>Start your career in right direction</h1>
      <div style={{ height: 800, width: 1200 }}>
        <ReactWordcloud options={options} words={words} />
      </div>
    </div>
  </>
}
