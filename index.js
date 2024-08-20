import React from "react";
import ReactDom from "react-dom/client";

//jsx -> React.createElement
const element = React.createElement("h1","{}","hello from react");
const jsxheading = (<h1 id="firstjsx">hello from jsx</h1>);
// console.log(jsxheading);
// console.log("hello world");

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(element);
root.render(jsxheading);