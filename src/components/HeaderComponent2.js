
import React, { useState } from 'react';



export const Title = () => (
    <h2 id = 'title' key="h2" >
        <img 
        className='logo' style={{  width: '154px',
            height: '76px'}}
        src='https://scontent.fdbd1-1.fna.fbcdn.net/v/t1.6435-9/195975546_194122342714647_8061549141070472432_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=J8XRlceBYC4AX-luAzI&_nc_ht=scontent.fdbd1-1.fna&oh=00_AfAWqB7uJ8RaYdgR6g0w3_0ge2JYYoPJjSi8J9PO9NjIAQ&oe=64E78129'
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
         <li>Home</li>
         <li>Aout Us</li>
         <li>Contact</li>
         <li>Cart</li>
     </ul>
    </div>
  { auth ? <button onClick={()=> setAuth(false)}>Logout</button>:<button onClick={()=> setAuth(true)}>Login</button>}
       
     </div>
 );
  }
  
        export default HeaderComponent2;