import React from "react";
import meImg from "../../assets/small/me_pic.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="about-text-div">
        <h1 className="AM-h1">About Me:</h1>
      </div>
      <div className="about-details">
        <div className="img-div">

        </div>
        <div className="txt-div">
        <img
            src={meImg}
            className="vince-img"
            alt="Vincent smiling"
          />
          <p className="abt-txt">
            Hello world! My name is Vincent Toon. I am 28 and live in the St.
            Louis metropolitan area. I've spent most my life in the food and
            beverage industry. I have been a manager, bartender, salesman, brand
            rep and distributor of craft beer. While craft beer is a passion, I
            have realized my professional career needed to be a different
            avenue. I am excited to enter into the web development world as a
            full stack developer and approach a lifelong interest of mine into a
            career. Computers and the web have always been an important focus of
            my interest and am ready to both learn and contribute to the web I
            have spent so much time learning and immersing myself in. When I am not
            coding I am spending time with my dog and friends, hopefully outside.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
