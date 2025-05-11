/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Destination = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.backgroundDestination})` }}
      id="home"
    >
      <div
        className="flex flex-col justify-center gap-6 text-white w-full px-12"
        id="destination"
      >
        <h2 className="text-white">
          <span className="text-gray-600">01</span>PICK YOUR DESTINATION
        </h2>
        <div className="flex flex-col-2 justify-center gap-20">
          <div className="w-1/4">
            <img className="object-cover" src={assets.imageMoon} alt="" />
          </div>
          <div className="flex flex-col gap-8 w-1/2">
            <div className="flex">
              <ul className="flex gap-5">
                <li>
                  <a href="">MOON</a>
                </li>
                <li>
                  <a href="">MARS</a>
                </li>
                <li>
                  <a href="">EUROPA</a>
                </li>
                <li>
                  <a href="">TITAN</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-5xl mb-5">MOON</h1>
              <p className="text-gray-400 border-b-2">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites
              </p>
            </div>

            <div className="flex">
              <div className="flex">
                <h2>AVG.DISTANCE</h2>
                <p>384, 400 KM</p>
              </div>
              <div className="flex">
                <h2>EST.TRAVEL TIME</h2>
                <p>3 DAYS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
