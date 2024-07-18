import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faPython, faReact, faNode, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
function Projects() {
    return (
        <div className='main-container'>
            <div className='pro'>
                <FontAwesomeIcon icon={faChartBar} style={{ color: "#ffffff" }} id="cap"/>
                <h2>Projects</h2>
            </div>
            <div className='projects'>
                <a href="http://varun1324.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className='redirect'>
                    <div className="p1">
                        <h3>Weather Info WebApp</h3>
                        <div className="prg">
                            Technologies used : <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff7b00" }} id="symbols"/> <FontAwesomeIcon icon={faCss3} style={{ color: "#1a6eff" }} id="symbols"/>
                            <FontAwesomeIcon icon={faJs} style={{ color: "#fddd12" }} id="symbols"/>
                            <FontAwesomeIcon icon={faPython} style={{ color: "#4b8bbe" }} id="symbols"/>
                        </div>
                        <div className="descp">
                            A modern, responsive online application that retrieves current meteorological information. Built with HTML, CSS, JS, and Flask-Python for seamless user experience.
                        </div>
                        <div className="git">
                            <a href="https://github.com/Varun1324/Weather-info-webapp">
                                <FontAwesomeIcon icon={faCodeBranch} style={{ color: "#ffffff" }} />
                            </a>
                        </div>
                    </div>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" className='redirect'>
                    <div className="p1">
                        <h3>Netflix Clone</h3>
                        <div className="prg">
                            Technologies Used : <FontAwesomeIcon icon={faReact} style={{ color: "#5291ff" }} id="symbols"/>
                            <FontAwesomeIcon icon={faNode} style={{ color: "#0aff54" }} id="symbols"/>
                            <FontAwesomeIcon icon={faDatabase} style={{ color: "#ffffff" }} id="symbols"/>
                        </div>
                        <div className="descp">
                            This project is a part of a Netflix clone that focuses on user authentication functionalities. It is built using ReactJS for the frontend and NodeJS/Express with MySQL for the backend. this allows users to sign up, log in, and manage their accounts.
                        </div>
                        <div className="git">
                            <a href="https://github.com/Varun1324/netflix-clone">
                                <FontAwesomeIcon icon={faCodeBranch} style={{ color: "#ffffff" }} />
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://genaiinsight.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className='redirect'>
                    <div className="p1">
                        <h3>Dog Breed Identifier Using Generative AI</h3>
                        <div className="prg">
                            Technologies Used : <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff7b00" }} id="symbols"/> <FontAwesomeIcon icon={faBootstrap} style={{ color: "#7b24ff" }} id="symbols"/> <FontAwesomeIcon icon={faPython} style={{ color: "#4b8bbe" }} id="symbols"/>
                        </div>
                        <div className="descp">
                            A Python-based project that uses a Generative AI API to identify dog breeds from images. Upload a dog image to receive an accurate breed classification
                        </div>
                        <div className="git">
                            <a href="https://github.com/Varun1324/Dog-breed-identifier-using-GenAI">
                                <FontAwesomeIcon icon={faCodeBranch} style={{ color: "#ffffff" }} />
                            </a>
                        </div>
                    </div>
                </a>
                {/* add projects here */}
            </div>
        </div>
    )
}

export default Projects