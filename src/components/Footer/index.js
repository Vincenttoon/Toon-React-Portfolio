import React from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <h2>Created by Vince Toon</h2>
      <p>
        <ul>
          <a href="https://github.com/Vincenttoon">
            <li>
              <FaGithub />
            </li>
          </a>
        </ul>
      </p>
      <p>
        <ul>
          <a href="https://www.linkedin.com/in/vincent-toon-4954b6162/">
            <li>
              <FaLinkedinIn />
            </li>
          </a>
        </ul>
      </p>
      <p>
        <ul>
          <a href="https://www.facebook.com/vince.toon">
            <li>
              <FaFacebook />
            </li>
          </a>
        </ul>
      </p>
    </div>
  );
}

export default Footer;
