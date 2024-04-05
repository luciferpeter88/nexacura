/**
 * The MoreCard component renders a styled card with a title and description emphasizing expertise,
 * innovation, and educational conversations.
 * @returns The MoreCard component is being returned, which is a React functional component that
 * renders a styled card with text content.
 */
import React from "react";
import Text from "../Text/Text";

function MoreCard() {
  return (
    <div className="rounded-lg shadow-2xl p-5 py-10 border-t-8 border-secondary">
      <Text className="text-2xl font-bold leading-7 text-primary">
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
