import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const heading  =  React.createElement("h1",{
    id:'title',
    key:'h1',
}, "Hello Everyone from webpack");
console.log(heading);

//React.createElement => Object => HTML(Dom)

const heading2 = React.createElement("h2",{
    id:"title",
    key:"h2",
},"Hello newline");

const container = React.createElement("div",{
    id:"container"
}, [heading,heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);