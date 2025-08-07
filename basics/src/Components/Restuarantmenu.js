import React, { useState } from "react"
import { useParams } from "react-router";
import { useEffect , useState } from "react";
import { IMG_CDN_URL } from "./constant";

const RestaurantMenu = ( ) =>{



const [restaurant,setRestaurant]  = useState({})
const [menu , setMenu] = useState([])

const params = useParams();
console.log(params)
console.log("the id is ",params.id)

async function getMenu(params) {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${params.id}`);
    console.log("data is",data)
    const json = await data.json();
    console.log("The data is:", json.data);
    setRestaurant(json.data.cards[2].card.card.info)
    console.log("The saved data is ",json.data.cards[2].card.card.info)
    setMenu(    json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [])
    // console.log("the menu is ",json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[1]) // iterate over itemCards
  }
  

useEffect(()=>{
    getMenu(params);
},[params.id])

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