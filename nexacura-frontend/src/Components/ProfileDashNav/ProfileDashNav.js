import React from "react";
import Text from "../Text/Text";
import user from "../../assets/users/49.jpg";
import authenticationContext from "../../context/authenticationContext";

function ProfileDashNav() {
  const { initial } = React.useContext(authenticationContext);
  const isAuthenticated = initial.isAuthenticated;
  // console.log("Data:", initial);
  return (
    <div className="flex gap-x-3 items-center justify-end">
      <img src={user} alt="profile" className="rounded-full h-10 w-10" />
      <Text size="lg" weight="bold" className="">
        {isAuthenticated ? initial.user.name : ""}
      </Text>
    </div>
  );
}

export default ProfileDashNav;
