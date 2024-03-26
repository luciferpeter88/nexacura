import React from "react";
import user1 from "../../assets/users/user1.jpeg";
import Text from "../Text/Text";

function Circle() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={user1} alt="user" className=" rounded-full h-20 w-20" />
      <Text size="txtPoppinsRegular14" className=" text-lg text-black">
        Bessie Cooper
      </Text>
      <Text size="txtPoppinsRegular14" className=" text-lg text-gray-600 ">
        CEO
      </Text>
    </div>
  );
}

export default Circle;
