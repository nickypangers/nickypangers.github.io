import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <p>Nixon Pang</p>
      </div>
      <div className="header__nav">
        <button className="header__navOption">
          Home
        </button>
        <button className="header__navOption">
          About
        </button>
        <button className="header__navOption">
          Projects
        </button>
        <button className="header__navOption">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Header;
