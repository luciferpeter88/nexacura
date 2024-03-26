import React from "react";
import {
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import Text from "../../Components/Text/Text";
import { NavLink } from "react-router-dom";
import OutlineButton from "../../Components/Button/OutlineButton";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="font-[sans-serif] text-[#333]">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="items-center gap-4 px-10 lg:px-0 lg:max-w-3xl w-full  shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className=" w-full lg:px-6 py-4">
            <Text className="text-3xl font-extrabold text-primary">
              Welcome Back
            </Text>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-12">
                <Text className="text-md text-gray-500 mt-2">
                  Don't have an account?{" "}
                  <NavLink to="/register" className="text-secondary">
                    Register here
                  </NavLink>
                </Text>
              </div>
              <div>
                {errors.email && (
                  <span className="text-xs text-red-600">
                    {errors.email.message}
                  </span>
                )}
                <label className="text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    className="w-full text-sm border-b border-gray-300 focus:border-secondary px-2 py-3 outline-none"
                    placeholder="Enter email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Invalid email format",
                      },
                    })}
                  />
                  <FaEnvelope className="text-[#bbb] absolute right-2" />
                </div>
              </div>
              <div className="mt-8">
                {errors.password && (
                  <span className="text-xs text-red-600">
                    {errors.password.message}
                  </span>
                )}
                <label className="text-xs block mb-2">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    className="w-full text-sm border-b border-gray-300 focus:border-secondary px-2 py-3 outline-none"
                    placeholder="Enter password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <FaLock className="text-[#bbb] absolute right-2 cursor-pointer" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mt-5">
                <div className="flex items-center"></div>
                <div>
                  <Text className="text-lg text-gray-500">
                    <NavLink to="/register" className="text-primary text-sm">
                      Forgot password?
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
                  buttonText="Login"
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

export default Login;
