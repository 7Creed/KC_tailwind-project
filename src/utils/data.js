// import { AiOutlineMessage } from "react-icons/ai";
// import { IoIosNotificationsOutline } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
// import { HiOutlineLogout } from "react-icons/hi";

import message from "../assets/images/message.png";
import notification from "../assets/images/notification.png";
import profile from "../assets/images/profile.png";
import logout from "../assets/images/logout.png";

export const navLinks = [
  { id: 1, name: "Recruits", url: "/" },
  { id: 2, name: "About us", url: "/about" },
  { id: 3, name: "Contact", url: "/" },
  { id: 4, name: "Blog", url: "/" },
];

export const navMenus = [
  { id: 1, name: "Messages", icon: message, url: "/" },
  {
    id: 2,
    name: "Notifications",
    icon: notification,
    url: "",
  },
  { id: 3, name: "Profile", icon: profile, url: "/" },
  { id: 4, name: "Logout", icon: logout, url: "/" },
];
