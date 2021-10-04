import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import javapic from './img/javascript.png';
import reactpic from './img/react.png';
import nodepic from './img/node.png';
import csspic from './img/css.png';
import htmlpic from './img/html5.png';
import firebasepic from './img/firebase.png';
import mongodbpic from './img/mongodb.png';
import mysqlpic from './img/mysql.svg';
import expresspic from './img/express.png';
import wixone from './img/wix1.jpg';
import wixtwo from './img/wix.webp'; 


function Skillbox() {
    return (
        <section className="skills">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="skills-card cardground">
                            <div className="skills-card-body card-body">
                                <h2 id="skills" class="card-subtitle mt-3">Technical Skills</h2>
                                <div className="mx-auto" id="skill-icons">
                                    <img src={javapic} alt="JS logo" />
                                    <img src={reactpic} alt="React logo" />
                                    <img src={nodepic} alt="Node logo" />
                                    <img src={csspic} alt="CSS logo" />
                                    <img src={htmlpic} alt="HTML5 logo" />
                                    <img src={firebasepic} alt="Firebase logo" />
                                    <img src={mongodbpic} alt="MongoDB logo" />
                                    <img src={mysqlpic} alt="mySQL logo" />
                                    <img src={expresspic} alt="Express logo" />
                                    <img src={wixone} alt="Wix Partner Certificate logo" />
                                    <img src={wixtwo} alt="Wix partner logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skillbox;