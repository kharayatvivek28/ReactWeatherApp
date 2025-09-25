// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* App Logo / Title */}
        <h1 className="text-2xl font-bold tracking-wide">🌤 Weather App</h1>
      </div>
    </header>
  );
};

export default Header;
