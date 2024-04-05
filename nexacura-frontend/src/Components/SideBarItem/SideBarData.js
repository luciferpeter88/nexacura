/**
 * The SideBarData component in this JavaScript code handles navigation and dispatches actions based on
 * the label provided.
 * @returns The `SideBarData` component is being returned. It is a functional component that renders a
 * clickable sidebar item based on the provided `label`, `icon`, and `colour` props. The component uses
 * the `useContext` and `useNavigate` hooks from React Router to handle navigation and context
 * dispatch.
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import authenticationContext from "../../context/authenticationContext";

/* The `SideBarData` function in this JavaScript code is responsible for handling the navigation logic
based on the `label` provided to the component. */
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
  /**
   * The handleClick function checks if the label is "Logout" and dispatches a DASHBOARD_LOGOUT action
   * before navigating to a specified location.
   */
  function handleClick() {
    if (label === "Logout") {
      dispatch({
        type: "DASHBOARD_LOGOUT",
      });
    }
    navigate(navigatTo);
  }

  return (
    /* The `div` element in the `SideBarData` component is responsible for rendering a clickable sidebar
   item based on the provided props and handling the navigation logic. Here's a breakdown of what
   each part of the `div` element is doing: */
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
