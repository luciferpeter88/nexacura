import React from "react";
import DefaultNav from "./DefaultNav";
import DashboardNav from "./DashboardNav";
import authenticationContext from "../../context/authenticationContext";

function Nav() {
  const {
    initial: { isAuthenticated },
  } = React.useContext(authenticationContext);
  return (
    <React.Fragment>
      {isAuthenticated ? <DashboardNav /> : <DefaultNav />}
    </React.Fragment>
  );
}

export default Nav;
