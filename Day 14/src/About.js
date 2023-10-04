import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { FcAbout } from 'react-icons/fc';

const About = () => {
  return (
    <div>
      <header className="header">
        <div className="header-content">
          <h1 className="logo"><FcAbout/> Welcome to RPM Medical Store.</h1>
          <p className="slogan">
          You have chosen the right place
          </p>
        </div>
      </header>
        <div>
          <p className="para">
            At RPM pharmaceuticals, we aim to provide the best quality medicine
            at a relatively cheaper price. This is possible because of our unified
            vision of providing quality medicine to all people no matter any
            division. We believe that each and every person deserves good quality
            medicine that's why we ship our products almost all over India in 1-2
            business days. Our service team will be available 24/7 to answer
            your queries and suggest the perfect medicine for your problems with
            your own specific needs in mind. We hope that you appreciate our
            efforts and return here for your next purchase. Have a disease-free
            day!
          </p>
        </div>
      <footer className="footer">
        <p>&copy; 2023 RPM Online Medical Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
