import React from "react";
import Body from "./body";
import Navbar from "./navbar";
import '../style/home.css'
function Home(props){
   
    const generateArray= props.generateArray;
    return (
        <div className="home">
            <Navbar generateArray={generateArray}/>
            <Body/>
        </div>

    )
}

export default Home;