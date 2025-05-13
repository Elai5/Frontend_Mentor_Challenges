/** @format */

import React from "react";
import { assets, crew } from "../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { assets, crew } from "../assets/assets";

const Crew = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex py-30 w-full overflow-hidden"
        style={{ backgroundImage: `url(${assets.backgroundCrew})` }}
        id="crew"
      >
        <div className="px-0 gap-5 md:px-20 w-full flex flex-col mb:gap-20 py-5">
          <div className="text-center md:text-start">
            <h2 className="text-white">
              <span className="text-gray-600 mr-5 ">01</span>MEET YOUR CREW
            </h2>
          </div>
          <div className="w-full flex flex-col gap-5 px-10">
            <Slider {...settings} className="">
              {crew.map((member, index) => (
                <div key={index} className="w-full">
                  <div className="lg:flex flex-row items-center gap-1 w-full">
                    <div className="lg:items-start w-full items-center text-center flex flex-col gap-3 ">
                      <h2 className="lg:text-start text-sm md:text-base text-gray-400">
                        {member.role}
                      </h2>
                      <h1 className="lg:text-5xl text-start md:text-3xl text-white uppercase">
                        {member.name}
                      </h1>
                      <p className="w-full md:w-3/4 text-xs text-gray-300 leading-6.5 lg:text-start">
                        {member.bio}
                      </p>
                    </div>
                    <div className="w-full flex justify-center items-center ">
                      <img
                        src={member.images}
                        alt={member.name}
                        className=" mt-4 w-40 md:w-64 h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
