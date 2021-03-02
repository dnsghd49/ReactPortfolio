import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-md tm-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">Main</Link>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/about"className="nav-link tm-nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/idkyet"className="nav-link tm-nav-link">Discover</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search"className="nav-link tm-nav-link">Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
