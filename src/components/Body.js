import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Resturantcard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";






const Body = ()=>{
    const[allresturants,setAllresturants]  = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurants] = useState([]);
   


    async function getResturants(){
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        setRestaurants(json?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllresturants(json?.data.cards[2]?.card.card?.gridElements?.infoWithStyle?.restaurants);
       
    }

    useEffect(()=>{
    getResturants();
    },[]) // When dependency array is empty it will be called 1 time after initial render
    //If you have a state vaariable in dependency array it will call callback function when value of state variable changes
    console.log(allresturants);

    const offline = useOnline();
    
    if(offline){
        return <h1>Offline please check your Internet Connection</h1>
    }

    const buttonStyle = {
        backgroundColor:"red",
    };

    return(!allresturants || allresturants.length == 0)? <Shimmer/>:(
       
        <>
        <div className="p-5 bg-blue-50 my-3">
            <input 
            className="search-input" 
            type="text" 
            placeholder="Search" 
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)} 
            />
            <button className="search-btn p-2 m-2 bg-green-800 text-white rounded-md hover:bg-green-950"  onClick={()=>{
                //Data should be filtered
                const data = filterData(searchTxt, allresturants);
                //State to be updated

                setRestaurants(data);

            }} >Search</button>
        </div>
      
        <div className='flex flex-wrap'>
        {
           (restaurants.length == 0)? <h1>No Resturants Found</h1>:
            
            restaurants.map((restaurant)=>{
                
                return<Link to={"/resturant/" + restaurant.info.id }> <Resturantcard {...restaurant.info} key ={restaurant.info.id}/> </Link>
               
            })
        
        }
       
        </div>
        </>
    );
}

export default Body;