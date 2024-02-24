import React from "react";
import Text from "../Text/Text";

function MoreCard() {
  return (
    <div className="rounded-lg shadow-2xl p-5 py-10 border-t-8 border-primary">
      <Text className="text-2xl font-bold leading-7 text-gray-900">
        Expertise Meets Innovation
      </Text>
      <Text className="text-lg text-gray-600 mt-3">
        Our platform allows you to unlock the wisdom of history's brightest
        minds. Gain fresh perspectives that can inspire your own creativity and
        innovation. Every conversation is designed to be informative and
        educational.
      </Text>
    </div>
  );
}

export default MoreCard;
