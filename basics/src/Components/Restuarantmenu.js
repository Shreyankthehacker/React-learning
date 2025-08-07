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
    <div className="restaurant-container">
      <h1 className="restaurant-id">Restaurant ID: {params.id}</h1>
      <h2 className="restaurant-name">{restaurant.name}</h2>
      <img
        className="restaurant-image"
        src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        alt={restaurant.name}
      />
  
  <div className="menu-section">
  <h3 className="menu-heading">Menu</h3>
  <ul className="menu-list">
    {menu.map((item, index) => (
      <li key={index} className="menu-item">
        🍽️ {item.card.info.name}
      </li>
    ))}
  </ul>
</div>

    </div>
  );
  
}

export default RestaurantMenu;