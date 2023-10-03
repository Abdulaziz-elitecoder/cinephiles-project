import React, { useEffect, useState } from "react";
import { getMovies, getMoviesByQuery } from "../api/movies";
import MovieSearch from "../components/MovieSearch/MovieSearchBox";
import MovieList from "../components/MoviesList"; // Import the MovieList component
import SearchList from "../components/SearchResults"; // Import the SearchList component

export default function Home() {
  const [movieList, setMoviesList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [totalPages, setTotalPages] = useState(1);
  const pagesToShow = 5;
  const [searchResults, setSearchResults] = useState(null);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    if (searchResults !== null) {
      handleMovieSearch(query, currentPage);
    } else {
      getMovies(currentPage)
        .then((res) => {
          setMoviesList(res.data.results);
          setTotalPages(res.data.total_pages);
        })
        .catch((error) => console.log(error));
    }
  }, [currentPage, searchResults, query]);

  const handleMovieSearch = (query, page = 1) => {
    setQuery(query);
    getMoviesByQuery(query, page)
      .then((res) => {
        setSearchResults(res.data.results);
        setTotalPages(Math.ceil(res.data.total_pages)); // Update totalPages
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
      <MovieSearch
        onSearch={(searchTerm, page) =>
          handleMovieSearch(searchTerm, setCurrentPage(page))
        }
      />

      <h1 className="Home-header">
        {searchResults ? "Search Results" : "Popular Movies"}
      </h1>
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
