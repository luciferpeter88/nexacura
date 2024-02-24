import React from "react";
import { FaStar } from "react-icons/fa";
import Text from "../Text/Text";
import image from "../../assets/users/49.jpg";

function Testimonial({ name, rating, review }) {
  return (
    <div className="flex flex-col gap-y-5 p-5 shadow-2xl rounded-lg">
      <div className="flex">
        {Array.from({ length: rating }, (_, index) => (
          <FaStar key={index} className="text-secondary text-xl" />
        ))}
      </div>
      <Text size="txtPoppinsMedium16Gray90001" className="text-gray-600">
        {review}
      </Text>
      <div className="flex gap-x-5 items-center">
        <img
          src={image}
          alt="user"
          className=" h-10 w-10 rounded-full object-cover"
        />
        <Text size="txtPoppinsMedium16Gray90001">- {name}</Text>
      </div>
    </div>
  );
}

export default Testimonial;
