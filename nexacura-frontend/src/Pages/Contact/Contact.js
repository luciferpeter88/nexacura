import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Text from "../../Components/Text/Text";
import Input from "../../Components/Input/Input";
import OutlineButton from "../../Components/Button/OutlineButton";
import { FaEarthAfrica, FaLocationArrow } from "react-icons/fa6";
import Footer from "../../Components/Footer/Footer";
import { useForm } from "react-hook-form";

const IconsContact = ({ title, reactIcon }) => {
  return (
    <div className="flex items-center space-x-5">
      <div className=" h-10 w-10 border-2 border-[#11a5e9] rounded-full  text-white text-xl font-bold flex items-center justify-center shrink-0">
        {reactIcon}
      </div>
      <Text className="text-lg text-white" size="txtPoppinsRegular18">
        {title}
      </Text>
    </div>
  );
};

/* The `Contact` function is a React functional component that defines a form for contacting a user.
Here's a breakdown of what the function is doing: */
function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [data, setData] = React.useState("");
  const onSubmit = (data) => {
    setData(data.name);
    reset();
  };
  // settimeout function to remove the message after 5 seconds

  /* The `React.useEffect` hook in the `Contact` component is used to set up a timer that clears the
 message stored in the `data` state variable after 3 seconds (3000 milliseconds). Here's a breakdown
 of what it's doing: */
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setData("");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [data]);
  return (
    <div>
      <Text
        className="text-5xl text-center text-primary mt-24 mb-5"
        size="txtOpenSansBold50"
        htmlTag="h1"
      >
        Contact Us
      </Text>
      <Text className="text-gray-500 text-lg text-center mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Text>
      <div className="my-6  xl:px-32 ">
        <div className="grid lg:grid-cols-12 xl:p-2  mx-auto   bg-white lg:shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
          <div className="bg-primary xl:rounded-md p-10 flex flex-col justify-between gap-y-16 lg:col-span-4">
            <div>
              <Text className=" text-3xl text-white">Contact Information</Text>
              <Text className="text-white text-lg">
                Say something to start a live chat!
              </Text>
            </div>
            <div className=" flex flex-col gap-y-5">
              <IconsContact
                title="Address: Glasgow, United Kingdom"
                reactIcon={<FaLocationArrow />}
              />
              <IconsContact
                title="Email: aipscycholohist@gmail.com"
                reactIcon={<FaEnvelope />}
              />

              <IconsContact
                title="Website: www.aipscycholohist.com"
                reactIcon={<FaEarthAfrica />}
              />
            </div>
            <div className="">
              <ul className="flex mt-3 space-x-4">
                <a href="https://www.facebook.com">
                  <li className="bg-white text-secondary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <div>
                      <FaFacebook />
                    </div>
                  </li>
                </a>
                <a href="https://www.linkedin.com">
                  <li className="bg-white text-secondary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <div>
                      <FaLinkedin />
                    </div>
                  </li>
                </a>
                <a href="https://www.instagram.com">
                  <li className="bg-white text-secondary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <div>
                      <FaInstagram />
                    </div>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <form
            className="space-y-4 p-10 lg:col-span-7"
            onSubmit={handleSubmit(onSubmit)}
          >
            {data && (
              <Text className="text-green-500 text-lg">
                Thank you for your message
              </Text>
            )}
            <Input
              label="Name"
              type="text"
              name="name"
              placeholder="Name"
              register={register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name should be at least 3 characters",
                },
              })}
              errors={errors.name}
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              register={register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              errors={errors.email}
            />
            <Input
              label="Subject"
              type="text"
              name="subject"
              placeholder="Subject"
              register={register("subject", {
                required: "Subject is required",
              })}
              errors={errors.subject}
            />
            <Input
              label="Message"
              type="textarea"
              name="message"
              placeholder="Message"
              register={register("message", {
                required: "Message is required",
              })}
              errors={errors.message}
            />
            <OutlineButton
              borderColor="border-primary"
              hoverBorderColor="hover:border-secondary"
              textColor="text-white"
              hoverTextColor="hover:text-secondary"
              buttonText="Send Message"
              hoverBackgroundColor="hover:bg-transparent"
              backgroundColor="bg-primary"
              width="w-[20rem]"
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
