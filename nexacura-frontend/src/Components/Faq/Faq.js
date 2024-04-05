/**
 * The `Faq` component in React displays frequently asked questions (FAQ) based on different categories
 * and allows users to switch between categories.
 * @returns The `Faq` component is being returned. It consists of a section where users can click on
 * different categories such as General, Registration, Payment, and Privacy to display frequently asked
 * questions (FAQ) related to those categories. The `renderSwitch` function dynamically renders the
 * `FaqAnswers` component with specific data based on the selected category (`displayFaq`). The default
 * category displayed is General if
 */
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

  /**
   * The `renderSwitch` function takes a `displayFaq` parameter and returns `FaqAnswers` component with
   * specific data based on the value of `displayFaq`, defaulting to general data if no match is found.
   * @param displayFaq - The `displayFaq` parameter is a string that represents the category of
   * frequently asked questions (FAQ) to be displayed. The `renderSwitch` function takes this parameter
   * and based on its value, it returns a component `<FaqAnswers>` with the corresponding data for that
   * FAQ category. If the
   * @returns The `renderSwitch` function returns a component `<FaqAnswers>` with specific data based on
   * the value of the `displayFaq` parameter. If `displayFaq` is "General", it returns `<FaqAnswers
   * data={general} />`, if it is "Registration" it returns `<FaqAnswers data={registration} />`, if it
   * is "Payment" it returns `<F
   */
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
    <div className="flex px-10 xl:px-32 gap-x-20 mt-20 flex-col lg:flex-row">
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
          Pricing
        </Text>
        <Text
          className="cursor-pointer hover:text-primary"
          onClick={() => click("Privacy")}
        >
          Privacy
        </Text>
      </div>
      <div className=" xl:w-2/3">{renderSwitch(displayFaq)}</div>
    </div>
  );
}

export default Faq;
