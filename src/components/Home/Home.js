import React from "react";
import About from "./About";
import Banner from "./Banner";
import "./Home.css";
import Projects from "./Projects";

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <Banner />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default Home;
