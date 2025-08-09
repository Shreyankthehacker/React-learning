import React, { useState } from "react"
import { useParams } from "react-router";
import { useEffect , useState } from "react";
import { IMG_CDN_URL } from "./constant";
import useRestuarant from "../utils/useRestuarant";

const RestaurantMenu = ( ) =>{



const params = useParams()
const [restaurant,menu]  = useRestuarant(params)

if(!restaurant)return <Shimmer/>

return (
  <div className="flex flex-col items-center p-6 space-y-8 bg-gray-50 min-h-screen">
    {/* Restaurant Info */}
    <div className="text-center space-y-2">
      <h1 className="text-3xl font-bold text-gray-800">
        Restaurant ID: {params.id}
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700">
        {restaurant.name}
      </h2>
      <img
        className="h-80 w-full max-w-md object-cover rounded-lg shadow-md mt-4"
        src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        alt={restaurant.name}
      />
    </div>

    {/* Menu Section */}
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">
        🍴 Menu
      </h3>
      <ul className="space-y-3">
        {menu.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between border border-gray-100 rounded-md p-3 hover:shadow-md transition-shadow"
          >
            <span className="text-gray-700 font-medium">
              🍽️ {item.card.info.name}
            </span>
            {item.card.info.price && (
              <span className="text-sm text-gray-500">
                ₹{item.card.info.price / 100}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

  
}

export default RestaurantMenu;