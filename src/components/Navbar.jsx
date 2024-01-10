import React from "react";

function Navbar() {
  const sclroll = (w) => {
    window.scrollTo({ top: w, behavior: "smooth" });
  };

  return (
    <>
      <div className="Nav-bar-container">
        <h2>Youssri.dev</h2>
        <div className="tags-cont">
          <h4 onClick={() => sclroll(0)}>Home</h4>
          <h4 onClick={() => sclroll(220)}>About</h4>
          <h4 onClick={() => sclroll(820)}>Project</h4>
          <h4 onClick={() => sclroll(2000)}>Contact</h4>
        </div>
      </div>
    </>
  );
}

export default Navbar;
