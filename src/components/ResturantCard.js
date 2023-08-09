import React from "react";
import { IMG_CDN_URL } from "../constants";

const Resturantcard = ({name,cuisines , cloudinaryImageId , sla:{lastMileTravelString}}) =>{
    return (
        <div className='w-56 h-[20rem] p-2 m-2  bg-blue-100 shadow-lg hover:bg-blue-300 hover:shadow-2xl'>
            <img src={ IMG_CDN_URL + cloudinaryImageId}></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} </h4>
        </div>
    );
};

export default Resturantcard;