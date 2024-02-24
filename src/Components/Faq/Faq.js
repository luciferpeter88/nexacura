import React from "react";
import Text from "../Text/Text";
import FaqAnswers from "./FaqAnswers";
import {
  general,
  payment,
  registration,
  privacy,
} from "../../data/questionData";
function Faq() {
  const [displayFaq, setDisplayFaq] = React.useState("General");
  const click = (textName) => {
    setDisplayFaq(textName);
  };

  const renderSwitch = (displayFaq) => {
    switch (displayFaq) {
      case "General":
        return <FaqAnswers data={general} />;
      case "Registration":
        return <FaqAnswers data={registration} />;
      case "Payment":
        return <FaqAnswers data={payment} />;
      case "Privacy":
        return <FaqAnswers data={privacy} />;
      // Add more cases as needed
      default:
        return <FaqAnswers data={general} />;
    }
  };

  return (
    <div className="flex px-10 gap-x-20 mt-20 flex-col lg:flex-row">
      <div className=" flex justify-between lg:flex-col lg:justify-normal mb-20 text-lg relative">
        <div className="absolute top-0 right-[-2rem] h-[10rem] w-[2.5px] bg-primary hidden lg:block"></div>
        <Text
          className="cursor-pointer hover:text-primary"
          onClick={() => click("General")}
        >
          General
        </Text>
        <Text
          className="cursor-pointer hover:text-primary"
          onClick={() => click("Registration")}
        >
          Registration
        </Text>
        <Text
          className="cursor-pointer hover:text-primary"
          onClick={() => click("Payment")}
        >
          Payment
        </Text>
        <Text
          className="cursor-pointer hover:text-primary"
          onClick={() => click("Privacy")}
        >
          Privacy
        </Text>
      </div>
      <div>{renderSwitch(displayFaq)}</div>
    </div>
  );
}

export default Faq;
