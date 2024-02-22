import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import OutlineButton from "../Button/OutlineButton";

function Nav() {
  return (
    <React.Fragment>
      <nav className="flex px-10 py-3 justify-between text-lg items-center font-medium text-gray-400">
        <div className=" text-primary text-4xl font-bold">
          Nexa<span className="text-secondary font-semibold">Cura</span>
        </div>
        <div className=" flex gap-x-3 ">
          <NavLink className="hover:text-primary" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-primary" to="/about">
            About
          </NavLink>
          <NavLink className="hover:text-primary" to="/contact">
            Contact
          </NavLink>
          <NavLink className="hover:text-primary" to="/pricing">
            Pricing
          </NavLink>
        </div>
        <div className="flex gap-x-3">
          <NavLink to="/login">
            <OutlineButton
              borderColor="border-primary"
              hoverBorderColor="hover:border-white"
              textColor="text-primary"
              hoverTextColor="hover:text-white"
              buttonText="Login"
              hoverBackgroundColor="hover:bg-primary"
              // backgroundColor="bg-primary"
            />
          </NavLink>
          <NavLink to="/register">
            <OutlineButton
              borderColor="border-secondary"
              hoverBorderColor="hover:border-secondary"
              textColor="text-white"
              hoverTextColor="hover:text-secondary"
              buttonText="Try Now"
              hoverBackgroundColor="hover:bg-transparent"
              backgroundColor="bg-secondary"
            />
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

export default Nav;
