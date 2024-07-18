import React from 'react';
import styles from './HeroStyles.module.css';
import Profile from '../../assets/Profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
function Hero() {
    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img src={Profile} className={styles.hero} alt="Profile" />
            </div>
            <div className={styles.info}>
                <h1>
                    VARUN
                    <br />
                    KODAMANCHILI
                </h1>
                <h3>
                    Aspiring Full stack developer
                </h3>
                <span>
                    <a href="https://www.linkedin.com/in/varun-kodamanchili-01881b23b/">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: "#005799",}} className={styles.heroicons} />
                    </a>
                    <a href="https://github.com/Varun1324">
                        <FontAwesomeIcon icon={faSquareGithub} style={{ color: "#ffffff", }} className={styles.heroicons} />
                    </a>
                </span>
                <p className={styles.description}>To work in an environment which encourages me to succeed and grow professionally where I can utilize my skils and knowledge appropriately.</p>
                <a href="https://github.com/Varun1324" download>
                    <button>Resume</button>
                </a>
                <span>
                    <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />varunkodamanchili@gmail.com
                </span>
                <span>
                    <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} />+91 9392671324
                </span>
            </div>
        </section>
    )
}

export default Hero