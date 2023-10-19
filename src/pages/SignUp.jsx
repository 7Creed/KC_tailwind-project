// import React from "react";
import { Link } from "react-router-dom";
import { GoogleIcon } from "../utils/icon";
import AuthLayout from "../components/layout/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout>
      <div>
        <h4 className="text-center font-bold text-2xl mb-7 md:text-[32px]">
          Let's get you started!
        </h4>
        <div className="mb-4">
          <button
            type="submit"
            className="border border-[#555555] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-[15px] mb-8 text-center flex justify-center items-center"
          >
            <div className="flex items-center gap-3">
              <GoogleIcon />
              <p className="">Sign Up with Google</p>
            </div>
          </button>
        </div>

        <form>
          <div className="mb-4">
            <input
              type="text"
              id="fullName"
              className="input-primary"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="input-primary"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-7">
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
            Join Now
          </button>
          <div className="flex items-start mt-8">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 font-normal text-sm text-gray-900"
            >
              Yes, I would like to receive Get Talent marketing communications.
            </label>
          </div>
          <p className="font-normal text-sm mb-5">
            By signing up, you agree to our{" "}
            <Link to="#" className="text-[#2776EA]">
              T&Cs
            </Link>{" "}
            and the storing of your data as per our{" "}
            <Link to="#" className="text-[#2776EA]">Privacy Statement</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
