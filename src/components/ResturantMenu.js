import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';

function ResturantMenu() {
    const { id } = useParams();
    const [res ,setRes] = useState({});
    useEffect(()=>{
        getResturantInfo();
    },[]);
    async function getResturantInfo(){
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+id);
        const json = await data.json();
        console.log(json);
        setRes(json.data.cards[0].card.card.info);
    }
    
  return (
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