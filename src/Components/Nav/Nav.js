import React from "react";
import DefaultNav from "./DefaultNav";
import DashboardNav from "./DashboardNav";

function Nav() {
  const loggedIn = true;
  return (
    <React.Fragment>
      {loggedIn ? <DashboardNav /> : <DefaultNav />}
    </React.Fragment>
  );
}

export default Nav;
