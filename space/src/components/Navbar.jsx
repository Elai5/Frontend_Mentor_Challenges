/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="absolute flex flex-col-2 justify-between top-0 left-0 w-full z-100">
      <div className="flex">
        <img className="" src={assets.logo} alt="" />
      </div>

      <div className="bg-amber-300">
        <ul className="flex ">
          <li className="text-white">
            <a href="">
              <span className="px-3 font-bold">00</span>HOME
            </a>
          </li>
          <li className="text-white">
            <a href="">
              <span className="px-3 font-bold">01</span>DESTINATION
            </a>
          </li>
          <li className="text-white">
            <a href="">
              <span className="px-3 font-bold">02</span>CREW
            </a>
          </li>
          <li className="text-white">
            <a href="">
              <span className="px-3 font-bold">03</span>TECHNOLOGY
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
