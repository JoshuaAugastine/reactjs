import React, {useState} from "react";
function Bike(){
    const [car,setCar]= useState({
        brand:"Ford",
        model: "Mustang",
        year:"1964",
        color:"red"
    });
    return(
        <div>
            <h1>My {car.brand}</h1>
           <p>it is a {car.color} {car.model} from {car.year}</p>
        </div>
    )
}
export default Bike;