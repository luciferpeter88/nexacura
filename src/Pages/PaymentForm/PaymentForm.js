import React from "react";
import Text from "../../Components/Text/Text";
import OutlineButton from "../../Components/Button/OutlineButton";

function Input({ label, type, placeholder, className, id }) {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="text-sm text-gray-600">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`px-4 py-3.5 bg-gray-100 text-[#333] w-full text-sm border rounded-md focus:border-primary outline-none ${className}`}
      />
    </div>
  );
}

function PaymentForm() {
  return (
    <div className="font-sans bg-white px-10 mt-24 flex justify-center">
      <div className="w-[30rem]">
        <Text className="text-2xl text-center text-primary font-semibold">
          Select Payments Method
        </Text>
        <Text className="text-lg text-center text-gray-500">
          Simple transparent pricing
        </Text>

        <form className="mt-5">
          <div className="grid gap-3">
            <Input
              label="Cardholder's Name"
              type="text"
              placeholder="Jhon Wick"
              id="cardholder"
            />
            <Input
              label="Card Number"
              type="number"
              placeholder="5282 3456 7890 1289"
              className="flex bg-gray-100 border rounded-md focus-within:border-primary overflow-hidden items-center"
              id="cardNumber"
            />
            <div className="grid grid-cols-2 gap-6">
              <Input label="EXP." type="number" placeholder="5/2024" id="exp" />
              <Input label="CVV" type="number" placeholder="528" id="cvv" />
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
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
