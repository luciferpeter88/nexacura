import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Nav() {
  return (
    <React.Fragment>
      <nav className=" bg-slate-600 flex px-10 pt-5 justify-between">
        <div>
          Nexa<span>Cura</span>
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
