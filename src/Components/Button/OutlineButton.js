import React from "react";

function OutlineButton({
  borderColor,
  hoverBorderColor,
  textColor,
  hoverTextColor,
  buttonText,
  hoverBackgroundColor,
  backgroundColor,
}) {
  return (
    <button
      className={`${backgroundColor} outline-none mr-1 mb-1 border border-solid ${borderColor} w-32 rounded px-6 py-3  text-sm font-bold ${textColor} uppercase focus:outline-none ${hoverBorderColor} ${hoverTextColor} ${hoverBackgroundColor} transition-all duration-150 ease-in-out`}
    >
      {buttonText}
    </button>
  );
}

export default OutlineButton;
