import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function MovieCard({ movieItem }) {
  return (
    <Link to={`/movie/${movieItem.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movieItem.title}</Card.Title>
          <Card.Text>{movieItem.release_date}</Card.Text>
          <Card.Text>{movieItem.vote_average * 10}%</Card.Text>
          <Button variant="primary">love</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}
