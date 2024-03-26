import React from "react";
import Text from "../Text/Text";
import user from "../../assets/users/49.jpg";

function ProfileDashNav() {
  return (
    <div className="flex gap-x-3 items-center justify-end">
      <img src={user} alt="profile" className="rounded-full h-10 w-10" />
      <Text size="lg" weight="bold" className="">
        John Wick
      </Text>
    </div>
  );
}

export default ProfileDashNav;
