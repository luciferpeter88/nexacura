import React from "react";

function Button(props) {
  return (
    <button class={`${props.colour} font-medium py-2 px-8 rounded'`}>
      Try Now
    </button>
  );
}

export default Button;
