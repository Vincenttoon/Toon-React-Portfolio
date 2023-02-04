import React from "react";
import Nav from "../Nav";
// import { useMediaQuery } from "@mui/material";
// import DropdownMenu from "../MobileNav";

function Header(props) {

  // const isMobile = useMediaQuery('(max-width: 810px)');

  const { currentTab, handleTabChange } = props;

  return (
    // include Nav in header return
    <div>
      <header className="hero">
        <div className="hero-div">
          <h1 className="hero-text">Vincent Toon</h1>
        </div>
        <div className="hero-nav">
          <Nav
            // allow nav to adjust to selected tab and display that tabs information
            currentTab={currentTab}
            handleTabChange={handleTabChange}
          ></Nav>
        </div>

      </header>
    </div>
  );
}

export default Header;
