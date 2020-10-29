import React from "react";
import "./Banner.css";
import LearnMoreButton from "./LearnMoreButton";
import ResumeButton from "./ResumeButton";

function Banner() {

  const greetings = ["Hello."];
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__greetings">
          {greetings.map(function (g) {
            return <p className="subh1">{g}</p>;
          })}
        </div>
        <div className="banner__title">
          <h1>I Am Nixon</h1>
          <h4>
            BEng Electronic and Electrical <span>Engineering</span>
          </h4>
        </div>
        <div className="banner__subtitle">
          Based in Hong Kong, passionate about programming and new technologies.
        </div>
        <div className="banner__buttons">
          <ResumeButton />
          <LearnMoreButton />
        </div>
      </div>
    </div>
  );
}

export default Banner;
