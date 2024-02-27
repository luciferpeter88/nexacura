import React from "react";
import Text from "../../Components/Text/Text";
import Footer from "../../Components/Footer/Footer";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import FormField from "../../Components/FromField/FormField";
import { IoPerson } from "react-icons/io5";
import OutlineButton from "../../Components/Button/OutlineButton";

function Contact() {
  return (
    <div className="">
      <div className=" xl:px-32">
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
        <div className=" mt-8 flex flex-col xl:flex-row xl:rounded-lg xl:shadow-2xl xl:p-3">
          <div className="p-8 xl:w-[45%] bg-primary flex flex-col rounded-md relative overflow-hidden">
            <div className="absolute right-[-10%] bottom-[-20%] bg-white opacity-[10%] xl:w-80 xl:h-80 rounded-full"></div>
            <div className="absolute right-[18%] bottom-[10%] bg-white opacity-[10%] xl:w-44 xl:h-44 rounded-full"></div>
            <div>
              <Text className="text-4xl text-white" size="txtOpenSansBold50">
                Contact Information
              </Text>
              <Text className="text-white text-2xl" size="txtOpenSansRegular20">
                Say something to start a live chat!
              </Text>
            </div>
            <div className="xl:pt-32 pt-16 pb-32 xl:pb-56 flex flex-col gap-y-10">
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
            <div className="flex text-white text-2xl gap-3 ">
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <FaLinkedin className=" cursor-pointer text-secondary duration-300 transition ease-out" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <FaFacebook className=" cursor-pointer text-secondary duration-300 transition ease-out" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <FaYoutube className=" cursor-pointer text-secondary duration-300 transition ease-out" />
              </div>
            </div>
          </div>
          <div className=" xl:w-[60%] py-10 xl:pl-20 xl:pr-60 space-y-5 px-10 xl:px-0">
            <FormField
              label="Full Name"
              placeholder="John Wick"
              icon={<IoPerson />}
            />
            <FormField
              label="Full Name"
              placeholder="John Wick"
              icon={<IoPerson />}
            />
            <FormField
              label="Full Name"
              placeholder="John Wick"
              icon={<IoPerson />}
            />
            <FormField label="Your Message" type="textbox" />
            <OutlineButton
              borderColor="border-primary"
              hoverBorderColor="hover:border-secondary"
              textColor="text-white"
              hoverTextColor="hover:text-secondary"
              buttonText="Send Message"
              hoverBackgroundColor="hover:bg-transparent"
              backgroundColor="bg-primary"
              width="w-full"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
