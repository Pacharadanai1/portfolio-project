import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import './Skills.css'; 

const Skills = () => {
  return (
    <div id="skills" className="container mt-5">
      <h2 className="text-center mb-4">My Skills</h2>
      <div className="row">
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="skill-card">
            <FontAwesomeIcon icon={faHtml5} size="4x" className="text-danger skill-icon" />
            <p>HTML5</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="skill-card">
            <FontAwesomeIcon icon={faCss3Alt} size="4x" className="text-primary skill-icon" />
            <p>CSS3</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="skill-card">
            <FontAwesomeIcon icon={faJs} size="4x" className="text-warning skill-icon" />
            <p>JavaScript</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="skill-card">
            <FontAwesomeIcon icon={faReact} size="4x" className="text-info skill-icon" />
            <p>React</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="skill-card">
            <FontAwesomeIcon icon={faPhp} size="4x" className="text-secondary skill-icon" />
            <p>PHP</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="skill-card">
            <FontAwesomeIcon icon={faJava} size="4x" className="text-danger skill-icon" />
            <p>Java</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="skill-card">
            <FontAwesomeIcon icon={faPython} size="4x" className="text-info skill-icon" />
            <p>Python</p>
          </div>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <div className="skill-card">
            <FontAwesomeIcon icon={faDatabase} size="4x" className="text-success skill-icon" />
            <p>Database</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;