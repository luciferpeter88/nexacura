import React from "react";
import Text from "../../Components/Text/Text";
import { Bubble, Circle } from "../../Components/Bubble/Bubble";
import Blacklayer from "../../Components/BlackLayer/Blacklayer";
import Card from "../../Components/Card/Card";
import Thinking from "../../assets/thinking.jpg";
import OutlineButton from "../../Components/Button/OutlineButton";

function HomePage() {
  return (
    <div className="">
      {/* <!-- First Section --> */}
      <div className="grid grid-cols-1  xl:grid-cols-2 gap-16 px-10 pt-24 pb-32 text-white relative bg-custom-image bg-center bg-cover">
        <Blacklayer />
        <div className="flex flex-col gap-y-3 z-10 order-2 xl:order-1">
          <Text className="text-5xl " size="txtOpenSansBold50" htmlTag="h1">
            Chat with History's Legends Through AI
          </Text>
          <Text
            className="text-base text-gray-200"
            size="txtPoppinsRegular20"
            htmlTag="h3"
          >
            Connect with the greatest minds in history from the comfort of your
            home. Engage in conversations with iconic historical figures like
            Isaac Newton and Albert Einstein through our AI-powered platform.
            Our cutting-edge AI technology brings these historical figures to
            life in interactive and educational chats.
          </Text>

          <div>
            <OutlineButton
              borderColor="border-secondary"
              hoverBorderColor="hover:border-secondary"
              textColor="text-white"
              hoverTextColor="hover:text-secondary"
              buttonText="Try Now"
              hoverBackgroundColor="hover:bg-transparent"
              backgroundColor="bg-secondary"
            />
          </div>
        </div>
        <div className="  w-[25rem] mx-auto flex flex-col gap-y-5 z-10 pt-10  order-1 xl:order-2">
          <div className="flex items-center gap-x-10 justify-end ">
            <Circle />
            <Bubble />
          </div>
          <div className="flex items-center gap-x-10">
            <Bubble />
            <Circle />
          </div>
          <div className="flex justify-center">
            <Circle />
          </div>
        </div>
      </div>

      {/* <!-- Second Section --> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-10 mt-5 md:mt-[-3rem]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* <!-- Third Section --> */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 py-20 px-10">
        <div clasName="px-10 pt-24 pb-32 flex justify-center items-center">
          <div className="flex flex-col gap-y-3 z-10 order-2 xl:order-1">
            <h1 className="text-5xl font-bold font-sans  text-primary">
              Chat with History's Legends Through AI
            </h1>
            <p className="text-lg">
              Connect with the greatest minds in history from the comfort of
              your home. Engage in conversations with iconic historical figures
              like Isaac Newton and Albert Einstein through our AI-powered
              platform. Our cutting-edge AI technology brings these historical
              figures to life in interactive and educational chats.
            </p>

            <OutlineButton
              borderColor="border-secondary"
              hoverBorderColor="hover:border-secondary"
              textColor="text-white"
              hoverTextColor="hover:text-secondary"
              buttonText="Try Now"
              hoverBackgroundColor="hover:bg-transparent"
              backgroundColor="bg-secondary"
            />
          </div>
        </div>
        <div className="h-90 ">
          <img src={Thinking} alt="Thinking" className="w-full h-full" />
        </div>
      </div>

      {/* <!-- Fourth Section --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div class="bg-yellow-200">Div 1</div>
        <div class="bg-yellow-300">Div 2</div>
        <div class="bg-yellow-400">Div 3</div>
        <div class="bg-yellow-500">Div 4</div>
      </div>

      {/* <!-- Fifth Section --> */}
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div class="bg-purple-200">Div 1</div>
        <div class="bg-purple-300">Div 2</div>
      </div>

      {/* <!-- Sixth Section --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div class="bg-pink-200">Div 1</div>
        <div class="bg-pink-300">Div 2</div>
        <div class="bg-pink-400">Div 3</div>
        <div class="bg-pink-500">Div 4</div>
      </div>

      {/* <!-- Footer --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div class="bg-gray-200">Div 1</div>
        <div class="bg-gray-300">Div 2</div>
        <div class="bg-gray-400">Div 3</div>
        <div class="bg-gray-500">Div 4</div>
      </div>
    </div>
  );
}

export default HomePage;
