import React from "react";
import About from "./About";
import Banner from "./Banner";
import "./Home.css";

function Home() {
  return (
    <div className="home w-100 h-auto">
      <div className="home__content container mt-4">
        <Banner />
        <About />
      </div>
    </div>
  );
}

export default Home;
