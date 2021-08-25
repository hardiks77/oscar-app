import React from "react";
import "./Emergency.css";
import { useHistory, Link } from "react-router-dom";
import "./Emergency.css"
import { AppContext } from "../../Context";

function Emergency() {

    let [contact, setContact] = React.useState("Contact Us");
    let [friendName, nameAfterSignUp] = React.useContext(AppContext);

    function changeContact() {
        setContact(contact == "Contact Us" ? "1800-XXXX-0000" : "Contact Us");
        console.log(contact);
    }

    let history = useHistory();

    function handleHospital() {
        history.push("/hospitals");
    }

    function handleLogOut() {
        localStorage.removeItem("userName");
        nameAfterSignUp("");
    }


    return (
        <div>
            <div className="app-header">
                <h1>
                    Oscar
                </h1>
                <nav>

                    <div>
                        <Link className="link-nav" to="/home">Home</Link>
                    </div>
                    <div>
                        <Link className="link-nav" to="/emergency">Emergency</Link>
                    </div>
                    <div>
                        <Link className="link-nav" to="/shop">Shop</Link>
                    </div>
                    <div>
                        <Link className="link-nav" to="/friends">Friends</Link>
                    </div>
                    <div>
                        <Link className="link-nav nav-btn" onClick={handleLogOut} to="/presignup">Log out</Link>
                    </div>

                </nav>
            </div>
            <button className="btn-hospital" onClick={handleHospital}>Nearest Hospital</button>
            <h3>OR</h3>
            <button className="btn-contact" onClick={changeContact}>{contact}</button>
        </div>
    )
}

export default Emergency;