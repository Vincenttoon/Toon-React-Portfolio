import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="hero">
          <div className="hero-div">
            <h1 className="hero-text">Vincent Toon's Portfolio</h1>
          </div>
          <div className="hero-nav">
          <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
