import React from "react";
import Text from "../../Components/Text/Text";
import Footer from "../../Components/Footer/Footer";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className="">
      <div className="px-10 xl:px-32">
        <Text
          className="text-5xl text-center text-primary mt-24"
          size="txtOpenSansBold50"
          htmlTag="h1"
        >
          Contact Us
        </Text>
        <Text className="text-gray-600 text-center mt-3 text-lg">
          Any question or remarks? Just write us a message!
        </Text>
        <div className=" mt-8 flex rounded-lg shadow-2xl p-3">
          <div className="p-8 pr-72 bg-primary flex flex-col rounded-md relative overflow-hidden">
            <div className="absolute right-[-10%] bottom-[-20%] bg-white opacity-[10%] w-1/2 h-1/2 rounded-full"></div>
            <div className="absolute right-[18%] bottom-[10%] bg-white opacity-[10%] w-1/4 h-1/4 rounded-full"></div>
            <div>
              <Text className="text-4xl text-white" size="txtOpenSansBold50">
                Contact Information
              </Text>
              <Text className="text-white text-2xl" size="txtOpenSansRegular20">
                Say something to start a live chat!
              </Text>
            </div>
            <div className="pt-32 pb-56 flex flex-col gap-y-10">
              <div className=" flex gap-x-10 items-center">
                <Text className="text-3xl text-white" size="txtOpenSansBold50">
                  <IoMail />
                </Text>
                <Text className="text-white text-xl" size="txtOpenSansBold50">
                  support@nexacura.com
                </Text>
              </div>
              <div className=" flex gap-x-10 items-center">
                <Text className="text-3xl text-white" size="txtOpenSansBold30">
                  <IoMail />
                </Text>
                <Text className="text-white text-xl" size="txtOpenSansBold50">
                  support@nexacura.com
                </Text>
              </div>
              <div className=" flex gap-x-10 items-center">
                <Text className="text-3xl text-white" size="txtOpenSansBold30">
                  <IoLocationSharp />
                </Text>
                <Text className="text-white text-xl" size="txtOpenSansBold50">
                  Glasgow,United Kingdom
                </Text>
              </div>
            </div>
            <div className="flex text-white text-3xl gap-3 ">
              <FaLinkedin className=" cursor-pointer hover:text-secondary duration-300 transition ease-out" />
              <FaFacebook className=" cursor-pointer hover:text-secondary duration-300 transition ease-out" />
              <FaYoutube className=" cursor-pointer hover:text-secondary duration-300 transition ease-out" />
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
