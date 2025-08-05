import RestuarantCard from "./Restuarant"

import reslist   from "../config.js" 
import { useState } from "react"


function filterData(searchText , restuarants){

return restuarants.filter((restuarant) => restuarant.name.includes(searchText));

}


const BodyComponent = () =>{

const [searchText , setSearchText] = useState("Biryani");

// const [searchClicked , setSearchCliked] = useState(false);

const [restuarants,setRestuarant] = useState(reslist) 

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
                const data = filterData(searchText,restuarants)
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