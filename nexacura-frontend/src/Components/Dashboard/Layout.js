import React from "react";
import ProfileDashNav from "../ProfileDashNav/ProfileDashNav";

function Layout({ children }) {
  return (
    <div className="p-3 lg:pr-10 h-screen  overflow-scroll w-full lg:w-custom">
      <ProfileDashNav />
      {children}
    </div>
  );
}

export default Layout;
