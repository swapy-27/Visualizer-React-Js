import React from "react";
import '../style/nav.css'
function Navbar(props){
  
    const generateArray= props.generateArray;
    return (
        <div className="navbar">
            <div className="nav_container">
                <button onClick={generateArray}>Generate Array</button>
            </div>
            <div className="nav_container">
                <label for='slider'>Change Size</label>
                <input type='range' id="array_size" name="slider" min='4' max='150'></input>
            </div>
            <div className="nav_container">
                <button>Selection Sort</button>
                <button>Bubble Sort</button>
                <button>Insertion Sort</button>
            </div>
            <div className="nav_container">
                <button id="sort">Sort!</button>
            </div>
        </div>

    )
}

export default Navbar;