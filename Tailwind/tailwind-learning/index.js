import React from "react";
import {createRoot} from 'react-dom/client'
import "./index.css"
import ChitChat from "./src/chitchat";
import Profile from "./src/Profile";




const App = () =>{
    return (
    <>
    <div className="text-2xl">Tailwind learning</div>
    {/* <ChitChat/> */}
    <Profile/>
    </>
)
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)