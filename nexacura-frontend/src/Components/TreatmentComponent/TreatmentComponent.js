/**
 * The `TreatmentComponent` function is a React component that displays a text with specific styling.
 * @returns The `TreatmentComponent` function is returning a JSX element that consists of a `div`
 * element with specific classes and a `Text` component as its child. The `Text` component is receiving
 * the `text` prop passed to the `TreatmentComponent` function.
 */
import React from "react";
import Text from "../Text/Text";

function TreatmentComponent({ text }) {
  return (
    <div className="text-black  items-center p-2 my-3 rounded-md  bg-blue-200 hover:text-white hover:bg-primary hover:border-white">
      <Text className="font-semibold">{text}</Text>
    </div>
  );
}

export default TreatmentComponent;
