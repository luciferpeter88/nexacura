import React from "react";
import SideBarData from "../SideBarItem/SideBarData";
import { sidebarItems, bottomSidebarItems } from "../../data/SideBarData";

function SideNavDashBoard({
  items = sidebarItems,
  bottomItems = bottomSidebarItems,
}) {
  return (
    <div className="min-h-screen w-72 h-screen ">
      <div className="p-2 overflow-y-auto text-center bg-gray-100 h-full flex flex-col">
        <div className="text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <div className="z-[1001] text-4xl font-bold text-secondary">
              Nexa<span className="text-primary font-semibold">Cura</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between">
          <div>
            {items.map((item) => (
              <SideBarData key={item.label} {...item} />
            ))}
          </div>
          <div>
            {bottomItems.map((item) => (
              <SideBarData key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNavDashBoard;
