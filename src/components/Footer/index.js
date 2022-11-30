import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <div>
        <h2 className="foot-h2">Created by: Vince Toon</h2>
       
      </div>
      <div className="icon-list">
        <div>
          <ul>
            <a href="https://github.com/Vincenttoon">
              <li className="icon-li">
                <FaGithub fontSize={'2em'}/>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/vincent-toon-4954b6162/">
              <li className="icon-li">
                <FaLinkedinIn fontSize={'2em'} />
              </li>
            </a>
            <a href="https://www.facebook.com/vince.toon">
              <li className="icon-li">
                <FaFacebook fontSize={'2em'}/>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
