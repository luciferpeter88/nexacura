/**
 * The SideNavDashBoard function renders a sidebar component with sidebar items and bottom sidebar
 * items using React.
 * @returns The `SideNavDashBoard` component is being returned. It contains a sidebar layout with a
 * logo, sidebar items, and bottom sidebar items rendered using the `SideBarData` component.
 */
import React from "react";
import SideBarData from "../SideBarItem/SideBarData";
import { sidebarItems, bottomSidebarItems } from "../../data/SideBarData";

function SideNavDashBoard() {
  return (
    <div className=" w-0 overflow-hidden lg:w-72 h-screen ">
      <div className="p-3 overflow-y-auto text-center bg-gray-100 h-full flex flex-col">
        <div className="text-xl">
          <div className=" flex items-center">
            <div className="z-[1001] text-4xl font-bold text-secondary">
              Nexa<span className="text-primary font-semibold">Cura</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between py-10">
          <div>
            {sidebarItems.map((item) => (
              <SideBarData key={item.label} {...item} />
            ))}
          </div>
          <div>
            {bottomSidebarItems.map((item) => (
              <SideBarData key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavDashBoard;
