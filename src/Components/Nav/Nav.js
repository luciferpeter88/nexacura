import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <nav className="flex px-10 py-3 justify-between text-lg items-center font-medium text-gray-400">
        <div className=" text-primary text-4xl font-bold">
          Nexa<span className="text-secondary font-semibold">Cura</span>
        </div>
        <div className=" flex gap-x-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
        </div>
        <div className="flex gap-x-3">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </nav>
      <Outlet />
    </React.Fragment>
  );
}

export default Nav;
