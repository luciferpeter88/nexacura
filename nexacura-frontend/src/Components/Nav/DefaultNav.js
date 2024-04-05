/**
 * The DefaultNav component renders a navigation bar with links to different pages and buttons for
 * login and registration, along with a mobile menu for smaller screens.
 * @returns The DefaultNav component is being returned, which includes a navigation bar with links to
 * Home, About, Contact, and Pricing pages, along with Login and Register buttons. The component also
 * includes a MobileMenu component for responsive navigation on smaller screens.
 */
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import OutlineButton from "../Button/OutlineButton";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

/**
 * The MobileMenu function creates a responsive mobile menu with toggle functionality using React
 * useState hook.
 * @returns The MobileMenu component is being returned. It consists of a responsive mobile menu with a
 * toggle button that opens and closes the menu when clicked. The menu includes links to Home, About,
 * Contact, Pricing, Login, and Register pages.
 */
function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const width = isOpen
    ? "w-screen transition-all duration-300"
    : "w-0 transition-all duration-300";
  return (
    <div className="lg:hidden flex justify-between items-center px-10 py-3 relative ">
      <div
        className={`z-[1001]  text-4xl font-bold  ${
          isOpen ? "text-white" : "text-primary"
        }`}
      >
        Nexa<span className="text-secondary font-semibold">Cura</span>
      </div>
      <div className="flex gap-3 text-3xl text-primary z-[1001]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <AiOutlineMenuUnfold className="text-white" />
          ) : (
            <AiOutlineMenuFold />
          )}
        </button>
      </div>
      <div
        className={`h-screen ${width} absolute top-0 left-0 bg-primary z-[1000] overflow-hidden`}
      >
        <div className="flex flex-col gap-y-5 items-center justify-center h-full text-3xl font-bold text-white">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </NavLink>
          <NavLink to="/login" onClick={() => setIsOpen(false)}>
            Login
          </NavLink>
          <NavLink to="/register" onClick={() => setIsOpen(false)}>
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
}
/**
 * The DefaultNav function defines a navigation bar component with links and buttons for a website.
 * @returns The DefaultNav function is returning JSX elements for a navigation bar component. It
 * includes a logo, navigation links for Home, About, Contact, and Pricing, login and register buttons
 * styled as OutlineButton components, a MobileMenu component, and an Outlet component.
 */
function DefaultNav() {
  const color = (isActive) => (isActive ? "text-primary" : "text-gray-400");
  const style = "hover:text-secondary transition duration-300 ease-in-out";

  return (
    <React.Fragment>
      <nav className="lg:flex px-10 hidden  xl:px-32  py-3 justify-between text-lg items-center font-medium text-gray-400">
        <div className=" text-primary text-4xl font-bold">
          Nexa<span className="text-secondary font-semibold">Cura</span>
        </div>
        <div className=" flex gap-x-3 ">
          <NavLink
            className={({ isActive }) => `${color(isActive)} ${style}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => `${color(isActive)} ${style}`}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => `${color(isActive)} ${style}`}
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) => `${color(isActive)} ${style}`}
            to="/pricing"
          >
            Pricing
          </NavLink>
        </div>
        <div className="flex gap-x-3">
          <NavLink to="/login">
            <OutlineButton
              borderColor="border-primary"
              hoverBorderColor="hover:border-white"
              textColor="text-primary"
              hoverTextColor="hover:text-white"
              buttonText="Login"
              hoverBackgroundColor="hover:bg-primary"
              // backgroundColor="bg-primary"
            />
          </NavLink>
          <NavLink to="/register">
            <OutlineButton
              borderColor="border-secondary"
              hoverBorderColor="hover:border-secondary"
              textColor="text-white"
              hoverTextColor="hover:text-secondary"
              buttonText="Try Now"
              hoverBackgroundColor="hover:bg-transparent"
              backgroundColor="bg-secondary"
            />
          </NavLink>
        </div>
      </nav>
      <MobileMenu />
      <Outlet />
    </React.Fragment>
  );
}

export default DefaultNav;
