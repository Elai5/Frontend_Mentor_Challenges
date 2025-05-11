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
        className="flex flex-col justify-center text-white gap-40 px-12 py-32"
        id="destination"
      >
        <div>
          <h2 className="text-white">
            <span className="text-gray-600 mr-5 ">01</span>PICK YOUR DESTINATION
          </h2>
        </div>
        <div id="destination1">
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
                <p className="text-gray-400">
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites
                </p>
              </div>
              <hr className="w-full h-px mx-auto my-4 bg-gray-200 border-0 rounded-sm md:my-3 dark:bg-gray-700 z-10"></hr>
              <div className="flex justify-between w-3/4">
                <div className="flex flex-col">
                  <h2>AVG.DISTANCE</h2>
                  <p>384, 400 KM</p>
                </div>
                <div className="flex flex-col">
                  <h2>EST.TRAVEL TIME</h2>
                  <p>3 DAYS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="destination2">
          <div className="flex flex-col-2 justify-center gap-20">
            <div className="w-1/4">
              <img className="object-cover" src={assets.imageMars} alt="" />
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
                <h1 className="text-5xl mb-5">MARS</h1>
                <p className="text-gray-400">
                  Don’t forget to pack your hiking boots. You’ll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  solar system. It’s two and a half times the size of Everest!
                </p>
              </div>
              <hr className="w-full h-px mx-auto my-4 bg-gray-200 border-0 rounded-sm md:my-3 dark:bg-gray-700 z-10"></hr>
              <div className="flex justify-between w-3/4">
                <div className="flex flex-col">
                  <h2>AVG.DISTANCE</h2>
                  <p>225 MIL. KM</p>
                </div>
                <div className="flex flex-col">
                  <h2>EST.TRAVEL TIME</h2>
                  <p>9 MONTHS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="destination3">
          <div className="flex flex-col-2 justify-center gap-20">
            <div className="w-1/4">
              <img className="object-cover" src={assets.imageEuropa} alt="" />
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
                <h1 className="text-5xl mb-5">EUROPA</h1>
                <p className="text-gray-400">
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover’s dream. With an icy surface, it’s
                  perfect for a bit of ice skating, curling, hockey, or simple
                  relaxation in your snug wintery cabin.
                </p>
              </div>
              <hr className="w-full h-px mx-auto my-4 bg-gray-200 border-0 rounded-sm md:my-3 dark:bg-gray-700 z-10"></hr>
              <div className="flex justify-between w-3/4">
                <div className="flex flex-col">
                  <h2>AVG. DISTANCE</h2>
                  <p>628 MIL. KM</p>
                </div>
                <div className="flex flex-col">
                  <h2>EST. TRAVEL TIME</h2>
                  <p>3 YEARS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="destination4">
          <div className="flex flex-col-2 justify-center gap-20">
            <div className="w-1/4">
              <img className="object-cover" src={assets.imageTitan} alt="" />
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
                <h1 className="text-5xl mb-5">TITAN</h1>
                <p className="text-gray-400">
                  The only moon known to have a dense atmosphere other than
                  Earth, Titan is a home away from home (just a few hundred
                  degrees colder!). As a bonus, you get striking views of the
                  Rings of Saturn.
                </p>
              </div>
              <hr className="w-full h-px mx-auto my-4 bg-gray-200 border-0 rounded-sm md:my-3 dark:bg-gray-700 z-10"></hr>
              <div className="flex justify-between w-3/4">
                <div className="flex flex-col">
                  <h2>AVG. DISTANCE</h2>
                  <p>1.6 BIL. KM</p>
                </div>
                <div className="flex flex-col">
                  <h2>EST. TRAVEL TIME</h2>
                  <p>7 YEARS</p>
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
