
import React, { useState , useContext } from 'react';
import {TITLE_IMF} from '../constants';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';



export const Title = () => (
    <h2 id = 'title' key="h2" >
        <img 
        className="h-28 pl-2"
        src= {TITLE_IMF}
        />
        </h2>
  );
    
  const HeaderComponent2 = () =>{
  const [auth,setAuth] = useState(false);
  const {user} = useContext(UserContext);
  return (
       
    <div className='flex justify-between bg-blue-100 shadow-lg'> 
     <Title />
    <div className='nav-items'>
     <ul className='flex py-10 px '>
         <Link to="/"><li className='px-2 hover:underline hover:text-blue-600'>Home</li></Link>
         <Link to="/about">
         <li className='px-2 hover:underline hover:text-blue-600'>Aout Us</li>
         </Link>
         <Link to="/contact">
         <li className='px-2 hover:underline hover:text-blue-600'>Contact</li>
         </Link>
         <li className='px-2'>Cart</li>
     </ul>
    </div>
     <h1>{user.name}</h1>
    
  { auth ? <button  onClick={()=> setAuth(false)}>Logout</button>:<button onClick={()=> setAuth(true)}>Login</button>}
       
     </div>
 );
  }
  
        export default HeaderComponent2;