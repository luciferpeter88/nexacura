import React from "react";
import Text from "../../Components/Text/Text";
import { Bubble, Circle } from "../../Components/Bubble/Bubble";
import Blacklayer from "../../Components/BlackLayer/Blacklayer";
import Card from "../../Components/Card/Card";
import Thinking from "../../assets/thinking.jpg";
import OutlineButton from "../../Components/Button/OutlineButton";
import MoreCard from "../../Components/Card/MoreCard";
import Faq from "../../Components/Faq/Faq";
import Testimonial from "../../Components/Card/Testimonial";
import reviews from "../../data/review";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <div className="">
      {/* <!-- First Section --> */}
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-16 px-10 pt-24 pb-32 text-white relative bg-custom-image bg-center bg-cover">
        <Blacklayer />
        <div className="flex flex-col gap-y-3 z-10 order-2 lg:order-1">
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
        <div className="  w-[25rem] mx-auto flex flex-col gap-y-5 z-10 pt-10  order-1 lg:order-2">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-20 px-10">
        <div className="flex flex-col gap-y-3 z-10 justify-center">
          <Text
            className="text-5xl text-primary"
            size="txtOpenSansBold50"
            htmlTag="h4"
          >
            Chat with History's Legends Through AI
          </Text>
          <Text className="text-lg text-gray-600 " size="txtPoppinsRegular16">
            Connect with the greatest minds in history from the comfort of your
            home. Engage in conversations with iconic historical figures like
            Isaac Newton and Albert Einstein through our AI-powered platform.
            Our cutting-edge AI technology brings these historical figures to
            life in interactive and educational chats.
          </Text>

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
        <div className=" order-first lg:order-last">
          <img
            src={Thinking}
            alt="Thinking"
            className=" object-cover h-full w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* <!-- Fourth Section --> */}
      <div class=" px-10">
        <Text
          size="txtOpenSansBold50"
          className=" text-center text-5xl text-primary"
        >
          Simple with real features
        </Text>
        <Text
          size="txtPoppinsMedium16Gray90001"
          className=" text-center text-lg text-gray-600 mt-3"
        >
          Our AI technology optimizes the voice generation process, providing
          fast and accurate results
        </Text>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-10 mt-10">
        <MoreCard />
        <MoreCard />
        <MoreCard />
        <MoreCard />
      </div>

      {/* <!-- Fifth Section --> */}
      <Text
        size="txtOpenSansBold50"
        className="lg:pl-0 text-left lg:text-center text-5xl text-primary mt-16 px-10"
      >
        Have a question ? Look here ...
      </Text>
      <Faq />

      {/* <!-- Sixth Section --> */}
      <Text
        size="txtOpenSansBold50"
        className="lg:pl-0 text-left lg:text-center text-5xl text-primary mt-16 px-10 mb-20"
      >
        What our clients says
      </Text>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-10">
        {reviews.map((review) => {
          return (
            <Testimonial
              rating={review.ratings}
              name={review.name}
              review={review.description}
            />
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
