import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                <Link className="navbar-brand" to="/">Main</Link>
                </li>
                <li>
                <Link to="/idkyet" className="nav-link tm-nav-link">Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
