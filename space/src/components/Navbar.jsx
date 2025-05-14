/** @format */

import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <div className="w-full absolute flex flex-col-2 items-center justify-between gap-20 top-6 left-0 z-100 max-w-full px-0">
      <div className="flex max-w-full">
        <img
          className="object-fit h-8 md:h-auto pl-5 absolute top-0 left-0"
          src={assets.logo}
          alt="Logo"
        />
      </div>
      <div className="hidden md:flex justify-center items-center bg-blue-900/10 backdrop-blur-sm py-7 w-3/4 relative px-7">
        <ul className="flex text-xs tracking-tight w-full">
          <li className="text-gray-400 hover:border-b-2 hover:border-b-white hover:cursor-pointer">
            <Link to="/">
              <span className="px-3 font-700 text-white">00</span>HOME
            </Link>
          </li>
          <li className="text-gray-300 hover:border-b-2 hover:border-b-white hover:cursor-pointer">
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

      <div
        className="md:hidden cursor-pointer z-50 px-3"
        onClick={toggleMobileNav}
      >
        <img
          src={isMobileNavOpen ? assets.iconClose : assets.iconHamburger}
          alt="Menu toggle"
        />
      </div>

      {/* Mobile Nav */}
      {isMobileNavOpen && (
        <div className="transition-all duration-300 ease-in-out w-3/4 flex-col gap-5 bg-[#0B0D17] backdrop-blur-sm h-screen absolute top-0 right-0 z-40 flex">
          <div className="mt-10 px-6">
            <ul className="w-full flex flex-col gap-6 text-sm">
              <li className="text-gray-400" onClick={closeMobileNav}>
                <Link to="/">
                  <span className="px-3 font-700 text-white">00</span>HOME
                </Link>
              </li>
              <li className="text-gray-300" onClick={closeMobileNav}>
                <Link to="/destination">
                  <span className="px-3 font-700 text-white">01</span>
                  DESTINATION
                </Link>
              </li>
              <li className="text-gray-300" onClick={closeMobileNav}>
                <Link to="/crew">
                  <span className="px-3 font-bold text-white">02</span>CREW
                </Link>
              </li>
              <li className="text-gray-400" onClick={closeMobileNav}>
                <Link to="/technology">
                  <span className="px-3 text-white">03</span>TECHNOLOGY
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
