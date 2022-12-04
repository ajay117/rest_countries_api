import React from "react";
import MoonIcon from "../assets/nightlight_black_24dp.svg";

function Header() {
  return (
    <header className="flex">
      <h1>Where in the world?</h1>
      <div className="flex">
        <img className="tilt" src={MoonIcon} alt="" />
        <p>Dark Mode</p>
      </div>
    </header>
  );
}

export default Header;
