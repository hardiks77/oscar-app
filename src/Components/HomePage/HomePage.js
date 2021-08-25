import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { AppContext } from "../../Context";
import "./HomePage.css";

function HomePage() {

    let [friendName, nameAfterSignUp] = React.useContext(AppContext);

    function handleLogOut() {
        localStorage.removeItem("userName");
        nameAfterSignUp("");
    }

    return (
        <>
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

            <div>
                <Link to="/emergency"><button className="btn-emergency">Emergency</button></Link>
                <Link to="/shop"><button className="btn-shop">Shop</button></Link>
                <Link to="/friends"><button className="btn-friends">Friends</button></Link>
            </div>
        </>


    )
}

export default HomePage;