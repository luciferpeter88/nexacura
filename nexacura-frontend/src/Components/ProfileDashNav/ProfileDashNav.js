/**
 * The ProfileDashNav component displays the user's profile image and name if the user is
 * authenticated.
 * @returns The `ProfileDashNav` component is being returned. It displays the user's profile image and
 * name if the user is authenticated, otherwise it displays nothing. The profile image is displayed as
 * a rounded image with a size of 10x10, and the user's name is displayed with a large font size and
 * bold weight.
 */
import React from "react";
import Text from "../Text/Text";
import authenticationContext from "../../context/authenticationContext";

/* The `ProfileDashNav` function component is responsible for rendering the user's profile image and
name if the user is authenticated. Here's a breakdown of what the function is doing: */
function ProfileDashNav() {
  const { initial } = React.useContext(authenticationContext);
  const isAuthenticated = initial.isAuthenticated;

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
