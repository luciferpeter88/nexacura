import React from "react";
import { FaCheck } from "react-icons/fa";
import Text from "../../Components/Text/Text";
import OutlineButton from "../../Components/Button/OutlineButton";

function VerifiedEmail() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className=" w-44 h-44 rounded-full bg-yellow-200 flex justify-center items-center ">
          <div className="  w-24 h-24 rounded-full bg-secondary flex justify-center items-center   ">
            <FaCheck className=" text-white text-4xl" />
          </div>
        </div>
        <Text className="text-2xl  font-bold text-primary">
          Email Verified Successfully
        </Text>
        <Text className="text-gray-500 text-lg">
          Your email has been verified successfully
        </Text>

        <OutlineButton
          borderColor="border-primary"
          hoverBorderColor="hover:border-secondary"
          textColor="text-white"
          hoverTextColor="hover:text-secondary"
          buttonText="Continue"
          hoverBackgroundColor="hover:bg-transparent"
          backgroundColor="bg-primary"
          width=" w-full"
        />
      </div>
    </div>
  );
}

export default VerifiedEmail;
