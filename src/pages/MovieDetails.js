// MovieDetails.js

import React, { useEffect, useState } from "react";
import { getMovieDetails, getMovieRecommendations } from "../api/movies";
import { useParams } from "react-router-dom"; // Import useParams
import { Link } from "react-router-dom";


export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const limitedRecommendations = recommendations.slice(0,6)
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="moviePage" style={{display:"flex"}}>
        <div className="movieImg">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
        </div>
        <div className="movieDetails">
        <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
        </div>

      </div>

      {/* Display other movie details here */}
      
      <h1>Recommendations</h1>
      <div className="recommendations" style={{display:"flex",gap:"6px"}}>
        {limitedRecommendations.map((recommendation) => (
          <Link to={`/movie/${recommendation.id}`}>
          <div key={recommendation.id} className="recommendation" style={{height:"35rem",width:"18rem",border:"1px solid black"}}>
            <img src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`} style={{width:"18rem"}}/>
            <p>{recommendation.title}</p>
            <p>{recommendation.release_date}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
