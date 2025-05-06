/** @format */

import React, { useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const openMenu = document.getElementById("mobileNav");

  return (
    <div className="w-full px-5 py-15">
      <div className="flex justify-between">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-5 text-[hsl(236,13%,42%)] px-10 hover:cursor-pointer ">
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
        <div className="md:hidden cursor-pointer" id="menu-open">
          <img src={assets.menu} alt="" />
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className=" hidden absolute inset-y-0 right-0 px-5 py-4 cursor-pointer"
        id="menu-close"
      >
        <div className="flex" id="mobileNav">
          <img className="relative left-50" src={assets.menuclose} alt="" />
        </div>

        <ul className="flex flex-col justify- gap-5 text-[hsl(236,13%,42%)]px-10 hover:cursor-pointer ">
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
