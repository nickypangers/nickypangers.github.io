import React from "react";
import "./Banner.css";
import LearnMoreButton from "./LearnMoreButton";
import ResumeButton from "./ResumeButton";
import { Link } from "react-router-dom";

function Banner() {
  const greetings = ["Hello."];
  return (
    <div className="banner w-100 h-50">
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
        <div className="banner__subtitle mt-4">
          Based in Hong Kong, passionate about programming and new technologies.
        </div>
        <div className="banner__buttons d-flex flex-lg-row flex-column justify-content-between mt-4 p-0">
          <div className="col-lg-6 col-12 p-0 d-flex justify-content-center">
            <ResumeButton />
          </div>
          <div className="col-lg-6 col-12 p-0 d-flex justify-content-center mt-lg-0 mt-3">
            <Link to="/about" style={{ textDecoration: "none" }}>
              <LearnMoreButton />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
