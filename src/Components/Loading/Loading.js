import React from "react";

import { BrowserRouter, Route, Switch, Link, useHistory } from 'react-router-dom';
import "./Loading.css";
import oscar from "../Images/oscar.jpeg";

function Loading() {

    let history = useHistory();

    function handleClick() {
        if (JSON.parse(localStorage.getItem("userName"))) {
            history.push("/home")
        }
        else {
            history.push("/presignup")
        }
    }



    return (
        <>

            <div className="oscar-image-div">
                <h5>In memory of</h5>
                <h4>The Best dog ever</h4>
                <img src={oscar} />
                <h1>Oscar</h1>
            </div>
            <div className="loading-q">
                <h1 className="quote">"Maybe you can get another dog in your life, but for that dog you're going to be the only one his entire life. Treat them right, they deserve better"</h1>
                <button onClick={handleClick}>Continue</button>
            </div>
        </>
    )
}


export default Loading;