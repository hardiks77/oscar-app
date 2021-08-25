import React from "react";
import { Link } from "react-router-dom";
import "./Hospitals.css";

import { AppContext } from "../../Context";

function Hospitals() {

    let [friendName, nameAfterSignUp] = React.useContext(AppContext);

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
            <div className="hospital-list">
                <div>
                    <h3 id="first">Govt. Veterinary Hospital, Near HAU, Hisar-125001</h3>
                </div>
                <div>
                    <h3 id="second">Teaching Veterinary Clinical Complex, Near Model Town, Hisar-125001</h3>
                </div>
            </div>
        </div>
    )
}

export default Hospitals;