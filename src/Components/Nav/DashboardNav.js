import React from "react";
import { Outlet } from "react-router-dom";
import SideNavDashBoard from "./SideNavDashBoard";
function DashboardNav() {
  return (
    <React.Fragment>
      <div className="flex">
        <SideNavDashBoard />
        <Outlet />
      </div>
    </React.Fragment>
  );
}

export default DashboardNav;
