import React from "react";
import resume from '../../assets/resume/Resume.pdf';
// import logos to use as components
import { FaFileDownload } from 'react-icons/fa';
import { BsBook } from 'react-icons/bs';
import { MdComputer } from 'react-icons/md';
import { GiBrain } from 'react-icons/gi';


function Resume() {
  return (
    <div className="resume-cont">
      <section>
        <div className="resume-head-div">
          <h2>Vincent's Resume:</h2>
        </div>
        <div className="download-div">
          <div className="resume-download">
            {/* download imported PDF file through a-tag */}
            <a href={resume} className='download-logo' download>
              <FaFileDownload  fontSize={'3em'}/>
            </a>
            <p className="p-text-resume">
              Click Icon above to download Vincen't resume to your local machine
            </p>
          </div>
        </div>
      </section>
      <section className="card-container">
        <div className="resume-card">
          <h3>Primary Practices:</h3>
          <ul>
            <li className="resume-logos">
              <MdComputer fontSize={'3em'}/>
            </li>
            <li>Mongoose</li>
            <li>Express</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <div className="resume-card">
          <h3>Technologies:</h3>
          <ul>
          <li className="resume-logos">
              <BsBook fontSize={'3em'}/>
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
        <div className="resume-card">
          <h3>Logical Practices:</h3>
          <ul>
          <li className="resume-logos">
              <GiBrain fontSize={'3em'}/>
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
