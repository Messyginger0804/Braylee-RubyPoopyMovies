import axios from 'axios';


const API = 'https://movies-api-mbgf.onrender.com'


export default axios.create({
    baseURL: API,
    headers: { "ngrok-skip-browser-warning": "true" }
});

// http://localhost:8080/api/v1/movies