import React from "react";
import { FaCheck } from "react-icons/fa";
import Text from "../../Components/Text/Text";
import OutlineButton from "../../Components/Button/OutlineButton";

function PurchaseSuccessful() {
  return (
    <div className=" h-screen flex flex-col mt-24 ">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <div className=" w-44 h-44 rounded-full bg-yellow-200 flex justify-center items-center ">
          <div className="  w-24 h-24 rounded-full bg-secondary flex justify-center items-center   ">
            <FaCheck className=" text-white text-4xl" />
          </div>
        </div>
        <Text className="text-2xl  font-bold text-primary">
          Purchase Successful
        </Text>

        <OutlineButton
          borderColor="border-primary"
          hoverBorderColor="hover:border-secondary"
          textColor="text-white"
          hoverTextColor="hover:text-secondary"
          buttonText="Start Using"
          hoverBackgroundColor="hover:bg-transparent"
          backgroundColor="bg-primary"
          width=" w-[10rem]"
        />
      </div>
    </div>
  );
}

export default PurchaseSuccessful;
