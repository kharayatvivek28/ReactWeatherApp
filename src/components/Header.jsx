import React from "react";
import logo from "../assets/logo.png";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      {/* Logo + App Name */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1>WeatherApp</h1>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact Us</a>
      </nav>

      {/* Dark Mode Toggle */}
      <button className="dark-mode-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
