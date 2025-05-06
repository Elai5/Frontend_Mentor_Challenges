/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="w-full px-5 py-15">
      <div className="flex justify-between">
        <img src={assets.logo} alt="" />
        <ul className="flex gap-5 text-[hsl(236,13%,42%)] px-10 hover:cursor-pointer ">
          <a className="hover:text-red-400" href="">
            Home
          </a>
          <a className="hover:text-red-400" href="">
            New
          </a>
          <a className="hover:text-red-400" href="">
            Popular
          </a>
          <a className="hover:text-red-400" href="">
            Trending
          </a>
          <a className="hover:text-red-400" href="">
            Categories
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
