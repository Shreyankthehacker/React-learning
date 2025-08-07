import React from "react";
import { Outlet } from "react-router";
import Profile_class from "./Profile_class";
import Profile from "./Profile";

const About = () =>{

return (
    <div>
        <h1>About this page </h1>
        <p>
            THis is the namaste react live course to find the route
        </p>
        <Profile name = "Shreyank"></Profile>
        <Profile_class name = "Shreyank"></Profile_class>
    </div>
)



}

export default About;