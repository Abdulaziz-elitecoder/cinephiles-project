import axios from 'axios';

//creating axios instance
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})