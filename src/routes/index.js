import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Notfound = lazy(() => import("../pages/NotFound"));
const WishList = lazy(() => import("../pages/WishList/index"));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback={<div>Loading...</div>}> <Home /> </Suspense>} />
      <Route path="/movie/:id" element={<Suspense fallback={<div>Loading...</div>}> <MovieDetails /> </Suspense>} />
      <Route path="/wish-list" element={<Suspense fallback={<div>Loading...</div>}> <WishList /> </Suspense>} />
      <Route path="*" element={<Suspense fallback={<div>Loading...</div>}> <Notfound /> </Suspense>} />
    </Routes>
  );
}