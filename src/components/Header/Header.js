import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header w-100 d-flex flex-lg-row flex-column align-items-center p-3">
      <div className="header__title col-lg-3 col-12 d-flex justify-content-lg-start justify-content-center">
        Nixon Pang
      </div>
      <div className="header__nav d-flex flex-lg-row flex-column col-lg-9 col-12 justify-content-lg-between align-items-center">
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="col-lg-3 col-12 d-flex justify-content-center"
        >
          <div className="header__navOption">Home</div>
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none" }}
          className="col-lg-3 col-12 d-flex justify-content-center"
        >
          <div className="header__navOption">About</div>
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none" }}
          className="col-lg-3 col-12 d-flex justify-content-center"
        >
          <div className="header__navOption">Projects</div>
        </Link>
        <Link
          to="/about"
          style={{ textDecoration: "none" }}
          className="col-lg-3 col-12 d-flex justify-content-center"
        >
          <div className="header__navOption">Contact</div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
