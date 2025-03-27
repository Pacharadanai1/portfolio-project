import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faPalette } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about-title">Overview.</h2>
        <p className="about-description">
          Hi Everyone, I am Pacharadanai Srimueng. I am a Computer Engineering student with a passion for programming and technology. 
          I enjoy solving complex problems, building software solutions, and continuously learning 
          new technologies to improve my skills. My goal is to create innovative and efficient 
          applications that make a positive impact.
        </p>
        <div className="about-cards">
          <div className="about-card">
            <FontAwesomeIcon icon={faCode} className="icon" />
            <h3>Frontend Developer</h3>
          </div>
          <div className="about-card">
            <FontAwesomeIcon icon={faServer} className="icon" />
            <h3>Backend Developer</h3>
          </div>
          <div className="about-card">
            <FontAwesomeIcon icon={faPalette} className="icon" />
            <h3>UI/UX Designer</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;