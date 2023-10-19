// import React from "react";
import { Link } from "react-router-dom";
import { navLinks, navMenus } from "../utils/data";
import logoWhite from "../assets/images/logoWhite.png";

// import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const MobileHeader = ({ setIsNav }) => {
  return (
    <div className="h-screen bg-primaryBlue">
      <div className="container w-11/12 mx-auto flex flex-col md:flex-row gap-6 items-start">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold text-amber-950 cursor-pointer hover:transform hover:scale-110 transition-transform duration-500 ease-in-out">
            <img src={logoWhite} alt="logo" />
          </h3>
          <AiOutlineClose
            className="text-3xl text-white font-bold"
            role="button"
            onClick={() => setIsNav(false)}
          />
        </div>
        <ul className="md:flex flex-col md:flex-row md:items-center gap-5">
          {navLinks.map((navLink) => {
            const { id, url, name } = navLink;
            return (
              <li
                key={id}
                className="text-white opacity-80 text-sm font-normal cursor-pointer hover:opacity-100 hover:transform hover:scale-110 transition-transform duration-500 ease-in-out"
              >
                <Link to={url} className="">
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col items-start gap-[10px] md:flex-row md:items-center">
          <Link
            to="/signup"
            className="text-white border-2 border-white rounded-[10px] py-2 px-6 font-semibold"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-white text-primaryBlue border-2 border-white rounded-[10px] py-2 px-6 font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
