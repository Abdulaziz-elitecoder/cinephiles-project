import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CircularProgressbar } from "react-circular-progressbar";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/slices/wishlist.js";

import "react-circular-progressbar/dist/styles.css";
import "./movieCard.css";

export default function MovieCard({ movieItem }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  useEffect(() => {
    console.log("Updated Wishlist Items:", wishlistItems);
    console.log("Clicked Movie Item:", movieItem);
  }, [wishlistItems, movieItem]);

  return (
    <Link to={`/movie/${movieItem.id}`} style={{ textDecoration: "none" }}>
      <Card className="cardElement">
        <Card.Img
          className="cardImg"
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
        />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{movieItem.title}</Card.Title>
          <Card.Text className="cardText">{movieItem.release_date}</Card.Text>
          {/* <Card.Text className="rating">
            {movieItem.vote_average * 10}% */}
          {/* </Card.Text> */}
          <AiFillHeart
            onClick={() => {
              dispatch(addToWishlist(movieItem));
            }}
            style={{ color: "yellow" }}
            className="cardHeart"
          />
          <div className="rating">
            <CircularProgressbar
              className="progressbar"
              value={movieItem.vote_average * 10}
              text={`${Math.floor(movieItem.vote_average * 10)}%`}
              strokeWidth={9}
              styles={{
                path: {
                  stroke: "var(--accent)",
                  d: "{movieItem.vote_average}",
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
        </Card.Body>
      </Card>
    </Link>
  );
}
