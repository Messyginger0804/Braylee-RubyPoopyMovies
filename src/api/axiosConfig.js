// import 'dotenv/config'
import axios from 'axios';

// require('dotenv').config()


// const API = process.env.PORT
const API = 'http://localhost:8080'


export default axios.create({
    baseURL: API,
    headers: { "ngrok-skip-browser-warning": "true" }
});

// http://localhost:8080/api/v1/movies