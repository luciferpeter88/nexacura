import React from "react";
import Layout from "../../Components/Dashboard/Layout";
import OutlineButton from "../../Components/Button/OutlineButton";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function Input({ label, id, type = "text", placeholder, value, onChange }) {
  return (
    <div className="mb-2">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

function MyAccount() {
  return (
    <Layout>
      <div className="bg-white w-full flex flex-col gap-5 px-3  md:flex-row text-[#161931]">
        <main className="w-full min-h-screen py-1 ">
          <div className=" ">
            <div className="w-full px-6 pb-8  sm:max-w-xl sm:rounded-lg">
              <h2 className=" text-2xl font-bold sm:text-xl">Public Profile</h2>

              <div className="grid max-w-2xl mx-auto mt-8">
                <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                  <img
                    className="object-cover w-20 h-20 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Bordered avatar"
                  />
                </div>

                <div className="items-center  mt-4 text-[#202142]">
                  <div className="">
                    <label className="text-xs block mb-2">Full Name</label>
                    <div className="relative flex items-center">
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full text-sm border-b border-gray-300 focus:border-secondary px-2 py-3 outline-none"
                        placeholder="Enter name"
                      />
                      <FaUser className="text-[#bbb] absolute right-2 cursor-pointer" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="text-xs block mb-2">Email</label>
                    <div className="relative flex items-center">
                      <input
                        name="email"
                        type="text"
                        required
                        className="w-full text-sm border-b border-gray-300 focus:border-secondary px-2 py-3 outline-none"
                        placeholder="Enter email"
                      />
                      <FaEnvelope className="text-[#bbb] absolute right-2" />
                    </div>
                  </div>
                  <div className="my-4">
                    <label className="text-xs block mb-2">Password</label>
                    <div className="relative flex items-center">
                      <input
                        name="password"
                        type="password"
                        required
                        className="w-full text-sm border-b border-gray-300 focus:border-secondary px-2 py-3 outline-none"
                        placeholder="Enter password"
                      />
                      <FaLock className="text-[#bbb] absolute right-2 cursor-pointer" />
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <OutlineButton
                      borderColor="border-primary"
                      hoverBorderColor="hover:border-secondary"
                      textColor="text-white"
                      hoverTextColor="hover:text-secondary"
                      buttonText="Login"
                      hoverBackgroundColor="hover:bg-transparent"
                      backgroundColor="bg-primary"
                      width=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default MyAccount;
