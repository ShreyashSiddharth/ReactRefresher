import React, { useState } from "react";
import { restaurantList } from "../constants";
import Resturantcard from "./ResturantCard";

function filterData(searchTxt , restaurants){
return restaurants.filter((restaurant) => 
restaurant.data.name.includes(searchTxt)
);
}


const Body = ()=>{
    const [searchTxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return(
       
        <>
        <div className="search-container">
            <input 
            className="search-input" 
            type="text" 
            placeholder="Search" 
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)} 
            />
            <button className="search-btn" onClick={()=>{
                //Data should be filtered
                const data = filterData(searchTxt, restaurants);
                //State to be updated
                setRestaurants(data);

            }} >Search</button>
        </div>
      
        <div className='resturant-list'>
        {
            restaurants.map((restaurant)=>{
                return  <Resturantcard {...restaurant.data} key ={restaurant.data.id}/>
            })
        }
       
        </div>
        </>
    );
}

export default Body;