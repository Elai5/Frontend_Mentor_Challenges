/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="w-full px-5 py-15">
      <div className="flex justify-between">
        <img src={assets.logo} alt="" />
        <ul className="flex gap-5 text-[hsl(236,13%,42%)]">
          <a href="">Home</a>
          <a href="">New</a>
          <a href="">Popular</a>
          <a href="">Trending</a>
          <a href="">Categories</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
