import React from "react";
import teamMembers from "../../data/teamMembers";
import Text from "../Text/Text";
function TeamMember({ name, position, imageSrc, socialLinks }) {
  return (
    <div className=" w-full lg:max-w-full lg:flex mx-auto my-10">
      <div
        className="h-60 lg:h-80  lg:w-60 flex-none bg-cover bg-top rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${imageSrc})` }}
        title=""
      ></div>
      <div className=" bg-white  p-4 my-auto shadow-2xl  xl:border-none border-none">
        <div>
          <a className="text-primary font-bold text-xl mb-2  transition duration-500 ease-in-out">
            {name}
          </a>
          <Text className="text-sm text-gray-600">{position}</Text>
          <Text className="text-gray-500 text-base mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>

          <div className="my-4 flex text-secondary">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="mr-3">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="mt-24 mx-auto  xl:px-32 ">
      <Text
        size="txtOpenSansBold50"
        className="lg:pl-0 text-left lg:text-center text-5xl text-primary mt-16 px-10 mb-20"
      >
        Our Team
      </Text>
      <div className="sm:grid grid-cols-2 gap-6 my-10 px-10 xl:px-0">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default Team;
