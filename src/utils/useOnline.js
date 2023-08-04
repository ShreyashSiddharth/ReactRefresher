import { useEffect, useState } from "react";

const useOnline = () =>{
    //return true if offline 
    //else return false
const [isOffline , setIsOffline] = useState(false);

useEffect(()=>{
    window.addEventListener("online", () => {setIsOffline(false)});
    window.addEventListener("offline", () => {setIsOffline(true)});
},[])

return isOffline;
};

export default useOnline;