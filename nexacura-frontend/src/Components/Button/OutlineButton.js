import React from "react";

function OutlineButton({
  borderColor,
  hoverBorderColor,
  textColor,
  hoverTextColor,
  buttonText,
  hoverBackgroundColor,
  backgroundColor,
  width,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`${backgroundColor} outline-none mr-1 mb-1 border border-solid ${borderColor} w-32 ${width} rounded px-6 py-3  text-sm font-bold ${textColor} uppercase focus:outline-none ${hoverBorderColor} ${hoverTextColor} ${hoverBackgroundColor} transition-all duration-150 ease-in-out`}
    >
      {buttonText}
    </button>
  );
}

export default OutlineButton;
