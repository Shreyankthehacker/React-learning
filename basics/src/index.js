import React, { Children }  from "react";
import ReactDOM from "react-dom/client"

import HeaderComponent from "./Components/Header";
import BodyComponent from "./Components/Body";
import FooterComponent from "./Components/Footer";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router"
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/Restuarantmenu";


const AppLayout = () =>{
    return (
        <> 
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    </>
    );
}


const appRouter = createBrowserRouter(
    [
        {
            path:"/",
            element : <AppLayout></AppLayout>,
            errorElement:<Error/>,
        children: [
            {
                path:"/",
                element :<BodyComponent/>
            },
            {
                path:"/about",
                element:<About/>
            }, 
            {
                path :"/contact",
                element:<Contact/>
            },
            {
                path:"/restuarant/:id",
                element :<RestaurantMenu/>
            }
        ]
        }
        
    ]
)



const container = document.getElementById("root");
 

const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router = {appRouter}/>);
