import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import javapic from './img/javascript.png';
import reactpic from './img/react.png';
import nodepic from './img/node.png'


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
                                    <img src={nodepic} alt="React logo" />
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