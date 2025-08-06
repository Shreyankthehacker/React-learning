import React from "react";
import { IMG_CDN_URL } from "./constant";
import restuarants from "../config";


const RestaurantCard = (props) => {
  let restuarant = props.restuarant
   
    return (
      <div className="card">
        
        <img src={IMG_CDN_URL + restuarant.cloudinaryImageId} />
        <h2>{restuarant.name}</h2>
        <h5>{restuarant.cuisines.join(' ')}</h5>
        <h6>{restuarant.areaName}</h6>
        <span>
          <h4
            style={
              restuarant.avgRating < 4 ? { backgroundColor: "red" } : { color: "black" }
            }
          >
            <i className="fa-solid fa-star"></i>
            {restuarant.avgRating}
          </h4>
          <h4>{restuarant.lastMileTravelString}</h4>
          <h4>{restuarant.costForTwoString}</h4>
        </span>
      </div>
    );
  };
  
  export default RestaurantCard;