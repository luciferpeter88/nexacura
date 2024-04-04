import React from "react";
import Text from "../Text/Text";
import authenticationContext from "../../context/authenticationContext";

function ProfileDashNav() {
  const { initial } = React.useContext(authenticationContext);
  const isAuthenticated = initial.isAuthenticated;
  // console.log("Data:", initial);
  return (
    <div className="flex gap-x-3 items-center justify-end">
      <img
        src={isAuthenticated ? initial.user.image : ""}
        alt="profile"
        className="rounded-full h-10 w-10"
      />
      <Text size="lg" weight="bold" className="text-primary font-medium">
        {isAuthenticated ? initial.user.name : ""}
      </Text>
    </div>
  );
}

export default ProfileDashNav;
