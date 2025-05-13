/** @format */

import React, { useState, useRef } from "react";
import { assets, technology } from "../assets/assets";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Technology = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <div>
      <div
        className="min-h-screen mb-4 bg-cover bg-center flex py-30 w-full overflow-hidden"
        style={{ backgroundImage: `url(${assets.backgroundTechnology})` }}
        id="technology"
      >
        <div className="w-full flex flex-col pl-20 pr-0 py-5">
          <div className="mb-8">
            <h1 className="text-white text-2xl">
              <span className="text-gray-600 mr-4">03</span>SPACE LAUNCH 101
            </h1>
          </div>

          <div className="flex lg:flex-row w-full gap-10 items-center justify-center pl-10">
            <div className="flex flex-row lg:flex-col gap-4">
              {technology.map((techItem, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-white text-black font-bold"
                      : "bg-transparent border border-white text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Swiper Slides */}
            <div className="w-full">
              <Swiper
                direction={"vertical"}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                navigation={false}
                className="mySwiper h-[600px] w-full text-white"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                ref={swiperRef}
              >
                {technology.map((techItem, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col lg:flex-row w-full justify-center items-center h-full px-4 gap-8">
                      {/* Text Section */}
                      <div className="text-center lg:text-left flex-1">
                        <h3 className="text-gray-500 text-2xl lg:text-3xl">
                          {techItem.title}
                        </h3>
                        <h2 className="uppercase text-3xl lg:text-5xl my-2">
                          {techItem.name}
                        </h2>
                        <p className="text-base text-gray-400 max-w-xl mx-auto lg:mx-0">
                          {techItem.description}
                        </p>
                      </div>

                      {/* Image Section */}
                      <div className="flex-1 flex justify-center items-center">
                        <div className="image-rect w-full max-w-md h-[400px] border-2 border-gray-300 rounded-2xl overflow-hidden">
                          <img
                            src={techItem.images}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
