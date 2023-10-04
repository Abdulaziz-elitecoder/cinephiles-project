// MovieDetails.js

import React, { useEffect, useState } from "react";
import { getMovieDetails, getMovieRecommendations } from "../../api/movies";
import { useParams } from "react-router-dom"; // Import useParams
import { Link } from "react-router-dom";
import "./movieDetails.css";
import { CircularProgressbar } from "react-circular-progressbar";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const limitedRecommendations = recommendations.slice(0, 6);
  const { id } = useParams(); // Use useParams to get the movie ID from the URL

  useEffect(() => {
    // Fetch movie details by ID using an API call
    getMovieDetails(id)
      .then((res) => setMovie(res.data))
      .catch((error) => console.log(error));

    getMovieRecommendations(id)
      .then((res) => setRecommendations(res.data.results))
      .catch((error) => console.log(error));
  }, [id]);

  if (!movie) {
    return (
      <div>
        <h4>Loading...</h4>
        <h6>Movie doesn't exist </h6>
        <strong>click on the logo to go back</strong>
      </div>
    );
  }

  return (
    <div>
      <div className="moviePage" id="moviePage">
        <div className="movieImg">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        </div>

        <div className="movieDetails">
        <h2 className="movieTitle">
            {movie.title}
            {movie.release_date
              ? ` (${new Date(movie.release_date).getFullYear()})`
              : ""}
          </h2>

          <small>{movie.release_date}</small>
          <div className="popularityDiv">
            {/* <p>User Rating : {`${movie.vote_average * 10}`}%</p> */}
            <p>User Rating</p>
            <ProgressBar
              className="voteProgress"
              striped
              now={movie.vote_average * 10}
              label={`${movie.vote_average*10}%`}
              animated
              variant="success"
            />
          </div>
          <p className="overviewTitle">Overview</p>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
      <hr />
      <h1 className="recommendationsTitle">Recommendations</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-6 g-6 recommendations">
        {limitedRecommendations.map((recommendation) => (
          <Link
            to={`/movie/${recommendation.id}`}
            style={{ textDecoration: "none" }}
          >
            <div key={recommendation.id} className="recommendation">
              <img
                className="recommendationImg"
                id="recommendationImg"
                src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
              />
              <div className="rating" id="rating">
                <CircularProgressbar
                  className="progressbar"
                  value={recommendation.vote_average * 10}
                  text={`${Math.floor(recommendation.vote_average * 10)}%`}
                  strokeWidth={9}
                  styles={{
                    path: {
                      stroke: "var(--accent)",
                      d: "{recommendation.vote_average}",
                      strokeLinecap: "round",
                    },
                    trail: {
                      stroke: "var(--background)", // Color of the trail (the background)
                    },
                    text: {
                      fill: "var(--text)",
                      fontSize: "26px",
                      fontWeight: "bold",
                    },
                    overflow: "hidden",
                  }}
                />
              </div>

              <div className="recommendationDetails">
                <p className="recommendationName">{recommendation.title}</p>
                <p className="recommendationDate">
                  {recommendation.release_date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
