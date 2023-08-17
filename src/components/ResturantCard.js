import React,{useContext} from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";

const Resturantcard = ({name,cuisines , cloudinaryImageId , sla:{lastMileTravelString}}) =>{
    const {user} = useContext(UserContext);
    return (
        <div className='w-56 h-[20rem] p-2 m-2  bg-blue-100 shadow-lg hover:bg-blue-300 hover:shadow-2xl'>
            <img src={ IMG_CDN_URL + cloudinaryImageId}></img>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString} </h4>
            <h2>{user.name}</h2>
        </div>
    );
};

export default Resturantcard;