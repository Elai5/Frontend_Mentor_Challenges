/** @format */

import React, { useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  useEffect(() => {
    const openBtn = document.getElementById("openIcon");
    const closeBtn = document.getElementById("closeIcon");
    const mobileNav = document.getElementById("mobileNav");

    const handleOpen = () => mobileNav?.classList.remove("hidden");
    const handleClose = () => mobileNav?.classList.add("hidden");

    if (openBtn && closeBtn && mobileNav) {
      openBtn.addEventListener("click", handleOpen);
      closeBtn.addEventListener("click", handleClose);
    }
    return () => {
      if (openBtn && closeBtn) {
        openBtn.removeEventListener("click", handleOpen);
        closeBtn.removeEventListener("click", handleClose);
      }
    };
  }, []);

  return (
    <div className="py-3 px-4 md:px-15 md:pt-15 w-full ">
      <div className="flex justify-between items-center">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-5 text-[hsl(236,13%,42%)] text-xl px-10 hover:cursor-pointer ">
          <li>
            <a className="hover:text-red-400" href="">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-red-400" href="">
              New
            </a>
          </li>
          <li>
            <a className="hover:text-red-400" href="">
              Popular
            </a>
          </li>
          <li>
            <a className="hover:text-red-400" href="">
              Trending
            </a>
          </li>
          <li>
            {" "}
            <a className="hover:text-red-400" href="">
              Categories
            </a>
          </li>
        </ul>
        <div className="md:hidden cursor-pointer" id="openIcon">
          <img src={assets.menu} alt="" />
        </div>
      </div>

      {/* mobile navigation */}
      <div
        className=" hidden absolute h-full inset-y-0 right-0 px-5 py-4 cursor-pointer w-3/4 bg-white"
        id="mobileNav"
      >
        <div className="flex justify-between" id="mobileMenu">
          <ul
            className="flex flex-col gap-5 text-[hsl(236,13%,42%)] px-10 mt-10 hover:cursor-pointer "
            id="mobileData"
          >
            <li>
              <a className="hover:text-red-400 hover:cursor-pointer" href="">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-red-400" href="">
                New
              </a>
            </li>
            <li>
              {" "}
              <a className="hover:text-red-400" href="">
                Popular
              </a>
            </li>
            <li>
              {" "}
              <a className="hover:text-red-400" href="">
                Trending
              </a>
            </li>
            <li>
              {" "}
              <a className="hover:text-red-400" href="">
                Categories
              </a>
            </li>
          </ul>
          <img
            className="relative h-10"
            src={assets.menuclose}
            alt=""
            id="closeIcon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
