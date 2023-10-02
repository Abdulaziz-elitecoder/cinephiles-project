import { Routes,Route } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import WishList from "../pages/WishList";
import React from 'react'

export default function Router() {
  return (
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/watch-list" element={<WishList />} />
            <Route path="*" element={<Notfound />} />
    </Routes>
  )
}
