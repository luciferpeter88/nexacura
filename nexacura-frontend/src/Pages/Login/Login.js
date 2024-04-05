/**
 * The `Login` function in this code snippet handles user authentication by sending a POST request to a
 * login endpoint, displaying a login form with email and password fields, and providing social login
 * options.
 * @returns The `Login` component is being returned. It contains a form for user login with fields for
 * email and password, along with options for social login using Google, Facebook, and Twitter. The
 * form includes validation for email and password fields, error messages display, and a button for
 * submitting the login form. Upon successful login, the user is redirected to the dashboard.
 */
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
import axios from "axios";
import authenticationContext from "../../context/authenticationContext";
import { useNavigate } from "react-router-dom";

function Login() {
  /* The line `const { dispatch } = React.useContext(authenticationContext);` is using the `useContext`
  hook from React to access the `authenticationContext` context. It is specifically extracting the
  `dispatch` function from the context object. */
  const { dispatch } = React.useContext(authenticationContext);
  /* The line `const [isAuthenticated, setIsAuthenticated] = React.useState("");` in the code snippet is
using the `useState` hook from React to declare a state variable named `isAuthenticated` and a
corresponding setter function `setIsAuthenticated`. */
  const [isAuthenticated, setIsAuthenticated] = React.useState("");
  /* The line `const navigate = useNavigate();` in the code snippet is using the `useNavigate` hook
  from the React Router library. This hook provides a function `navigate` that allows you to
  programmatically navigate to different routes within your application. In this case, it is being
  used to redirect the user to the dashboard route ("/") upon successful login. */
  const navigate = useNavigate();
  /* The code snippet `const { register, handleSubmit, formState: { errors }, reset } = useForm();` is
  utilizing the `useForm` hook from the `react-hook-form` library in React. Here's a breakdown of
  what each part is doing: */
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  /**
   * The onSubmit function sends a POST request to a login endpoint, checks if the user is
   * authenticated, and redirects to the dashboard if authenticated.
   * @param data - The `data` parameter in the `onSubmit` function likely contains the user input data
   * that is being sent to the server for login authentication. This data could include fields such as
   * username, password, or any other necessary information for the login process.
   */
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/login", data, {
        withCredentials: true,
      });
      console.log("Response:", response.data);
      if (response.data.isAuthenticated) {
        // Redirect to dashboard
        navigate("/");
        reset();
      }
      dispatch({
        type: "LOGIN",
        payload: {
          isAuthenticated: response.data.isAuthenticated,
          user: response.data.message,
        },
      });
      setIsAuthenticated(response.data.message);
    } catch (error) {
      console.log("Error:", error);
    }
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
                {isAuthenticated && (
                  <Text className="text-red-500 mb-5">{isAuthenticated}</Text>
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
