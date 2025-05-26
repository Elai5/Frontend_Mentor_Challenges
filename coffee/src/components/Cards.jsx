/** @format */

import { p, span } from "framer-motion/client";
import React from "react";
import { assets } from "../assets/assets";

const Card = ({ coffee }) => {
  const { name, image, price, rating, votes, available, popular } = coffee;
  return (
    <div className="p-4 rounded shadow-lg">
      <div className="relative w-full h-40 ">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-lg"
        />
        {popular && (
          <span className="absolute top-2 left-2 text-black text-sm bg-[hsl(40,88%,69%)] px-3 rounded-xl ">
            Popular
          </span>
        )}
      </div>

      <div className="mt-2">
        <div className="flex justify-between">
          <h2 className="text-sm md:text-xl font-bold">{name}</h2>
          <p className="p-2 bg-[hsl(144,42%,82%)] rounded text-black text-xs md:text-base">
            ${price}
          </p>
        </div>
        <div className="flex justify-between items-center text-xs md:text-base">
          {rating && (
            <p className="flex">
              {" "}
              <img src={assets.star} alt="star" />
              {rating}
              <span className="text-gray-600">({votes} votes)</span>
            </p>
          )}
          {!available && (
            <span className="text-sm text-red-500">Sold out </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
