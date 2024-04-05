/**
 * The Layout function in React renders a profile dashboard navigation component and its children
 * within a styled container.
 * @returns The Layout component is being returned, which includes a div element with the class names
 * "p-3 lg:pr-10 h-screen overflow-scroll w-full lg:w-custom", the ProfileDashNav component, and the
 * children components passed to the Layout component.
 */
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
