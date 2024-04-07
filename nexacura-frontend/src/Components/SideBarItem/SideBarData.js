import React from "react";
import { useNavigate } from "react-router-dom";
import authenticationContext from "../../context/authenticationContext";

/**
 * The SideBarData component renders an individual sidebar item with an icon, label, and dynamic navigation.
 * It uses the 'icon', 'label', and 'colour' props to construct the sidebar item's appearance and behavior.
 * The component interacts with the authentication context for logout functionality and uses React Router's
 * 'useNavigate' hook for navigation. Depending on the 'label' prop, it navigates to different routes or
 * performs a logout operation.
 *
 * @param {Object} props - Component props
 * @param {Component} props.icon - React icon component to be displayed.
 * @param {string} props.label - Label text for the sidebar item.
 * @param {string} props.colour - Additional CSS classes for styling the sidebar item.
 */

function SideBarData({ icon: Icon, label, colour }) {
  const { dispatch } = React.useContext(authenticationContext);

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
      navigatTo = "/";
      break;
    default:
      navigatTo = "/";
      break;
  }
  function handleClick() {
    if (label === "Logout") {
      dispatch({
        type: "DASHBOARD_LOGOUT",
      });
    }
    navigate(navigatTo);
  }

  return (
    <div
      className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer ${colour} hover:text-white text-black font-semibold`}
      onClick={handleClick}
      key={label}
    >
      <Icon />
      <span className="text-[15px] ml-4">{label}</span>
    </div>
  );
}

export default SideBarData;
