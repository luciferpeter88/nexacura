import React from "react";
import shakes from "../../assets/shakespeare.jpeg";
/**
 * The Bubble function returns a styled div element containing information about Albert Einstein.
 * @returns A JSX element representing a bubble component with a circular icon, displaying the name
 * "Albert Einstein" and the occupation "Physicist".
 */
function Bubble() {
  return (
    <div className=" w-60 h-24 bg-white rounded-3xl flex text-gray-800 items-center pl-3 gap-x-3 shadow-2xl">
      <Circle />
      <div className=" self-end pb-5">
        <h4 className=" text-primary font-semibold">Albert Einstein</h4>
        <p>Physicist</p>
      </div>
    </div>
  );
}

/**
 * The Circle function returns a div element containing an image displayed in a circular container.
 * @returns A div element with a class name of "h-16 w-16 flex justify-center items-center bg-white
 * rounded-full", containing an image element with a source attribute pointing to an image file named
 * "shakes", an alt attribute set to "AI", and a class name of "rounded-full h-[95%] w-[95%]".
 */
function Circle() {
  return (
    <div className=" h-16 w-16 flex justify-center items-center bg-white rounded-full">
      <img src={shakes} alt="AI" className="rounded-full h-[95%] w-[95%]" />
    </div>
  );
}

export { Bubble, Circle };
