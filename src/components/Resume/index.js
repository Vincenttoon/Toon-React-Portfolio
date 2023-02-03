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
      <section className="card-container">
        <div className="resume-card">
          <h3>Primary Practices:</h3>
          <ul className="ul-class">
            <li className="resume-logos">
              <MdComputer fontSize={'3em'}/>
            </li>
            <li>Mongoose</li>
            <li>Express</li>
            <li>React</li>
            <li>Node.js</li>
            <li>JS6</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div className="resume-card">
          <h3>Technologies:</h3>
          <ul className="ul-class">
          <li className="resume-logos">
              <BsBook fontSize={'3em'}/>
            </li>
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
          <ul className="ul-class">
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
