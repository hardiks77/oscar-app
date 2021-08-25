import React from "react";
import { AppContext } from "../../Context";
import { BrowserRouter, Route, Switch, Link, useHistory } from 'react-router-dom';
import glogo from "../Images/glogo.png";
import { googleProvider } from "../config/authMethod";
import socialMediaAuth from "../service/auth";

function SignUp() {

    let [friendName, nameAfterSignUp] = React.useContext(AppContext);
    let [petName, setPetName] = React.useState("");
    let history = useHistory();
    function petNameChange(e) {
        setPetName(e.target.value);
    }

    function handleSignUp() {
        nameAfterSignUp(petName);
        if (petName) {
            localStorage.setItem("userName", JSON.stringify(petName));
            history.push("/home");

        }

    }

    const handleGoogle = async (provider) => {
        const res = await socialMediaAuth(provider);
        if (res.email) {
            nameAfterSignUp(res.email);
            localStorage.setItem("userName", JSON.stringify(res.email));
            history.push("/home");
        }

    }

    return (
        <div className="sign-up">
            <input className="input-name" onChange={petNameChange} placeholder="your friends name" />
            <input className="input-email" placeholder="your email" />
            <input type="password" className="input-pass" placeholder="create password" />
            <input type="password" className="input-cpass" placeholder="confirm password" />
            {
                petName ? null : <p className="warning">Fill all the fields</p>
            }

            <button className="btn-signup" onClick={handleSignUp}>Sign Up</button>
            <button onClick={() => handleGoogle(googleProvider)} className="g-sign">Sign in with<img src={glogo} /></button>
        </div>
    )
}

export default SignUp;