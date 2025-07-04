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
    <div
      className="min-h-screen bg-cover bg-center flex py-28 w-full overflow-hidden"
      style={{ backgroundImage: `url(${assets.backgroundTechnology})` }}
      id="technology"
    >
      <div className="w-full flex flex-col px-6 ">
        <div className="">
          <div className="text-white mb-8 px-6">
            <h1 className="text-sm md:text-3xl font-semibold">
              <span className="text-gray-600 mr-4 font-secondary">03</span>SPACE
              LAUNCH 101
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:px-20">
            <div className="flex flex-row lg:flex-col gap-4">
              {technology.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`w-4 h-4 lg:w-10 lg:h-10 rounded-full text-xs lg:text-lg font-medium transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-white text-black"
                      : "bg-transparent border border-white text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <div className="w-full lg:w-full">
              <Swiper
                direction={window.innerWidth < 768 ? "horizontal" : "vertical"}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
                navigation={false}
                className="h-[500px] sm:h-[700px] md:h-[500px] w-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                ref={swiperRef}
              >
                {technology.map((techItem, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full flex flex-col md:flex-col lg:flex-row justify-center items-center h-full gap-15 md:gap-8">
                      <div className="text-center lg:text-left flex-1 px-4 w-full  ">
                        <h3 className="mt-10 text-gray-500 text-sm md:text-2xl md:mt-13">
                          {techItem.title}
                        </h3>
                        <h2 className="text-white uppercase text-sm md:text-3xl lg:text-5xl my-2">
                          {techItem.name}
                        </h2>
                        <p className="text-xs md:text-base text-gray-400 max-w-xl mx-auto lg:mx-0">
                          {techItem.description}
                        </p>
                      </div>

                      <div className="flex-1 flex justify-center items-center px-4">
                        <div className="w-full max-w-md h-[300px] sm:h-[150px] md:h-[400px] overflow-hidden md:mb-10">
                          <img
                            src={techItem.images}
                            alt={techItem.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* <div className="w-full max-w-md h-[300px] sm:h-[100px] md:h-[100px] overflow-hidden hidden">
                      <img
                        src={techItem.image}
                        alt={techItem.name}
                        className="w-full h-auto object-cover"
                      />
                    </div> */}
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
