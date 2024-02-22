import React from "react";

const OutlineButton = (props) => {
  return (
    <button
      className={`${props.backgroundColor} outline-none mr-1 mb-1 border border-solid ${props.borderColor} w-32 rounded px-6 py-3  text-sm font-bold ${props.textColor} uppercase focus:outline-none ${props.hoverBorderColor} ${props.hoverTextColor} ${props.hoverBackgroundColor} transition-all duration-150 ease-in-out`}
    >
      {props.buttonText}
    </button>
  );
};

export default OutlineButton;
