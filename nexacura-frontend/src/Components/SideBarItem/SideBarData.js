import React from "react";
import { useNavigate } from "react-router-dom";

function SideBarData({ icon: Icon, label, colour }) {
  const navigate = useNavigate();
  let navigatTo = "/";

  switch (label) {
    case "Video":
      navigatTo = "/";
      break;
    case "My Subscription":
      navigatTo = "/my-subscription";
      break;
    case "Help":
      navigatTo = "/help";
      break;
    case "My Account":
      navigatTo = "/my-account";
      break;
    case "Logout":
      navigatTo = "/logout";
      break;
    default:
      navigatTo = "/";
      break;
  }

  return (
    <div
      className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${colour} hover:text-white text-black font-semibold`}
      onClick={() => navigate(navigatTo)}
      key={label}
    >
      <Icon />
      <span className="text-[15px] ml-4">{label}</span>
    </div>
  );
}

export default SideBarData;
