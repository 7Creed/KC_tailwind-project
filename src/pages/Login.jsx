// import React from "react";
// import AuthHeader from "../components/AuthHeader";

import { Link } from "react-router-dom";
import { GoogleIcon } from "../utils/icon";
import AuthLayout from "../components/layout/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <div>
        <h4 className="text-center font-bold text-2xl mb-7 md:text-[32px]">
          Welcome Back...
        </h4>
        <form>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="input-primary"
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              className="input-primary"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-[#6FA4F1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-[15px] text-center"
          >
            Sign In
          </button>
        </form>
        <section className="">
          <p className="text-center mt-3">
            <Link to="">Forgot Password?</Link>
          </p>
          <div className="flex justify-between items-center gap-5 md:gap-10 w-3/4 mx-auto my-10 md:my-14">
            <div className="w-3/4 md:w-1/2 border-t-[0.5px] border-[#808080] "></div>
            <p className="">or</p>
            <div className="w-3/4 md:w-1/2 border-t-[0.5px] border-[#808080] "></div>
          </div>
          <button
            type="submit"
            className="border border-[#555555] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-[15px] mb-16 text-center flex justify-center items-center"
          >
            <div className="flex items-center gap-3">
              <GoogleIcon />
              <p className="">Sign in with Google</p>
            </div>
          </button>
        </section>
      </div>
    </AuthLayout>
  );
};

export default Login;
