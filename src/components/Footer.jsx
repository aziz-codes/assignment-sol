import React from "react";
import { NavLink } from "react-router-dom";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="asbolute left-0 bottom-0 flex flex-col items-center  w-full bg-black text-white py-4">
      <div className="w-full flex flex-row justify-evenly">
        <div className="flex flex-col gap-3 ">
          <h4 className="border-l-4 text-xl border-l-[#0b8d9f] px-1">
            AssignmentSol
          </h4>
          <p className="max-w-xs text-sm px-3">
            AssignmentSol provides you the opportunity to save your time and
            effort you spend on going website to website to find content for
            your assignment
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="border-l-4 text-xl border-l-[#0b8d9f] px-1">
            Page Links
          </h4>
          <div className="flex flex-col gap-3 text-sky-500">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/select-course">Generate Assignment</NavLink>
            <NavLink to="/view-course">View Course</NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="border-l-4 text-xl border-l-[#0b8d9f] px-1">
            Follow Us
          </h4>
          <div className="flex fle-col gap-2">
            <TiSocialTwitter className="h-7 w-7 cursor-pointer" />
            <TiSocialFacebook className="h-7 w-7 cursor-pointer" />
            <TiSocialLinkedin className="h-7 w-7 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="h-[0.5px] bg-white max-w-4xl w-full my-4"></div>
      <label className="text-sm">Copyright &copy; 2019 AssignmentSol.</label>
    </footer>
  );
};

export default Footer;
