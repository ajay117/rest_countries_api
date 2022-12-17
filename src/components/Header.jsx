import React from "react";
import { Outlet } from "react-router-dom";
import MoonIcon from "../assets/nightlight_black_24dp.svg";

function Header() {
  return (
    <>
      <header className="flex py-2 px-3">
        <h1 className="my-0">Where in the world?</h1>
        <div className="flex">
          <img className="tilt" src={MoonIcon} alt="" />
          <p className="my-0">Dark Mode</p>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
