import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to={"/"} className="">
            <img src={logo} alt="log/img" className="" />
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
