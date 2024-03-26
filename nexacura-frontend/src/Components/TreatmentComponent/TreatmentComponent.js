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
