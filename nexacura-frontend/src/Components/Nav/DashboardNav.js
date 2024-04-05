/**
 * The `DashboardNav` function renders a side navigation bar and an outlet component within a flex
 * container.
 * @returns The `DashboardNav` component is being returned, which consists of a `div` element with two
 * child components - `SideNavDashBoard` and `Outlet` from `react-router-dom`.
 */
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
