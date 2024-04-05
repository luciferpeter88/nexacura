/**
 * The `SubscriptionCard` function in JavaScript renders a subscription card component with name,
 * price, duration, benefits, and a button to select the plan.
 * @returns The `SubscriptionCard` component is being returned. It is a functional component that
 * displays subscription card information such as name, price, duration, benefits, and a button to
 * select the plan. The card design includes styling for the header, pricing section, benefits list
 * with checkmarks, and a button styled with gradient colors and hover effects.
 */
import React from "react";
import { FaCheck } from "react-icons/fa";
import OutlineButton from "../Button/OutlineButton";
import Text from "../Text/Text";
import { NavLink } from "react-router-dom";

function SubscriptionCard({ name, price, duration, benefits, popular }) {
  return (
    <div
      className={`shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] rounded-md overflow-hidden transition-all duration-500 hover:scale-105 ${
        popular ? "" : ""
      }`}
    >
      <div className="text-center p-4 bg-gradient-to-r from-primary to-[#11a5e9]">
        <Text className="text-xl text-white font-semibold mb-1">{name}</Text>
        <Text className="text-xs text-white">{duration}</Text>
      </div>
      <div className="text-center -mt-8 mb-4">
        <div className="h-24 w-24 mx-auto shadow-xl rounded-full bg-gradient-to-r from-primary to-[#11a5e9] text-white flex items-center justify-center">
          <Text className="text-2xl font-semibold">{price}</Text>
        </div>
      </div>
      <div className="px-6 py-4">
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm text-gray-500">
              <FaCheck className="mr-2 text-green-500" /> {benefit}
            </li>
          ))}
        </ul>
        <NavLink to="/register">
          <OutlineButton
            borderColor="border-primary"
            hoverBorderColor="hover:border-secondary"
            textColor="text-white"
            hoverTextColor="hover:text-secondary"
            buttonText="Select Plan"
            hoverBackgroundColor="hover:bg-transparent"
            backgroundColor="bg-primary"
            width="w-full mt-4"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default SubscriptionCard;
