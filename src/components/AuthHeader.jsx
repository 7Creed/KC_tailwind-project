// import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoBlue from "../assets/images/LogoBlue.png";

const AuthHeader = () => {
  const { pathname } = useLocation();

  return (
    <section className="">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3">
        <div className="">
          <Link to="/">
            <img src={logoBlue} alt="" />
          </Link>
        </div>
        {/* <div className="w-11/12 mx-auto flex items-center gap-4 py-3"> */}
        {pathname === "/login" ? (
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-xs md:text-sm">New to Got Talent?</p>
            <Link
              to="/signup"
              className="py-3 px-[15px] border border-[#2776EA] text-[#2776EA] rounded-[5px]"
            >
              Join Now
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2 md:gap-4">
            <p className="text-xs md:text-sm">Already have an account?</p>
            <Link
              to="/login"
              className="py-3 px-[20px] border border-[#2776EA] text-[#2776EA] rounded-[5px]"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuthHeader;
