import React from "react";
import shakes from "../../assets/shakespeare.jpeg";
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

function Circle() {
  return (
    <div className=" h-16 w-16 flex justify-center items-center bg-white rounded-full">
      <img src={shakes} alt="AI" className="rounded-full h-[95%] w-[95%]" />
    </div>
  );
}

export { Bubble, Circle };
