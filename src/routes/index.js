import { Routes,Route } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import Home from "../pages/Home";
import Notfound from "../pages/NotFound";
import WishList from "../pages/WishList/index";
import React from 'react'

export default function Router() {
  return (
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/wish-list" element={<WishList />} />
            <Route path="*" element={<Notfound />} />
    </Routes>
  )
}
