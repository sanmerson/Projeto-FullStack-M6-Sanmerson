import axios from "axios";

export const api = axios.create({
    baseURL: 'https://localhost',
    timeout: 5000
})