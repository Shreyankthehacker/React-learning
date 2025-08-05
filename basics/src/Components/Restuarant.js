import React from "react";



const RestuarantCard = (props) =>{
    const restuarant = props.restuarant
    return (
        <div className="card">
            <img className = "imagecard" src = {restuarant?.image}></img>
            <h2>{restuarant?.name}</h2>
            <h3>{restuarant?.cuisine.join(", ")}</h3>
            <h3>{restuarant?.rating}</h3>
        </div>
    )
}

export default RestuarantCard
