import React from "react";
import html from "../assets/Html.svg";
import css from "../assets/Css.svg";
import js from "../assets/Javascript.svg";
import rec from "../assets/React.svg";
import node from "../assets/Nodejs.svg";
import graph from "../assets/Graphql.svg";

function Presentation() {
  const arr = [
    html,
    css,
    js,
    rec,
    node,
    graph,
    /* "Css.svg",
    "Javascript.svg",
    "React.svg",
    "Nodejs.svg",
    "Graphql.svg", */
  ];
  return (
    <>
      <div className="Presentation-me-container">
        <div className="Presentation">
          <h1> Fullstack Js Developer</h1>
          <h5 style={{ color: "#555555" }}>
            Hi, I'm Youssri Fkili. A passionate Fullstack Js Developer based in
            Tunisia.
          </h5>
          <div className="flex-tech-stack">
            <h3>Tech Stac: </h3>
            {arr.map((el, index) => {
              return (
                <div key={index} style={{ marginLeft: "10Px" }}>
                  <img src={el} width={40} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="photo-presentation"></div>
      </div>
    </>
  );
}

export default Presentation;
