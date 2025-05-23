/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Content = () => {
  return (
    <div className="px-2 md:flex flex-col md:px-5 py-5">
      <div className="w-full px-0 md:px-15 flex flex-col gap-15">
        <div className="md:flex justify-between gap-5">
          <div className="md:flex flex-col md:gap-26 ">
            <div className="md:bg-green-600 w-full h-60">
              <img
                className="h-full object-cover md:w-full md:object-center md:h-80"
                src={assets.webdesktop}
                alt="webdesktop"
              />
            </div>
            <div className="md:flex">
              <div>
                <h1 className=" w-3/4 text-3xl font-extrabold md:w-3/4 lg:text-5xl md:font-bold">
                  {" "}
                  The Bright Future of Web 3.0?
                </h1>
              </div>
              <div className="w-full mb-7 md:flex flex-col gap-3  text-[hsl(236,13%,42%)]">
                {" "}
                <p className="text-base md:text-xl mb-3 text-[hsl(236,13%,42%)] leading-8.5">
                  {" "}
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="text-center w-1/2 md:px-8 py-3 bg-[hsl(5,85%,63%)] font-semibold text-sm text-black cursor-pointer hover:bg-black hover:text-white">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full bg-[hsl(240,100%,5%)] text-white px-2 py-6">
              <h2 className="text-[hsl(35,77%,62%)] text-3xl mb-4 font-semibold">
                New
              </h2>
              <div className="flex flex-col gap-4">
                <div className="border-b-1 border-[hsl(236,13%,42%)]">
                  {" "}
                  <h2 className="text-base font-extrabold md:text-xl mb-2 hover:text-[hsl(35,77%,62%)] hover:cursor-pointer">
                    Hydrogen VS Electric Cars
                  </h2>
                  <p className="text-xs md:text-base mb-4 font-light text-[hsl(233,8%,79%)]">
                    {" "}
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                </div>
                <div className="border-b-1 border-[hsl(236,13%,42%)]">
                  {" "}
                  <h2 className="text-base font-extrabold md:text-xl mb-2 hover:text-[hsl(35,77%,62%)] hover:cursor-pointer">
                    The Downsides of AI Artistry
                  </h2>
                  <p className="text-xs md:text-base mb-4 font-light text-[hsl(233,8%,79%)] w-full">
                    {" "}
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </div>
                <div className="border-b-1 border-[hsl(236,13%,42%)]">
                  {" "}
                  <h2 className="text-base font-extrabold md:text-xl mb-2 hover:text-[hsl(35,77%,62%)] hover:cursor-pointer">
                    {" "}
                    Is VC Funding Drying Up?
                  </h2>
                  <p className="text-xs md:text-base mb-4 font-light text-[hsl(233,8%,79%)]">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex">
          <div className="flex gap-4 w-full">
            <div className="flex ">
              <img className="h-30 mb-3" src={assets.retro} alt="" />
            </div>
            <div className="flex flex-col w-3/4">
              <h2 className="text-[hsl(5,85%,63%)] text-2xl font-extrabold">
                01
              </h2>
              <h3 className="font-bold  hover:text-[hsl(5,85%,63%)] hover:cursor-pointer">
                {" "}
                Reviving Retro PCs
              </h3>
              <p className="text-[hsl(236,13%,42%)] text-sm ">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex">
              <img className="h-30 mb-3" src={assets.top} alt="" />
            </div>
            <div className="flex flex-col w-3/4">
              <h2 className="text-[hsl(5,85%,63%)] text-2xl font-extrabold">
                02
              </h2>
              <h3 className="font-bold hover:text-[hsl(5,85%,63%)] hover:cursor-pointer">
                {" "}
                Top 10 Laptops of 2022
              </h3>
              <p className="text-[hsl(236,13%,42%)] text-sm ">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex">
              <img className="h-30" src={assets.gaming} alt="" />
            </div>
            <div className="flex flex-col w-3/4">
              <h2 className="text-[hsl(5,85%,63%)] text-2xl font-extrabold">
                03
              </h2>
              <h3 className="font-bold hover:text-[hsl(5,85%,63%)] hover:cursor-pointer">
                {" "}
                The growth of gaming
              </h3>
              <p className="text-[hsl(236,13%,42%)] text-sm ">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
