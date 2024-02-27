import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Text from "../Text/Text";
import { NavLink } from "react-router-dom";

function Footer() {
  //write a function to get year
  const getYear = () => {
    return new Date().getFullYear().toString();
  };
  const color = (isActive) => (isActive ? "text-secondary" : "text-white");
  const style = "transition duration-300 ease-in-out";

  return (
    <div>
      <div class="grid grid-cols-1 md:grid-cols-4  gap-10 px-10 xl:px-32 bg-primary p-10 mt-20">
        <div class="flex flex-col gap-y-5 col-span-2">
          <div className=" text-secondary text-4xl font-bold">
            Nexa<span className="text-white font-semibold">Cura</span>
          </div>
          <Text className="text-white">
            Our cutting-edge AI technology brings these historical figures to
            life in interactive and educational chats.
          </Text>
          <div className="flex text-white text-xl gap-3 ">
            <FaLinkedin className=" cursor-pointer hover:text-secondary duration-300 transition ease-out" />
            <FaFacebook className=" cursor-pointer hover:text-secondary duration-300 transition ease-out" />
            <FaYoutube className=" cursor-pointer hover:text-secondary duration-300 transition ease-out" />
          </div>
        </div>
        <div class="flex flex-col gap-y-3">
          <Text className="text-white text-xl" size="txtPoppinsMedium16">
            Quick Links
          </Text>
          <NavLink
            className={({ isActive }) => `${color(isActive)} ${style}`}
            to="/"
          >
            <Text size="txtPoppinsRegular14">Home</Text>
          </NavLink>
          <NavLink
            className={({ isActive }) => `${color(isActive)} ${style}`}
            to="/about"
          >
            <Text size="txtPoppinsRegular14">About</Text>
          </NavLink>
          <NavLink
            className={({ isActive }) => `${color(isActive)} ${style}`}
            to="/pricing"
          >
            <Text size="txtPoppinsRegular14">Pricing</Text>
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) => `${color(isActive)} ${style}`}
          >
            <Text size="txtPoppinsRegular14">Register</Text>
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) => `${color(isActive)} ${style}`}
          >
            <Text size="txtPoppinsRegular14">Login</Text>
          </NavLink>
        </div>
        <div class="">
          <div class="flex flex-col gap-y-3">
            <Text className="text-white text-xl" size="txtPoppinsMedium16">
              Support
            </Text>
            <Text className="text-white" size="txtPoppinsRegular14">
              FAQs
            </Text>
            <NavLink
              className={({ isActive }) => `${color(isActive)} ${style}`}
              to="/contact"
            >
              <Text size="txtPoppinsRegular14">Contact</Text>
            </NavLink>

            <Text className="text-white" size="txtPoppinsRegular14">
              Privacy Policy
            </Text>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-2">
        <Text className="text-white col-span-4 text-center">
          @ {getYear()} NexaCura All rights reserved.
        </Text>
      </div>
    </div>
  );
}

export default Footer;
