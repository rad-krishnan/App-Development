import React from "react";
import { Link } from "react-router-dom";
import "./Support.css";
import { FaHandHoldingMedical } from 'react-icons/fa';

const Support = () => {
  return (
    <div className="support">
      <header className="header">
        <div className="header-content">
          <h1 className="logo"><FaHandHoldingMedical/> Support</h1>
          <p className="slogan">We're here to help</p>
        </div>
      </header>
      <div className="support-container">
        <div className="support-content">
          <h2 className="support-heading">Contact Us</h2>
          <p className="support-text">
            If you have any questions or need assistance, feel free to reach out to us.
          </p>
          <ul className="support-list">
            <li>Email: support@rpmmedicalstore.com</li>
            <li>Phone: 0422-2342-2342</li>
            <li>Main Branch Address: 110, MSR Main Road, Coimbatore, Tamil Nadu, India</li>
          </ul>
        </div>
        <div className="img1"></div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 RPM Online Medical Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Support;
