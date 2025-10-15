// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js"

const [honda,tesla]=cars;

const {
    speedStats:{topSpeed:hondaTopSpeed},
    coloursByPopularity:[hondaTopColour]
}=honda;
const {
    speedStats:{topSpeed:teslaTopSpeed},
    coloursByPopularity:[teslaTopColour]
}=tesla;
//const {
//    coloursByPopularity:hondaTopColour
//}=honda;
//const {
//    coloursByPopularity:teslaTopColour
//}=tesla;

 ReactDOM.render(
   <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
       <th>Top Colour</th>
     </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
       
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>

     </tr>
   </table>,
   document.getElementById("root")
 );

/*
const {
    speedStats:{topSpeed:hondaTopSpeed},
    coloursByPopularity:hondaTopColour
}=honda;
const {
    speedStats:{topSpeed:teslaTopSpeed},
    coloursByPopularity:teslaTopColour
}=tesla;*/

//<td>{teslaTopColour.map((color)=>(<span>{color}<br/></span>))}</td>
//      <td>{hondaTopColour.map((color)=>(<span>{color}<br/></span>))}</td>