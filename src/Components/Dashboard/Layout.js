import React from "react";
import ProfileDashNav from "../../Components/ProfileDashNav/ProfileDashNav";

function Layout({ children }) {
  return (
    <div
      className="p-3 pr-10 h-screen  overflow-scroll"
      style={{ width: "calc(100% - 18rem)" }}
    >
      <ProfileDashNav />
      {children}
    </div>
  );
}

export default Layout;
