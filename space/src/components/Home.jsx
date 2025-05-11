/** @format */

import React from "react";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.backgroundHome})` }}
      id="home"
    >
      {/* <Navbar /> */}
      <div className="container flex flex-col md:flex-row justify-center items-center gap-6">
        <div
          className="mt-14 md:flex flex-col gap-5 justify-center w-1/2"
          id="home-text"
        >
          <h2 className="text-gray-300 text-sm">SO, YOU WANT TO TRAVEL TO</h2>
          <h3 className="text-white text-3xl md:text-8xl" id="heading">
            SPACE
          </h3>
          <p className="w-full md:w-3/4 text-sm text-gray-400">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <h2 className="text-black bg-white border-0 rounded-full h-40 w-40 inline-flex items-center justify-center">
            EXPLORE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
