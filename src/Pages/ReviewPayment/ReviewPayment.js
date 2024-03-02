import React from "react";
import Text from "../../Components/Text/Text";
import OutlineButton from "../../Components/Button/OutlineButton";
import Layout from "../../Components/Dashboard/Layout";

function ReviewPayment() {
  return (
    <Layout>
      <div className="font-sans bg-white px-10 2xl:mt-20 mt-10 h-full flex justify-center">
        <div className="w-[30rem]">
          <Text className="text-2xl text-center text-primary font-semibold">
            Review Payments
          </Text>
          <Text className="text-md text-center text-gray-500">
            Please review your payments
          </Text>
          <div className="bg-gray-100 rounded-md p-3 mt-10 flex flex-col gap-y-3">
            <div className="flex justify-between border-b-2 pb-2 text-sm font-medium text-gray-600">
              <Text>Subscription</Text>
              <Text>Starter Plan</Text>
            </div>
            <div className="flex  justify-between border-b-2 pb-2 text-sm font-medium text-gray-600">
              <div className=" space-y-3">
                <Text>Amount</Text>
                <Text>Tax</Text>
              </div>
              <div className=" space-y-3">
                <Text>£10</Text>
                <Text>£1</Text>
              </div>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-600">
              <Text>Total Amount</Text>
              <Text>£11.00</Text>
            </div>
          </div>
          <OutlineButton
            borderColor="border-primary"
            hoverBorderColor="hover:border-primary"
            textColor="text-white"
            hoverTextColor="hover:text-primary"
            buttonText="Continue"
            hoverBackgroundColor="hover:bg-transparent"
            backgroundColor="bg-primary"
            width="mt-5"
          />
        </div>
      </div>
    </Layout>
  );
}

export default ReviewPayment;
