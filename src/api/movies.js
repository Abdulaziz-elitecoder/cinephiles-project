import { axiosInstance } from "./config";

const YOUR_API_KEY = "871782c2233a6d01b4c505ab95e279d3";

//fetching popular movies per page
export const getMovies = (page = 1) => {
  return axiosInstance.get("/3/movie/popular", {
    params: {
      api_key: YOUR_API_KEY, // Replace with your TMDb API key
      page: page, // Pass the page parameter to the API
    },
  });
};

//fetching movies using searching query
export const getMoviesByQuery = (query, page = 1) => {
  return axiosInstance.get("/3/search/movie", {
    params: {
      api_key: YOUR_API_KEY,
      query: query,
      page: page,
    },
  });
};


//fetching movieDetails using movieId as a param
export const getMovieDetails = (movieId) => {
  return axiosInstance.get(`/3/movie/${movieId}`, {
    params: {
      api_key: YOUR_API_KEY,
    },
  });
};

//fetching recommendation movies based on the selected movie by passing movieId
export const getMovieRecommendations = (movieId) => {
  return axiosInstance.get(`/3/movie/${movieId}/recommendations`, {
    params: {
      api_key: YOUR_API_KEY,
    },
  });
};
