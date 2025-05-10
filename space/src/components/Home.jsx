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
        <Navbar />
      <div>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Home;
