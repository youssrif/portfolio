import React from "react";
import LI from "../assets/Linkedin.svg";
import GI from "../assets/Github.svg";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="copy-right">
          <p>Copyright © 2024. All rights are reserved</p>
        </div>
        <div className="icn-li-gi">
          <a
            href="https://www.linkedin.com/in/youssri-fkili-60b852220/"
            target="_blank"
          >
            {" "}
            <img src={LI} width={40} />
          </a>
          <a href="https://github.com/youssrif" target="_blank">
            {" "}
            <img
              src={GI}
              width={40}
              style={{ stroke: "white", fill: "white" }}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
