import React from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import Text from "../../Components/Text/Text";
import { NavLink } from "react-router-dom";
import OutlineButton from "../../Components/Button/OutlineButton";

// Import necessary icons

const iconSelector = (name) => {
  switch (name) {
    case "email":
      return <FaEnvelope className="text-[#bbb] absolute right-2" />;
    case "fullName":
      return <FaUser className="text-[#bbb] absolute right-2" />;
    case "password":
    case "confirmPassword":
      return <FaLock className="text-[#bbb] absolute right-2" />;
    default:
      return null; // Default case if no match
  }
};
const FormInput = ({ label, name, type, placeholder }) => {
  return (
    <div>
      <label className="text-xs block mb-2">{label}</label>
      <div className="relative flex items-center">
        <input
          name={name}
          type={type}
          required
          className="w-full text-sm border-b border-gray-300 focus:border-secondary px-2 py-3 outline-none"
          placeholder={placeholder}
        />
        {iconSelector(name)}
      </div>
    </div>
  );
};

function Register() {
  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="items-center gap-4 px-10 lg:px-0 lg:max-w-3xl w-full  shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className=" w-full lg:px-6 py-4">
            <Text className="text-3xl font-extrabold text-primary">
              Welcome
            </Text>

            <form className="mt-5">
              <div className="flex flex-col gap-y-5">
                <FormInput
                  label="Full Name"
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                />
                <FormInput
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="Enter email"
                />

                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
                <FormInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                />
              </div>
              <div className="flex items-center justify-between gap-2 mt-5">
                <div className="flex items-center"></div>
                <div>
                  <Text className="text-md text-gray-500 mt-2">
                    Already have an account?{" "}
                    <NavLink to="/login" className="text-secondary">
                      Login here
                    </NavLink>
                  </Text>
                </div>
              </div>
              <div className="mt-12">
                <OutlineButton
                  borderColor="border-primary"
                  hoverBorderColor="hover:border-secondary"
                  textColor="text-white"
                  hoverTextColor="hover:text-secondary"
                  buttonText="Register"
                  hoverBackgroundColor="hover:bg-transparent"
                  backgroundColor="bg-primary"
                  width="w-full"
                />
              </div>
              <Text className="text-md text-gray-500  text-center my-5">
                By continuing, you agree to accept our{" "}
                <NavLink to="/terms" className="text-secondary">
                  Terms & Conditions
                </NavLink>
              </Text>

              <div className="space-x-8 flex justify-center text-secondary">
                <button type="button" className="border-none outline-none">
                  <FaGoogle className="inline text-2xl" />
                </button>
                <button type="button" className="border-none outline-none">
                  <FaFacebookF className="inline text-2xl" />
                </button>
                <button type="button" className="border-none outline-none">
                  <FaTwitter className="inline text-2xl" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
