import { useState , useEffect } from "react";
import { FETCH_MENU } from "../constants";




const useRestaurant = (id) => {
    
    const [res ,setRes] = useState({});
    useEffect(()=>{
        getResturantInfo();
    },[]);
    async function getResturantInfo(){
        const data = await fetch(FETCH_MENU+id);
        const json = await data.json();
        console.log(json);
        setRes(json.data.cards[0].card.card.info);
    }
    return res;
};

export default useRestaurant;