import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000/',
    //baseURL: 'https://api-fullstack.onrender.com/api/',
    timeout: 8000
})