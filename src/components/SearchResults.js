import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import Pagination from "react-bootstrap/Pagination";

const SearchList = ({
  searchResults,
  currentPage,
  totalPages,
  handlePageClick,
  calculatePagesRange,
}) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        {searchResults.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard movieItem={movie} />
          </div>
        ))}
      </div>
      <div className="Pagination">
        <Pagination
          size="lg"
          className="d-flex justify-content-center paginator"
        >
          <Pagination.First
            onClick={() => handlePageClick(1)}
            disabled={currentPage === 1}
            linkStyle={{
              color: "var(--primary)",
              backgroundColor: "var(--background)",
              textDecoration: "none",
              fontSize: "15px",
              borderColor: "black",
              fontSize: "30px",
            }}
          />
          <Pagination.Prev
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            linkStyle={{
              color: "var(--primary)",
              backgroundColor: "var(--background)",
              textDecoration: "none",
              fontSize: "15px",
              borderColor: "black",
              fontSize: "30px",
            }}
          />

          {calculatePagesRange().map((page) => (
            <Pagination.Item
              className="pagItem"
              key={page}
              active={currentPage === page}
              onClick={() => handlePageClick(page)}
              linkStyle={{
                color: currentPage === page ? "var(--primary)" : "var(--text)", // Change color for active page
                backgroundColor:
                  currentPage === page
                    ? "var(--secondary)"
                    : "var(--background)", // Change background color for active page
                textDecoration: "none",
                fontWeight: "bold",
                borderColor: "black",
                fontSize: "25px",
              }}
              activeLabel="yellow"
            >
              {page}
            </Pagination.Item>
          ))}

          <Pagination.Next
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            linkStyle={{
              color: "var(--primary)",
              backgroundColor: "var(--background)",
              textDecoration: "none",
              fontSize: "15px",
              borderColor: "black",
              fontSize: "30px",
            }}
          />
          <Pagination.Last
            onClick={() => handlePageClick(totalPages)}
            disabled={currentPage === totalPages}
            linkStyle={{
              color: "var(--primary)",
              backgroundColor: "var(--background)",
              textDecoration: "none",
              fontSize: "15px",
              borderColor: "black",
              fontSize: "30px",
            }}
          />
        </Pagination>
      </div>
    </>
  );
};

export default SearchList;
