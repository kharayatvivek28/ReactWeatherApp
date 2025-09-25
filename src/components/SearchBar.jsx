import React from "react";

const SearchBar = () => {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Enter city name"
        style={{ padding: "8px", width: "200px" }}
      />
      <button style={{ padding: "8px 12px", marginLeft: "10px" }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
