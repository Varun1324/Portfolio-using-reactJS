import React from 'react'
import './Skc.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

function Skc() {
  return (
    <>
    <div className='main-cont'>
        <div id="skills">
        <div className='items'>
            <FontAwesomeIcon icon={faLaptopCode} style={{color: "#ffffff",}} id="icon"/>
            <h2>Skills</h2>
        </div>
        <div className='list'>
          <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>Git</li>
            <li>Reactjs</li>
          </ul>
        </div>
      </div>
      
      <div id="certifications">
        <div className='items'>
            <FontAwesomeIcon icon={faCertificate} style={{color: "#ffffff",}} id="icon"/>
            <h2>Certifications</h2>
        </div>
        <div className='list'>
          <ul>
            <li>Python for Data Science - NPTEL</li>
            <li>Joy of Computing Python - NPTEL</li>
            <li>AWS Academy Cloud Foundations - AWS</li>
            <li>OCI 2023 Certified Architect Associate</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skc