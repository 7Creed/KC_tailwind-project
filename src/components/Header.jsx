// import React from 'react'

import { Link } from "react-router-dom";
import { navLinks, navMenus } from "../utils/data";
import logoWhite from "../assets/images/logoWhite.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [isNav, setIsNav] = useState(false);

  const toggleNav = () => {
    setIsNav(!isNav);
  };

  return (
    <>
      <nav className="shadow-md py-4 bg-[#2776EA]">
        <div className="container w-11/12 mx-auto flex justify-between items-center">
          <button
            className="font-bold cursor-pointer hover:transform hover:scale-110 transition-transform duration-500 ease-in-out"
            onClick={() => isNav && setIsNav(false)}
          >
            <Link to="/" className="">
              <img src={logoWhite} alt="logo" />
            </Link>
          </button>

          <div className="w-[100%] flex justify-end md:hidden">
            {isNav ? (
              <AiOutlineClose
                className="text-3xl text-white"
                role="button"
                onClick={toggleNav}
              />
            ) : (
              <FaBars
                className="text-3xl text-white"
                role="button"
                onClick={toggleNav}
              />
            )}
          </div>

          {/* desktop view */}
          {/* first links */}
          <ul className="hidden flex-col md:flex md:flex-row md:items-center gap-5">
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
          {/* second links */}
          <div className="hidden md:flex items-center gap-[10px]">
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

        {/* mobile view */}
        {isNav && (
        <div className="md:hidden fixed top-16 w-full h-screen bg-primaryBlue">  
            <div className="w-11/12 mx-auto py-10 flex flex-col gap-10">
              <ul className="flex flex-col gap-5">
                {navLinks.map((navLink) => {
                  const { id, url, name } = navLink;
                  return (
                    <li
                      key={id}
                      className="text-white opacity-80 text-lg font-normal cursor-pointer hover:opacity-100 hover:transform transition-transform duration-500 ease-in-out"
                    >
                      <Link to={url} className="">
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center gap-[10px]">
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
        )}

        {/* <ul className="flex items-center gap-3">
          {navMenus.map((navMenu) => {
            const { id, name, icon, url } = navMenu;
            console.log(icon);
            return (
              <li
                key={id}
                className="text-white text-sm font-normal cursor-pointer"
              >
                <Link to={url} className="flex items-center gap-2 mr-2">
                  <span className="">{name}</span>
                  <img src={icon} alt="" className="w-[20%]" />
                </Link>
              </li>
            );
          })}
        </ul> */}
      </nav>

      {/* {isNav && (<div className="absolute md:hidden top-0 z-30 w-full">
        <MobileHeader setIsNav={setIsNav} />
      </div>)} */}
    </>
  );
};

export default Header;
