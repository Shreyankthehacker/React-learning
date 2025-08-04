// const h1 = document.createElement("h1")
// h1.innerHTML = "React not rendered"
// const root_js = document.querySelector("#root")
// root_js.appendChild(h1)

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { key: "heading" }, "Namaste everyone");
const heading1 = React.createElement("h1", { key: "heading1" }, "Heading1");
const heading2 = React.createElement("h2", { key: "heading2" }, "heading2");

const container = React.createElement(
  "div",
  { id: "container" },
  [heading, heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

