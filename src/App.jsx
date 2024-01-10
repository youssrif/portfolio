import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Presentation from "./components/Presentation";
import Bar from "./components/Bar";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/*  <Bar /> */}
      <Navbar />
      <Presentation />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
