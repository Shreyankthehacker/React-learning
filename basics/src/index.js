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
import Profile from "./Components/Profile";
import Profile_class from "./Components/Profile_class";
// import Instamart from "./Components/InstaMart";
import { lazy } from "react";
import { Suspense } from "react";

import { Provider } from "react-redux";
import appStore from "./utils/AppStore";

const InstaMart = lazy(()=> import ('./Components/InstaMart'))


const AppLayout = () =>{
    return (
        <> 
    <Provider store = {appStore}>
    <HeaderComponent/>
    <Outlet/>
    <FooterComponent/>
    </Provider>
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
                element:<About/>,
                children:[{
                    path:'profile',
                    element:<Profile/>
                }]
            }, 
            {
                path :"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element :<RestaurantMenu/>
            },
            {
              path :"/instamart",
              element: (
                <Suspense fallback={<h1>Loading...</h1>}>
                  <InstaMart />
                </Suspense>
              ), 
            },
        ]
        }
        
    ]
)



const container = document.getElementById("root");
 

const root = ReactDOM.createRoot(container);
root.render(<RouterProvider router = {appRouter}/>);
