import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';




//React.createElement => Object => HTML(Dom)

// const heading2 = React.createElement("h2",{
//     id:"title",
//     key:"h2",
// },"Hello newline");
const heading2 = <h2 id = 'title' key="h2" >Hello JSX Line</h2> // use (<h2 id = "" key = ""></h2>); for multiple lines
//JSX uses React.createElement => Obj =>HTMLDOM




//To build big DOM trees



//React Functional Component - Its is a normal funciton
//Returns a JSX or a React Element
// const HeaderComponent = () =>{

//     return <h1>namaste React functional Component</h1>;
// }
const HeaderComponent = () =>{
    return (
   <div>
    <h1>
            Big Component
    </h1>
    <h2>
        small Component
    </h2>
   </div>
  
    );
    };
    var x = 10;
    //Functional Components can also be written as
    //Included the react element inside functional component as {heading2}
    //Included another Functional component as <HeaderComponent /> or {HeaderComponent()}
    //Any JS code is accepted inside {}
    const HeaderComponent2 = () =>(
        <div>
        {heading2}  
        {1+2}
        <h1>
            hi
        </h1> 
        <HeaderComponent/>   
        </div>
    );
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<HeaderComponent2 />);
