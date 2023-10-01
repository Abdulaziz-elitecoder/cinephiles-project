import axios from 'axios';

//creating axios instance
export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org"
})