import React from "react";
import HM from "../assets/Home.svg";
import CT from "../assets/Contact.svg";
import PR from "../assets/Project.svg";
import AB from "../assets/About.svg";
function Bar() {
  return (
    <>
      <div className="Bar-container">
        <div className="bar-items">
          <img src={HM} width={25} />
        </div>

        <div className="bar-items">
          <img src={AB} width={25} />
        </div>

        <div className="bar-items">
          <img src={PR} width={25} />
        </div>
        <div className="bar-items">
          <img src={CT} width={25} />
        </div>
      </div>
    </>
  );
}

export default Bar;
