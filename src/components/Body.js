import React, { useEffect, useState } from "react";

import Resturantcard from "./ResturantCard";
import Shimmer from "./Shimmer";

function filterData(searchTxt , restaurants){
return restaurants.filter((restaurant) => 
restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
);
}


const Body = ()=>{
    const[allresturants,setAllresturants]  = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurants] = useState([]);

    useEffect(()=>{
    getResturants();
    },[]) // When dependency array is empty it will be called 1 time after initial render
    //If you have a state vaariable in dependency array it will call callback function when value of state variable changes
async function getResturants(){
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllresturants(json?.data?.cards[2]?.data?.data?.cards);
}

    return(allresturants.length == 0)? <Shimmer/>:(
       
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
                const data = filterData(searchTxt, allresturants);
                //State to be updated
                setRestaurants(data);

            }} >Search</button>
        </div>
      
        <div className='resturant-list'>
        {
           (restaurants.length == 0)? <h1>No Resturants Found</h1>: 
            restaurants.map((restaurant)=>{
                return <Resturantcard {...restaurant.data} key ={restaurant.data.id}/>
            })
        
        }
       
        </div>
        </>
    );
}

export default Body;