import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/projects">
          <p>Projects</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <div className="header__right">
        <p>My Resume</p>
        <a href="http://instagram.com/nickypangers" target="_blank">
          <p>Instagram</p>
        </a>
        <a href="http://github.com/nickypangers" target="_blank">
          <p>Github</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
