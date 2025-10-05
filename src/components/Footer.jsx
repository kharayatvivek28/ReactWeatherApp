import React from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="WeatherApp Logo" />
          <span>WeatherApp</span>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <a href="#facebook">FB</a>
          <a href="#twitter">TW</a>
          <a href="#instagram">IG</a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 WeatherApp. All rights reserved.
      </div>
    </footer>
  );
}
