// import React from "react";
import propTypes from "prop-types";
import AuthHeader from "../AuthHeader";
import topCircle from "../../assets/images/circle-big.png";
import smallCircle from "../../assets/images/circle-small.png";
import lady from "../../assets/images/lady.png";
import man from "../../assets/images/man.png";
import { useLocation } from "react-router-dom";

const AuthLayout = ({ children }) => {
  // const location = useLocation();
  const { pathname } = useLocation();
  // console.log(location);
  return (
    <div className="relative">
      {" "}
      <section className="relative">
        <AuthHeader />
        <div className="">
          <div className="w-11/12 mx-auto flex gap-8">
            <div className="w-11/12 md:w-3/5 mx-auto lg:w-1/2">
              <div className="bg-[#d4e4fb88] p-8 rounded-[20px] mt-5">
                {children}
              </div>
              <div className="absolute -bottom-10 left-0 md:left-40 lg:-bottom-12 lg:left-4 -z-10">
                <img src={smallCircle} alt="small img" className="w-[70%]" />
              </div>
            </div>

            <div className="hidden lg:block w-1/2 h-[80vh]">
              <div className="flex justify-end">
                <div className="w-5/6 mt-8">
                  <img
                    src={pathname === "/login" ? lady : man}
                    alt={`${
                      pathname === "/login" ? "smiling woman" : "gentle man"
                    }`}
                    className=""
                  />
                  {/* <img src={man} alt="gentle man" className="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -z-10">
          <img src={topCircle} alt="top circle" className="h-[190px]" />
        </div>
      </section>
    </div>
  );
};

AuthLayout.propTypes = {
  children: propTypes.any,
};

export default AuthLayout;
