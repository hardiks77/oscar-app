import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import "./SignUp.css";

function PreSignUp() {
    return (
        <div className="pet-type">
            <h4>Your friend is a...</h4>
            <Link to="/signup"><button className="btn-dog">Dog</button></Link>
            <Link to="/signup"><button className="btn-cat">Cat</button></Link>
            <Link to="/signup"><button className="btn-others">Others</button></Link>
        </div>
    )
}

export default PreSignUp;