import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {

    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Post">Post</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
      
        </>
    );
}
export default Header;