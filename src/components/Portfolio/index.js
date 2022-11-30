import React from "react";
import breweryFinderImg from "../../assets/small/post-search.png";
import employeeImg from "../../assets/small/employee.jpg";
import jateImg from "../../assets/small/jate-header-img.jpg";
import ecomImg from "../../assets/small/ecom-img.jpg";
import rise2ChallengeImg from "../../assets/small/rise2challenge.jpg";
import teamBuildingImg from "../../assets/small/Results.jpg";

function Portfolio() {
  return (
    <div>
      <section>
        <div>
          <h2>Projects:</h2>
        </div>
        <div className="project">
          <div className="project-img">
            <a href="https://github.com/Vincenttoon/brewery-finder">
                {" "}
              <img src={breweryFinderImg} className="port-img" style={{ width: "40%" }} alt='brewery finder home screen'/>
            </a>
          </div>
          <div className="project-description">
            <a href='https://vincenttoon.github.io/brewery-finder/'><h4>Find Your Brew</h4></a>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <a href="https://github.com/Vincenttoon/textfas-burrito-two">
                {" "}
              <img src={jateImg} className="port-img" style={{ width: "40%" }} alt='brewery finder home screen'/>
            </a>
          </div>
          <div className="project-description">
            <a href='https://safe-atoll-66410.herokuapp.com/'><h4>Just Another Text Editor</h4></a>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <a href="https://github.com/Vincenttoon/ecommerce-back-end">
                {" "}
              <img src={ecomImg} className="port-img" style={{ width: "40%" }} alt='brewery finder home screen'/>
            </a>
          </div>
          <div className="project-description">
            <a href='https://github.com/Vincenttoon/ecommerce-back-end'><h4>Ecommerce Back End</h4></a>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <a href="https://github.com/JayWhiteBuffalo/Rise2Challenge">
                {" "}
              <img src={rise2ChallengeImg} className="port-img" style={{ width: "40%" }} alt='brewery finder home screen'/>
            </a>
          </div>
          <div className="project-description">
            <a href='https://thawing-atoll-91539.herokuapp.com/'><h4>Rise2Challenge</h4></a>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <a href="https://github.com/Vincenttoon/employee-tracker-extraordinaire">
                {" "}
              <img src={employeeImg} className="port-img" style={{ width: "40%" }} alt='brewery finder home screen'/>
            </a>
          </div>
          <div className="project-description">
            <a href='https://github.com/Vincenttoon/employee-tracker-extraordinaire'><h4>Employee Tracker</h4></a>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <a href="https://github.com/Vincenttoon/team-building-exercise">
                {" "}
              <img src={teamBuildingImg} className="port-img" style={{ width: "40%" }} alt='team building page'/>
            </a>
          </div>
          <div className="project-description">
            <a href='https://github.com/Vincenttoon/team-building-exercise'><h4>Team Builder</h4></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
