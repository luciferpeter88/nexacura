import React from "react";
import Text from "../Text/Text";
import authenticationContext from "../../context/authenticationContext";

/**
 * Renders the profile section in the dashboard navigation. It displays the user's profile image and name
 * if the user is authenticated. This component relies on the authenticationContext to check the user's
 * authentication status and to fetch user details.
 */
function ProfileDashNav() {
  // Extracts 'initial' state from authenticationContext to determine authentication status and user information.
  const { initial } = React.useContext(authenticationContext);
  const isAuthenticated = initial.isAuthenticated;

  return (
    <div className="flex gap-x-3 items-center justify-end">
      {/* Displays user's profile image if authenticated, otherwise shows a default/blank image. */}
      <img
        src={isAuthenticated ? initial.user.image : ""}
        alt="profile"
        className="rounded-full h-10 w-10"
      />
      {/* Displays user's name if authenticated. */}
      <Text size="lg" weight="bold" className="text-primary font-medium">
        {isAuthenticated ? initial.user.name : ""}
      </Text>
    </div>
  );
}

export default ProfileDashNav;
