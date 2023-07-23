
import React from 'react';



export const Title = () => (
    <h2 id = 'title' key="h2" >
        <img 
        className='logo' style={{  width: '90px',
            height: '76px'}}
        src='https://scontent.fdbd1-1.fna.fbcdn.net/v/t39.30808-6/300568234_1119074258685043_4997319920694524626_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-n2wlF1OPKEAX-Ca3Wg&_nc_ht=scontent.fdbd1-1.fna&oh=00_AfAHObwZDsy_cbemXmu56WVlpZRacxYuKGOchB42CWbmNA&oe=64BDDB5D'
        />
        </h2>
  );

  const HeaderComponent2 = () =>(
       
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
       
     </div>
 );

  
        export default HeaderComponent2;