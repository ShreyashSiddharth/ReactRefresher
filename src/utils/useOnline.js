import { useEffect, useState } from "react";

const useOnline = () =>{
    //return true if offline 
    //else return false
const [isOffline , setIsOffline] = useState(false);

useEffect(()=>{
    const hadleOnline = ()=>{
        setIsOffline(false)
    };

    const hadleOffline = ()=>{
        setIsOffline(true)
    };
    window.addEventListener("online", hadleOnline);
    window.addEventListener("offline", hadleOffline);

    return ()=>{
        window.removeEventListener("online",hadleOnline);
        window.removeEventListener("offline", hadleOffline);
    };
},[])

return isOffline;
};

export default useOnline;