// // const h1 = document.createElement("h1")
// // h1.innerHTML = "React not rendered"
// // const root_js = document.querySelector("#root")
// // root_js.appendChild(h1)

// import React from "react";
// import ReactDOM from "react-dom/client";

// // const heading = React.createElement("h1", { key: "heading" }, "Namaste everyone");
// // const heading1 = React.createElement("h1", { key: "heading1" }, "Heading1");
// // const heading2 = React.createElement("h2", { key: "heading2" }, "heading2");



// // const namaste_react_heading = React.createElement(
// //   "h1",
// //   {
// //     key:"Namaste react"
// //   },
// //   "Namaste react"
// // )

// // const li_1 = React.createElement(
// //   "li",
// //   {key:"About us "},
// //   "About us"
// // )
// // const li_2 = React.createElement(
// //   "li",
// //   {key:"Support "},
// //   "Support us"
// // )
// // const li_3 = React.createElement(
// //   "li",
// //   {key:"Home "},
// //   "Home"
// // )

// // const ul = React.createElement(
// //   "ul",
// //   {key:"ul"},
// //   [li_1,li_2,li_3]
// // )

// // const wrapper_div = React.createElement(
// //   "div",
// //   {},
// //   [namaste_react_heading,ul]
// // )
// // const header_div = ReactDOM.createRoot(document.getElementById("header"))


// // header_div.render(wrapper_div)



// // const container = React.createElement(
// //   "div",
// //   { id: "container" },
// //   [heading, heading1, heading2]
// // );

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(container);


// const heading = (
//   <h1 id = 'title' key = 'h1'>Namaste React</h1>
// )

// // JSX -------BABLE----> React.createElement() -> React object -> HTML(DOM)  

// const root = ReactDOM.createRoot(document.getElementById("root"))
// //root.render(heading)

//  // name od component starts with the capital letter

// const Title= () =>(
//   <div>
//     <h1>Thissssss is the fkin title</h1>
//   </div>
// )


// const HeaderComponent = () =>
//    (

// <div>
// <Title/> {
// //This is called component composition in react (passing components in two components)
// }
// {Title()}
// {heading}
// <h1>Namastte react functional component</h1>
// <h2>H2 tag</h2>
// </div>
// )
// ;
// // heading can be used coz its just a react element but to use component we can ave 

// root.render(<HeaderComponent/>);

// //root.render(heading)  this will override actually


