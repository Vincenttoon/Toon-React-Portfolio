import React from "react";

function Nav(props) {

  const { currentTab, handleTabChange } = props;

  return (
    <nav className="">
      <ul className="nav">
        <li className="">
          <a
            href="#about"
            // change tab on click
            onClick={() => handleTabChange("About")}
            // display active through class
            className={currentTab === "About" ? "nav-link-active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            onClick={() => handleTabChange("Portfolio")}
            className={
              currentTab === "Portfolio" ? "nav-link-active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            onClick={() => handleTabChange("Technologies")}
            className={currentTab === "Technologies" ? "nav-link-active" : "nav-link"}
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => handleTabChange("Contact")}
            className={
              currentTab === "Contact" ? "nav-link-active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
