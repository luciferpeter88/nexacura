import React from "react";
import Text from "../../Components/Text/Text";
import OutlineButton from "../../Components/Button/OutlineButton";

function PaymentOption({
  id,
  imageUrls,
  altTexts,
  name = "payment",
  className = "w-14",
  onChange,
}) {
  return (
    <div className="flex items-center bg-gray-100 rounded px-4 py-8">
      <div className="w-10"></div>
      <input
        type="radio"
        className="w-6 h-6 cursor-pointer"
        id={id}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={id} className=" ml-4 flex gap-2 cursor-pointer">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            className={className}
            alt={altTexts[index]}
          />
        ))}
      </label>
    </div>
  );
}

function PaymentOptions() {
  const handleOptionChange = (id) => {
    console.log(id);
  };
  return (
    <div className="mt-24">
      <Text className="text-2xl text-center text-primary font-semibold">
        Select Payments Method
      </Text>
      <div className="grid gap-4 grid-cols-1 w-96 mx-auto mt-10">
        <PaymentOption
          id="card"
          imageUrls={[
            "https://readymadeui.com/images/visa.webp",
            "https://readymadeui.com/images/american-express.webp",
            "https://readymadeui.com/images/master.webp",
          ]}
          altTexts={["card1", "card2", "card3"]}
          onChange={() => handleOptionChange("card")}
        />
        <PaymentOption
          id="paypal"
          imageUrls={["https://readymadeui.com/images/paypal.webp"]}
          altTexts={["paypalCard"]}
          className="w-28"
          onChange={() => handleOptionChange("paypal")}
        />
        <PaymentOption
          id="google"
          imageUrls={["https://readymadeui.com/images/paypal.webp"]}
          altTexts={["paypalCard"]}
          className="w-28"
          onChange={() => handleOptionChange("google")}
        />
        <PaymentOption
          id="apple"
          imageUrls={["https://readymadeui.com/images/paypal.webp"]}
          altTexts={["paypalCard"]}
          className="w-28"
          onChange={() => handleOptionChange("apple")}
        />
        <OutlineButton
          borderColor="border-primary"
          hoverBorderColor="hover:border-primary"
          textColor="text-white"
          hoverTextColor="hover:text-primary"
          buttonText="Continue"
          hoverBackgroundColor="hover:bg-transparent"
          backgroundColor="bg-primary"
          width="w-full "
        />
      </div>
    </div>
  );
}

export default PaymentOptions;
