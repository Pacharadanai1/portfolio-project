import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPhp, faJava, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div id="skills" className="container mt-5">
      <h2 className="text-center mb-4">My Skills</h2>
      <div className="row">
        <div className="col-6 col-md-3 text-center mb-4">
          <FontAwesomeIcon icon={faHtml5} size="4x" className="text-danger" />
          <p>HTML</p>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <FontAwesomeIcon icon={faCss3Alt} size="4x" className="text-primary" />
          <p>CSS</p>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <FontAwesomeIcon icon={faJs} size="4x" className="text-warning" />
          <p>JavaScript</p>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <FontAwesomeIcon icon={faReact} size="4x" className="text-info" />
          <p>React</p>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <FontAwesomeIcon icon={faPhp} size="4x" className="text-secondary" />
          <p>PHP</p>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <FontAwesomeIcon icon={faJava} size="4x" className="text-danger" />
          <p>Java</p>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <FontAwesomeIcon icon={faPython} size="4x" className="text-info" />
          <p>Python</p>
        </div>
        <div className="col-6 col-md-3 text-center mb-4">
          <FontAwesomeIcon icon={faDatabase} size="4x" className="text-success" />
          <p>MySQL</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;