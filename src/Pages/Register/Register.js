import React from "react";
import { useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import Text from "../../Components/Text/Text";
import { NavLink } from "react-router-dom";
import OutlineButton from "../../Components/Button/OutlineButton";

// Icon selector function
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

// FormInput component
const FormInput = ({
  label,
  name,
  type,
  placeholder,
  register,
  required,
  pattern,
}) => {
  return (
    <div>
      <label className="text-xs block mb-2">{label}</label>
      <div className="relative flex items-center">
        <input
          {...register(name, { required, pattern })} // Adjusted to spread register with name and validation rules
          type={type}
          className="w-full text-sm border-b border-gray-300 focus:border-secondary px-2 py-3 outline-none"
          placeholder={placeholder}
        />
        {iconSelector(name)}
      </div>
    </div>
  );
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm(); // Initialize useForm hook

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
  };

  const password = watch("password");

  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="items-center gap-4 px-10 lg:px-0 lg:max-w-3xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="w-full lg:px-6 py-4">
            <Text className="text-3xl font-extrabold text-primary">
              Welcome
            </Text>

            <form className="mt-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="flex flex-col gap-y-2">
                <FormInput
                  label="Full Name"
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  register={register}
                  required="Full name is required"
                />
                <span className="text-red-500 text-xs  font-bold">
                  {errors.fullName ? errors.fullName.message : null}
                </span>
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  register={register}
                  required="Email is required"
                  pattern={{
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  }}
                />

                <span className="text-red-500 text-xs  font-bold">
                  {errors.email ? errors.email.message : null}
                </span>
                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  register={register}
                  required="Password is required"
                  pattern={{
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      "Password must be at least 8 characters, include a letter and a number",
                  }}
                />
                <span className="text-red-500 text-xs  font-bold">
                  {errors.password ? errors.password.message : null}
                </span>
                <FormInput
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  register={register}
                  required="Please confirm your password"
                  pattern={{
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  }}
                />
                <span className="text-red-500 text-xs  font-bold">
                  {errors.confirmPassword
                    ? errors.confirmPassword.message
                    : null}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 mt-5">
                <Text className="text-md text-gray-500 mt-2">
                  Already have an account?{" "}
                  <NavLink to="/login" className="text-secondary">
                    Login here
                  </NavLink>
                </Text>
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
                  type="submit"
                />
              </div>
              <Text className="text-md text-gray-500 text-center my-5">
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
