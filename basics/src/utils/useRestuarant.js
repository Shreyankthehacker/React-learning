import React, { useState } from "react";
import { useEffect } from "react";
import { getMenuUrl, MENU_URL } from "../Components/constant";

const useRestuarant = (params) =>{


    // shud return restuarant data (will get data from API)
const [restaurant,setRestaurant]  = useState({})
const [menu , setMenu] = useState([])

async function getMenu(params) {
    console.log("fetching for",params.id)
    const data = await fetch(getMenuUrl(params.id));
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

return [restaurant,menu]

}

export default useRestuarant;