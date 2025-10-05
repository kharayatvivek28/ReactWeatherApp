import React, { useState, useEffect } from "react";

export default function SearchBar({ city, setCity, onSearch }) {
  const [input, setInput] = useState(city);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input !== city) {
        setCity(input);
        onSearch(input);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => onSearch(input)}>Search</button>
    </div>
  );
}
