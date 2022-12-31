import React from "react";
import { Outlet } from "react-router-dom";
import MoonIcon from "../assets/nightlight_black_24dp.svg";
import WhiteMoonIcon from "../assets/nightlight_black_24dpwhite.svg";

function Header({ handleDarkMode }) {
  return (
    <header className="py-2 border-bottom border-3">
      <div className="d-flex justify-content-between container-fluid">
        <h1 className="my-0">Where in the world?</h1>
        <div className="flex cursor-pointer" onClick={handleDarkMode}>
        <img className="tilt dark-moon" src={MoonIcon} alt="" />
        <img className="tilt white-moon" src={WhiteMoonIcon} alt="" />

          <p className="my-0">Dark Mode</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
