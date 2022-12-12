import React from "react";
import MoonIcon from "../assets/nightlight_black_24dp.svg";

function Header() {
  return (
    <header className="flex py-2">
      <h1 className="my-0">Where in the world?</h1>
      <div className="flex">
        <img className="tilt" src={MoonIcon} alt="" />
        <p className="my-0">Dark Mode</p>
      </div>
    </header>
  );
}

export default Header;
