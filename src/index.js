import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderComponent2 from './components/HeaderComponent2';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter , RouterProvider,Outlet} from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';



 /**
                 Header
                 -Logo
                 - Nav Items
                 - Cart
                 Body
                    - Search Bar
                    -Resturant List
                    -Resturant Cards
                        -Card Component 
                            - Image
                            - Name
                            - Rating
                            -Cusine
                 Footer
                    - Links
                    - Copyright
                 */


                   


//React.createElement => Object => HTML(Dom)

// const heading2 = React.createElement("h2",{
//     id:"title",
//     key:"h2",
// },"Hello newline");

 // use (<h2 id = "" key = ""></h2>); for multiple lines
//JSX uses React.createElement => Obj =>HTMLDOM




//To build big DOM trees



//React Functional Component - Its is a normal funciton
//Returns a JSX or a React Element
// const HeaderComponent = () =>{

//     return <h1>namaste React functional Component</h1>;
// }
// const HeaderComponent = () =>{
//     return (
//    <div>
//     <h1>
//             Big Component
//     </h1>
//     <h2>
//         small Component
//     </h2>
//    </div>
  
//     );
//     };
//     var x = 10;
    //Functional Components can also be written as
    //Included the react element inside functional component as {heading2}
    //Included another Functional component as <HeaderComponent /> or {HeaderComponent()}
    //Any JS code is accepted inside {}

    // const styleObj = {
    //     backgroundColor: red,
    // }
   
    // const burgerKing = {
    //     name : "Burger King",
    //     image:"https://b.zmtcdn.com/data/pictures/4/19193204/c9fbbf2eed4d4ab83ce63b114e76b57f.jpg",
    //     cusines : ["Burgers", "Americans"],
    //     rating : "4.2"
    // }
    
   
   
    const AppLayout = () =>{
        return(
        <>
        <HeaderComponent2 />
       <Outlet/>
        <Footer />
        </>
        );
    };

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            errorElement :<Error/>,
            children:[
                {
                    path:"/",
                    element:<Body/>,
                },
                {
                    path:"/about",
                    element:<About/>,
                },
                {
                    path:"/contact",
                    element:<Contact/>,
        
                },
            ],
        },
        
       
    ]);













    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
  
    <RouterProvider router={appRouter}/>
    
 
    );
