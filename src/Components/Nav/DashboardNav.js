import React from "react";
import { Outlet } from "react-router-dom";
function DashboardNav() {
  return (
    <React.Fragment>
      <h1>DashboardNav</h1>
      <Outlet />
    </React.Fragment>
  );
}

export default DashboardNav;
