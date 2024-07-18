import React from 'react';
import './Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
function Education() {
    return (
        <>
        <div className="edu">
            <FontAwesomeIcon icon={faGraduationCap} style={{color: "#ffffff",}} id="cap"/>
            <h2>Education</h2>
        </div>
        <section className='container'>
            <div className="dot">
                <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff",}} id="cap" />
            </div>
            <div className="btech">
                <span>2021-25 (Pursuing)</span>
                <h4>Bachelor of Technology</h4>
                <h4>Computer Science and Engineering (AI)</h4>
                <span>Percentage : 81%</span>
            </div>
            <div className="dot">
                <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff",}} id="cap" />
            </div>
            <div className="inter">
                <span>2019-21</span>
                <h4>Board of Intermediate Education</h4>
                <span>Percentage : 94.1%</span>
            </div>
            <div className="dot">
                <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#ffffff",}} id="cap" />
            </div>
            <div className="ssc">
                <span>2018-19</span>
                <h4>Board of Secondary Education</h4>
                <span>Grade : 9.7</span>
            </div>
        </section>
        </>
    );
}

export default Education;
