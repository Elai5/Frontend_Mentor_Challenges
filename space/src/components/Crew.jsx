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
        <div className="w-full flex flex-col px-20 py-5">
          <div>
            <h2 className="text-white">
              <span className="text-gray-600 mr-5 ">01</span>MEET YOUR CREW
            </h2>
          </div>
          <div className="w-full gap-3">
            <Slider {...settings}>
              {crew.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col-2 items-center justify-between gap-10 p-6 text-white"
                >
                  <div>
                    <h2 className="text-base">{member.role}</h2>
                    <h1 className="text-xl">{member.name}</h1>
                    <p className="text-sm">{member.bio}</p>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <img
                      src={member.images}
                      alt={member.name}
                      className="w-64 h-auto object-contain"
                    />
                    {/* {member.image && (
                      <img
                        src={member.imageDouglas}
                        alt=""
                        srcset=""
                        className="w-64 h-auto object-contain"
                      />
                    )} */}
                  </div>
                  {/* 
                  {member.images && <img src={member.imageDouglas} alt="" />} */}
                </div>
              ))}

              <div>
                <h2>hi</h2>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
