import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./movieSearch.css";

export default function MovieSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const lang = useSelector((state) => state.language.current_lang);

  const handleSearch = () => {
    // Call the onSearch function passed from the parent component
    onSearch(searchTerm, 1);
  };

  return (
    <div className="Searchbox">
      {lang === "EN" ? (
        <>
          <h1>
            Welcome to Our <span className="titleSpan">Movies</span> App
          </h1>
          <p>Millions of Movies for you to discover....</p>
        </>
      ) : (
        <>
          <h1>
            <span>  مرحبا بك في موقع<span className="titleSpan"> Cinephiles</span></span>
            {/* مرحبا بك في <span >أفلامنا</span> موقع */}
          </h1>
          <p>ملايين الأفلام لك حتى تكتشفها....</p>
        </>
      )}

      <div className="MovieInput">
        <input
          className="searchInput"
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="searchBtn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
