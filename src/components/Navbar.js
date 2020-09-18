import React from "react";
import "./Navbar.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__top">
        <div className="navbar__button">Home</div>
        <div className="navbar__button">About</div>
        <div className="navbar__button">Projects</div>
        <div className="navbar__button">Resume</div>
      </div>
      <div className="navbar__social">
        <div className="navbar__text">
          <p>Gimme a cheeky lil stalk at</p>
        </div>
        <a
          href="https://instagram.com/nickypangers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="navbar__link">
            <InstagramIcon fontSize="large" />
          </div>
        </a>
        <div className="navbar__text">or</div>
        <a
          href="https://github.com/nickypangers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="navbar__link">
            <GitHubIcon fontSize="large" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
