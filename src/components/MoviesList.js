import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import Pagination from "react-bootstrap/Pagination";
 

const MovieList = ({ movieList, currentPage, totalPages, handlePageClick, calculatePagesRange }) => {


  return (
    <>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 g-4">
      {movieList.map((movie) => (
        <div className="col" key={movie.id}>
          <MovieCard movieItem={movie} />
        </div>
      ))}
      </div>
      
      <Pagination className="d-flex justify-content-center">
      <Pagination.First
        onClick={() => handlePageClick(1)}
        disabled={currentPage === 1}
      />
      <Pagination.Prev
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
      />

      {calculatePagesRange().map((page) => (
        <Pagination.Item
          key={page}
          active={currentPage === page}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Pagination.Item>
      ))}

      <Pagination.Next
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
      <Pagination.Last
        onClick={() => handlePageClick(totalPages)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
    </>
  );
};

export default MovieList;