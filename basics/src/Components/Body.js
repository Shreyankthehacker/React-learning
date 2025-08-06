import RestuarantCard from "./Restaurant"

import reslist   from "../config.js" 
import { useEffect, useState } from "react"


function filterData(searchText , restuarants){

return restuarants.filter((restuarant) => restuarant.name.includes(searchText));

}


const BodyComponent = () =>{

const [searchText , setSearchText] = useState("Biryani");

// const [searchClicked , setSearchCliked] = useState(false);

const [restuarants,setRestuarant] = useState(reslist) 
const [filteredRes , setFilteredRes] = useState(reslist)


async function getRestuarant(){
  console.log("calling getres");
  const data = await fetch("/restuarant.json");
  const json = await data.json(); 
  setFilteredRes(json.restaurants);   
  setRestuarant(json.restaurants);
  return json;
}

useEffect(() => {
  console.log("calling use effect");

  async function fetchData() {
   await getRestuarant(); // ✅ await here
    
  }

  fetchData(); 
}, []);


    return (
        <>
        <div className="search-container">
            <input type = 'text' 
            className="search-input"
            placeholder="search"
            value = {searchText}
            onChange={ (e) => {
                setSearchText(e.target.value)
            }}
            />
            <button className="search-btn"
            onClick={(e)=>{
                const data = filterData(searchText,filteredRes)
                setRestuarant(data)

            }}>Search</button>
            
        </div>
        <div className="restuarant-list">
            {
                restuarants.map( (restuarant,idx)  =>{
                    return <RestuarantCard restuarant = {restuarant}  key = {idx}/>
                })
            }
        </div>
        </>
    )
}

export default BodyComponent