import React from "react";
import breweryFinderImg from "../../assets/small/post-search.png";
import employeeImg from "../../assets/small/employee.jpg";
import jateImg from "../../assets/small/jate-header-img.jpg";
import ecomImg from "../../assets/small/ecom-img.jpg";
import rise2ChallengeImg from "../../assets/small/rise2challenge.jpg";
import teamBuildingImg from "../../assets/small/Results.jpg";
import liveWireImg from "../../assets/small/Live_Wire_Homepage.jpg";
import bookWormImg from "../../assets/small/book-worm-mason.jpg";
import insomniaImg from "../../assets/small/insomnia-thoughts.jpg";
import izzyButt from "../../assets/small/Izzy_sleeping.jpg";

function Portfolio() {
  return (
    <div>
      <section>
        <div>
          <h2 className="projects-head">Projects:</h2>
        </div>
        <div className="project-cont">
          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://github.com/stephen-kern/Live-Wire">
                  <h4>Live Wire</h4>
                </a>
              </div>
              <a href="https://dashboard.heroku.com/apps/secure-shore-15914">
                {" "}
                <img
                  src={liveWireImg}
                  className="port-img-featured"
                  // style={{ width: "100%" }}
                  alt="brewery finder home screen"
                />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://vincenttoon.github.io/brewery-finder/">
                  <h4>Find Your Brew</h4>
                </a>
              </div>
              <a href="https://github.com/Vincenttoon/brewery-finder">
                {" "}
                <img
                  src={breweryFinderImg}
                  className="port-img-featured"
                  // style={{ width: "100%" }}
                  alt="brewery finder home screen"
                />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://github.com/Vincenttoon/book-worm">
                  <h4>Book Worm</h4>
                </a>
              </div>
              <a href="https://salty-thicket-30850.herokuapp.com/">
                {" "}
                <img
                  src={bookWormImg}
                  className="port-img-featured"
                  // style={{ width: "100%" }}
                  alt="brewery finder home screen"
                />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://github.com/Vincenttoon/socially-networked">
                  <h4>Socially Networked</h4>
                </a>
              </div>
              <a href="https://github.com/Vincenttoon/socially-networked">
                {" "}
                <img
                  src={insomniaImg}
                  className="port-img-featured"
                  // style={{ width: "100%" }}
                  alt="brewery finder home screen"
                />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://safe-atoll-66410.herokuapp.com/">
                  <h4>Just Another Text Editor</h4>
                </a>
              </div>
              <a href="https://github.com/Vincenttoon/textfas-burrito-two">
                {" "}
                <img
                  src={jateImg}
                  className="port-img"
                  // style={{ width: "100%" }}
                  alt="J A T E"
                />
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://github.com/Vincenttoon/ecommerce-back-end">
                  <h4>Ecommerce Back End</h4>
                </a>
              </div>
              <a href="https://github.com/Vincenttoon/ecommerce-back-end">
                {" "}
                <img
                  src={ecomImg}
                  className="port-img"
                  // style={{ width: "100%" }}
                  alt="ecommerce art"
                />
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://thawing-atoll-91539.herokuapp.com/">
                  <h4>Rise2Challenge</h4>
                </a>
              </div>
              <a href="https://github.com/JayWhiteBuffalo/Rise2Challenge">
                {" "}
                <img
                  src={rise2ChallengeImg}
                  className="port-img"
                  // style={{ width: "100%" }}
                  alt="rise 2 challenge workout page"
                />
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://github.com/Vincenttoon/employee-tracker-extraordinaire">
                  <h4>Employee Tracker</h4>
                </a>
              </div>
              <a href="https://github.com/Vincenttoon/employee-tracker-extraordinaire">
                {" "}
                <img
                  src={employeeImg}
                  className="port-img"
                  // style={{ width: "100%" }}
                  alt="employees working"
                />
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://github.com/Vincenttoon/team-building-exercise">
                  <h4>Team Builder</h4>
                </a>
              </div>
              <a href="https://github.com/Vincenttoon/team-building-exercise">
                {" "}
                <img
                  src={teamBuildingImg}
                  className="port-img"
                  // style={{ width: "100%" }}
                  alt="team building page"
                />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="project-img">
              <div className="project-description">
                <a href="https://github.com/Vincenttoon/nacho-portfolio-supreme">
                  <h4>Static Portfolio</h4>
                </a>
              </div>
              <a href="https://vincenttoon.github.io/nacho-portfolio-supreme/">
                {" "}
                <img
                  src={izzyButt}
                  className="port-img"
                  // style={{ width: "100%" }}
                  alt="brewery finder home screen"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
