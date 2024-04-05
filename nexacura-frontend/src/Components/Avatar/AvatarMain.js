/**
 * The AvatarMain function renders the Avatar component within a React Fragment.
 * @returns The `AvatarMain` component is being returned, which renders the `Avatar` component inside a
 * `React.Fragment`.
 */
import React from "react";
import { Avatar } from "./Avatar";

function AvatarMain() {
  return (
    <React.Fragment>
      <Avatar />
    </React.Fragment>
  );
}

export default AvatarMain;
