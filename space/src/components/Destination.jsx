/** @format */

import React, { useState } from "react";
import { assets, destination } from "../assets/assets";

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState("Moon");

  const activeDestination = destination.find(
    (item) => item.name.toLowerCase() === selectedDestination.toLowerCase()
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center flex py-28 w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.backgroundDestination})` }}
      id="destination"
    >
      {" "}
      <div className="w-full flex flex-col px-6 text-white">
        <div className="">
          <div className="text-white mb-20 px-6">
            <h1 className="text-sm md:text-3xl font-semibold">
              <span className="text-gray-600 mr-4">02</span>PICK YOUR
              DESTINATION
            </h1>
          </div>
          <div className="w-full flex flex-col gap-5 lg:flex-row lg:gap-12 items-center justify-center">
            <div className="w-40 h-64 md:w-64 md:h-64 flex-shrink-0">
              <img
                src={activeDestination.images}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
              <ul className="flex justify-center lg:justify-start gap-6 uppercase tracking-widest text-sm md:text-base cursor-pointer">
                {destination.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => setSelectedDestination(item.name)}
                    className={`pb-1 border-b-2 transition-all ${
                      selectedDestination === item.name
                        ? "border-white text-white"
                        : "border-transparent text-gray-400 hover:border-white"
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
              <h1 className="text-5xl md:text-6xl font-bold uppercase">
                {activeDestination.name}
              </h1>
              <p className="text-gray-500 leading-relaxed">
                {activeDestination.description}
              </p>
              <hr className="my-4 border-gray-700" />

              <div className="flex flex-col sm:flex-row justify-between gap-6 text-center lg:text-left uppercase tracking-wider text-sm">
                <div>
                  <h2 className="text-gray-400">Avg. Distance</h2>
                  <p className="text-white text-xl">
                    {activeDestination.distance}
                  </p>
                </div>
                <div>
                  <h2 className="text-gray-400">Est. Time</h2>
                  <p className="text-white text-xl">
                    {activeDestination.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
