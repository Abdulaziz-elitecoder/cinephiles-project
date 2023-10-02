import React, { useState } from "react";

export default function MovieSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Call the onSearch function passed from the parent component
    onSearch(searchTerm);
  };

  return (
    <div style={{display:"flex" , justifyContent:"center"}}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}