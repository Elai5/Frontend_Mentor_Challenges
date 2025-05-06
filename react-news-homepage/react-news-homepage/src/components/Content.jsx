/** @format */

import React from "react";
import { assets } from "../assets/assets";

const Content = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-15 gap-15">
        <div className="flex justify-between gap-5 ">
          <div className="flex flex-col gap-4 ">
            <div className="">
              <img src={assets.webdesktop} alt="webdesktop" />
            </div>
            <div className="flex mt-6 ">
              <div>
                <h1 className="font-bold text-5xl w-3/4">
                  {" "}
                  The Bright Future of Web 3.0?
                </h1>
              </div>
              <div className="w-3/4 flex flex-col gap-3">
                {" "}
                <p className="mr-1 text-[hsl(236,13%,42%)]">
                  {" "}
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="px-8 py-3 bg-[hsl(5,85%,63%)] w-3/4 font-semibold text-sm cursor-pointer hover:bg-black hover:text-white">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-full bg-[hsl(240,100%,5%)] text-white px-4 py-6">
              <h2 className="text-[hsl(35,77%,62%)] text-3xl mb-4 font-semibold">
                New
              </h2>
              <div className="flex flex-col gap-4">
                <div className="border-b-1 border-[hsl(236,13%,42%)]">
                  {" "}
                  <h2 className="mb-2 text-base hover:text-[hsl(35,77%,62%)] hover:cursor-pointer">
                    Hydrogen VS Electric Cars
                  </h2>
                  <p className="mb-4 text-sm font-light text-[hsl(233,8%,79%)]">
                    {" "}
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                </div>
                <div className="border-b-1 border-[hsl(236,13%,42%)]">
                  {" "}
                  <h2 className="mb-2 tetx-base  hover:text-[hsl(35,77%,62%)] hover:cursor-pointer">
                    The Downsides of AI Artistry
                  </h2>
                  <p className="mb-4 text-sm font-light text-[hsl(233,8%,79%)]">
                    {" "}
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </div>
                <div className="border-b-1 border-[hsl(236,13%,42%)]">
                  {" "}
                  <h2 className="mb-2 tetx-base hover:text-[hsl(35,77%,62%)] hover:cursor-pointer">
                    {" "}
                    Is VC Funding Drying Up?
                  </h2>
                  <p className="mb-4 text-sm font-light text-[hsl(233,8%,79%)]">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex gap-4 w-full">
            <div className="flex ">
              <img className="h-30" src={assets.retro} alt="" />
            </div>
            <div className="flex flex-col w-3/4">
              <h2 className="text-[hsl(5,85%,63%)] text-2xl">01</h2>
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
              <img className="h-30" src={assets.retro} alt="" />
            </div>
            <div className="flex flex-col w-3/4">
              <h2 className="text-[hsl(5,85%,63%)] text-2xl">02</h2>
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
              <img className="h-30" src={assets.retro} alt="" />
            </div>
            <div className="flex flex-col w-3/4">
              <h2 className="text-[hsl(5,85%,63%)] text-2xl">03</h2>
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
      {/* <div className="flex justify-between w-full gap-10 px-16 ">
        <div className="flex flex-col gap-4 ">
          <div className="">
            <img src={assets.webdesktop} alt="webdesktop" />
          </div>
          <div className="flex mt-6 ">
            <div>
              <h1 className="font-bold text-5xl w-3/4">
                {" "}
                The Bright Future of Web 3.0?
              </h1>
            </div>
            <div className="w-3/4 flex flex-col gap-3">
              {" "}
              <p className="mr-1 text-[hsl(236,13%,42%)]">
                {" "}
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="px-8 py-3 bg-[hsl(5,85%,63%)] w-3/4 font-semibold text-sm">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="bg-[hsl(240,100%,5%)] text-white px-4 py-6 w-3/4">
            <h2 className="text-[hsl(35,77%,62%)] text-3xl mb-4 font-semibold">
              New
            </h2>
            <div className="flex flex-col gap-4">
              <div className="border-b-1 border-[hsl(236,13%,42%)]">
                {" "}
                <h2 className="mb-2 text-base">Hydrogen VS Electric Cars</h2>
                <p className="mb-4 text-sm font-light text-[hsl(233,8%,79%)]">
                  {" "}
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </div>
              <div className="border-b-1 border-[hsl(236,13%,42%)]">
                {" "}
                <h2 className="mb-2 tetx-base">The Downsides of AI Artistry</h2>
                <p className="mb-4 text-sm font-light text-[hsl(233,8%,79%)]">
                  {" "}
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <div className="border-b-1 border-[hsl(236,13%,42%)]">
                {" "}
                <h2 className="mb-2 tetx-base"> Is VC Funding Drying Up?</h2>
                <p className="mb-4 text-sm font-light text-[hsl(233,8%,79%)]">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="flex">
        <div className="flex gap-4 w-full">
          <div className="flex w-1/2">
            <img src={assets.retro} alt="" />
          </div>
          <div className="flex flex-col w-3/4">
            <h2 className="text-[hsl(5,85%,63%)] text-2xl">01</h2>
            <h3 className="font-bold"> Reviving Retro PCs</h3>
            <p className="text-[hsl(236,13%,42%)] text-sm ">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex w-1/2">
            <img src={assets.retro} alt="" />
          </div>
          <div className="flex flex-col w-3/4">
            <h2 className="text-[hsl(5,85%,63%)] text-2xl">02</h2>
            <h3 className="font-bold"> Top 10 Laptops of 2022</h3>
            <p className="text-[hsl(236,13%,42%)] text-sm ">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <div className="flex w-1/2">
            <img src={assets.retro} alt="" />
          </div>
          <div className="flex flex-col w-3/4">
            <h2 className="text-[hsl(5,85%,63%)] text-2xl">03</h2>
            <h3 className="font-bold"> The growth of gaming</h3>
            <p className="text-[hsl(236,13%,42%)] text-sm ">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="w-full flex flex-grow justify-between gap-10 bg-pink-500 px-16 ">
        <div className="flex-grow-1 basis-3/4 bg-blue-500">
          <div className="flex  ">
            <img src={assets.webdesktop} alt="" />
          </div>
          <div className="flex  items-center justify-center gap-15 mt-6 ">
            <div>
              <h1 className="font-bold text-5xl">
                {" "}
                The Bright Future of Web 3.0?
              </h1>
            </div>
            <div className=" flex flex-col gap-3">
              {" "}
              <p className="mr-1 text-[hsl(236,13%,42%)] w-full">
                {" "}
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="px-8 py-3 bg-[hsl(5,85%,63%)] w-3/4 font-semibold text-sm">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-grow-1 basis-1/4 ">
          <div className=" bg-[hsl(240,100%,5%)] text-white px-4 py-6">
            <h2 className="text-[hsl(35,77%,62%)] text-3xl mb-4 font-semibold">
              New
            </h2>
            <div className="grid grid-row-3 gap-4">
              <div className="border-b-1 border-[hsl(236,13%,42%)]">
                {" "}
                <h2 className="mb-2 text-base">Hydrogen VS Electric Cars</h2>
                <p className="mb-4 text-sm font-light text-[hsl(233,8%,79%)]">
                  {" "}
                  Will hydrogen-fueled cars ever catch up to EVs?
                </p>
              </div>
              <div className="border-b-1 border-[hsl(236,13%,42%)]">
                {" "}
                <h2 className="mb-2 tetx-base">The Downsides of AI Artistry</h2>
                <p className="mb-4 text-sm font-light text-[hsl(233,8%,79%)]">
                  {" "}
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </div>
              <div className="border-b-1 border-[hsl(236,13%,42%)]">
                {" "}
                <h2 className="mb-2 tetx-base"> Is VC Funding Drying Up?</h2>
                <p className="mb-4 text-sm font-light text-[hsl(233,8%,79%)]">
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Content;
