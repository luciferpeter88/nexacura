import React from "react";

const SideBarData = ({ icon: Icon, label, onClick, colour: colour }) => (
  <div
    className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${colour} hover:text-white text-black font-semibold`}
    onClick={onClick}
  >
    <Icon />
    <span className="text-[15px] ml-4">{label}</span>
  </div>
);

export default SideBarData;
