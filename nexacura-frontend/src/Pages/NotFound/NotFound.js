import React from "react";
import OutlineButton from "../../Components/Button/OutlineButton";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-primary">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-secondary px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <NavLink to="/" className="text-white text-2xl font-bold mt-5">
        <OutlineButton
          borderColor="border-secondary"
          hoverBorderColor="hover:border-secondary"
          textColor="text-white"
          hoverTextColor="hover:text-secondary"
          buttonText="Go Home"
          hoverBackgroundColor="hover:bg-transparent"
          backgroundColor="bg-secondary"
        />
      </NavLink>
    </main>
  );
}

export default NotFound;
