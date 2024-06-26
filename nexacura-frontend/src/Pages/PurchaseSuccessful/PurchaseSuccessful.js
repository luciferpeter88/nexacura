import React from "react";
import { FaCheck } from "react-icons/fa";
import Text from "../../Components/Text/Text";
import OutlineButton from "../../Components/Button/OutlineButton";
import Layout from "../../Components/Dashboard/Layout";

function PurchaseSuccessful() {
  return (
    <Layout>
      <div className="flex flex-col   gap-y-5 font-sans bg-white px-10 2xl:mt-20 mt-10 h-full items-center">
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
    </Layout>
  );
}

export default PurchaseSuccessful;
