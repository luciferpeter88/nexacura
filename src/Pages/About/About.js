import React from "react";
import Text from "../../Components/Text/Text";
import Blacklayer from "../../Components/BlackLayer/Blacklayer";
import about from "../../assets/about.jpeg";
import OutlineButton from "../../Components/Button/OutlineButton";
import about2 from "../../assets/about2.jpeg";
import Review from "../../Components/Reviews/Review";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <div>
      {/* first section */}
      <div className="flex flex-col">
        <div className="flex gap-16 px-10 pt-16 pb-20 xl:pb-60 text-white relative bg-custom-image bg-center bg-cover ">
          <Blacklayer />
          <div className="flex flex-col gap-y-3 z-10 xl:w-4/5">
            <Text className="text-5xl " size="txtOpenSansBold50" htmlTag="h1">
              About us
            </Text>
            <Text
              className="text-base text-gray-200"
              size="txtPoppinsRegular20"
              htmlTag="h3"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
            <OutlineButton
              borderColor="border-secondary"
              hoverBorderColor="hover:border-secondary"
              textColor="text-white"
              hoverTextColor="hover:text-secondary"
              buttonText="Contact"
              hoverBackgroundColor="hover:bg-transparent"
              backgroundColor="bg-secondary"
            />
          </div>
        </div>
        <div className="xl:px-10 w-full z-50 xl:mt-[-10rem] order-first xl:order-last ">
          <img
            src={about}
            alt="about"
            className="h-[35rem] xl:h-[40rem] w-full object-cover xl:rounded-lg"
          />
        </div>
      </div>
      {/* second section */}
      <div className=" xl:mt-20 flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col gap-y-5 justify-center px-10">
          <Text
            className="text-5xl text-primary"
            size="txtOpenSansBold50"
            htmlTag="h1"
          >
            Our Mission
          </Text>
          <Text
            className="text-base text-gray-400"
            size="txtPoppinsRegular20"
            htmlTag="h3"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.{" "}
          </Text>
          <OutlineButton
            borderColor="border-secondary"
            hoverBorderColor="hover:border-secondary"
            textColor="text-white"
            hoverTextColor="hover:text-secondary"
            buttonText="Contact"
            hoverBackgroundColor="hover:bg-transparent"
            backgroundColor="bg-secondary"
          />
        </div>
        <div className="xl:px-10 order-first xl:order-last">
          <img
            src={about2}
            alt="about"
            className=" h-[25rem] w-[250rem] object-cover xl:rounded-lg"
          />
        </div>
      </div>
      {/* third section */}
      <div className=" xl:mt-20 flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col gap-y-5 justify-center px-10">
          <Text
            className="text-5xl text-primary"
            size="txtOpenSansBold50"
            htmlTag="h1"
          >
            Who we are
          </Text>
          <Text
            className="text-base text-gray-400"
            size="txtPoppinsRegular20"
            htmlTag="h3"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.{" "}
          </Text>
          <OutlineButton
            borderColor="border-secondary"
            hoverBorderColor="hover:border-secondary"
            textColor="text-white"
            hoverTextColor="hover:text-secondary"
            buttonText="Contact"
            hoverBackgroundColor="hover:bg-transparent"
            backgroundColor="bg-secondary"
          />
        </div>
        <div className="xl:px-10 order-first mt-10 xl:mt-0">
          <img
            src={about2}
            alt="about"
            className=" h-[25rem] w-[250rem] object-cover xl:rounded-lg"
          />
        </div>
      </div>
      {/* fourth section */}
      <Review />
      <Footer />
    </div>
  );
}

export default About;
