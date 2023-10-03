import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import { AiFillHeart } from "react-icons/ai";
import "./wishlist.css";

export default function WishlistPage() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <>
      {wishlistItems.length > 0 ? (
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-4">
          {wishlistItems.map((movie) => (
            <div className="col" key={movie.id}>
              <MovieCard movieItem={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-wishlist">
          <AiFillHeart className="empty-wishlist-icon" />
          <div className="empty-wishlist-text">Your Wishlist Is Empty</div>
        </div>
      )}
    </>
  );
}
