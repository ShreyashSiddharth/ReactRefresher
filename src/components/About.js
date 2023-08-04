import React from "react";
import { Outlet } from "react-router-dom";


const About  = () =>{
  
    return(
        
        <div>
            <h1>About Us page</h1>
            <p>This is a Sample Food Delivery UI built by -Shreyash Siddharth,
                All assests used are of their respective owners. 
                <Outlet/>
            </p>

        </div>
        
    );
}

export default About;