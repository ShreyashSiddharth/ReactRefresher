import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import useRestaurant from '../utils/useRestaurant';
import Shimmer from './Shimmer';

function ResturantMenu() {
    const { id } = useParams();
   const res = useRestaurant(id);
    
  return (!res) ? <Shimmer/> : (
    <div>
    
        <h2>{res.name}</h2>
        <img src={IMG_CDN_URL + res.cloudinaryImageId} alt={res.name}></img>
       
        <p className="restaurant-tags">{res?.cuisines?.join(", ")}</p>
        <h3>{res.areaName}</h3>
        <h3>{res.locality}</h3>
        <h3>{res.city}</h3>
        <h3>{res.avgRating} stars</h3>
        
        <h3>{res.costForTwoMessage}</h3>



    
    </div>
  );
}

export default ResturantMenu;