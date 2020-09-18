import React from "react";
import "./Navbar.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
        <a
          href="https://linkedin.com/in/nixon-pang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="navbar__link">
            <LinkedInIcon fontSize="large" />
          </div>
        </a>
        <a
          href="https://instagram.com/nickypangers"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="navbar__link">
            <InstagramIcon fontSize="large" />
          </div>
        </a>
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
