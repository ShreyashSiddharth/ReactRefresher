
import React, { useState } from 'react';
import {TITLE_IMF} from '../constants';
import { Link } from 'react-router-dom';



export const Title = () => (
    <h2 id = 'title' key="h2" >
        <img 
        className='logo' style={{  width: '154px',
            height: '76px'}}
        src= {TITLE_IMF}
        />
        </h2>
  );

  const HeaderComponent2 = () =>{
  const [auth,setAuth] = useState(false);
  return (
       
    <div className='header'> 
     <Title />
    <div className='nav-items'>
     <ul>
         <Link to="/"><li>Home</li></Link>
         <Link to="/about">
         <li>Aout Us</li>
         </Link>
         <Link to="/contact">
         <li>Contact</li>
         </Link>
         <li>Cart</li>
     </ul>
    </div>
  { auth ? <button onClick={()=> setAuth(false)}>Logout</button>:<button onClick={()=> setAuth(true)}>Login</button>}
       
     </div>
 );
  }
  
        export default HeaderComponent2;