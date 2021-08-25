import { Link } from "react-router-dom";
import React from "react";
import { AppContext } from "../Context";

function Friends() {

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
            <h1>Find you and your pet a new friend</h1>
        </div>

    )
}

export default Friends;