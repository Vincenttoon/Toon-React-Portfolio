import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div className="">
      <section>
        <header className="">
          <div>
            <h1>Vincent Toon's Portfolio</h1>
          </div>
          <div className="">
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
