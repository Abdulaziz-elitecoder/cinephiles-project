import React, { useEffect, useState } from "react";
import { getMovies, getMoviesByQuery } from "../api/movies";
import MovieSearch from "../components/MovieSearch/MovieSearchBox";
import MovieList from "../components/MoviesList"; // Import the MovieList component
import SearchList from "../components/SearchResults"; // Import the SearchList component

export default function Home() {
  const [movieList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
  const [totalPages, setTotalPages] = useState(1);
  const pagesToShow = 5;
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if (searchResults !== null) {
      setTotalPages(Math.ceil(searchResults.total_results / itemsPerPage)); // Update totalPages
    } else {
      getMovies(currentPage)
        .then((res) => {
          setMoviesList(res.data.results);
          setTotalPages(res.data.total_pages);
        })
        .catch((error) => console.log(error));
    }

    if(searchResults !== null){
      handleMovieSearch(currentPage)
    }
  }, [currentPage, searchResults]);

  const handleMovieSearch = (query) => {
    if (typeof query === "string" && query.trim() === "") {
      return;
    }
  
    getMoviesByQuery(query, 1) 
      .then((res) => {
        setSearchResults(res.data.results);
        setCurrentPage(1); 
        setTotalPages(Math.ceil(res.data.total_results / itemsPerPage)); 
      })
      .catch((error) => console.log(error));
  };


  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const calculatePagesRange = () => {
    const halfPagesToShow = Math.floor(pagesToShow / 2);
    let startPage = currentPage - halfPagesToShow;
    let endPage = currentPage + halfPagesToShow;

    if (startPage <= 0) {
      startPage = 1;
      endPage = pagesToShow;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - pagesToShow + 1;
      if (startPage <= 0) {
        startPage = 1;
      }
    }

    const pageRange = [];
    for (let i = startPage; i <= endPage; i++) {
      pageRange.push(i);
    }

    return pageRange;
  };

  

  return (
    <>
      <MovieSearch onSearch={handleMovieSearch} />

      <h1 className="Home-header">{searchResults ? "Search Results" : "Popular Movies"}</h1>
      <hr />

      {/* Conditionally render either MovieList or SearchList */}
      {searchResults ? (
        <SearchList
          searchResults={searchResults}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageClick={handlePageClick}
          calculatePagesRange={calculatePagesRange}
        />
      ) : (
        <MovieList
          movieList={movieList}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageClick={handlePageClick}
          calculatePagesRange={calculatePagesRange}
        />
      )}
    </>
  );
}
