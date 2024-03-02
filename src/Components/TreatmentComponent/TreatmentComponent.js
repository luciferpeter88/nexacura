import React from "react";
import { TbLetterASmall } from "react-icons/tb";
import Text from "../Text/Text";

function TreatmentComponent({ text }) {
  return (
    <div className="group flex text-black  items-center p-2 m-2 rounded-md  bg-blue-200 hover:text-white hover:bg-primary hover:border-white">
      <Text className="font-semibold">{text}</Text>
    </div>
  );
}

export default TreatmentComponent;
