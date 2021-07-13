import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import javapic from './img/javascript.png';

function Skillbox () {
    return (
        <div>
            <img src={javapic} alt="BigCo Inc. logo"/>
        </div>
    );
}

export default Skillbox;