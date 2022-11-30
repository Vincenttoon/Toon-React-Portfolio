import React from "react";
import resume from '../../assets/resume/Resume.pdf';
import { FaFileDownload } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';
import { GrPersonalComputer } from 'react-icons/gr';
import { GiBrain } from 'react-icons/gi';


function Resume() {
  return (
    <div>
      <section>
        <div>
          <h2>Vincent's Resume:</h2>
        </div>
        <div className="download-div">
          <div className="resume-download">
            <a href={resume} className='download-logo' download>
              <FaFileDownload />
            </a>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3>Primary Practices:</h3>
          <ul>
            <li className="resume-logos">
              <GrPersonalComputer />
            </li>
            <li>Mongoose</li>
            <li>Express</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div>
          <h3>Technologies:</h3>
          <ul>
          <li className="resume-logos">
              <GrTechnology />
            </li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Progressive Web Applications</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>API's</li>
            <li>Sequelize</li>
            <li>NoSQL</li>
            <li>SQL</li>
          </ul>
        </div>
        <div>
          <h3>Logical Practices:</h3>
          <ul>
          <li className="resume-logos">
              <GiBrain />
            </li>
            <li>State</li>
            <li>OOP</li>
            <li>Object Relational Mapping</li>
            <li>Model View Controller</li>
            <li>Computer Science</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Resume;
