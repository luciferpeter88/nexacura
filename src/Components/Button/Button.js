import React from "react";

function Button({ colour }) {
  return (
    <button class={`${colour} font-medium py-2 px-8 rounded'`}>Try Now</button>
  );
}

export default Button;
