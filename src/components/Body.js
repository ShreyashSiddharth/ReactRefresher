import React from "react";
import { restaurantList } from "../constants";
import Resturantcard from "./ResturantCard";

const Body = ()=>{
    return(
        <>
        <div className="search-container">
            <input className="search-input" type="text" placeholder="Search" value="" />
            <button className="search-btn" >Search</button>
        </div>
        <div className='resturant-list'>
        {
            restaurantList.map((restaurant)=>{
                return  <Resturantcard {...restaurant.data} key ={restaurant.data.id}/>
            })
        }
       
        </div>
        </>
    );
}

export default Body;