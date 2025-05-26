/** @format */

import React from "react";
import { assets } from "../assets/assets";
import Cards from "./Cards";
import CoffeeList from "./CoffeeList";

const CoffeeLanding = () => {
  return (
    <div className="min-h-screen overflow-y-scroll bg-[hsl(210,11%,7%)]">
      <div className="h-screen relative w-full bg-[hsl(210,11%,7%)]">
        <picture>
          <source
            media="(min-width:640px)"
            srcSet={assets.desktop_bg}
            alt="desktop-image"
            className="w-full"
          />
          <img
            src={assets.mobile_bg}
            alt="Hero Background"
            className="w-full h-auto object-cover"
          />
        </picture>
        <div className="absolute  top-10 lg:top-[19%] left-1/2 transform -translate-x-1/2 flex flex-col items-center w-[90%] bg-[hsl(204,8%,12%)] text-white rounded-lg">
          <div className="relative w-full h-[240px] flex justify-center items-center">
            <img
              src={assets.vector}
              alt="vector image"
              className="object-cover absolute lg:left-1/2 top-5 z-0"
            />
            <div className="absolute inset-0 z-10 flex flex-col gap-3 py-15 items-center w-full p-5">
              {" "}
              <h1 className="text-base md:text-3xl font-bold">
                Our Collection
              </h1>
              <p className="text-sm text-gray-500 md:w-3/4 md:text-xl text-center">
                Introducing our Coffee Collection, a selection of unique coffees
                <br />
                from different roast types and origins, expertly roasted in
                small
                <br /> batches and shipped fresh weekly.
              </p>
              <div className="flex gap-4 mt-3  text-xs ">
                <button className="bg-gray-600 text-white p-2 px-4 rounded-lg hover:cursor-pointer hover:bg-gray-800">
                  All Products
                </button>
                <button className="hover:bg-gray-800 cursor-pointer border-gray-500 rounded-lg p-2">
                  Available Now
                </button>
              </div>
            </div>
          </div>
          <CoffeeList />
          {/* <div className="">
            <CoffeeList />
          </div> */}
          <p className="text-xs px-4">
            Coded by <a href="https://github.com/Elai5">Elaine</a> Here |
            Challenge by <a href=""></a>
            devChallenges.io.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeLanding;
