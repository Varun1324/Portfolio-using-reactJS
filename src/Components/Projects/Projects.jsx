import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3, faJs, faPython, faReact, faNode} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import weather from '../../assets/weather.webp';
import netflix from '../../assets/netflix.webp';
import webscrap from '../../assets/webscrap.png';
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
                        <img src={weather} alt="" width={250} height={150}/>
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
                <a href="https://github.com/Varun1324/netflix-clone" target="_blank" rel="noopener noreferrer" className='redirect'>
                    <div className="p1">
                        <h3>Netflix Clone</h3>
                        <img src={netflix} alt="" width={250} height={150}/>
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
                <a href="https://github.com/Varun1324/Price-Grabber-for-online-shopping" target="_blank" rel="noopener noreferrer" className='redirect'>
                    <div className="p1">
                        <h3>Price-Grabber-for-online-shopping</h3>
                        <img src={webscrap} alt="" width={250} height={150}/>
                        <div className="prg">
                            Technologies Used : <FontAwesomeIcon icon={faHtml5} style={{ color: "#ff7b00" }} id="symbols"/> <FontAwesomeIcon icon={faCss3} style={{ color: "#1a6eff" }} id="symbols"/> <FontAwesomeIcon icon={faPython} style={{ color: "#4b8bbe" }} id="symbols"/>
                        </div>
                        <div className="descp">
                            Price Grabber is a web application designed to help users compare prices from various online shopping platforms. The application uses Selenium for web scraping to collect price data and Flask as the backend framework to serve the data.                        </div>
                        <div className="git">
                            <a href="https://github.com/Varun1324/Price-Grabber-for-online-shopping">
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