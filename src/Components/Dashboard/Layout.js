import React from "react";
import ProfileDashNav from "../../Components/ProfileDashNav/ProfileDashNav";

function Layout({ children }) {
  return (
    <div
      className="p-3 pr-10 h-screen  overflow-hidden"
      style={{ width: "calc(100% - 18rem)" }}
    >
      <ProfileDashNav />
      {children}
    </div>
  );
}

export default Layout;
