import React from "react";
import Text from "../../Components/Text/Text";
import OutlineButton from "../../Components/Button/OutlineButton";
import Layout from "../../Components/Dashboard/Layout";

function PaymentOption({
  id,
  imageUrls,
  altTexts,
  name = "payment",
  className = "w-14",
  onChange,
}) {
  return (
    <div className="flex items-center bg-gray-100  px-4   py-6 lg:py-3 2xl:py-6 rounded-lg">
      <label htmlFor={id} className="flex gap-2 cursor-pointer">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            className={className}
            alt={altTexts[index]}
          />
        ))}
      </label>
      <input
        type="radio"
        className="w-5 h-5 cursor-pointer ml-auto"
        id={id}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

function PaymentOptions() {
  const handleOptionChange = (id) => {
    console.log(id);
  };
  return (
    <Layout>
      <div className="2xl:mt-20 xl:my-30  h-full ">
        <Text className="text-2xl text-center text-primary font-semibold">
          Select Payments Method
        </Text>
        <div className="grid gap-4 grid-cols-1 w-[25rem] mx-auto mt-10">
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
    </Layout>
  );
}

export default PaymentOptions;
