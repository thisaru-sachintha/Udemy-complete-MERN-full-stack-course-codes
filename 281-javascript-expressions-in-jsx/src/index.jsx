import React from "react";
import ReactDOM from "react-dom";

const name="Bro";
const num=7;

ReactDOM.render(<div>
    <h1>Hello World {name}</h1>
    <p>
        Your lucky number is {num}
    </p>
</div>, document.getElementById("root"));

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
