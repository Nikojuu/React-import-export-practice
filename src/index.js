import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

import * as calculate from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

root.render(
  <ul>
    <li>{calculate.default(1, 2)}</li>
    <li>{calculate.multiply(2, 3)}</li>
    <li>{calculate.subtract(7, 2)}</li>
    <li>{calculate.divide(5, 2)}</li>
  </ul>
);
