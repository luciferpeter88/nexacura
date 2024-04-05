/**
 * The Blacklayer function returns a div element with a black background color, covering the entire
 * screen with a specified opacity.
 * @returns A `<div>` element with the following attributes:
 * - className: "absolute top-0 left-0 bg-black h-full w-full opacity-40"
 */
import React from "react";

function Blacklayer() {
  return (
    <div className=" absolute top-0 left-0 bg-black h-full w-full opacity-40"></div>
  );
}

export default Blacklayer;
