import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Peter Kaszap-Nagy",
    position: "CEO & President",
    imageSrc:
      "https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialLinks: [
      { href: "#", icon: <FaFacebook /> },
      { href: "#", icon: <FaTwitter /> },
      { href: "#", icon: <FaLinkedin /> },
    ],
  },
  {
    name: "Balint Kaszap-Nagy",
    position: "CEO & President",
    imageSrc:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialLinks: [
      { href: "#", icon: <FaFacebook /> },
      { href: "#", icon: <FaTwitter /> },
      { href: "#", icon: <FaLinkedin /> },
    ],
  },
];
export default teamMembers;
