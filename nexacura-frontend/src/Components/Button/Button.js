/**
 * The Button component is a React functional component that renders a button with a specified color
 * and text "Try Now".
 * @returns A button component is being returned with a "Try Now" text inside it. The button has a
 * class attribute that includes the colour prop passed to the Button component, along with other CSS
 * classes for styling.
 */
import React from "react";

function Button({ colour }) {
  return (
    <button class={`${colour} font-medium py-2 px-8 rounded'`}>Try Now</button>
  );
}

export default Button;
