import React  from "react";
import ReactDOM from "react-dom/client"

import HeaderComponent from "./Components/Header";
import BodyComponent from "./Components/Body";
import FooterComponent from "./Components/Footer";






const AppLayout = () =>{
    return (
        <> 
    <HeaderComponent/>
    <BodyComponent/>
    <FooterComponent/>
    </>
    );
}

const container = document.getElementById("root");
 

const root = ReactDOM.createRoot(container);
root.render(<AppLayout />);
