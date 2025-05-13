/** @format */

import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full absolute flex flex-col-2 items-center justify-between gap-10 top-6 left-0 z-100 max-w-full px-0">
      <div className="flex max-w-full">
        <img className="object-fit h-auto pl-5" src={assets.logo} alt="" />
      </div>
      <hr className="hidden md:flex w-1/2 h-px mx-auto my-4 bg-gray-200 border-0 rounded-sm md:my-3 dark:bg-gray-700 z-10"></hr>

      <div className="hidden md:flex justify-center items-center bg-blue-900/10 backdrop-blur-sm py-7 w-3/4 relative px-7">
        <ul className="flex text-xs tracking-tight w-full">
          <li className="text-gray-400 hover:border-b-2 hover:border-b-white  hover:cursor-pointer">
            <Link to="/">
              <span className="px-3 font-700 text-white">00</span>HOME
            </Link>
          </li>
          <li className="text-gray-300 hover:border-b-2 hover:border-b-white  hover:cursor-pointer">
            <Link to="/destination">
              <span className="px-3 font-700 text-white">01</span>DESTINATION
            </Link>
          </li>
          <li className="text-gray-300 font-200">
            <Link to="/crew">
              <span className="px-3 font-bold text-white">02</span>CREW
            </Link>
          </li>
          <li className="text-gray-400 font-400">
            <Link to="/technology">
              <span className="px-3 text-white">03</span>TECHNOLOGY
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden">
        <img src={assets.iconHamburger} alt="" />
      </div>
      {/* // mobile nav */}
    </div>
  );
};

export default Navbar;
