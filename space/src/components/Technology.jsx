/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Technology = () => {
  return (
    <div>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex py-30 w-full overflow-hidden"
        style={{ backgroundImage: `url(${assets.backgroundTechnology})` }}
        id="technology"
      ></div>
    </div>
  );
};

export default Technology;
