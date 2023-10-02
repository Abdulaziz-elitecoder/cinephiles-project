import React, { useState } from "react";
import './movieSearch.css'

export default function MovieSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Call the onSearch function passed from the parent component
    onSearch(searchTerm);
  };

  return (
    <div className="Searchbox">

      <h1>Welcome to Our <span className="titleSpan"> Movies</span>  App</h1>
      <p>Millions of Movies for you to discover....</p>
      <div className="MovieInput">
      <input className="searchInput"
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="searchBtn" onClick={handleSearch}>Search</button></div>
    </div>
  );
}