import React from "react";
import Nav from "../Nav";
import About from '../About';

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="">
          <div>
            <h1>Vincent Toon's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section>
        <div>
            <About></About>
        </div>
      </section>
    </div>
  );
}

export default Header;
